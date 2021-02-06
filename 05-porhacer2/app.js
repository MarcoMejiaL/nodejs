require('colors');

const {mostrarMenu} =require('./helpers/mensajes')
const {pausa} =require('./helpers/mensajes')

console.clear();


const main = async()=>{

    console.log('hola mundo');
    mostrarMenu();
    pausa();
}

main();