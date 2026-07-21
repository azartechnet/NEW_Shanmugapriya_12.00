const express=require("express")
const cors=require("cors")
const app=express();
const employeeRoutes=require("./routes/employeeRoutes")

app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Employee Management API Running..")
})
app.use("/api/employees",employeeRoutes)

const PORT=5000
app.listen(PORT,()=>{
    console.log("Server is Running...")
})