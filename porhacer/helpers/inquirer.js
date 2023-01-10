const nose = require('inquirer');
require('colors');

const menuOpts =[
    {
        type:'list',
        name:'opcion',
        message:'¿Que desea hacer',
        choices:['opt1', 'opt2', 'opt3']
    }
]

const inquirerMenu =async()=>{
    console.clear();
    console.log('======================='.green);
    console.log(' Seleccione una opcion'.green);
    console.log('=======================\n'.green );

    const opt = await nose.prompt(preguntas)

    return opt
}


module.exports ={
    inquirerMenu
}