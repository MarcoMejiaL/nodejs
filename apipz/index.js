const express = require("express")
const routerApi = require("./routes")

const {logErrors,errorHandler,boomErrorHandler} = require("./middlewares/error.handler")

const app = express()
const port = 3000

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("primer servidor en express")    
})
 



app.listen(port,()=>{
    console.log(`esta funcionando en el puerto ${port}`)
})

routerApi(app)
app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)
