const express = require('express')
const route = express.Router()
const User = require('../model/user')
const Blog = require('../model/postmodel')


//Post retrieval
route.get('/posts', (req, res)=>{
   Blog.find((err,data)=>{
       if(err) {
           res.json(err)
       }
       else {
           res.json(data)
       }
   })
})

//Adding Post
route.post('/addpost', (req, res)=>{
    let adding = new Blog(req.body)
    adding.save((err,docs)=>{
        if(err) {
            res.json('Try again')
        }
        else {
            res.json('Post Added')
        }
    })
})

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