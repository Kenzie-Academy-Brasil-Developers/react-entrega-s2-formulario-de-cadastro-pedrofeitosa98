import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/">
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Route>
    </Routes>
  );
}
