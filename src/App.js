import React, { useState } from "react";
import { Routes, Route } from "react-router";
import firebase, { FirebaseContext } from "./firebase/index";
// import Main from "./Main";
import Sidebar from "./components/ui/Sidebar";
import Login from "./components/auth/Login";
import NuevaCuenta from "./components/auth/NuevaCuenta";
import Inventario from "./components/paginas/Inventario";
import Menu from "./components/paginas/Menu";
import NuevosItem from "./components/paginas/NuevosItem";

// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  const [logueado, usuarioLogueado] = useState(true);
  console.log(logueado);
  return (
    <FirebaseContext.Provider value={{ firebase }}>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Login logueado={logueado} usuarioLogueado={usuarioLogueado} />
          }
        />
        <Route path="/NuevaCuenta" element={<NuevaCuenta />} />

        {/* if esta hay un usuario logueago ir a la pagina del menú */}
        {logueado && (
          <div className="md:flex min-h-screen">
            <Sidebar />
            <div className="md:w-3/5 xl:w-4/5 p-6">
              <Route
                exact
                path="/"
                element={<Menu path="/" element={<Menu />} />}
              />
              <Route path="/Inventario" element={<Inventario />} />
              <Route path="/NuevosItem" element={<NuevosItem />} />
            </div>
          </div>
        )}
      </Routes>
    </FirebaseContext.Provider>
  );
}

export default App;
