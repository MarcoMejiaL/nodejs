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


module.exports = router