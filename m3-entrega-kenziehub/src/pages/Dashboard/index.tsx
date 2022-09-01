import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import { Main, TechList } from "./style";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import TechnologyCard from "../../components/TechnologyCard";
import { FaPlus } from "react-icons/fa";
import TechModal from "../../components/TechModal";
import { TechContext } from "../../contexts/TechContext";

export default function Dashboard() {
  const { user } = useContext(AuthContext);
  const { techs, openModal } = useContext(TechContext);
  const [modalView, setModalView] = useState(false);

  return (
    <>
      <Navbar />
      <Header>
        <div className="fadeIn">
          <h1 className="title1">Olá, {user?.name}</h1>
          <span className="headline bold colorGrey1">{user?.course_module}</span>
        </div>
      </Header>
      <Main className="fadeIn">
        <div className="listHeader">
          <h2 className="title2 colorGrey0">Tecnologias</h2>
          <button
            className="icon primary"
            onClick={() => openModal(setModalView)}
          >
            <FaPlus />
          </button>
        </div>
        <TechList>
          {techs.map((tech) => {
            return <TechnologyCard key={tech.id} tech={tech} />;
          })}
        </TechList>
      </Main>
      {modalView ? (
        <TechModal modalView={modalView} setModalView={setModalView} />
      ) : (
        <></>
      )}
    </>
  );
}
