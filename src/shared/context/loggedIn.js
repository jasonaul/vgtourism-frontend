import { createContext } from "react";

export const LoggedIn = createContext({
    isLoggedIn: false, 
    userID: null,
    token: null,
    login: () => {}, 
    logout: () => {}
});


// userID: null,
