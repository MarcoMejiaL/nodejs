/* const {faker} = require('@faker-js/faker') */
const boom = require("@hapi/boom")
const sequelize = require('../libs/sequelize');

const{ models} = require('../libs/sequelize')

class contadoresService{

    constructor(){
        this.contadores =[]
        /* this.generate() */
        /* this.pool = pool;
        this.pool.on('error', (err)=>console.log(err)) */
    }
     /* generate(){

        const limit =20;
        for (let i =0; i <limit; i++){
            this.contadores.push({
                id: faker.datatype.uuid(),
                name: faker.commerce.productName(),
                empresa: faker.commerce.department(),
            })
        }
    } */
    async find(){
      const rta = await models.Contadores.findAll();
    return rta
    }

    async findOne(contadorId){
      const rta = await models.Contadores.findOne({where:{contadores_id:contadorId}})
      if(rta == null){
        throw boom.notFound(`el contador con id: ${contadorId} no existe`)
    }
    else{
      return rta
    }
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
