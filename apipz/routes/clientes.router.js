const express = require("express")
const clienteServices = require("../services/clientes.service")
const router = express.Router()

const clientes = new clienteServices();

router.get('/',async(req,res)=>{
    const clientesList =await clientes.find();
    res.json(clientesList)
})

router.get('/:clienteId' ,async(req,res,next)=>{
    try {
        const {clienteId} = req.params
        const clientesList = await clientes.findOne(clienteId);
        res.json(clientesList)
        
    } catch (error) {
     next(error)   
    }


    


})

router.post("/",async(req,res)=> {
   
    const body = req.body;
    const newCliente = await clientes.create(body)
    res.status(201).json(newCliente)
        
})

router.patch("/:clienteId",async(req,res)=>{
    try {
        const {clienteId} = req.params;
        const body = req.body;
        const clientesList = await clientes.update(clienteId,body)
        res.json(clientesList)
        
    } catch (error) {
        res.status(404).json({
            message:error.message
        })
    }
})

router.delete("/:clienteId",async(req,res)=>{
    const {clienteId} = req.params;
    const clientesList = await clientes.delete(clienteId)
    res.json(clientesList)
})

module.exports = router