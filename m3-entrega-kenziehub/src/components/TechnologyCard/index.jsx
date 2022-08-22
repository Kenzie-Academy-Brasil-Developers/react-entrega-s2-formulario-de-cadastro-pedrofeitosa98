import { CardContainer, LeftContainer, RightContainer } from "./style";
import { FaTrashAlt } from "react-icons/fa";

export default function TechnologyCard({ tech }) {
  return (
    <>
      <CardContainer>
        <LeftContainer>
          <h3 className="title3">{tech.title}</h3>
        </LeftContainer>
        <RightContainer>
          <span className="headline colorGrey1">{tech.status}</span>
          <button className="icon">
            <FaTrashAlt />
          </button>
        </RightContainer>
      </CardContainer>
    </>
  );
}
