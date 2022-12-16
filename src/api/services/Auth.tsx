import { auth } from "../../app/config/db";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "firebase/auth";

export const Signup = async (email: string, password: string) => {
    try{
      const user = await createUserWithEmailAndPassword(auth, email, password);
      return user
    }catch(error){
      console.log(error)
    }
  };

export const LoginUser = async (email: string, password: string) => {
    try{
      const userLogin = await signInWithEmailAndPassword(auth,email, password)
      if(userLogin){
        return true
      }
      return false
    }catch(error){
      console.log(error)
    }
  };
export const logout = () => auth.signOut();

