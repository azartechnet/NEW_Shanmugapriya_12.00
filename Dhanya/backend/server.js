const express = require("express")
const cors = require('cors')
const app=express();
const empRoutes= require("./routes/empRoute")

app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Employee Management API running..")
})
app.use("/api/employees",empRoutes)

const PORT = 5004
app.listen(PORT,()=>{
    console.log("Server is Running...")
})