import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import { useSelector, useDispatch } from "react-redux";
import { signUpInitiate } from "../redux/actions";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user } = useSelector((store) => store.user);

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  let dispatch = useDispatch();

  const signUp = (e) => {
    e.preventDefault();
    dispatch(signUpInitiate(email, password));
    setEmail("");
    setPassword("");
  };

  return (
    <div className="signup">
      <div className="signup-container">
        <h1>Crea tu cuenta</h1>
        <form>
          <label>Correo electrónico</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={signUp} className="btnContinue">
            Continuar
          </button>
            <p className="login-text">
              ¿Ya tienes una cuenta?
              <Link to="/login" className="signin-link">
                Inicia sesión
              </Link>
            </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
