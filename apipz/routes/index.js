const express = require("express")

const clientes = require('./clientes.router')
const contadoresRouter = require("./contadores.router")

function routerApi(app){
    const router = express.Router()
    app.use('/api/v1',router)
    router.use('/clientes',clientes);
    router.use('/contadores',contadoresRouter)
}

module.exports =routerApi