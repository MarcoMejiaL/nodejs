
const {Model, DataTypes, Sequelize} = require('sequelize')


const EMPRESAS_TABLE = 'empresas';

const EmpresasSchema ={
  idEmpresas:{
    allowNull:false,
  autoIncrement:true,
  field:'empresas_id',
  primaryKey:true,
  type:DataTypes.INTEGER
  },
  nombreEmpresa:{
    allowNull: false,
    field:"nombre_empresa",
    type: DataTypes.STRING('40')
  },
  activo:{
    allowNull:false,
    type:DataTypes.INTEGER


  }

}
class Empresas extends Model{
  static associate(){

  }
  static config(sequelize){
    return{
      sequelize,
      tableName:EMPRESAS_TABLE,
      modelName:'Empresas',
      timestamps:false
    }
  }
}


module.exports = {EMPRESAS_TABLE, EmpresasSchema,Empresas}

