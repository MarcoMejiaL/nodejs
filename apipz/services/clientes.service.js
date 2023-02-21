const {faker} = require('@faker-js/faker')
const boom = require("@hapi/boom")



class clienteServices{
    constructor(){
        this.clientes = [];
        this.generate();
    }

    generate(){
        const limit = 100
        for(let i =0; i<limit; i++){
            this.clientes.push({
                id:faker.datatype.uuid(),
                name:faker.commerce.productName(),
                price: faker.commerce.price()
            })
        }
    }
    
    async create(data){
        const newCliente ={
            id:faker.datatype.uuid(),
            ...data
        }
        this.clientes.push(newCliente)
        return newCliente

    }

    async find(){
        return new Promise ((resolve,reject)=>{
            setTimeout(()=>{
                resolve(this.clientes)
            },5000)
        })
         
    }
    async findOne(clienteId/*idContador (se saca de la sesion) */){
        
        const cliente = this.clientes.find(item=> item.id ===clienteId)

        if(!cliente){
            throw boom.notFound("Cliente no encontrado")
        }
        /* 
            const idContador = this.clientes.find(item.=>item.contadorId === clienteId)
            if(idContador !==ContadorId){
                trow boom.conflict("no tienes acceso a ese cliente")
            }        
        
        */

        return cliente
    }

    async update(clienteId,changes){
        const index = this.clientes.findIndex(item => item.id === clienteId );
        if(index === -1){
            throw boom.notFound("Cliente no encontrado")
        }
        this.clientes[index]=changes
        return this.clientes[index]
    }

    async delete(clienteId){
        const index = this.clientes.findIndex(item => item.id === clienteId)
        if(index === -1){
            throw boom.notFound("Cliente no encontrado")
        }
        this.clientes.splice(index,1)
        return {clienteId,message:true}
    }

}

module.exports = clienteServices