import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Signup } from "../../../../api/services/Auth";
import { BodyLogin, CardLogin, Input, ButtonModal, Logo } from "../index.style";

export const SingUp = () => {
  const [status, setStatus] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const handleChangeLoginUser = (key: string, value: unknown) => {
    setUserLogin({ ...userLogin, [key]: value });
  };

  const handlePreSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await Signup(userLogin?.email, userLogin?.password);
      if (res) {
        setStatus(true);
      }
      setError("Usuario no registrado");
      setTimeout(() => setError(null), 2000);
    } catch (err) {
      setError("error");
    }
  };

  return (
    <BodyLogin>
      <CardLogin>
        <Logo src="/logo.jpg" alt="" />
        <div className="card-header">
          {error ? <p className="error">{error}</p> : <h1>Registrarse</h1>}
        </div>
        <div className="card-body">
          <label> Email</label>
          <Input
            type="text"
            name="email"
            value={userLogin?.email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChangeLoginUser(e.target.name, e.target.value)
            }
          />
          <label> Password</label>
          <Input
            type="password"
            name="password"
            value={userLogin?.password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChangeLoginUser(e.target.name, e.target.value)
            }
          />
          <Link className="linkLogin" to="/">
            <ButtonModal onClick={(e) => handlePreSubmit(e)}>
              Aceptar
            </ButtonModal>
          </Link>
          <p>
            Ya tienes usuario?{" "}
            <Link className="linkLogin" to="/login">
              <span>Inicia sesion</span>
            </Link>{" "}
          </p>
        </div>
      </CardLogin>
      {status && <Navigate to="/post" replace={true} />}
    </BodyLogin>
  );
};

export default SingUp;
