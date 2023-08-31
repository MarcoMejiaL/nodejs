
const boom = require("@hapi/boom")

const{ models} = require('../libs/sequelize')


class clienteServices{
    constructor(){
        this.clientes = [];

    }




    async find(){
      const rta = await models.Clientes.findAll({
        where:{
          activo : 1
        }
      });
    return rta

    }
    async findOne(clienteId){

      const rta = await models.Clientes.findByPk(clienteId)
      if(rta == null){
        return  boom.notFound(`el cliente con id: ${clienteId} no existe`)
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

    async update(clienteId,changes){
        const index = this.clientes.findIndex(item => item.id === clienteId );
        if(index === -1){
            throw boom.notFound("Cliente no encontrado")
        }
        const newClient = this.clientes[index]
        this.clientes[index]={
            ...newClient,
            ...changes
        }
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
