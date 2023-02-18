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
    res.json({
        message:"usuario creado",
        data:body
    })
})

router.patch("/:contadorId", (req,res)=>{
    const {contadorId} = req.params;
    const body =req.body;
    res.json({
        message:"usuario modificado",
        data:body,
        contadorId

    })
})
router.delete("/:contadorId",(req,res)=>{
    const {contadorId} =req.params;
    res.json({
        message:"usuario borrado",
        contadorId
    })
})


module.exports = router