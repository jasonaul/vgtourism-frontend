import { createContext } from "react";

export const LoggedIn = createContext({
    isLoggedIn: false, 
    userID: null,
    login: () => {}, 
    logout: () => {}
});

