const Joi = require("joi")

const idFiel = Joi.number()
const fechaCaducidad = Joi.date()
const pass = Joi.string().alphanum()


/* const create */

const fielRegister = Joi.object({
  fechaCaducidad: fechaCaducidad.required(),
  pass: pass.required()
}

  )
const findOneFiel= Joi.object({
  idFiel: idFiel.required()
})

module.exports = {findOneFiel,fielRegister}
