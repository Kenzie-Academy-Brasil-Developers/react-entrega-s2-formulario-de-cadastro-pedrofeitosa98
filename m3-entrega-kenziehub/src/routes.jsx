import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import LoadingPage from "./components/LoadingPage";
import { AuthContext } from "./contexts/AuthContext";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function MainRoutes() {
  const { user } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={<LoadingPage />}>
        <Route index element={<Homepage />} />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route
          path="/dashboard"
          element={user ? <Dashboard /> : <Navigate to="/login" replace />}
        ></Route>
      </Route>
    </Routes>
  );
}
