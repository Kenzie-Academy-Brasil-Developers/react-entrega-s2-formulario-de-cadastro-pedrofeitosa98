import { useState, createContext, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { AuthContext } from "./AuthContext";

export const TechContext = createContext({});

export function TechProvider({ children }) {
  const { user } = useContext(AuthContext);
  const [techs, setTechs] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");

    async function getTechs() {
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      try {
        const response = await api.get("profile");
        setTechs(response.data.techs);
      } catch (error) {
        console.error(error);
      }
    }

    if (user && token) {
      getTechs();
    } else {
      setTechs([]);
    }
  }, [user]);

  function openModal(setModalView) {
    setModalView(true);
  }

  function closeModal(setModalView) {
    setTimeout(() => {
      setModalView(false);
    }, 0);
  }

  async function createTech(formData, setLoading, setModalView) {
    try {
      setLoading(true);
      const token = localStorage.getItem("@TOKEN");
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      const response = await api.post("users/techs", formData);
      setTechs([...techs, response.data]);
      toast.success("Tech adicionada com sucesso!");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
      setTimeout(() => {
        setModalView(false);
      }, 0);
    }
  }

  async function deleteTech(id, title, setOutAnimation) {
    try {
      const token = localStorage.getItem("@TOKEN");
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      await api.delete(`users/techs/${id}`);
      toast.success(`Tech "${title}" removida`);
      const newList = techs.filter((tech) => tech.id !== id);
      setOutAnimation(true);
      setTimeout(() => {
        setTechs(newList);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <TechContext.Provider
      value={{ techs, createTech, deleteTech, closeModal, openModal }}
    >
      {children}
    </TechContext.Provider>
  );
}
