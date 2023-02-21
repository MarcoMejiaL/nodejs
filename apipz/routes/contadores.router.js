const express = require("express")
const contadoresService = require("../services/contadores.service")
    
const router = express.Router()

const serviceContadores = new contadoresService();


router.get("/",async(req,res)=>{
    const contadoreslist = await serviceContadores.find();
    res.json(contadoreslist)
})

router.get("/:contadorId",async(req,res,next)=>{

    try {
     
    const {contadorId} = req.params;
    const contadoreslist = await serviceContadores.findOnde(contadorId)
    res.send(contadoreslist)   
    } catch (error) {
        next(error)
        
    }
})

router.post("/",(req,res)=>{
    const body = req.body;
   const newAcountand =  serviceContadores.create(body)
   res.status(201).json(newAcountand)
})

router.patch("/:contadorId", (req,res,next)=>{
    try {
    const {contadorId} = req.params;
    const body =req.body;
    const contatoresList = serviceContadores.update(contadorId,body)
    res.json(contatoresList)    
    } catch (error) {
        next(error)
    }
    
})
router.delete("/:contadorId",(req,res,next)=>{
    try {
        const {contadorId} =req.params;
        const contadoreslist= serviceContadores.delete(contadorId)
        res.json(contadoreslist)
        
    } catch (error) {
        next(error)
    }


})


module.exports = router