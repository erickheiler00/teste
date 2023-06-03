import {Router} from 'express'

//const express = require("express");
//const router = express.Router();

const routes = new Router()

// rota padrao
routes.get('/', (req, res) => {
    res.send('Hello World')
})

//module.exports = router;
export default routes