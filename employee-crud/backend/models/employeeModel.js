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

//create employees
const createEmployee=(employee,callback)=>{
    const sql='insert into employees(emp_name,email,department,salary)values(?,?,?,?)';
    const values=[
        employee.emp_name,
        employee.email,
        employee.department,
        employee.salary
    ];
    db.query(sql,values,callback)
}
// Update employee
const updateEmployee = (id, employee, callback) => {

    const sql = `
        UPDATE employees
        SET emp_name = ?,
            email = ?,
            department = ?,
            salary = ?
        WHERE emp_id = ?
    `;

    const values = [
        employee.emp_name,
        employee.email,
        employee.department,
        employee.salary,
        id
    ];

    db.query(sql, values, callback);

};

// Delete employee
const deleteEmployee = (id, callback) => {

    const sql = `
        DELETE FROM employees
        WHERE emp_id = ?
    `;

    db.query(sql, [id], callback);

};

module.exports = {
    getAllEmployees,
    getEmployeeById,
    createEmployee,
    updateEmployee,
    deleteEmployee
};