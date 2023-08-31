const Joi = require("joi")

const idclientes = Joi.number()
const nombreCliente = Joi.string()
const apellidoPaternoCliente = Joi.string()
const apellidoMatarnoCliente = Joi.string()
const correo = Joi.string().alphanum().min(9)
const telefono = Joi.string().alphanum().min(10);
const direccion = Joi.number()
const tipoCliente = Joi.string()
const activo = Joi.number()

const createSchemaCliente = Joi.object({
  nombreCliente: nombreCliente.required(),
  apellidoPaternoCliente: apellidoPaternoCliente.required(),
  apellidoMatarnoCliente:apellidoMatarnoCliente.required(),
  tipoCliente:tipoCliente.required()

})
const getDataClientSchema = Joi.object({
idclientes:idclientes.required()
})

/*
const createSchema = Joi.object({


})
const getDataSchema= Joi.object({
    clienteId: clienteId.required(),
  });


  */
module.exports= {createSchemaCliente,getDataClientSchema}
