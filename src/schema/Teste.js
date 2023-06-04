import mongoose from '../config/mongoose.js'
const {Schema} = mongoose

// falta trocar teste pelo tema correspondente, assim como definir quais atributos teremos
const Teste = new Schema({
    atributo1: String,
    atributo2: String
})

export default Teste