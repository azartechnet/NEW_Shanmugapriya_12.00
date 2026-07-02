require("dotenv").config();
const express=require("express");
const cors=require("cors");

 const authRoutes=require("./routes/authRoutes");
// const studentRoutes=require("./routes/studentRoutes");

const app=express();
app.use(cors());
app.use(express.json());

app.use("/api",authRoutes);
//app.use("/api",studentRoutes);

app.listen(process.env.PORT,()=>{
    console.log("Server is Running..");
}
);
