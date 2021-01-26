const descripcion ={
    demand:true,
        alias:'d',
        desc:"'Descripcion de la tarea"
}
const completado ={
    deafult: true,
            alias: 'c',
            desc: "completado"
}

    const argv = require('yargs')
    .command('crear','crear un elemento',{
    descripcion
    })
    .command('actualizar','actualiza una tarea',{
        descripcion,
        completado
    })
    .command('borrar','borrado de una tarea',{
        descripcion
    })
    .help().argv;


    module.exports={
        argv
    }