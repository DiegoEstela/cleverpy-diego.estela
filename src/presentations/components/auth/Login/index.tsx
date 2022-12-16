import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { LoginUser } from "../../../../api/services/Auth"
import {BodyLogin, CardLogin, Input, ButtonModal} from "../index.style"




export const Login = () => {
  const [status, setStatus] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null);
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: ""
  })

  const handleChangeLoginUser = (key: string, value: unknown) => {
    setUserLogin({ ...userLogin, [key]: value });
  };
  
  const handlePreSubmit = async (e : any) => {
    e.preventDefault();
    try{
      const res =await LoginUser(userLogin?.email , userLogin?.password)
      if(res){
        setStatus(true)
      }
        setError("Usuario no registrado")
        setTimeout(() => setError(null), 2000);
     
    }catch(err){
      setError("error")
    }
    
  };

  return (
    <BodyLogin >
      <CardLogin>
        <div className="card-header">
          {error && <p className="error">{error}</p>}
          <h1>Iniciar Sesion</h1>
        </div>
        <div className="card-body">
          <label> Email</label>
        <Input
            type='text'
            name='email'
            value={userLogin?.email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChangeLoginUser(e.target.name, e.target.value)
            }/>
            <label> Password</label>
        <Input
            type='password'
            name='password'
            value={userLogin?.password  }
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChangeLoginUser(e.target.name, e.target.value)
            }/>
              <Link className="linkLogin" to="/">
            <ButtonModal onClick={(e) => handlePreSubmit(e)}>Aceptar</ButtonModal>
            </Link>
          <p>
            No tienes usuario?{" "}
            <Link className="linkLogin" to="/signup">
              <span>Registrate ahora</span>
            </Link>{" "}
          </p>
        </div>
      </CardLogin>
      {status && (
          <Navigate to="/post" replace={true} />
        )}
    </BodyLogin>
  );
};

export default Login