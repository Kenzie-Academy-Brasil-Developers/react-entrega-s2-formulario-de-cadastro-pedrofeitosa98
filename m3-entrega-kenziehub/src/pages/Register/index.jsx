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

const schema = yup.object({
  name: yup.string().required("Campo obrigatório"),
  email: yup.string().email("Deve ser um email").required("Campo obrigatório"),
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
  courseModule: yup.string().required("Campo obrigatório"),
});

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  function registerUser(data) {
    navigate("/login", { replace: true });
  }

  return (
    <main className="formMain">
      <FormHeader>
        <Logo />
        <button
          className="small"
          onClick={() => navigate("/login", { replace: true })}
        >
          Voltar
        </button>
      </FormHeader>
      <FormContainer>
        <h1 className="title1">Crie sua conta</h1>
        <p className="headline colorGrey1">Rápido e grátis, vamos nessa!</p>
        <Form onSubmit={handleSubmit(registerUser)}>
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
            {...register("courseModule")}
          >
            <option value="primeiroModulo">Primeiro Módulo</option>
            <option value="segundoModulo">Segundo Módulo</option>
            <option value="terceiroModulo">Terceiro Módulo</option>
          </select>

          {Object.keys(errors).length !== 0 ? (
            <button className="big primary negative" type="submit">
              Cadastrar
            </button>
          ) : (
            <button className="big primary" type="submit">
              Cadastrar
            </button>
          )}
        </Form>
      </FormContainer>
    </main>
  );
}

export default Register;
