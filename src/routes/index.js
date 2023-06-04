import {Router} from 'express'
import teste2Routes from './teste2.js'

//const express = require("express");
//const router = express.Router();

const routes = new Router()

// rota padrao
routes.get('/', (req, res) => {
    res.send('Hello World')
})

routes.use('/teste', teste2Routes)

//module.exports = router;
export default routes