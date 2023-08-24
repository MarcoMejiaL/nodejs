const {Empresas,EmpresasSchema} = require('./empresas.model')
const {Contadores,ContadoresSchema} = require('./contadores.model')
const {Clientes, ClientesSchema} = require('./clientes.model')
const {Fieles, FielesSchema} = require('./fiel.model')
const {Direccion,DireccionSchema} = require('./direccion.model')


function setupModels(sequelize){
  Clientes.init(ClientesSchema, Clientes.config(sequelize))
  Empresas.init(EmpresasSchema, Empresas.config(sequelize))
  Contadores.init(ContadoresSchema, Contadores.config(sequelize))
  Fieles.init(FielesSchema, Fieles.config(sequelize))
  Direccion.init(DireccionSchema,Direccion.config(sequelize))




}


module.exports = setupModels
