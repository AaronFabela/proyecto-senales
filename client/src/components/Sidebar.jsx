import React, { useState } from 'react'
import '../styles/Sidebar.css'
import DashboardIcon from '@mui/icons-material/Dashboard'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'
import AuthService from '../services/auth.service'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import SidebarElement from './SidebarElement'

const Sidebar = () => {
  const { auth } = useContext(AuthContext)

  const navigate = useNavigate()
  const handleCerrarSesion = () => {
    AuthService.logout()
    navigate('/')
  }

  return (
    <div className='sidebar'>
      <div className='top'>
        <span className='logo'>Adopta.me</span>
      </div>
      <hr style={{ marginTop: '0' }} />
      <div className='center'>
        <ul className='links'>
          {/* Seccion Para Administrador */}
          <p className='tittle'>MAIN</p>
          <SidebarElement
            icono={<DashboardIcon className='icon' />}
            ruta='dashboard'
            titulo='Dashboard'
            active={'active'}
          />
          <SidebarElement
            icono={<DashboardIcon className='icon' />}
            ruta='casas'
            titulo='Casas'
          />
          <SidebarElement
            icono={<DashboardIcon className='icon' />}
            ruta='usuarios'
            titulo='Usuarios'
          />
          {/* Seccion Para Asilos */}
          {/* {userRol === ROLES.Alumnos || userRol === ROLES.Admin ? ( */}
          <>
            <p className='tittle'>Menu Casas</p>
            <SidebarElement
              icono={<DashboardIcon className='icon' />}
              ruta='abuelos'
              titulo='Abuelos'
            />
            <SidebarElement
              icono={<DashboardIcon className='icon' />}
              ruta='cartas'
              titulo='Cartas'
            />
            <SidebarElement
              icono={<DashboardIcon className='icon' />}
              ruta='visitas'
              titulo='Visitas'
            />
          </>
          {/* ) : (
            <></>
          )} */}
          {/* Seccion Para Usuarios */}
          {/* {userRol === ROLES.Alumnos || userRol === ROLES.Admin ? ( */}
          <>
            <p className='tittle'>Menú Usuario</p>
            <SidebarElement
              icono={<DashboardIcon className='icon' />}
              ruta='abuelosDisponibles'
              titulo='Abuelos'
            />
            <SidebarElement
              icono={<DashboardIcon className='icon' />}
              ruta='misAbuelos'
              titulo='Mis Abuelos'
            />
          </>
          {/* ) : (
            <></>
          )} */}
        </ul>
      </div>
      <div className='bottom'>
        <button onClick={handleCerrarSesion}>Cerrar Sesion</button>
      </div>
    </div>
  )
}

export default Sidebar
