const express = require("express")
const fielesService= require("../services/fieles.service")


const router = express.Router()
const serviceFieles = new fielesService()


router.get('/',async(req,res)=>{
  const fielesList = await serviceFieles.find()
  res.json(fielesList)
})




module.exports =router
