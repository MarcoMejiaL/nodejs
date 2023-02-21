const {faker} = require('@faker-js/faker')
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
    async findOne(clienteId){
        const nose = this.getToal()
        return this.clientes.find(item=> item.id ===clienteId)
    }

    async update(clienteId,changes){
        const index = this.clientes.findIndex(item => item.id === clienteId );
        if(index === -1){
            throw new Error('Cliente no encontrado')
        }
        this.clientes[index]=changes
        return this.clientes[index]
    }

    async delete(clienteId){
        const index = this.clientes.findIndex(item => item.id === clienteId)
        if(index === -1){
            throw new Error( "elemento no localizado")
        }
        this.clientes.splice(index,1)
        return {clienteId,message:true}
    }

}

module.exports = clienteServices