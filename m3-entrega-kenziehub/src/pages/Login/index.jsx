import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import {
  FormHeader,
  FormContainer,
  Form,
  Error,
} from "../../components/Form/style";
import Logo from "../../components/Logo";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const { loginUser } = useContext(AuthContext);
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Deve ser um email")
      .required("Campo obrigatório"),
    password: yup
      .string()
      .min(8, "Mínimo 8 caracteres")
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  return (
    <main className="formMain fadeIn">
      <FormHeader>
        <Logo />
      </FormHeader>
      <FormContainer>
        <h1 className="title1">Login</h1>
        <Form
          onSubmit={handleSubmit((formData) => loginUser(formData, setLoading))}
        >
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Digite aqui seu email"
            {...register("email")}
          />
          <Error>{errors.email?.message}</Error>

          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            placeholder="Digite aqui sua senha"
            {...register("password")}
          />
          <Error>{errors.password?.message}</Error>
          <button
            className={loading ? "big primary negative" : "big primary"}
            type="submit"
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </Form>
        <p className="headline colorGrey1">Ainda não possui uma conta?</p>
        <button
          className="big disabled"
          onClick={() => navigate("/register", { replace: true })}
        >
          Cadastre-se
        </button>
      </FormContainer>
    </main>
  );
}
