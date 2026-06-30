const exp=require('express')
const app=exp()
const PORT=3000;
const r1=exp.Router()
const r2=exp.Router()
const r3=exp.Router()

r1.get("/user",function(req,res){
    res.send("User Routes")
})
r2.get("/product",function(req,res){
    res.send("ProductRoute")
})
r3.get("/order",function(req,res){
    res.send("Order Routes")
})
app.use("/",r1);
app.use("/",r2);
app.use("/",r3);
app.listen(PORT,()=>{
    console.log("Server is Running..")
})
