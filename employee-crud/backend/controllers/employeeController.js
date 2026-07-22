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
//getById
exports.getEmployee=(req,res)=>{
    const id=req.params.id;
    Employee.getEmployeeById(id,(err,results)=>{
        if(err)
        {
            return res.status(500).json({message:err.message})
        }
        if(results.length===0)
        {
            return res.status(404).json({message:"Employee Not Found"})
        }
        res.status(200).json(results[0])
    })
}
