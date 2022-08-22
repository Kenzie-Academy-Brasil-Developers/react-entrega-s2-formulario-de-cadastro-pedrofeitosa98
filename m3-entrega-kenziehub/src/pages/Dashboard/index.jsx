import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import { Main } from "./style";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function Dashboard() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Navbar />
      <Header>
        <div>
          <h2 className="title3">Olá, {user.name}</h2>
          <span className="helperText colorGrey1">{user.course_module}</span>
        </div>
      </Header>
      <Main>
        <h1 className="title1 colorGrey0">
          Que pena! Estamos em desenvolvimento
        </h1>
        <p className="colorGrey0">
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </p>
      </Main>
    </>
  );
}
