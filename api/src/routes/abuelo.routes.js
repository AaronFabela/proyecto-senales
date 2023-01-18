import { Router } from "express";
import * as abueloCtrl from "../controllers/abuelo.controller.js";
import { filesUpload } from "../utils/cloudinary.js";

const router = Router();

router.get("/", abueloCtrl.getAbuelos);
router.get("/buscar/:idAbuelo", abueloCtrl.getAbuleloById);
router.post("/registrar", filesUpload(), abueloCtrl.crearAbuelo);
router.delete("/eliminarRegistro/:idAbuelo", abueloCtrl.eliminarAbuelo);

export default router;
