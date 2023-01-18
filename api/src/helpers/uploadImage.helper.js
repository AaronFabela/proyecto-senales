import { uploadImage, deleteImage } from "../utils/cloudinary.js";
import fs from "fs-extra";

export const uploadNewImage = async (imagen, res, model) => {
  var image;
  model.imagen?.public_id ? await deleteImage(model.imagen.public_id) : null;

  !imagen
    ? res.status(400).json({ message: "Imagen obligatoria", code: 400 })
    : (image = await uploadImage(imagen.tempFilePath));

  fs.stat(imagen.tempFilePath) ? await fs.unlink(imagen.tempFilePath) : null;
  if (image) {
    return image;
  }
};
