import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./Login.css";
import { logInInitiate } from "../redux/actions";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user } = useSelector((store) => store.user);

  let dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const signIn = (e) => {
    e.preventDefault();
    dispatch(logInInitiate(email, password));
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login">
      <div className="login-container">
        <h1>Inicia sesión</h1>
        <form>
          <label>Correo electrónico</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Contraseña</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={signIn} className="btnContinue">
            Continuar
          </button>
          <p className="login-text">
            Al continuar, aceptas las Condiciones de uso y el Aviso de
            privacidad de Joe's Supermarket.
          </p>
          <p className="login-text">¿Eres nuevo en Joe's Supermarket?</p>
          <Link to="/signup">
            <button className="login-signup">Crea tu cuenta</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
