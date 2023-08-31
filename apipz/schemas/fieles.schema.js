const Joi = require("joi")

const idFiel = Joi.number()
const fechaCaducidad = Joi.date().format('YYYY-MM-DD').utc()

/* const create */


const findOneFiel= Joi.object({
  idFiel: idFiel.required()
})

module.exports = {findOneFiel}
