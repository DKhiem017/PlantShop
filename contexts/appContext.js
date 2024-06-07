import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [token, setToken] = useState("");
    const [user, setUser] = useState({});
    const [role, setRole] = useState("");

    return (
        <AppContext.Provider value={{ token, setToken, user, setUser, role, setRole }}>
            {children}
        </AppContext.Provider>
    )
}