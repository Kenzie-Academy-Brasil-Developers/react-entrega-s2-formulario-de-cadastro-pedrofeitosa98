import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import { Main } from "./style";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <Header />
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
