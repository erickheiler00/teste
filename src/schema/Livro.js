import mongoose from '../config/mongoose.js'
const {Schema} = mongoose

// falta trocar teste pelo tema correspondente, assim como definir quais atributos teremos
const Livro = new Schema({
    titulo: String,
    autor: String,
    editora: String,
    ano: Number,
    edicao: Number,
    genero: {
        type: String,
        enum: ['Fantasia', 'Ficção científica', 'Terror', 'Romance', 'Conto', 'Infantil', 'Biografia', 'Humor', 'Autoajuda', 'História']
    }
})



export default Livro