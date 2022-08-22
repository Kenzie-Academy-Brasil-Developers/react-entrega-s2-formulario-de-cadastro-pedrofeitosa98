import { NavContainer } from "./style";
import Logo from "../Logo";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { FaSignOutAlt } from "react-icons/fa";

export default function Navbar() {
  const { logoutUser } = useContext(AuthContext);

  return (
    <nav>
      <NavContainer>
        <div>
          <Logo />
          <button
            className="small"
            onClick={() => {
              logoutUser();
            }}
          >
            <FaSignOutAlt /> Sair
          </button>
        </div>
      </NavContainer>
    </nav>
  );
}
