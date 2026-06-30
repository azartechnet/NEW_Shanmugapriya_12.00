const express=require('express')
const app=express()
const PORT=3000
const router=express.Router()
//add route
router.get("/add",(req,res)=>{
    const num1=Number(req.query.num1)
    const num2=Number(req.query.num2)
    if(isNaN(num1)||isNaN(num2))
    {
         return res.send("Please enter valid Number")
    }
    const result=num1+num2;
    res.send("Result="+result)
})
app.use("/",router);
app.listen(PORT,()=>{
    console.log("Server is Running...")
})