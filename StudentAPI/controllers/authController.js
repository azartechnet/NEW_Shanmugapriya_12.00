const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const {createUser,findUser}=require('../models/userModel');
const generateToken=require('../utils/generateToken');
exports.register = async (req, res) => {
    try {
        const { username, password } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        createUser(username, hashedPassword, (err, result) => {
            if (err) {
                console.log("Registration Error:", err);

                return res.status(500).json({
                    message: "Error in registration",
                    error: err.message
                });
            }

            return res.status(201).json({
                message: "User registered successfully"
            });
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message
        });
    }
};
exports.login=(req,res)=>{
    const {username,password}=req.body;
    findUser(username,async(err,result)=>{
        if(err){
            return res.status(500).json({message:"Error in login"});
        }else{
            if(result.length===0){
                return res.status(401).json({message:"Invalid username or password"});
            }else{
                const user=result[0];
                const isMatch=await bcrypt.compare(password,user.password);
                if(!isMatch){
                    return res.status(401).json({message:"Invalid username or password"});
                }else{
                    const token=generateToken(user);
                    return res.status(200).json({token});
                }
            }
        }
    });
}
