import Usuario from '../models/usuario.model.js'
import { ROLES } from '../utils/constants.js'

export const getUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find()
    res.status(200).json(usuarios)
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    })
  }
}

export const getUsuarioById = async (req, res) => {
  try {
    const { idUsuario } = req.params

    const userFound = await Usuario.findById(idUsuario)

    res.status(200).json(userFound)
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: error.message,
    })
  }
}

export const eliminarUsuario = async (req, res) => {
  try {
    const { usuarioId } = await req.params
    const usuario = await Usuario.findByIdAndDelete(usuarioId)
    if (!usuario) {
      return res.status(400).json({
        message: 'El usuario no existe',
      })
    }

    res.status(200).json(usuario)
  } catch (error) {
    console.log(error)
    return res.status(400).json({
      message: error.message,
    })
  }
}

export const crearUsuario = async (req, res) => {
  try {
    const { usuario, email, password } = req.body
    console.log('Body: ', req.body)

    const newUser = new Usuario({
      usuario,
      email,
      password,
      rol: ROLES.USUARIO,
    })

    await newUser.save()
    return res.status(200).json(newUser)
  } catch (error) {
    console.log(error)
    return res.status(400).json({
      message: error.message,
    })
  }
}
