const express=require('express')
const app=express()
app.use(express.json())//Middleware//app.use()method
app.post("/employee",(req,res)=>{
    const {name,age}=req.body;
    console.log(name,age)
    res.send("Data Recevied..")
});
app.listen(3000)
console.log("Server is Running")