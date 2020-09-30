import React, { useState } from "react";
import { Link } from "react-router-dom";

const NuevaCuenta = () => {
  const [usuario, guardarUsuario] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmarpass: "",
  });

  const { nombre, email, password, confirmarpass } = usuario;

  console.log(usuario);

  const onChange = (e) => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();

    //validar que no haya campos vacíos

    //pasarlo al action
  };

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>NuevaCuenta</h1>
        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Tu nombre"
              value={nombre}
              onChange={onChange}
            />
          </div>
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
            <label htmlFor="password">Nueva contraseña:</label>
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
            <label htmlFor="confirmar">Repetir contraseña:</label>
            <input
              type="password"
              id="confirmarpass"
              name="confirmarpass"
              placeholder="Confirmar Password"
              value={confirmarpass}
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <input
              className="btn btn-primario btn-block"
              value="Crear Cuenta"
              type="submit"
            />
          </div>
        </form>
        <Link to={"/"} className="enlace-cuenta">
          Login
        </Link>
      </div>
    </div>
  );
};

export default NuevaCuenta;
