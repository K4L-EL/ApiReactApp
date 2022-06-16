const express = require('express')
const testObj = require("./arr.js")
const userRouter = express.Router();



const arr2 =[{
    name: "mike",
    age: "16",
    occupation: "student"
},{
    name: "alex",
    age: "20",
    occupation: "student"
}];


userRouter.get("/", (req,res) =>{
    res.send(arr2)
});


userRouter.post("/", (req,res)=>{
    const uuser = req.body;
    arr2.push(uuser);    
res.send})



module.exports = {userRouter}

