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


let getEmpleado =async(id)=>{

    
        let empleadoDB =empleados.find (empleado => empleado.id === id )

        if(!empleadoDB){
           throw new Error (`No existe un empleado con el ID ${id}`);
        }
        else{
            return empleadoDB;
        }
    

}
let getSalario = async(empleado) =>{
    
        let salarioDB = salario.find(salario => salario.id === empleado.id );

        if (!salarioDB){
            throw new Error(`No existe un salario con el ID ${id}`);
        }
        else{
            return{
               nombre: empleado.nombre,
               salario: salarioDB.salario,
               id: empleado.id
            };
        }

    
}
let getInformacion = async(id)=>{

    let empleado = await getEmpleado(id);
    let respuesta = await getSalario(empleado);
    return `${respuesta.nombre} tiene un salario de ${respuesta.salario}`;
}
getInformacion(1).then (mensaje => console.log(mensaje))
.catch(err => console.log(err));
      
  /* 
getEmpleado(3).then(empleado =>{
    
    return getSalario(empleado);
})
.then(resp =>{
    console.log(`el salario de ${resp.nombre} es de ${resp.salario}$`);
})
.catch(err =>{
    console.log(err);
}) */