/* eslint-disable react-hooks/exhaustive-deps */
import { CardContainer, LeftContainer, RightContainer } from "./style";
import { FaTrashAlt } from "react-icons/fa";
import { useContext, useState } from "react";
import { TechContext } from "../../contexts/TechContext";

export default function TechnologyCard({ tech }) {
  const { deleteTech } = useContext(TechContext);
  const [outAnimation, setOutAnimation] = useState(false);

  return (
    <>
      <CardContainer className={outAnimation ? "bounceOut" : "bounceIn"}>
        <LeftContainer>
          <h3 className="title3">{tech.title}</h3>
        </LeftContainer>
        <RightContainer>
          <span className="headline colorGrey1">{tech.status}</span>
          <button
            className="icon"
            onClick={() => deleteTech(tech.id, tech.title, setOutAnimation)}
          >
            <FaTrashAlt />
          </button>
        </RightContainer>
      </CardContainer>
    </>
  );
}
