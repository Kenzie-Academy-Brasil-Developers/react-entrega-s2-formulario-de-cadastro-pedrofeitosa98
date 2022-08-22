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
      api.defaults.headers.authorization = `Bearer ${token}`;
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

  async function createTech(formData, setLoading, setModalView) {
    try {
      setLoading(true);
      const token = localStorage.getItem("@TOKEN");
      api.defaults.headers.authorization = `Bearer ${token}`;
      const response = await api.post("users/techs", formData);
      setTechs([...techs, response.data]);
      toast.success("Tech adicionada com sucesso!");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
      setModalView(false);
    }
  }

  return (
    <TechContext.Provider value={{ techs, createTech }}>
      {children}
    </TechContext.Provider>
  );
}
