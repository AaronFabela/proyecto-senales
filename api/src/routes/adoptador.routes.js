import { Router } from 'express'
import * as adoptadorCtrl from '../controllers/adoptador.controller.js'

const router = Router()

router.get('/', adoptadorCtrl.getAdoptadores)
router.get('/:idAdoptador', adoptadorCtrl.getAdoptadorById)
router.post('/', adoptadorCtrl.crearAdoptador)
router.delete('/:idAdoptador', adoptadorCtrl.eliminarAdoptador)

export default router
