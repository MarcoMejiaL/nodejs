
const {Model, DataTypes, Sequelize} = require('sequelize')


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
    type:DataTypes.INTEGER
  },
  idempresa:{

    allowNull:false,
    field:'empresa_acargo',
    type:DataTypes.INTEGER
  },


}

class Clientes extends Model{
  static associate(){

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
