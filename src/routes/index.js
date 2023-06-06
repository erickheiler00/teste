import {Router} from 'express'
import livroRoutes from './livro.js'

//const express = require("express");
//const router = express.Router();

const routes = new Router()

// rota padrao
routes.get('/', (req, res) => {
    res.send('Hello World')
})

routes.use('/livro', livroRoutes)

//module.exports = router;
export default routes