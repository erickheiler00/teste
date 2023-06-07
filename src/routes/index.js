import {Router} from 'express' // importa a classe Router do express
import livroRoutes from './livro.js'

//const express = require("express");
//const router = express.Router();

// Router é usado para definir as rotas

// definições das rotas

const routes = new Router() // nova instância do Router

// rota padrao
routes.get('/', (req, res) => {
    res.send('Hello World')
})

// todas as rotas definidas no objeto livroRoutes serão roteadas
// a partir do caminho /livro
routes.use('/livro', livroRoutes) 

//module.exports = router;
export default routes