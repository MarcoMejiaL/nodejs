const express = require('express');
const {success,error} = require('../../module/response')
const {addMessage,getMessages} =require('./controller')

const router = express.Router();


router.get('/',(req,res)=>{
    
    getMessages().then(
        (messageList)=>{
            success(req,res,messageList,200)
        }
    ).catch(e=>{
        error(req,res,'error inesperado',500)
    })
})


router.post('/',(req,res)=>{
    addMessage(req.body.user,req.body.message).then((respuesta)=>{
        success(req,res,respuesta,200 )}
    ).catch((err)=>{
        error(req,res,'Error Simulado ss', 500, err)
    })
    
        
    
    /* res.send('Hola maquinola desde message') */
    
})


module.exports=router