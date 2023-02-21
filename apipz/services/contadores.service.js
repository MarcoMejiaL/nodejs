const {faker} = require('@faker-js/faker')
const boom = require("@hapi/boom")


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
    async find(){
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                resolve(this.contadores)
            }, 5000);
        })
    }

    findOnde(contadorId){
        
        const contadorExist=this.contadores.find(item => item.id ===contadorId)
        if(!contadorExist){
            throw boom.notFound(`el contador con id: ${contadorId} no existe`)
        }
        
        return contadorExist
        
        
        
        
        
    }

    create(data){
        const newContador ={
            id:faker.datatype.uuid(),
            ...data
        }
        this.contadores.push(newContador)
        return newContador
    }

    update(contadorId, changes){
        const index = this.contadores.findIndex(item => item.id === contadorId)
        if(index === -1){
            throw boom.notFound(`el contador con id: ${contadorId} no existe`)
            
        }
        const newAcountand = this.contadores[index]
        this.contadores[index]={
            ...newAcountand,
            ...changes
        }
        return this.contadores[index]
        
    }

    delete(contadorId){
        const index = this.contadores.findIndex(item => item.id === contadorId)
        if(index = -1){
            throw boom.notFound(`el contador con id: ${contadorId} no existe`)

        }
        this.contadores.splice(index,1)
        return {contadorId ,message:true}
    }

}


module.exports = contadoresService