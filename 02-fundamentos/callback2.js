let empleados= [{
    id: 1,
    nombre: 'marco'
},{
    id: 2,
    nombre: 'barbara'
},{
    id: 3,
    nombre: 'elizabeth'
}];

let salario=[{
    id: 1,
    salario: 3000
},{
    id: 2,
    salario: 4000
}];



let getEmpleado =(id, callback) =>{
    let empleadoDB = empleados.find(empleado => empleado.id === id)
    
    if(!empleadoDB){
        callback(`No existe un empleado con el ID ${id}`);

    }else{
        callback(null, empleadoDB)
    }

}

let getSalario = (id, callback) =>{
    let salarioDB = salario.find (salario => salario.id ===id )

    if (!salarioDB){
        callback(`No existe un salario con el ID ${id}`);
    }
    else{
        callback(null, salarioDB);
    }
}

getEmpleado(1, (err, empleado)=>{

    if(err){
        console.log(err);
    }
    else{
    console.log(`EL empleado ${empleado.nombre} tiene un salario de ${salario.salario} `);
}
});

getSalario (4, (err, salario)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(salario);
    }
})