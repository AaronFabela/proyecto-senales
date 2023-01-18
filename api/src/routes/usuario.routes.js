import { Router } from 'express'
import * as usuarioCtrl from '../controllers/usuario.controller.js'

const router = Router()

router.get('/', usuarioCtrl.getUsuarios)
router.get('/:idUsuario', usuarioCtrl.getUsuarioById)
router.post('/', usuarioCtrl.crearUsuario)
router.delete('/:idUsuario', usuarioCtrl.eliminarUsuario)

export default router
