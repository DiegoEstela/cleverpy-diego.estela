import React, { useEffect, useState } from "react";
import { auth } from "../../config/db";


export const AuthContext = React.createContext(null);

export const AuthProvider = ({ children } : {children : React.ReactNode}) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser : any) => {
      setUser(firebaseUser);
    });

    return unsubscribe;
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};