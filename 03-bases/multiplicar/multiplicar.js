const fs = require('fs');
const color =require('colors');
let listarTabla = ((base, limite) =>{
    console.log(`tabla de multilicar del ${base}`.green)
     for(let i =1; i<=limite; i++){
        console.log(`${base} x ${i} =${i*base} `);
        }
       
    
});




const { resolve } = require('path');


let crearArchivo =(base, limite)=>{
    return new Promise ((resolve, reject)=>{
        if(!Number(base)){
            reject(`el valor introducido ${base } no es un numero`);
            return;
        }
        let data ='';
        for(let a=1; a<=limite; a++ ){
            data +=`${base} x ${a} = ${base*a}\n`;
        }
        
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err)
            else
            resolve (`tabla-${base}-al-${limite}.txt`.red);
          });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
    
}