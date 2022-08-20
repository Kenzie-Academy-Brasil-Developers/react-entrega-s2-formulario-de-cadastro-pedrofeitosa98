import { HeaderContainer } from "./style";

export default function Header() {
  return (
    <>
      <HeaderContainer>
        <div>
          <h2 className="title3">Olá, Usuário</h2>
          <span className="helperText colorGrey1">Módulo selecionado</span>
        </div>
      </HeaderContainer>
    </>
  );
}
