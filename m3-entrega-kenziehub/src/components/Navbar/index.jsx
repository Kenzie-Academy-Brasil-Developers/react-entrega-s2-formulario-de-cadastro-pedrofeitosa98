import { NavContainer } from "./style";
import Logo from "../Logo";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav>
      <NavContainer>
        <div>
          <Logo />
          <button
            className="small"
            onClick={() => navigate("/login", { replace: true })}
          >
            Sair
          </button>
        </div>
      </NavContainer>
    </nav>
  );
}
