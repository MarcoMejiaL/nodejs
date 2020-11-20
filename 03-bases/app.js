const argv = require('./config/yargs.js').argv;
const {crearArchivo, listarTabla}= require('./multiplicar/multiplicar');
const color =require('colors')
let comando = argv._[0];

switch(comando){
  case 'listar':
    listarTabla(argv.base, argv.limite);
    
      break;
  case 'crear':
    crearArchivo(argv.base, argv.limite)
    .then(archivo => console.log(`archivo creado ${archivo}`))
    .catch(e=> console.log(e));
     
      break;
  default:
        console.log(`el comando ${comando} no es reconocido`);
      break;
}



/* let parametro = argv[2];
let base= parametro.split('=')[1] */



  