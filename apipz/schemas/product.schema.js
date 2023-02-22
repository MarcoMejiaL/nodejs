const Joi = require("joi")

const clienteId= Joi.string().uuid();
const name = Joi.string().alphanum().min(3).max(20);
const empresa = Joi.string().alphanum().min(3).max(100)

const createSchema = Joi.object({
    name: name.required(),
    empresa: empresa.required()
})
const getDataSchema= Joi.object({
    clienteId: clienteId.required(),
  });


module.exports= {createSchema,getDataSchema}