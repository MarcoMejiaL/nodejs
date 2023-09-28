const boom = require("@hapi/boom")
const sequelize = require('../libs/sequelize');

const{ models} = require('../libs/sequelize')

class fielesService{
  constructor(){
    this.fieles = []
    this.dateNow = new Date()
  }


  async find(){

    const rta = await models.Fieles.findAll()
    if(rta.length == 0){
      throw  boom.notFound(`no hay Fieles para mostrar`)
    }
    else{
      return rta
    }


  }
  async findOne(idFiel){

    const rta = await models.Fieles.findByPk(idFiel)

    if(!rta){
      throw boom.notFound(`no existe  fiel registradas para ese cliente`)
    }
    else{
      return rta
    }

  }

  async create(data){
    try {
      const newFiel =await models.Fieles.create(data)
      return newFiel
    } catch (error) {
      return (error)
    }

  }
  async update(idFiel,changes){
    try{
      const rta = await models.Fieles.find({where:{
        cliente_id : idFiel
      }})
      const cambios = await rta.update({...changes,
        fechaModificacion: this.dateNow
      })

    }catch(error){
      return(error)
    }
  }
}


module.exports = fielesService
