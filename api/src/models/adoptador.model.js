import mongoose from 'mongoose'

const adoptadorSchema = mongoose.Schema(
  {
    usuario: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      //unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    abuelos: [
      {
        ref: 'Abuelo',
        type: mongoose.Schema.Types.ObjectId,
      },
    ],
    rol: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

export default mongoose.model('Adoptador', adoptadorSchema)
