const mongoose=require('mongoose')
const {ObjectId}=mongoose.Schema.Types;

const post=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    },
    category:{
        type:ObjectId,
        ref:"Category"
    },
    numOfLikes:{
        type:Number,
        default:0
    },
    isFeatured:{
        type:Boolean,
        required:false
    }
})

mongoose.model("Post",post)