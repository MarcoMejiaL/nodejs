const {faker} = require('@faker-js/faker')


class contadoresService{

    constructor(){
        this.contadores =[]
        this.genetare()
    }
    genetare(){
        const limit =20;
        for (let i =0; i <limit; i++){
            this.contadores.push({
                id: faker.datatype.uuid(),
                name: faker.commerce.productName(),
                empresa: faker.commerce.department(),
            })
        }
    }
    find(){
        return this.contadores
    }

    findOnde(contadorId){
        return this.contadores.find(item => item.id === contadorId)
    }

    create(){}

    update(){}

    delete(){}

}


module.exports = contadoresService