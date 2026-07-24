const Emp = require("../models/empModel")
// get all details
exports.getEmployees=(req,res)=>{
    Emp.getAllEmployees((err,results)=>{
        if(err){
            return res.status(500).json({message:err.message})

        }
        res.status(200).json(results)
    })
}

//get details ById
exports.getEmployee=(req,res)=>{
    const id=req.params.id;
    Emp.getEmployeeById(id,(err,results)=>{
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

// create a employee
exports.createEmployee = (req,res)=>{
    const employee = req.body;
    Emp.createEmployee(employee,(err,results)=>{
        if(err){
            return res.status(500).json({message:err.message})
        }
        res.status(201).json({message:"Employee created..",emp_id:results.insertId});
    });
}



// UPDATE
exports.updateEmployee = (req, res) => {

    const id = req.params.id;

    const employee = req.body;

    Emp.updateEmployee(id, employee, (err, result) => {

        if (err) {
            return res.status(500).json({
                message: err.message
            });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Employee not found"
            });
        }

        res.status(200).json({
            message: "Employee updated successfully"
        });

    });

};


// DELETE
exports.deleteEmployee = (req, res) => {

    const id = req.params.id;

    Emp.deleteEmployee(id, (err, result) => {

        if (err) {
            return res.status(500).json({
                message: err.message
            });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Employee not found"
            });
        }

        res.status(200).json({
            message: "Employee deleted successfully"
        });

    });

};