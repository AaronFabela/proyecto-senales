import { Router } from "express";
import * as adoptadorCtrl from "../controllers/adoptador.controller.js";
import { filesUpload } from "../utils/cloudinary.js";

const router = Router();

router.get("/", adoptadorCtrl.getAdoptadores);
router.get("/buscar/:idAdoptador", adoptadorCtrl.getAdoptadorById);
router.post("/registrar", filesUpload(), adoptadorCtrl.crearAdoptador);
router.delete(
  "/eliminarAdoptador/:idAdoptador",
  adoptadorCtrl.eliminarAdoptador
);

export default router;
