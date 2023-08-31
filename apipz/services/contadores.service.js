/* const {faker} = require('@faker-js/faker') */

const boom = require("@hapi/boom")
const sequelize = require('../libs/sequelize');

const{ models} = require('../libs/sequelize')

class contadoresService{

    constructor(){
        this.contadores =[]
        this.fecha = new Date()

    }

    async find(){
      const rta = await models.Contadores.findAll({
        where:{
          activo : 1
        }
      })
      if(rta.length == 0){
        throw  boom.notFound(`no hay datos para mostrar`)
      }
      else{
        return rta
      }


    }

    async findOne(contadorId){
      const rta = await models.Contadores.findByPk(contadorId)
      if(!rta){
        throw  boom.notFound(`el contador con id: ${contadorId} no existe`)
    }
    else{

      return rta
    }
    }

    async create(data){
      try {
        const newContador = await models.Contadores.create({
          ...data,
          activo:1,


        })
        return newContador;
      } catch (error) {
        return (error)
      }

    }

    async update(contadorId, changes){
      try {
        const contador = await this.findOne(contadorId)

        const rta = await contador.update({...changes,
          fechaModificacion: this.fecha
        })

        return rta
      } catch (error) {
        return(error)
      }


    }

    async delete(contadorId){
       /* const contador = await this.findOne(contadorId)
       const rta = await contador.destroy()

       return {rta} */
       const contador =  await this.findOne(contadorId)
      const rta = await contador.update({activo:0,fecha_modificacion: this.fecha})
      return rta

    }

    /* async desactivar(contadorId){
      const contador =  await this.findOne(contadorId)
      const rta = await contador.update({activo:0,fechaModificacion: this.fecha})
      return rta

    }

    async reingreso(contadorId){
      const contador = await models.Contadores.findByPk(contadorId)
      const rta = await contador.update({activo:0,fechaModificacion: this.fecha})
      return rta
    } */


}


module.exports = contadoresService
