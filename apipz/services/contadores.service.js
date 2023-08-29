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
      const rta = await models.Contadores.findAll({
        where:{
          activo : 1
        }
      });
    return rta
    }

    async findOne(contadorId){
      const rta = await models.Contadores.findByPk(contadorId)
      if(rta == null){
        return  boom.notFound(`el contador con id: ${contadorId} no existe`)
    }
    else{
      return rta
    }
    }

    async create(data){
      try {
        const newContador = await models.Contadores.create(data)
        return newContador;
      } catch (error) {
        return (error)
      }

    }

    async update(contadorId, changes){
        const contador = await this.findOne(contadorId)

        const rta = await contador.update(changes)

        return rta

    }

    delete(contadorId){
        const index = this.contadores.findIndex(item => item.id === contadorId)
        if(index = -1){
            throw boom.notFound(`el contador con id: ${contadorId} no existe`)

        }
        this.contadores.splice(index,1)
        return {contadorId ,message:true}
    }

    desactivar(contadorId){
      const contador = this.findOne(contadorId)
      const rta = contador.update({activo:0})
      return rta

    }


}


module.exports = contadoresService
