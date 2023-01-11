/* import express from 'express'; */
const express = require('express');
const bodyParser = require('body-parser')



/* const router = require('./components/messages/network') */
const router = require('./module/routes')

let app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
//app.use(router)
router(app)




/* 
app.use('/',(req,res)=>{
    res.send('hola maquinila')
}) */

app.use('/app', express.static('public'))
app.listen(3000)
console.log('la aplicacion esta funcionando en el puerto 3000');