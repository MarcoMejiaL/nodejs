
const fs = require('fs');
const { describe } = require('yargs');








let listadoPorHacer=[];

const guardarDB = () =>{

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('dp/data.json',data, (err)=>{
        if (err) throw new Error('paquiito');
    });
}

const cargarDb = () =>{
    try {
        listadoPorHacer = require('../dp/data.json');
    } catch (error) {
        let listadoPorHacer=[];
    }
    
    
}

const crear =(descripcion)=>{

        cargarDb();
        let porHacer={
            descripcion,
            completado: false
        };

        listadoPorHacer.push(porHacer);
        guardarDB();
        return porHacer;
}

const getListado =()=>{
    cargarDb();
    return listadoPorHacer;
}

const actualizar= (descripcion, completado =true)=>{
    cargarDb();
    let index = listadoPorHacer.findIndex(tarea=>{
        return tarea.descripcion === descripcion;
    })
    if(index >=0){
        listadoPorHacer[index].completado =completado;
        guardarDB();
        return true;
    } else{
        return false;
    }
}

const borrar =(descripcion)=>{
    cargarDb();

    let nuevoListado = listadoPorHacer.filter(tarea=>{
        return tarea.descripcion !== descripcion;
    });
    if(listadoPorHacer.length === nuevoListado.length){
        return false;
    } else{
        listadoPorHacer =nuevoListado;
        guardarDB()
        return true;
    }

}

module.exports={
    crear,
    getListado,
    actualizar,
    borrar
}