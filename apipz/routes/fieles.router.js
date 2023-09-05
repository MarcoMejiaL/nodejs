const express = require("express")
const fielesService= require("../services/fieles.service")
const validatorHandler = require('../middlewares/validator.handler')
const {findOneFiel,fielRegister} = require("../schemas/fieles.schema")


const router = express.Router()
const serviceFieles = new fielesService()


router.get('/',async(req,res,next)=>{
  try {
    const fielesList = await serviceFieles.find()
  res.json(fielesList)
  } catch (error) {
    next(error)
  }

})

router.get('/:idFiel', async(req,res,next)=>{
  try {
    const {idFiel} = req.params
    const oneFiel = await serviceFieles.findOne(idFiel)
    res.json(oneFiel)
  } catch (error) {
    next(error)
  }
})

router.post("/",
  validatorHandler(fielRegister, 'body'),(req,res)=>{
    const body = req.body
    const newFiel = serviceFieles.create(body)
    res.status(201).json(newFiel)
  }


)

router.patch('/:idFiel',async(req,res,next)=>{
  try {
    const {idFiel} = req.params;
    const body =req.body;
    const fielChanged = serviceContadores.update(idFiel,body)
    res.json(fielChanged)
    } catch (error) {
        next(error)
    }


})




module.exports =router
