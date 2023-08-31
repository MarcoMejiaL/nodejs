const boom = require("@hapi/boom")
const sequelize = require('../libs/sequelize');

const{ models} = require('../libs/sequelize')

class fielesService{
  constructor(){
    this.fieles = []
  }


  async find(){
    const rta = await models.Fieles.findAll()
    return rta
  }

  async create(data){
    try {
      const newFiel =await models.Fieles.create(data)
      return newFiel
    } catch (error) {
      return (error)
    }

  }
}


module.exports = fielesService
