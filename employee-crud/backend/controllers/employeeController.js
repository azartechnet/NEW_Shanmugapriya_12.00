const Employee=require("../models/employeeModel")
//Get All
exports.getEmployees=(req,res)=>{
    Employee.getAllEmployees((err,results)=>{
        if(err){
            return res.status(500).json({message:err.message})
        }
        res.status(200).json(results)
    })
}
