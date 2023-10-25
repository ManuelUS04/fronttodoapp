import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { sendRequest } from "../../function";
import DivInput from "../../Components/DivInput";
import storage from "../../Storage/storage";
import miImagen from "../../assets/icono-persona1.svg";
import "../../Style/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const go = useNavigate();
  const login = async (e) => {
    e.preventDefault();
    const form = { email: email, password: password };
    const res = await sendRequest("POST", form, "/login", "", false);
    if (res.status == 200) {
      storage.set("authToken", res.token);
      storage.set("authUser", res.user);
      go("/task");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="bg-white p-5 rounded-5 text-secondary with-container">
        <div className="d-flex justify-content-center">
          <img src={miImagen} className="img-logo" />
        </div>

        <div className="text-center fs-1 fw-bold">Login</div>

        <div className="card-body">
          <form onSubmit={login}>
            <DivInput
              type="email"
              icon="fa-at"
              value={email}
              className="form-control"
              placeholder="Correo"
              required="required"
              handleChange={(e) => setEmail(e.target.value)}
            ></DivInput>
            <DivInput
              type="password"
              icon="fa-key"
              value={password}
              className="form-control"
              placeholder="Contraseña"
              required="required"
              handleChange={(e) => setPassword(e.target.value)}
            ></DivInput>

            <div className="d-grid col-10 mx-auto">
              <button className="btn btn-secondary">
                <i className="fa-solid fa-door-open"> Ingresar</i>
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Login;
