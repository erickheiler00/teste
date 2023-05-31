// importando modulo express
const express = require('express')
const app = express()

// rota raiz
app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(3000);

// URL do servidor (segurar o CTRL e clicar em cima):
// http://localhost:3000/