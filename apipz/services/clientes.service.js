const {faker} = require('@faker-js/faker')
const boom = require("@hapi/boom")



class clienteServices{
    constructor(){
        this.clientes = [];

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
      const query = 'SELECT * FROM public."Clientes"';
      const rta = await this.pool.query(query);
      return rta.rows;

    }
    async findOne(clienteId/*idContador (se saca de la sesion) */){

      const query = `SELECT * FROM public."Clientes" WHERE "idClientes"='${clienteId}' `

      const rta = await this.pool.query(query)
      if(rta.rowCount ==0){

        throw boom.notFound(`el contador con id: ${clienteId} no existe`)
      }
      else{

        console.log(rta.rowCount);
        return rta.rows;
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
