import mongoose from 'mongoose'

const abueloSchema = mongoose.Schema(
  {
    usuario: {
      type: String,
      unique: true,
    },
    imagen: {
      type: String,
    },
    descripcion: {
      type: String,
    },
    cartas: [
      {
        ref: 'Carta',
        type: mongoose.Schema.Types.ObjectId,
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

export default mongoose.model('Abuelo', abueloSchema)
