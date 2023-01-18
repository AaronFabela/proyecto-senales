import React from 'react'
import { useLocation, Navigate, Outlet, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const RequireAuth = ({ children }) => {
  const navigate = useNavigate()
  const { auth } = useAuth()
  if (auth.login) {
    return (
      <Navigate
        to='/'
        state={{ message: 'No cuentas con los permisos para acceder' }}
        replace={true}
      />
    )
  } else {
    return (
      <Navigate
        to='/'
        state={{ message: 'Debes iniciar sesion primero' }}
        replace={true}
      />
    )
  }
}

export default RequireAuth
