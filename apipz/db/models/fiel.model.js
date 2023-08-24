
const {Model, DataTypes, Sequelize} = require('sequelize')


const FIELES_TABLE = 'fieles';

const FielesSchema ={
  idFieles:{
    allowNull:false,
  autoIncrement:true,
  field:'fieles_id',
  primaryKey:true,
  type:DataTypes.INTEGER
  },
  cliente:{
    allowNull: false,
    field:"cliente_id",
    type: DataTypes.INTEGER
  },
  contador:{
    allowNull:false,
    field: 'contador_id',
    type:DataTypes.INTEGER


  },
  fechaCaducidad:{
    allowNull:false,
    type:DataTypes.DATE
  },
  pass:{
    allowNull:false,
    type:DataTypes.INTEGER(40)

  },
  fechaAlta:{
    allowNull:false,
    field:'fecha_alta',
    type:DataTypes.DATE
  },
  fechamodicifacion:{
    allowNull:true,
    type:DataTypes.DATE
  }



}
class Fieles extends Model{
  static associate(){

  }
  static config(sequelize){
    return{
      sequelize,
      tableName:FIELES_TABLE,
      modelName:'Fieles',
      timestamps:false
    }
  }
}


module.exports = {FIELES_TABLE, FielesSchema,Fieles}

