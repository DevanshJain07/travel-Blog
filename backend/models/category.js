const mongoose=require('mongoose')

const category=mongoose.Schema({
    name:{
        type:String,
        required:true
    }
},
{Timestamp:true
})

mongoose.model("Category",category)