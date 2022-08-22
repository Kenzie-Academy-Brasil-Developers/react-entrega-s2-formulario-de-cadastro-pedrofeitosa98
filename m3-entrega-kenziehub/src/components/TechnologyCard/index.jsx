import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { CardContainer, LeftContainer, RightContainer } from "./style";

export default function TechnologyCard(index) {
  const { user } = useContext(AuthContext);

  return (
    <>
      <CardContainer>
        <LeftContainer>
          <h3 className="title3">{user.techs[index].title}</h3>
        </LeftContainer>
        <RightContainer>
          <span className="headline colorGrey1">
            {user.techs[index].status}
          </span>
          <button className="icon">-</button>
        </RightContainer>
      </CardContainer>
    </>
  );
}
