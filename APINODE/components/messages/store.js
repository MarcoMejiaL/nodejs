const db =require('mongoose')
const Model = require('./model')
//mongodb://localhost:27017/
const URL='mongodb://localhost:27017/prueba'
db.Promise= global.Promise;
db.set('strictQuery',false)

db.connect(URL,{
    useNewUrlParser:true
})
const conection = db.connection;
conection.once('open',()=>{
    console.info(`Coneccion realizada con exito URL: ${URL}` )
})


const addmessage=(message)=>{
    //list.push(message)
    const myMessage = new Model(message)
    myMessage.save();
}

const getMessage = ()=>{
    return list 
}
module.exports=({
    add:addmessage, 
    list:getMessage
})