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
    res.status(200).json({
        message:"creation",
        data:body
    })
})

router.patch("/:clienteId",(req,res)=>{
    const {clienteId} = req.params;
    const body = req.body;
    res.json({
        message:"update",
        data:body,
        clienteId
    })
})

router.delete("/:clienteId",(req,res)=>{
    const {clienteId} = req.params;
    res.json({
        message:"borrado",
        clienteId,
    })
})

module.exports = router