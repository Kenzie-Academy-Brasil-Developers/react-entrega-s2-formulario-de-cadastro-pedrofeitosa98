import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import { Main, TechList } from "./style";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import TechnologyCard from "../../components/TechnologyCard";

export default function Dashboard() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Navbar />
      <Header>
        <div>
          <h1 className="title1">Olá, {user.name}</h1>
          <span className="headline bold colorGrey1">{user.course_module}</span>
        </div>
      </Header>
      <Main>
        <div className="listHeader">
          <h2 className="title2 colorGrey0">Tecnologias</h2>
          <button className="icon">+</button>
        </div>
        <TechList>
          {user.techs.map((tech, index) => {
            return <TechnologyCard key={tech.id} index={index} />;
          })}
        </TechList>
      </Main>
    </>
  );
}
