import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainRoutes from "./routes";

function App() {
  return (
    <>
      <MainRoutes />
      <ToastContainer autoClose={2000} pauseOnHover={false} theme={"dark"} />
    </>
  );
}

export default App;
