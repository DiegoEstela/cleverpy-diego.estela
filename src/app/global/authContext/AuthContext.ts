import React from "react";
import firebase from "@firebase/auth-types";

export const AuthContext = React.createContext<firebase.User | null>(null);