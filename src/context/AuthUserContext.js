import React, { createContext, useState } from "react";
import {getUserDataLocal} from "../Integrations/LocalStorage";

export const AuthUserContext = createContext();

const AuthUserContextProvider = (props) => {
  const [user, setUser] = useState({ ...getUserDataLocal() });
  console.log(user);
  const doSetUser = (user) => {
    setUser(user);
  };
  
  return (
    <AuthUserContext.Provider
      value={{
        user: user,
        doSetUser
      }}
    >
      {props.children}
    </AuthUserContext.Provider>
  );
};

export default AuthUserContextProvider;
