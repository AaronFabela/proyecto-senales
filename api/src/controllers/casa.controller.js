import Casa from '../models/casa.model.js'
import { ROLES } from '../utils/constants.js'

export const getCasas = async (req, res) => {
  try {
    const casas = await Casa.find()
    res.status(200).json(casas)
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    })
  }
}

export const getCasaById = async (req, res) => {
  try {
    const { idCasa } = req.params

    const casaFound = await Casa.findById(idCasa).populate(['abuelos'])

    res.status(200).json(casaFound)
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: error.message,
    })
  }
}

export const eliminarCasa = async (req, res) => {
  try {
    const { idCasa } = await req.params
    const casa = await Usuario.findByIdAndDelete(idCasa)
    if (!casa) {
      return res.status(400).json({
        message: 'La casa no existe',
      })
    }

    res.status(200).json(casa)
  } catch (error) {
    console.log(error)
    return res.status(400).json({
      message: error.message,
    })
  }
}

export const crearCasa = async (req, res) => {
  try {
    const { usuario, email, password, direccion, telefono, imagen } = req.body
    console.log('Body: ', req.body)

    const newCasa = new Casa({
      usuario,
      email,
      password,
      direccion,
      telefono,
      imagen,
      rol: ROLES.CASA,
    })

    await newCasa.save()
    return res.status(200).json(newCasa)
  } catch (error) {
    console.log(error)
    return res.status(400).json({
      message: error.message,
    })
  }
}
