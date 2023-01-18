import axios from 'axios'
import { API_URL } from '../api'

const signup = async (user) => {
  const { usuario, email, password, rol } = user
  const response = await axios.post(API_URL + 'auth/signup/', {
    usuario,
    email,
    password,
    rol: [rol],
  })

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

const login = async (usuario, password) => {
  return axios
    .post(
      API_URL + 'auth/login',
      {
        usuario,
        password,
      },
      { headers: { 'Content-Type': 'application/json' } }
    )
    .then((response) => {
      if (response.data) {
        // console.log(JSON.stringify(response.data))
        localStorage.setItem('user', JSON.stringify(response.data))
      }

      return response.data
    })
}
const updateUsuario = async (id, newDataUsuario) => {
  const response = await axios.put(
    API_URL + 'usuario/editarUsuario/' + id,
    newDataUsuario,
    {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': true,
      },
    }
  )
  return response.data
}

const changeStatus = async (id, data) => {
  const response = await axios.put(
    API_URL + 'usuario/cambiarEstatus/' + id,
    data,
    {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': true,
      },
    }
  )
  return response.data
}

const deleteUsuario = async (id) => {
  return axios.delete(API_URL + 'usuario/eliminarUsuario/' + id, {
    headers: { 'Content-Type': 'application/json' },
  })
}

const getUsuarioById = async (id) => {
  return axios.get(API_URL + 'usuario/getUsuario/' + id, {
    headers: { 'Content-Type': 'application/json' },
  })
}

const logout = () => {
  localStorage.removeItem('user')
}

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'))
}

const authService = {
  signup,
  login,
  logout,
  // updateUsuario,
  // deleteUsuario,
  // changeStatus,
  getCurrentUser,
  // getUsuarioById,
}

export default authService
