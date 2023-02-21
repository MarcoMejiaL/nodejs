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
        return this.contadores.find(item => item.id ===contadorId)
        
        
        
        
        
        
        
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
            throw new Error("Contador no encontreado")
            
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
            throw new Error ("Contador no encontrado")

        }
        this.contadores.splice(index,1)
        return {contadorId ,message:true}
    }

}


module.exports = contadoresService