import mongoose from 'mongoose'

const publicacionesCollection = 'publicaciones'
const publicacionesSchema = new mongoose.Schema({

  nombre: { type: String, require: true },
  descripcion: { type: String, require: true },
  url: { type: String, require: true },

})
export default mongoose.model(publicacionesCollection, publicacionesSchema)
