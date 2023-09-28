
const {Model, DataTypes, Sequelize} = require('sequelize')
const {CLIENTES_TABLE} = require('./clientes.model')
const {CONTADORES_TABLE} = require('./contadores.model')

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
    type: DataTypes.INTEGER,
    unique:true,
    references:{
      model: CLIENTES_TABLE,
      key:'clientes_id'
    },
    onUpdate:'CASCADE',
    onDelete: 'SET NULL'
  },
  contador:{
    allowNull:false,
    field: 'contador_id',
    type:DataTypes.INTEGER,
    references:{
      model:CONTADORES_TABLE,
      key: 'contadores_id'
    },
    onUpdate:'CASCADE',
    onDelete: 'SET NULL'


  },
  fechaCaducidad:{
    allowNull:false,
    type:DataTypes.DATE,
    field:'fecha_caducidad'
  },
  pass:{
    allowNull:false,
    type:DataTypes.STRING(40)

  },
  fechaAlta:{
    allowNull:false,
    field:'fecha_alta',
    type:DataTypes.DATE,
    defaultValue: Sequelize.NOW

  },
  fechaModificacion:{
    allowNull:true,
    field:'fecha_modificacion',
    type:DataTypes.DATE
  }



}
class Fieles extends Model{
  static associate(models){
    this.belongsTo(models.clientes,{as: 'cliente'} );
    this.hasMany(models.contadores,{as:'contador'});

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

