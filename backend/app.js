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

//Models import
require("./models/category")
require("./models/post")

app.use(express.json())

//Router import
app.use(require("./routes/post"))
app.use(require("./routes/category"))


app.listen(PORT,()=>{
    console.log("Server started at "+ PORT)
})