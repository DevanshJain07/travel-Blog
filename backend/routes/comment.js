const express=require('express')
const router=express.Router()
const mongoose=require('mongoose')
const Post=mongoose.model("Post")
const Comment=mongoose.model("Comment")


router.get("/comments",(req,res)=>{
    Comment.find()
    .populate("post","_id title")
    .then((commments)=>{
        res.json({commments})
    })
    .catch((err)=>{
        console.log(err)
    })
})

router.post("/new-comment",(req,res)=>{
    const {body,post}=req.body

    if(!body||!post){
        res.json({
            err:"All fields are required"
        })
    }

    Post.findOne({_id: post._id})
    .then((post_found)=>{
        const comment=new Comment({
            body,post:post_found
        })
        comment.save()
        .then(()=>{
            res.json({message:"Comment Created"})
        })
        .catch((err)=>{
            console.log(err)
        })
    })
    .catch((err)=>{
        console.log(err)
    })

    
})

router.get("/comments/post/:postId",(req,res)=>{
    Comment.find({post:{_id:req.params.postId}})
    .populate("post","_id title")
    .then((posts)=>{
        res.json({posts})
    })
    .catch((err)=>{
        console.log(err)
    })
})

module.exports = router;
