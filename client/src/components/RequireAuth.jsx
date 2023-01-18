import React from 'react'
import { useEffect } from 'react'
import { useLocation, Navigate, Outlet, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const RequireAuth = ({ children }) => {
  const navigate = useNavigate()
  const { auth } = useAuth()

  useEffect(() => {
    console.log(auth)
  }, [])
  if (auth.login) {
    return children
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
