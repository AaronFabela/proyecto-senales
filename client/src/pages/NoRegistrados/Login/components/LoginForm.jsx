import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthService from '../../../../services/auth.service'
import useAuth from '../../../../hooks/useAuth'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    user: '',
    password: '',
  })
  const { setAuth } = useAuth()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  const validate = () => {
    credentials.user !== '' && credentials.password !== ''
      ? handleSubmit()
      : toast.error('Ingresa un usuario y contraseña', {
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

  const handleSubmit = async (e) => {
    // navigate('/home')
    try {
      // const response = await AuthService.login(
      //   credentials.user,
      //   credentials.password
      // )
      // const { id, usuario, login, rol } = response
      // //const rol = response?.user?.rol
      // setAuth({ login, id, usuario, rol })
      navigate('/dashboard')
    } catch (err) {
      err.response.data.errors.map((error) =>
        toast.error(`${error.msg}`, {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        })
      )

      setCredentials({ user: '', password: '' })
      console.log(err)
    }
  }

  useEffect(() => {
    setAuth({})
    localStorage.removeItem('user')
  }, [])

  return (
    <div className='login-form'>
      <ToastContainer />
      <div className='form'>
        <input
          type='text'
          placeholder='Usuario'
          name='user'
          value={credentials.user}
          onChange={(e) => handleChange(e)}
        />
        <input
          type='password'
          placeholder='Password'
          name='password'
          value={credentials.password}
          onChange={(e) => handleChange(e)}
        />
        <button className='btn-enviar' onClick={(e) => validate()}>
          Login
        </button>
      </div>
    </div>
  )
}

export default LoginForm
