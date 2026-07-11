const express=require('express');
const router=express.Router();
const Student=require('../models/Student');
router.put("/students/:id", updateStudent);
module.exports=router;