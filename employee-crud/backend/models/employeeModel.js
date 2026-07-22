const db=require("../config/db");
//Get all employees
const getAllEmployees=(callback)=>{
    const sql="select * from employees";
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