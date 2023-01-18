import axios from "axios";
import { API_URL } from "../api";

const ext = "adoptador/";

const getAdoptadores = async () => {
  return axios.get(API_URL + ext, {
    headers: {
      "Access-Control-Allow-Origin": true,
      "Content-Type": "application/json",
    },
  });
};
const getAdoptadorId = async (id) => {
  return axios.get(API_URL + ext + "buscar/" + id, {
    headers: {
      "Access-Control-Allow-Origin": true,
      "Content-Type": "application/json",
    },
  });
};

const deleteAdoptadorId = async (id) => {
  return axios.delete(API_URL + ext + "eliminarAdoptador/" + id, {
    headers: {
      "Access-Control-Allow-Origin": true,
      "Content-Type": "application/json",
    },
  });
};

const adoptarAbuelo = async (data) => {
  console.log("service", data);
  const response = await axios.put(API_URL + ext + "adoptar", data, {
    headers: {
      "Access-Control-Allow-Origin": true,
      "Content-Type": "application/json",
    },
  });
  console.log(response.data);
  return response.data;
};

const enviarCarta = async (data) => {
  const response = await axios.post(API_URL + "carta/nuevaCarta", data, {
    headers: {
      "Access-Control-Allow-Origin": true,
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

const adoptadoresService = {
  getAdoptadorId,
  getAdoptadores,
  deleteAdoptadorId,
  adoptarAbuelo,
  enviarCarta,
};

export default adoptadoresService;
