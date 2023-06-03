import express from 'express'
import cors from 'cors'
import routes from './routes/index.js'
//import Home from './controller/Home.js'
import AppController from './controller/App.js'

// importando modulo express
//const express = require('express')
const app = express()

// CORS
// adicionar cabeçalho de liberação de origem
//const cors = require('cors')

app.use(express.json());
// urlencoded: analisa os dados enviados em um formato de formulário HTML a partir de uma solicitação HTTP
app.use(express.urlencoded({extended: true})) // garante que o middleware urlencoded seja aplicado a todas as rotas
app.use(cors()) 

app.use(routes)
//app.get('/', Home.index)
app.use(AppController.notFound)
app.use(AppController.gerenciaErro)

export default app

/*
app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000: http://localhost:3000/');
});
*/

// URL do servidor (segurar o CTRL e clicar em cima):
// http://localhost:3000/

// Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

// para inicializar:
// npm run dev