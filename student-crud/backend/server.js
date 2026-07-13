const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const Student = require("./models/Student");
require("dotenv").config();

const app=express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("MongoDB connected"))
.catch((err)=>console.log(err));

//app.use("/api/students",require("./routes/studentRoutes"));

app.get("/",(req,res)=>{
    res.send("API is running");
});

/*app.post("/students",(req,res)=>{
    console.log(req.body);
    res.json({
        message:"POST API is working",data:req.body
    })
})*/

//Insert Data in db

app.post("/students",async(req,res)=>{
    try
    {
        const student=new Student(req.body);
        await student.save();
        res.status(201).json({message:"Student Inserted..",data:student});
    }
    catch(error)
    {
        res.status(500).json({message:error.message})
    }
})

//Get All Students
app.get("/students",async(req,res)=>{
    try
    {
        const students=await Student.find();
        res.status(200).json(students);
    }
    catch(error)
    {
        res.status(500).json({message:error.message})
    }
})
//Delete 
app.delete("/students/:id",async(req,res)=>{
    try
    {
        const student=await Student.findByIdAndDelete(req.params.id);
        if(!student)
        {
            return res.status(404).json({message:"Student Not Found"})
        }
         res.status(200).json({message:"Student deleted Sucess!!!"})
    }catch(error)
    {
        res.status(500).json({message:error.message})
    }
   
})-

//Updated Student

app.put("/students/:id",async(req,res)=>{
    try
    {
        const student=await Student.findByIdAndUpdate(req.params.id,req.body,{
            new:true,//Return updated document
            runValidators:true//validate input
        })
        if(!student)
        {
            return res.status(404).json({message:"Student not found"})
        }
         res.status(200).json({message:"Updated  Sucess!!!"})
    }
    catch(error)
    {
         res.status(500).json({message:error.message})
    }
})


app.listen(5000,()=>{
    console.log("Server is running on port 5000");
});