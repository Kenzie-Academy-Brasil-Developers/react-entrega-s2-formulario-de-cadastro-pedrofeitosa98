import { useState, createContext } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  // o useState do usuário começa vazio, pois não há ninguém logado
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  async function registerUser(formData, setLoading) {
    try {
      setLoading(true);
      await api.post("users", formData);
      toast.success("Usuário cadastrado com sucesso!");
      setTimeout(() => {
        navigate("/login", { replace: true });
      }, 2000);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  }

  async function loginUser(formData, setLoading) {
    try {
      setLoading(true);
      const response = await api.post("sessions", formData);
      setUser(response.data.user);
      localStorage.setItem("@USERID", response.data.user.id);
      localStorage.setItem("@TOKEN", response.data.token);
      toast.success("Login bem sucedido!");
      setTimeout(() => {
        navigate("/dashboard", { replace: true });
      }, 2000);
    } catch (error) {
      toast.error("Email ou senha incorretos.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthContext.Provider value={{ user, registerUser, loginUser }}>
      {children}
    </AuthContext.Provider>
  );
}

// POST /users - FORMATO DA REQUISIÇÃO

// {
//   "email": "johndoe@email.com",
//   "password": "123456",
//   "name": "John Doe",
//   "bio": "Lorem ipsum dolor emet",
//   "contact": "linkedin/in/johndoe",
//   "course_module": "Segundo Módulo (Frontend avançado)"
// }
