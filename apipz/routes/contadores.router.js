const express = require("express")

const router = express.Router()


router.get("/",(req,res)=>{
    res.send("todos los contadores")
})

router.get("/:contadorId",(req,res)=>{
    const {contadorId} = req.params;
    res.send({
        contadorId,
        nombre:"marco"
    })
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