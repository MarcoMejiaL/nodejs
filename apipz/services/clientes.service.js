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
    
    create(){

    }

    find(){
        return this.clientes
    }
    findOne(clienteId){
        return this.clientes.find(item=> item.id ===clienteId)
    }

    update(){}

    delete(){}

}

module.exports = clienteServices