import { Router } from "express";
import * as usuarioCtrl from "../controllers/usuario.controller.js";

const router = Router();

router.get("/", usuarioCtrl.getUsuarios);
router.get("/buscar/:idUsuario", usuarioCtrl.getUsuarioById);
router.post("/nuevoUsuario", usuarioCtrl.crearUsuario);
router.delete("/eliminarUsuario/:idUsuario", usuarioCtrl.eliminarUsuario);

export default router;
