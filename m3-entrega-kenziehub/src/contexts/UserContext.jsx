import { useState, createContext } from "react";

const UserContext = createContext({});

function UseProvider({ children }) {
  const [user, setUser] = useState(null);
}
