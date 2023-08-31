const express = require("express")
const contadoresService = require("../services/contadores.service")
const validatorHandler = require('../middlewares/validator.handler')
const {createContador,findAccountandSchema}= require("../schemas/contador.schema")

const router = express.Router()

const serviceContadores = new contadoresService();


router.get("/",async(req,res,next)=>{

    try {
      const contadoreslist = await serviceContadores.find();
    res.json(contadoreslist)
    } catch (error) {
      next(error)

    }
})

router.get("/:contadoresId",
validatorHandler(findAccountandSchema,'params'),

async(req,res,next)=>{

    try {

    const {contadoresId} = req.params;
    const contadoreslist = await serviceContadores.findOne(contadoresId)
    res.send(contadoreslist)
    } catch (error) {
        next(error)

    }
})

router.post("/",
  validatorHandler(createContador, 'body'),(req,res)=>{
    const body = req.body
    const newAcountand = serviceContadores.create(body)
    res.status(201).json(newAcountand)
  }

   /*  const body = req.body;
   const newAcountand =  serviceContadores.create(body)
   res.status(201).json(newAcountand) */
)

router.patch("/:contadorId", (req,res,next)=>{
    try {
    const {contadorId} = req.params;
    const body =req.body;
    const contatoresList = serviceContadores.update(contadorId,body)
    res.json(contatoresList)
    } catch (error) {
        next(error)
    }

})

/* router.patch("/reingreso/:contadorId",
validatorHandler(findAccountandSchema,'params'),(req,res,next)=>{
  console.log(req);
  try {
  const {contadorId} = req.params;
  const body =req.body;
  const contatoresList = serviceContadores.update(contadorId,body)
  res.json(contatoresList)
  } catch (error) {
      next(error)
  }

}) */
router.delete("/:contadorId",(req,res,next)=>{
    try {
        const {contadorId} =req.params;
        const contadoreslist= serviceContadores.delete(contadorId)
        res.json(contadoreslist)

    } catch (error) {
        next(error)
    }


})


module.exports = router
