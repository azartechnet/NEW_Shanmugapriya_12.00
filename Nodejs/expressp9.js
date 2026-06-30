const express=require('express')
const axios=require('axios')
const app=express()
const PORT=3000

//middleware
app.use(express.json())

//get user details
app.get("/user/:id",async(req,res)=>{
    try
    {
        const response=await axios.
        get(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`)
        res.json(response.data)
    }
    catch(error)
    {
        res.status(500).json({message:"User Not Found"})
    }
});

//start the server
app.listen(PORT,()=>{
    console.log("Server is Running...")
})