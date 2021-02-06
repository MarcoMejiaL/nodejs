require('colors');

const mostrarMenu= () =>{
    console.clear();
    console.log('===================='.green);
    console.log('seleccione una opcion')
    console.log('====================\n'.green);

    console.log(`${`1.`.green} crar una tarea`);
    console.log(`${`2.`.green} listar tareas`);
    console.log(`${`3.`.green} listar tareas completadas`);
    console.log(`${`4.`.green} listar tareas pendientes`);
    console.log(`${`5.`.green} completar tarea`);
    console.log(`${`6.`.green} borrar tarea`);
    console.log(`${`0.`.green} Salir`);

    const readLine= require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    readLine.question('Seleccion una opcion: ',(opt)=>{
        
        readLine.close();
    });
}

const pausa =() =>{
    const readLine= require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    readLine.question(`\nPresione ${`ENTER`.green} para continuar\n`,(opt)=>{
        
        readLine.close();
    });

}

module.exports = {
    mostrarMenu,
    pausa
}