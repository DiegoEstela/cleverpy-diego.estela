import React, { useEffect, useState } from "react";
import { AuthContext } from "../authContext/AuthContext";
import { auth } from "../../config/db";
import  firebase  from "@firebase/auth-types";

export const AuthProvider = ({ children } : {children : React.ReactNode}) => {
  const [user, setUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser : firebase.User | any )  => {
      setUser(firebaseUser);
    });

    return unsubscribe;
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};