const {add,list}=require('./store')

const addMessage= (user,message)=>{
    return new Promise((resolve, reject)=>{
        if(!user || !message){
            console.error('[messageController] no hay mensaje' )
            reject('datos incorrectos perrin')
        }
            const fullMessage={
                user:user,
                message:message,
                date: new Date()     
         
        }
        add(fullMessage)        
        resolve(fullMessage)
        
    })
    
    

}
const getMessages= ()=>{
    return new Promise((resolve,reject)=>{
        resolve(list())
    })

}

module.exports =({
    addMessage,
    getMessages
})
