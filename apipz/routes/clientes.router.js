const express = require("express")
const clienteServices = require("../services/clientes.service")
const validatorHandler = require('../middlewares/validator.handler')
const {createSchema,getDataSchema}= require("../schemas/product.schema")
const router = express.Router()

const clientes = new clienteServices();

router.get('/',async(req,res)=>{
    const clientesList =await clientes.find();
    res.json(clientesList)
})

router.get('/:clienteId' 
,validatorHandler(getDataSchema,'params')
    ,async(req,res,next)=>{
        try {
            const {clienteId} = req.params
            const clientesList = await clientes.findOne(clienteId);
            res.json(clientesList)
        
        } catch (error) {
            next(error)   
        }


    


})

router.post("/",
validatorHandler(createSchema,'body'),
async(req,res)=> {
   
    const body = req.body;
    const newCliente = await clientes.create(body)
    res.status(201).json(newCliente)
        
})

router.patch("/:clienteId",
validatorHandler(getDataSchema,'params'),
validatorHandler(createSchema,'body'),
async(req,res,next)=>{
    try {
        const {clienteId} = req.params;
        const body = req.body;
        const clientesList = await clientes.update(clienteId,body)
        res.json(clientesList)
        
    } catch (error) {
        next(error)   
    }
})

router.delete("/:clienteId",
validatorHandler(getDataSchema,'params'),
async(req,res)=>{
    const {clienteId} = req.params;
    const clientesList = await clientes.delete(clienteId)
    res.json(clientesList)
})

module.exports = router