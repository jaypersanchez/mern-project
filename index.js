const express=require('express')
const app=express()
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const cors=require('cors')
const path = require('path')
const MainRouter = require('./routes/mainroute')
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())
app.use('/', MainRouter)

const Mongourl = 'mongodb://localhost:27017/mern'
mongoose.connect(Mongourl,{useNewUrlParser:true, useUnifiedTopology:true}, (err)=>{
    if(!err) {
        console.log('Connected to MongoDB MernProject Collection')
    }
    else {
        console.log('MongoDB connection failed')
    }
})

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.get('*', (req,res)=>{
        res.sendFile(path.resolve(__dirname,'client', 'build','index.html'))
    })
}

app.listen(PORT,()=>console.log(`Server Running on port ${PORT}`));