// Creacion del esquema Usuario
import mongoose from "mongoose";

const cartaSchema = mongoose.Schema(
  {
    titulo: {
      type: String,
      //unique: true,
    },
    contenido: {
      type: String,
      //unique: true,
    },
    imagen: {
      public_id: String,
      secure_url: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("Carta", cartaSchema);
