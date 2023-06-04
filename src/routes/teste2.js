import {Router} from 'express'
import controller from '../controller/Teste.js'

const teste2Routes = new Router()

teste2Routes.get('/', controller.list) // lista todos os registros
teste2Routes.get('/:id', controller.byId) // lista um registro especifico
teste2Routes.post('/', controller.create) // cadastra um novo registro
teste2Routes.put('/:id', controller.updateById) // atualiza um registro existente
teste2Routes.delete('/:id', controller.deleteById) // remove um registro especifico

export default teste2Routes