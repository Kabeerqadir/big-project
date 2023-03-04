import React, { createContext, useState } from "react";


export const AuthContext = createContext();


const AuthContextProvider = ({ children }) => {

    
  const [auth, setAuth] = useState("This is coming from Context JS");

  const [isLoggedIn,setIsLoggedIn] = useState(false)

  // const API_URL = "http://127.0.0.1:5000" 

  const API_URL = "https://reqres.in/api/login"
  
  return (
    <AuthContext.Provider value={{auth, setAuth, API_URL,setIsLoggedIn,isLoggedIn}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
