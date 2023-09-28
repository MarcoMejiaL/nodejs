
const {Model, DataTypes, Sequelize} = require('sequelize')

const {CONTADORES_TABLE, ContadoresSchema, Contadores} = require('./contadores.model')
const {Empresas,EmpresasSchema,EMPRESAS_TABLE} = require('./empresas.model')

const CLIENTES_TABLE = 'clientes';

const ClientesSchema = {
  idclientes:{
  allowNull:false,
  autoIncrement:true,
  field:'clientes_id',
  primaryKey:true,
  type:DataTypes.INTEGER
  },
  nombreCliente:{
    allowNull:false,
    field:'nombre_cliente',
    type:DataTypes.STRING(30),


  },
  apellidoPaternoCliente:{
    allowNull:false,
    field:'apellido_paternoc',
    type:DataTypes.STRING(30),
  },
  apellidoMatarnoCliente:{
    allowNull:false,
    field: 'apellido_maternoc',
    type:DataTypes.STRING(30),
  },
  correo:{
    allowNull:true,
    type:DataTypes.STRING(30),

  },
  telefono:{
    allowNull:true,
    type:DataTypes.STRING(10),

  },
  direccion:{

    allowNull:false,
    type:DataTypes.INTEGER
  },
  tipoCliente:{
    allowNull:false,
    type:DataTypes.INTEGER,

  },
  activo:{
    allowNull:false,
    type:DataTypes.INTEGER
  },
  fechaRegistro:{
    allowNull:false,
    field:'fecha_alta',
    type:DataTypes.DATE,
    defaultValue: Sequelize.NOW
  },
  fechaActualizacion:{
    allowNull:false,
    field:'fecha_modificacion',
    type:DataTypes.DATE,
    defaultValue: Sequelize.NOW
  },
  fechaBaja:{
    allowNull:false,
    field:'fecha_baja',
    type:DataTypes.DATE
  },
  idcontadores:{

    allowNull:false,
    field:'contador_acargo',
    type:DataTypes.INTEGER,
    references:{
      model:CONTADORES_TABLE,
      key: 'contadores_id'
    },
    onUpdate:'CASCADE',
    onDelete: 'SET NULL'


  },

  idempresa:{

    allowNull:false,
    field:'empresa_acargo',
    type:DataTypes.INTEGER,
    references:{
      model:EMPRESAS_TABLE,
      key: 'empresas_id'
    },
    onUpdate:'CASCADE',
    onDelete: 'SET NULL'



  },


}

class Clientes extends Model{
  static associate(models){
    this.belongsTo(models.empresas,{as:'empresa'})
    this.belongsTo(models.contadores,{as:'contador'});

  }
  static config(sequelize){
    return{
      sequelize,
      tableName:CLIENTES_TABLE,
      modelName:'Clientes',
      timestamps:false,


    }
  }
}


module.exports = {CLIENTES_TABLE, ClientesSchema, Clientes}
