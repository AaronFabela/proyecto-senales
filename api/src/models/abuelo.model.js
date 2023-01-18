import mongoose from "mongoose";

const abueloSchema = mongoose.Schema(
  {
    usuario: {
      type: String,
      unique: true,
    },
    edad: Number,
    adoptado: {
      type: Boolean,
      default: false,
    },
    imagen: {
      public_id: String,
      secure_url: String,
    },
    descripcion: {
      type: String,
    },
    cartas: [
      {
        ref: "Carta",
        type: mongoose.Schema.Types.ObjectId,
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("Abuelo", abueloSchema);
