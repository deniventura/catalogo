import React from "react";
import { Link } from "react-router-dom";

const Menu = ({ logueado, usuarioLogueado }) => {
  if (logueado) {
    return (
      <>
        <h1 className="text-3xl font-light mb-4">Inventario</h1>
        <Link
          to="/Nuevo-Producto"
          className="bg-blue-800 hover:bg-blue-700 inline-block mb-5 text-white uppercase font-bold "
        >
          Agregar Producto
        </Link>
      </>
    );
  }
};

export default Menu;
