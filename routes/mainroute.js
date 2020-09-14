const express = require('express')
const route = express.Router()
const User = require('../model/user')

//Register
route.post('/register', (req, res)=>{
    let register = new User(req.body)
    //process content of body
    register.save()
    .then((err,docs)=>{
        if(err) {
            res.send(err)
        }
        else {
            res.send('Successfully Register')
        }
    })
})

//Login
route.post('/login',(req,res)=>{
    User.findOne({email:req.body.email})
    .then(found=>{
        console.log("User exists");
        if(found.password==req.body.password) {
            res.send("1")
        }
        else {
            res.send("0")
        }
    })
    .catch(err=>res.send("User Not Found"))
})

module.exports = route