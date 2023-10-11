const express = require('express')
const app = express()

app.get("/", (requisicao, resposta) => {
    resposta.send('Anima')
})

app.listen(3000, () => {
    console.log('App rodando na 3000')
})
