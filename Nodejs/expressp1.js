const express=require('express');
const app=express();
app.get("/employee",(req,res)=>{
    res.send("Get all employee")
})
app.post("/employee",(req,res)=>{
    res.send("Employee Added")
})
//PUT
app.put("/employee/:id",(req,res)=>{
    res.send("Employee updated")
})
//Patch
app.patch('/employee/:id',(req,res)=>{
    res.send('Employee Salary updated')
})
app.delete('/employee/:id',(req,res)=>{
    res.send('Employee Delete')
})
app.listen(3000)
console.log('Server Running...')