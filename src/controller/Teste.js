import models from '../models/Teste.js'
import createError from 'http-errors'

// retornar não encontrado caso seja solicitado um ID que não existe
const gerenciaNotFound = (result) => {
    if (!result) {
        throw createError(404, 'registro não encontrado')
    }
    return result
}

const Teste = {
    list(req, res, next) {
        models.list()
            .then(result => res.json(result))
            .catch(next)
    },

    byId(req, res, next) {
        models.byId(req.params.id) // obter o valor do parametro id passado na URL
            .then(gerenciaNotFound) // função será executada quando a promessa for resolvida
                                    // nesse caso, a função models.id retorna uma promessa
            .then(result => response.json(result))
            .catch(next)   
    },

    create(req, res, next) {
        models.create(req.body)
            .then(result => res.status(201).json(result))
            .catch(next)
    },

    updateById(req, res, next) {
        models.updateById(req.params.id, req.body)
            .then(result => res.json(result))
            .catch(next)
    },

    deleteById(req, res, next) {
        models.deleteById(req.params.id)
            .then(_ => response.sendStatus(204))
            .catch(next)
    }
}

export default Teste