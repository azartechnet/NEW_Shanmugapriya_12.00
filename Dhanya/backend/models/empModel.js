const db = require("../config/db")

// get employee details

const getAllEmployees = (callback)=>{
    const sql = "select * from Employees";
    db.query(sql,callback)
};

//getEmployeeByID
const getEmployeeById=(id,callback)=>{
    const sql="select * from employees where emp_id=?";
    db.query(sql,[id],callback);
}
module.exports={
    getAllEmployees,
    getEmployeeById
}
