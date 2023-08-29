const Joi = require("joi")


const nombre = Joi.string().min(3).max(30);
const apellidoPaterno = Joi.string().alphanum().min(3).max(30);
const apellidoMaterno = Joi.string().alphanum().min(3).max(30);
const correo = Joi.string().min(3).max(30);
const telefono =Joi.string().alphanum().min(10);
const empresa = Joi.number()
const usuario = Joi.string();
const pass = Joi.string().alphanum().min(4).max(10)
const activo = Joi.number()


const createContador = Joi.object({
  nombre: nombre.required(),
  apellidoPaterno: apellidoPaterno.required(),
  apellidoMaterno : apellidoMaterno.required(),
  correo: correo.required(),
  telefono: telefono.required(),
  empresa: empresa.required(),
  usuario: usuario,
  pass: pass,
  activo:activo.required()




})



module.exports= {createContador}
