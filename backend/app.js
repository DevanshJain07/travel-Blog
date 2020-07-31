const express=require('express')
const mongoose=require('mongoose')
const {MONGOURI}=require('./keys')
const app=express()
const PORT=5000

//connection to mongodb
mongoose.connect(MONGOURI,
    { useNewUrlParser: true,
      useUnifiedTopology: true
    })

mongoose.connection.on("connected",()=>{
    console.log("Connected to mongodb")
})

mongoose.connection.on("error",(error)=>{
    console.log("Error: " + error)
})

app.get("/",(req,res)=>{
    res.send('Hello Folks')
})
app.get("/home",(req,res)=>{
    res.send('Home')
})

app.get("/category",(req,res)=>{
    res.send('Category')
})

app.get("/single",(req,res)=>{
    res.send('Single')
})

app.listen(PORT,()=>{
    console.log("Server started at "+ PORT)
})