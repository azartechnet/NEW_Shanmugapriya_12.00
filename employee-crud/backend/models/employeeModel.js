const db=require("../config/db");
//Get all employees
const getAllEmployees=(callback)=>{
    const sql="select * from employees";
    db.query(sql,callback)
};
module.exports={
    getAllEmployees
}