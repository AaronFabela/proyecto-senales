import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Administrador/Dashboard/Dashboard'
import './styles/Home.css'
import Sidebar from './components/Sidebar'
import Casas from './pages/Administrador/Casas/Casas'
import Usuarios from './pages/Administrador/Usuarios/Usuarios'
import Abuelos from './pages/Casas/Abuelos/Abuelos'
import Cartas from './pages/Casas/Cartas/Cartas'
import Visitas from './pages/Casas/Visitas/Visitas'
import AbuelosDisponibles from './pages/Usuarios/AbuelosDisponibles/AbuelosDisponibles'
import MisAbuelos from './pages/Usuarios/MisAbuelos/MisAbuelos'

function App() {
  return (
    <div className='App'>
      <div className='home'>
        <Sidebar />
        <div className='home-container'>
          <div className='contenido'>
            <Routes>
              {/* Rutas Administrador */}
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/casas' element={<Casas />} />
              <Route path='/usuarios' element={<Usuarios />} />
              {/* Rutas Casas */}
              <Route path='/abuelos' element={<Abuelos />} />
              <Route path='/cartas' element={<Cartas />} />
              <Route path='/visitas' element={<Visitas />} />
              {/* Rutas Usuarios */}
              <Route
                path='abuelosDisponibles'
                element={<AbuelosDisponibles />}
              />
              <Route path='misAbuelos' element={<MisAbuelos />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
