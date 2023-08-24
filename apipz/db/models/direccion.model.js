const {Model, DataTypes, Sequelize} = require('sequelize')

const DIRECCION_TABLE = 'direccion';

const DireccionSchema = {
  idDireccion:{
    allowNull:false,
    autoIncrement:true,
    field:'direccion_id',
    primaryKey:true,
    type:DataTypes.INTEGER
  },
  codigopostal:{
    allowNull:false,
    type:DataTypes.STRING(5)
  },
  tipoVialidad:{
    allowNull:true,
    field:'tipo_vialidad',
    type:DataTypes.STRING(30)
  },
  nombreVialidad:{
    allowNull:false,
    field:'nombre_vialidad',
    type:DataTypes.STRING(60)
  },
  numeroExterior:{
    allowNull:false,
    field:'numero_exterior',
    type:DataTypes.STRING(30),
  },
  numeroInterior:{

    allowNull:true,
    field:'numero_interior',
    type:DataTypes.STRING(30)

  },
  nombreColonia:{
    allowNull:false,
    field:'colonia',
    type:DataTypes.STRING(30)
  },
  nombreLocalidad:{
    allowNull:false,
    field:'localidad',
    type:DataTypes.STRING(30)
  },
  municipio:{
    allowNull:false,
    type:DataTypes.STRING(40)
  },
  estado:{
    allowNull:false,
    type:DataTypes.STRING(40)
  },
  idCliente:{
    allowNull:false,
    field:'cliente_id',
    type:DataTypes.INTEGER
  }

}

class Direccion extends Model{
  static associate(){

  }
  static config(sequelize){
    return{
      sequelize,
      tableName:DIRECCION_TABLE,
      modelName:'Direccion',
      timestamps:false
    }
  }
}


module.exports = {DIRECCION_TABLE, DireccionSchema, Direccion}
