import { CardContainer, LeftContainer, RightContainer } from "./style";

export default function TechnologyCard({ tech }) {
  console.log("teste da props tech", tech);

  return (
    <>
      <CardContainer>
        <LeftContainer>
          <h3 className="title3">{tech.title}</h3>
        </LeftContainer>
        <RightContainer>
          <span className="headline colorGrey1">{tech.status}</span>
          <button className="icon">-</button>
        </RightContainer>
      </CardContainer>
    </>
  );
}
