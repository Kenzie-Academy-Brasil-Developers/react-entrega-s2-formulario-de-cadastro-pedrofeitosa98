import { useState, createContext, useEffect, useContext, ReactNode } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { AuthContext } from "./AuthContext";

interface ITechProviderProps {
  children: ReactNode,
}

interface ITech {
  id: string,
  title: string,
  status: string,
  created_at: string,
  updated_at: string,
}

interface ITechForm {
  title: string,
  status: string,
}

interface ITechContext {
  techs: ITech[],
  createTech: (formData: ITech, setLoading: React.Dispatch<React.SetStateAction<boolean>>, setModalView: React.Dispatch<React.SetStateAction<boolean>>) => void,
  deleteTech: (id: string, title: string, setOutAnimation: React.Dispatch<React.SetStateAction<boolean>>) => void,
  closeModal: (setModalView: React.Dispatch<React.SetStateAction<boolean>>) => void,
  openModal: (setModalView: React.Dispatch<React.SetStateAction<boolean>>) => void,
}

export const TechContext = createContext<ITechContext>({} as ITechContext);

export function TechProvider({ children }: ITechProviderProps) {
  const { user } = useContext(AuthContext);
  const [techs, setTechs] = useState<ITech[]>([] as ITech[]);

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

  function openModal(setModalView: React.Dispatch<React.SetStateAction<boolean>>) {
    setModalView(true);
  }

  function closeModal(setModalView: React.Dispatch<React.SetStateAction<boolean>>) {
    setTimeout(() => {
      setModalView(false);
    }, 0);
  }

  async function createTech(formData: ITechForm, setLoading: React.Dispatch<React.SetStateAction<boolean>>, setModalView: React.Dispatch<React.SetStateAction<boolean>>) {
    try {
      setLoading(true);
      const token = localStorage.getItem("@TOKEN");
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      const response = await api.post("users/techs", formData);
      setTechs([...techs, response.data]);
      toast.success("Tech adicionada com sucesso!");
    } catch (error: any) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
      setTimeout(() => {
        setModalView(false);
      }, 0);
    }
  }

  async function deleteTech(id: string, title: string, setOutAnimation: React.Dispatch<React.SetStateAction<boolean>>) {
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
