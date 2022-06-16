const express = require('express')
const bodyParser = require ("body-parser")
const app = express();
const PORT = 600;
// const usersArray = require(`./routes/arr`)

app.use(bodyParser.json());



var usersArray = [{
    name: "mike",
    age: "16",
    occupation: "student"
},{
    name: "alex",
    age: "200",
    occupation: "student"
}];




app.get(`/`, (req,res)=>{
    res.send(usersArray)
})

app.post(`/`, (req,res)=> {
    const newUser = req.body;
    usersArray.push(newUser[0])
    res.send(usersArray)
})

app.listen(PORT, () => console.log (`server is live on port: ${PORT}`))