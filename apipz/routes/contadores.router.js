const express = require("express")
const contadoresService = require("../services/contadores.service")
    
const router = express.Router()

const serviceContadores = new contadoresService();


router.get("/",(req,res)=>{
    const contadoreslist = serviceContadores.find();
    res.json(contadoreslist)
})

router.get("/:contadorId",(req,res)=>{
    const {contadorId} = req.params;
    const contadoreslist = serviceContadores.findOnde(contadorId)
    res.send(contadoreslist)
})

router.post("/",(req,res)=>{
    const body = req.body;
   const newAcountand =  serviceContadores.create(body)
   res.status(201).json(newAcountand)
})

router.patch("/:contadorId", (req,res)=>{
    const {contadorId} = req.params;
    const body =req.body;
    const contatoresList = serviceContadores.update(contadorId,body)
    res.json(contatoresList)
})
router.delete("/:contadorId",(req,res)=>{
    const {contadorId} =req.params;
    const contadoreslist= serviceContadores.delete(contadorId)
    res.json(contadoreslist)
})


module.exports = router