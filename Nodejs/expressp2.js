const express=require('express')
const app=express()
app.use(express.json())//Middleware//app.use()method
app.post("/employee",(req,res)=>{
    res.send(req.body)
});
app.listen(3000)
console.log("Server is Running")