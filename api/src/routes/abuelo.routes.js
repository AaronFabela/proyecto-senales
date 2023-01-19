import { Router } from "express";
import * as abueloCtrl from "../controllers/abuelo.controller.js";
import { filesUpload } from "../utils/cloudinary.js";

const router = Router();

router.get("/", abueloCtrl.getAbuelos);
router.get("/buscar/:idAbuelo", abueloCtrl.getAbueloById);
router.get("/buscarPorCasa/:idCasa", abueloCtrl.getAbueloById);
router.get("/buscarPorAdoptador/:idAdoptador", abueloCtrl.getAbueloById);
router.put("/leerCarta/idCarta", abueloCtrl.leerCarta);
router.post("/registrar", filesUpload(), abueloCtrl.crearAbuelo);
router.delete("/eliminarRegistro/:idAbuelo", abueloCtrl.eliminarAbuelo);

export default router;
