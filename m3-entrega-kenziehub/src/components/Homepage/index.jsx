import { FormContainer, FormHeader } from "../Form/style";
import Logo from "../Logo";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";

export default function Homepage() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  if (user) {
    navigate("/dashboard");
  }
  return (
    <main className="formMain">
      <FormHeader>
        <Logo />
      </FormHeader>
      <FormContainer>
        <h1 className="title1">Bem-vindo!</h1>
        <button
          className="big primary"
          onClick={() => navigate("/login", { replace: true })}
        >
          <FaSignInAlt /> Login
        </button>
        <button
          className="big primary"
          onClick={() => navigate("/register", { replace: true })}
        >
          <FaUserPlus /> Cadastro
        </button>
      </FormContainer>
    </main>
  );
}
