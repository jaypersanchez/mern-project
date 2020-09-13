const express=require('express')
const app=express()
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const cors=require('cors')

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())

const Mongourl = 'mongodb://localhost:27017/mernproject'


