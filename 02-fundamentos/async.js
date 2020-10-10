/* 




*/
/* let getNombre = async()=>{

    return 'marco';
};

 */

const { reject } = require("async");

 let getNombre=()=>{
     return new Promise((resolve, reject) =>{
         setTimeout(()=>{
            resolve("marco");
         },3000)
         

         
     });
 }





getNombre().then(nombre =>{
    console.log(nombre);
})
.catch(e=>{
    console.log("error",e);
})

console.log(getNombre());
