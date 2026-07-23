const express=require('express')
const router=express.Router()
const empController= require("../controllers/empController")

router.get(
    "/",empController.getEmployees
)

router.get(
"/:id",empController.getEmployee
)

module.exports=router;