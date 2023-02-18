const express = require("express")

const router = express.Router()

router.get('/',(req,res)=>{
    res.send('todos los contadores')
})

router.get('/:clienteId',(req,res)=>{
    const {clienteId} = req.params
    res.send({
        clienteId,
        name:"marco",
    })


})

module.exports = router