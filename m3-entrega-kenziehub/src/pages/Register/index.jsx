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

export default function Register() {
  const [loading, setLoading] = useState(false);
  const { registerUser } = useContext(AuthContext);

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup
      .string()
      .email("Deve ser um email")
      .required("Campo obrigatório"),
    password: yup
      .string()
      .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
      .matches(/([a-z])/, "Deve conter ao menos 1 letra minúscula")
      .matches(/(\d)/, "Deve conter ao menos 1 número")
      .matches(/(\W)|_/, "Deve conter ao menos 1 caracter especial")
      .matches(/.{8,}/, "Deve conter ao menos 8 dígitos")
      .required("Campo obrigatório"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "As senhas não são iguais")
      .required("Campo obrigatório"),
    bio: yup.string().required("Campo obrigatório"),
    contact: yup.string().required("Campo obrigatório"),
    course_module: yup.string().required("Campo obrigatório"),
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
    <main className="formMain">
      <FormHeader>
        <Logo />
        <button
          className="small"
          onClick={() => navigate("/", { replace: true })}
        >
          Voltar
        </button>
      </FormHeader>
      <FormContainer>
        <h1 className="title1">Crie sua conta</h1>
        <p className="headline colorGrey1">Rápido e grátis, vamos nessa!</p>
        <Form
          onSubmit={handleSubmit((formData) =>
            registerUser(formData, setLoading)
          )}
        >
          <label className="headline" htmlFor="name">
            Nome
          </label>
          <input
            type="text"
            id="name"
            placeholder="Digite aqui seu nome"
            {...register("name")}
          />
          <Error>{errors.name?.message}</Error>

          <label className="headline" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Digite aqui seu email"
            {...register("email")}
          />
          <Error>{errors.email?.message}</Error>

          <label className="headline" htmlFor="password">
            Senha
          </label>
          <input
            type="password"
            id="password"
            placeholder="Digite aqui sua senha"
            {...register("password")}
          />
          <Error>{errors.password?.message}</Error>

          <label className="headline" htmlFor="confirm-password">
            Confirmar senha
          </label>
          <input
            type="password"
            id="confirm-password"
            placeholder="Repita sua senha"
            {...register("confirmPassword")}
          />
          <Error>{errors.confirmPassword?.message}</Error>

          <label className="headline" htmlFor="bio">
            Bio
          </label>
          <input
            type="text"
            id="bio"
            placeholder="Fale um pouco sobre você"
            {...register("bio")}
          />
          <Error>{errors.bio?.message}</Error>

          <label className="headline" htmlFor="contact">
            Contato
          </label>
          <input
            type="text"
            id="contact"
            placeholder="Opção de contato"
            {...register("contact")}
          />
          <Error>{errors.contact?.message}</Error>

          <label className="headline" htmlFor="course-module">
            Selecionar Módulo
          </label>
          <select
            name="course-module"
            id="course-module"
            {...register("course_module")}
          >
            <option value="Primeiro módulo (Introdução ao Frontend)">
              Primeiro módulo (Introdução ao Frontend)
            </option>
            <option value="Segundo módulo (Frontend Avançado)">
              Segundo módulo (Frontend Avançado)
            </option>
            <option value="Terceiro módulo (Introdução ao Backend)">
              Terceiro módulo (Introdução ao Backend)
            </option>
            <option value="Quarto módulo (Backend Avançado)">
              Quarto módulo (Backend Avançado)
            </option>
          </select>

          {Object.keys(errors).length !== 0 ? (
            <button className="big primary negative" type="submit">
              Cadastrar
            </button>
          ) : (
            <button
              className={loading ? "big primary negative" : "big primary"}
              type="submit"
            >
              {loading ? "Cadastrando..." : "Cadastrar-se"}
            </button>
          )}
        </Form>
      </FormContainer>
    </main>
  );
}
