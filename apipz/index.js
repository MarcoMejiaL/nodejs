const express = require("express")
const routerApi = require("./routes")
const app = express()
const port = 3000

/* app.get("/",(req,res)=>{
    res.send("primer servidor en express")    
})
 */



app.listen(port,()=>{
    console.log("se esta corriendo")
})

routerApi(app)