import React, { useState } from "react";
import { Link } from "react-router-dom";
import Inventario from "../paginas/Inventario";

const Login = ({ logueado, usuarioLogueado }) => {
  const [usuario, guardarUsuario] = useState({
    email: "",
    password: "",
  });

  const { email, password } = usuario;

  console.log(usuario);
  console.log("Usuario" + logueado);

  const onChange = (e) => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };
  // const onSubmit = () => {
  //   // e.preventDefault();

  //   usuarioLogueado(true);
  //   //validar que no haya campos vacíos

  //   //pasarlo al action
  // };
  const usuarioLog = () => {
    if (logueado) {
      {
      }
    }
  };

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Iniciar Sesion</h1>
        <form onSubmit={() => usuarioLog()}>
          <div className="campo-form">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <input
              className="btn btn-primario btn-block"
              value="Iniciar Sesión"
              type="submit"
            />
          </div>
        </form>
        <Link to={"/NuevaCuenta"} className="enlace-cuenta">
          Obtener Cuenta
        </Link>
      </div>
    </div>
  );
};

export default Login;
