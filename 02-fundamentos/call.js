/* setTimeout( () => {
    console.log('hola mundo');
},3000 ) */


let getUsuario = (id, callback)=>{
    let usuario ={
        nombre: 'marco',
        id
    }
    if (id === 20){
        console.log(`el usuario con id ${id} no existe na la bse de datos`);
    }
    else{
    callback(usuario);
        }
}


getUsuario(20, (err,usuario)=>{

    if(err){
        return console.log(err);
    }
    else{

    
    console.log('usuario de base de datos,', usuario);
}
});