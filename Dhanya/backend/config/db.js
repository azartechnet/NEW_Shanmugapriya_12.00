const mysql = require('mysql2');
const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"root",
    database:"companydb"
});

db.getConnection((err,connection)=>{
    if(err)
    {
        console.log("Mysql failed...")
    }
    else{
        console.log("MySql connected..")
        connection.release();
    }
});

module.exports = db;