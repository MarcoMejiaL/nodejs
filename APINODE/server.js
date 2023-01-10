/* import express from 'express'; */
const express = require('express');
const bodyParser = require('body-parser')
const router = express.Router();
let app = express()
app.use(bodyParser.json())
app.use(router)

router.get('/message',(req,res)=>{
    console.log(req.body);
    res.send('Hola maquinola')
})
router.post('/message',(req,res)=>{
    res.send('Hola maquinola desde message')
})


/* 
app.use('/',(req,res)=>{
    res.send('hola maquinila')
}) */
app.listen(3000)
console.log('la aplicacion esta funcionando en el puerto 3000');