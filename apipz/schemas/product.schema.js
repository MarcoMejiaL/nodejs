const Joi = require("joi")

const id= Joi.string().uuid();
const name = Joi.string().alphanum().min(3).max(20);
const empresa = Joi.string().alphanum().min(3).max(100)

const createContadorSchema = Joi.object({
    name: name.required(),
    empresa: empresa.required()
})

module.exports= {createContadorSchema}