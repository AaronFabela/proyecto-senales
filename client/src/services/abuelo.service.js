import axios from 'axios'
import { API_URL } from '../api'

const ext = 'abuelo/'

const getAbuelos = async () => {
  return axios.get(API_URL + ext, {
    headers: {
      'Access-Control-Allow-Origin': true,
      'Content-Type': 'application/json',
    },
  })
}
const getAbueloId = async (id) => {
  return axios.get(API_URL + ext + 'buscar/' + id, {
    headers: {
      'Access-Control-Allow-Origin': true,
      'Content-Type': 'application/json',
    },
  })
}

const deleteAbueloId = async (id) => {
  return axios.delete(API_URL + ext + 'eliminarRegistro/' + id, {
    headers: {
      'Access-Control-Allow-Origin': true,
      'Content-Type': 'application/json',
    },
  })
}

const abuelosService = {
  getAbuelos,
  getAbueloId,
  deleteAbueloId,
}

export default abuelosService
