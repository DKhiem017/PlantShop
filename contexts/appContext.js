import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});
  const [role, setRole] = useState("");
  const [language, setLanguage] = useState("vi");

  return (
    <AppContext.Provider
      value={{
        token,
        setToken,
        user,
        setUser,
        role,
        setRole,
        language,
        setLanguage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
