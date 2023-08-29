
const {Model, DataTypes, Sequelize } = require('sequelize')



const CONTADORES_TABLE = 'contadores';

const ContadoresSchema = {
  contadoresId:{
  allowNull:false,
  autoIncrement:true,
  field:'contadores_id',
  primaryKey:true,
  type:DataTypes.INTEGER
  },
  nombre:{
    allowNull:false,
    type:DataTypes.STRING(30)

  },
  apellidoPaterno:{
    allowNull:false,
    type: DataTypes.STRING(30),
    field:'apellido_paterno'
  },
  apellidoMaterno:{
    allowNull:false,
    type:DataTypes.STRING(30),
    field:'apellido_materno'


  },
  correo:{
    allowNull:false,
    type:DataTypes.STRING(30),
  },
  telefono:{
    allowNull:true,
    type:DataTypes.STRING(10),
  },
  fechaAlta:{
    allowNull:false,
    field:'fecha_alta',
    type:DataTypes.DATE,
    defaultValue: Sequelize.NOW
  },
  fechaBaja:{
    allowNull:true,
    field:'fecha_baja',
    type:DataTypes.DATE
  },
  empresa:{
    allowNull:false,
    type:DataTypes.INTEGER,

  },
  usuario:{
    allowNull:false,
    type:DataTypes.STRING(30),



  },
  pass:{
    allowNull:true,
    type:DataTypes.STRING(30)
  },
  activo:{
    allowNull:true,
    type:DataTypes.INTEGER
  }

}


class Contadores extends Model{
  static associate(){

  }
  static config(sequelize){
    return{
      sequelize,
      tableName:CONTADORES_TABLE,
      modelName:'Contadores',
      timestamps:false
    }
  }
}


module.exports = {CONTADORES_TABLE, ContadoresSchema, Contadores}
