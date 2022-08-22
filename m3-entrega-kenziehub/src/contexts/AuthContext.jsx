import { useState, createContext, useEffect } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");

    async function autoLogin() {
      api.defaults.headers.authorization = `Bearer ${token}`;

      try {
        const response = await api.get("profile");
        setUser(response.data);
        navigate("/dashboard");
      } catch (error) {
        console.error(error);
        localStorage.removeItem("@TOKEN");
        localStorage.removeItem("@USERID");
        navigate("/login", { replace: true });
      }
    }
    if (token) {
      autoLogin();
    }
    setLoadingAuth(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function loginUser(formData, setLoading) {
    try {
      setLoading(true);
      const response = await api.post("sessions", formData);
      setUser(response.data.user);
      localStorage.setItem("@USERID", response.data.user.id);
      localStorage.setItem("@TOKEN", response.data.token);
      api.defaults.headers.authorization = `Bearer ${response.data.token}`;
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

  function logoutUser() {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    toast.info("Usuário deslogado.");
    setTimeout(() => {
      navigate("/", { replace: true });
    }, 2000);
  }

  return (
    <AuthContext.Provider
      value={{ user, registerUser, loginUser, loadingAuth, logoutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}
