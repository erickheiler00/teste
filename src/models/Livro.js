import mongoose from '../config/mongoose.js'
import schema from '../schema/Livro.js'

const model = mongoose.model('Livro', schema)

const Livro = {
    list() {
        const query = {}
        return model.find(query)
    },

    byId(id) {
        return model.findOne({_id: id})
    },

    create(data) { // depois trocar data para os campos/atributos que teremos
        const livro = new model(data) // trocar data
        return livro.save()
    },

    updateById(id, data) { // trocar data
        return model.updateOne({_id: id}, data) // trocar data
    },

    deleteById(id) {
        return model.deleteOne({_id: id})
    },
}

const data = {
    "autor" : "desconhecido",
    "editora" : "desconhecida",
    "ano" : 2000,
    "edicao" : 1,
    "genero" : "Conto"
}
Livro.create(data)

export default Livro