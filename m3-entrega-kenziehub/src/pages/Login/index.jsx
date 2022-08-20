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

const schema = yup.object().shape({
  email: yup.string().email("Deve ser um email").required("Campo obrigatório"),
  password: yup
    .string()
    .min(8, "Mínimo 8 caracteres")
    .required("Campo obrigatório"),
});

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  function loginUser(data) {
    console.log(data);

    navigate("/dashboard", { replace: true });
  }

  return (
    <main className="formMain">
      <FormHeader>
        <Logo />
      </FormHeader>
      <FormContainer>
        <h1 className="title1">Login</h1>
        <Form onSubmit={handleSubmit(loginUser)}>
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
            className="big primary"
            type="submit"
            // onClick={() => navigate("/dashboard", { replace: true })}
          >
            Entrar
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

export default Login;
