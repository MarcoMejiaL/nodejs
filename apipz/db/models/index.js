const {Empresas,EmpresasSchema} = require('./empresas.model')
const {Contadores,ContadoresSchema} = require('./contadores.model')
const {Clientes, ClientesSchema} = require('./clientes.model')
const {Fieles, FielesSchema} = require('./fiel.model')
const {Direccion,DireccionSchema} = require('./direccion.model')


function setupModels(sequelize){
  Empresas.init(EmpresasSchema, Empresas.config(sequelize))
  Clientes.init(ClientesSchema, Clientes.config(sequelize))
  Contadores.init(ContadoresSchema, Contadores.config(sequelize))
  Fieles.init(FielesSchema, Fieles.config(sequelize))
  Direccion.init(DireccionSchema,Direccion.config(sequelize))



  Fieles.associate(sequelize.models)
}


module.exports = setupModels
