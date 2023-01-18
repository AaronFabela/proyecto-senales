import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Administrador/Dashboard/Dashboard";
import "./styles/Home.css";
import Sidebar from "./components/Sidebar";
import Casas from "./pages/Administrador/Casas/Casas";
import Usuarios from "./pages/Administrador/Usuarios/Usuarios";
import Abuelos from "./pages/Casas/Abuelos/Abuelos";
import Cartas from "./pages/Usuarios/Cartas/Cartas";
import AbuelosDisponibles from "./pages/Usuarios/AbuelosDisponibles/AbuelosDisponibles";
import MisAbuelos from "./pages/Usuarios/MisAbuelos/MisAbuelos";
import CasasPerfil from "./pages/Administrador/Casas/CasasPerfil/CasasPerfil";
import AbuelosPerfil from "./pages/Compartidos/AbuelosPerfil";
import UsuariosPerfil from "./pages/Administrador/Usuarios/UsuariosPerfil/UsuariosPerfil";
import RegistrarAbuelo from "./pages/Casas/RegistroAbuelos/RegistroAbuelo";
import EnviarCarta from "./pages/Usuarios/MisAbuelos/EnviarCarta";

function App() {
  return (
    <div className="App">
      <div className="home">
        <Sidebar />
        <div className="home-container">
          <div className="contenido">
            <Routes>
              {/* Rutas Administrador */}
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/casas" element={<Casas />} />
              <Route path="/casas/:id" element={<CasasPerfil />} />

              <Route path="/usuarios" element={<Usuarios />} />
              <Route path="/adoptadores/:id" element={<UsuariosPerfil />} />

              {/* Rutas Casas */}
              <Route path="/abuelos" element={<Abuelos />} />
              <Route path="/abuelos/:id" element={<AbuelosPerfil />} />
              <Route
                path="/abuelos/registrarAbuelo/:id"
                element={<RegistrarAbuelo />}
              />

              <Route path="/cartas" element={<Cartas />} />
              {/* <Route path='/visitas' element={<Visitas />} /> */}
              {/* Rutas Usuarios */}
              <Route
                path="abuelosDisponibles"
                element={<AbuelosDisponibles />}
              />
              <Route path="misAbuelos" element={<MisAbuelos />} />
              <Route path="/enviarCarta/:id" element={<EnviarCarta />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
