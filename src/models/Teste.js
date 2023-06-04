import mongoose from '../config/mongoose.js'
import schema from '../schema/Teste.js'

const model = mongoose.model('Teste', schema)

const Teste = {
    list() {
        const query = {}
        return model.find(query)
    },

    byId(id) {
        return model.findOne({_id: id})
    },

    create(data) { // depois trocar data para os campos/atributos que teremos
        const teste = new model(data) // trocar data
        return teste.save()
    },

    updateById(id, data) { // trocar data
        return model.updateOne({_id: id}, data) // trocar data
    },

    deleteById(id) {
        return model.deleteOne({_id: id})
    },
}

export default Teste