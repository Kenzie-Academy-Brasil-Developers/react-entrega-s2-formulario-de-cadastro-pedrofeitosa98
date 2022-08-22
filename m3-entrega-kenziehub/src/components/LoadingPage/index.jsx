import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { FormContainer } from "../Form/style";

export default function LoadingPage({ children }) {
  const { loadingAuth } = useContext(AuthContext);
  return (
    <>
      {loadingAuth ? (
        <main className="formMain">
          <FormContainer>
            <h1 className="title1">Carregando...</h1>
          </FormContainer>
        </main>
      ) : (
        <Outlet />
      )}
    </>
  );
}
