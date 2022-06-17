const express = require('express')
const { v4: uuidv4 } = require(`uuid`);

const router = express.Router();

const usersList = []


router.get("/", (req,res)=>
{
    res.send(usersList)
})

router.post("/", (req, res)=>{
    const user = req.body

    usersList.push( {...user, id:uuidv4()} )

    res.send(`user: ${req.body.name } was added`)
})

router.get(`/:id`, (req, res)=> {
    const { id } = req.params;
    const foundUser = usersList.find((user) => user.id ===id);
    res.send(foundUser)
    console.log(usersList.id)
})



module.exports = router;

