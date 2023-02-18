const express = require("express")
const clienteServices = require("../services/clientes.service")
const router = express.Router()

const clientes = new clienteServices();

router.get('/',(req,res)=>{
    const clientesList = clientes.find();
    res.json(clientesList)
})

router.get('/:clienteId',(req,res)=>{
    const {clienteId} = req.params
    const clientesList = clientes.findOne(clienteId);
    res.json(clientesList)
    


})

router.post("/",(req,res)=>{
    const body = req.body;
    const newCliente = clientes.create(body)
    res.status(201).json(newCliente)
})

router.patch("/:clienteId",(req,res)=>{
    const {clienteId} = req.params;
    const body = req.body;
    const clientesList = clientes.update(clienteId,body)
    res.json(clientesList)
})

router.delete("/:clienteId",(req,res)=>{
    const {clienteId} = req.params;
    const clientesList = clientes.delete(clienteId)
    res.json(clientesList)
})

module.exports = router