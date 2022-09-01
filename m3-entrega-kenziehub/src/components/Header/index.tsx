import { ReactNode } from "react";
import { HeaderContainer } from "./style";

interface IHeaderProps {
  children: ReactNode,
}

export default function Header({ children }:IHeaderProps) {
  return (
    <>
      <HeaderContainer>{children}</HeaderContainer>
    </>
  );
}
