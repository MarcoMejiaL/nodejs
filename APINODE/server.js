/* import express from 'express'; */
const express = require('express');
const bodyParser = require('body-parser')
const router = express.Router();
const {success,error} = require('./module/response')


let app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(router)

router.get('/message',(req,res)=>{
    console.log(req.headers);
    res.header({
        "custom-header":"Valor Personalizado"
    })
    
    success(req, res,"una respuesta chida")
})


router.post('/message',(req,res)=>{

    if(req.query.error == "ok"){
        error(req,res,'Error Simulado', 400)
    }
    /* res.send('Hola maquinola desde message') */
    success(req,res, "Creado Correctamente")
})


/* 
app.use('/',(req,res)=>{
    res.send('hola maquinila')
}) */

app.use('/app', express.static('public'))
app.listen(3000)
console.log('la aplicacion esta funcionando en el puerto 3000');