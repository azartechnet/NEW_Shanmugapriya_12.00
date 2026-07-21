const mysql=require('mysql2');
const db=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"root",
    database:"companydb"
});
db.getConnection((err,connection)=>{
    if(err)
    {
        console.log("MySQL Failed...")
    }
    else
    {
        console.log("MySQL Connected..")
        connection.release();
    }
});
module.exports=db;