const opt ={
    base:{
    demand:true, 
    alias:'b'},
    limite:{
      alias:'l',
      default:10
    }

}
const argv= require('yargs')
.command('listar','imprime',opt)
.command('crear','crea',opt)
.help().argv;



  module.exports={
      argv
  }