import { createContext } from "react";

export const LoggedIn = createContext({
    isLoggedIn: false, 
    login: () => {}, 
    logout: () => {}
});

