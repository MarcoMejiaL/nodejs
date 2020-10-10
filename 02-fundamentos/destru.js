let nombre ={
    nombre: 'barbara',
    apellido: 'mejia',
    poder: 'comer taquitos',
    getNombre: function(){
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
};

/* console.log(nombre.getNombre()); */
 let{ nombre, apellido, poder} =marco;

 console.log(nombre, apellido, poder);