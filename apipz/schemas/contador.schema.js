const Joi = require("joi")

const contadoresId = Joi.number()
const nombre = Joi.string().min(3).max(30);
const apellidoPaterno = Joi.string().alphanum().min(3).max(30);
const apellidoMaterno = Joi.string().alphanum().min(3).max(30);
const correo = Joi.string().min(3).max(30);
const telefono =Joi.string().alphanum().min(10);




const createContador = Joi.object({
  nombre: nombre.required(),
  apellidoPaterno: apellidoPaterno.required(),
  apellidoMaterno : apellidoMaterno.required(),
  correo: correo.required(),
  telefono: telefono.required(),

})
const findAccountandSchema = Joi.object({
  contadoresId:contadoresId.required()
})



module.exports= {createContador,findAccountandSchema}
