/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, createContext, useEffect, ReactNode } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { ITech, IWork } from "./TechContext";

interface IAuthProviderProps {
  children: ReactNode,
}

export interface IUser {
  id: string,
  name: string,
  email: string,
  course_module: string,
  bio: string,
  contact: string,
  created_at: Date,
  updated_at: Date,
  techs: ITech[],
  works: IWork[] | null,
  avatar_url: null,
}

export interface IFormRegister {
  name: string,
  email: string,
  password: string,
  confirmPassword: string,
  bio: string,
  contact: string,
  course_module: string,
}

export interface IFormLogin {
  email: string,
  password: string,
}

interface ISessionsResponse {
  user: IUser,
  token: string,
}

interface IAuthContext {
  user: IUser | null,
  registerUser: (formData: IFormRegister, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => void,
  loginUser: (formData: IFormLogin, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => void,
  logoutUser: () => void,
  loadingAuth: boolean,
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export function AuthProvider({ children }: IAuthProviderProps) {
  const [user, setUser] = useState<IUser | null>(null);
  const [loadingAuth, setLoadingAuth] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");

    async function autoLogin() {
      api.defaults.headers.common.Authorization = `Bearer ${token}`;

      try {
        const response = await api.get<IUser>("profile");
        setUser(response.data);
        navigate("/dashboard");
      } catch (error) {
        console.error("autoLogin", error);
        localStorage.removeItem("@TOKEN");
        localStorage.removeItem("@USERID");
        navigate("/login", { replace: true });
      }
    }
    if (token) {
      autoLogin();
    }
    setLoadingAuth(false);
  }, []);

  async function loginUser(formData: IFormLogin, setLoading: React.Dispatch<React.SetStateAction<boolean>>) {
    try {
      setLoading(true);
      const response = await api.post<ISessionsResponse>("sessions", formData);
      setUser(response.data.user);
      localStorage.setItem("@USERID", response.data.user.id);
      localStorage.setItem("@TOKEN", response.data.token);
      api.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
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

  async function registerUser(formData: IFormRegister, setLoading: React.Dispatch<React.SetStateAction<boolean>>) {
    try {
      setLoading(true);
      await api.post<IUser>("users", formData);
      toast.success("Usuário cadastrado com sucesso!");
      setTimeout(() => {
        navigate("/login", { replace: true });
      }, 1000);
    } catch (error) {
      toast.error("Algo deu errado, confira os campos novamente.");
    } finally {
      setLoading(false);
    }
  }

  function logoutUser() {
    try {
      localStorage.removeItem("@TOKEN");
      localStorage.removeItem("@USERID");
      toast.info("Usuário deslogado.");
      navigate("/", { replace: true });
    } catch (error) {
      console.error("logoutUser", error);
    }
  }

  return (
    <AuthContext.Provider
      value={{ user, registerUser, loginUser, loadingAuth, logoutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}
