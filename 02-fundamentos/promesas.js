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


let getEmpleado =(id)=>{

    return new Promise ((resolve, reject)=>{
        let empleadoDB =empleados.find (empleado => empleado.id === id )

        if(!empleadoDB){
            reject(`No existe un empleado con el ID ${id}`);
        }
        else{
            resolve(empleadoDB);
        }
    });

}
let getSalario = (empleado) =>{
    return new Promise ((resolve, reject)=>{
        let salarioDB = salario.find(salario => salario.id === empleado.id );

        if (!salarioDB){
            reject(`No existe un salario con el ID ${id}`);
        }
        else{
            resolve({
               nombre: empleado.nombre,
               salario: salarioDB.salario,
               id: empleado.id
            });
        }

    });
}
      
  
getEmpleado(3).then(empleado =>{
    
    return getSalario(empleado);
})
.then(resp =>{
    console.log(`el salario de ${resp.nombre} es de ${resp.salario}$`);
})
.catch(err =>{
    console.log(err);
})