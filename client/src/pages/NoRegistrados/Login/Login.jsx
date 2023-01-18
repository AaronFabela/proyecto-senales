import React from 'react'
import './styles/Login.css'
import LoginForm from './components/LoginForm'
import { useLocation } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useEffect } from 'react'
import { useState } from 'react'

const Login = () => {
  const location = useLocation()
  // const [message, setMessage] = useState(false)

  useEffect(() => {
    if (location.state !== null) {
      toast.error(`${location.state.message}`, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      })
    }
  }, [location.state])

  return (
    <div className='login'>
      <ToastContainer />
      <div className='bienvenida'>
        <h1>Bienvenido</h1>
        <h1>Inicia sesión</h1>
      </div>
      <div className='box-form'>
        <LoginForm />
      </div>
    </div>
  )
}

export default Login
