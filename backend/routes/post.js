const express=require('express')
const router=express.Router()
const mongoose=require('mongoose')
const Post=mongoose.model("Post")
const Category=mongoose.model("Category")


router.get("/posts",(req,res)=>{
    Post.find()
    .populate("category","_id name")
    .then((posts)=>{
        res.json({posts})
    })
    .catch((err)=>{
        console.log(err)
    })
})

router.get("/trending-posts",(req,res)=>{
    Post.find()
    .sort({numOfLikes: -1})
    .populate("category","_id name")
    .then((posts)=>{
        res.json({posts})
    })
    .catch((err)=>{
        console.log(err)
    })
})

router.get("/fresh-stories",(req,res)=>{
    Post.find()
    .sort({_id: -1})
    .limit(3)
    .populate("category","_id name")
    .then((posts)=>{
        res.json({posts})
    })
    .catch((err)=>{
        console.log(err)
    })
})

router.post("/new-post",(req,res)=>{
    const {title,description,imageUrl,category,numOfLikes,isFeatured}=req.body

    if(!title||!description||!imageUrl||!category||!numOfLikes||!isFeatured){
        res.json({
            err:"All fields are required"
        })
    }

    Category.findOne({_id: category.id})
    .then((cate)=>{
        const post=new Post({
            title,description,imageUrl,numOfLikes,category:cate,isFeatured
        })
        post.save()
        .then(()=>{
            res.json({message:"Post is Created"})
        })
        .catch((err)=>{
            console.log(err)
        })
    })
    .catch((err)=>{
        console.log(err)
    })

    
})

router.get("/featured-posts",(req,res)=>{
    Post.find({isFeatured:true})
    .populate("category","_id name")
    .then((posts)=>{
        res.json({posts})
    })
    .catch((err)=>{
        console.log(err)
    })
})

router.get("/posts/category/:catId",(req,res)=>{
    Post.find({category:{_id:req.params.catId}})
    .populate("category","_id name")
    .then((posts)=>{
        res.json({posts})
    })
    .catch((err)=>{
        console.log(err)
    })
})

router.get("/posts/:id", (req, res) => {
    Post.find({ _id: req.params.id })
      .populate("category", "_id name")
      .then((posts) => {
        res.json({ posts });
      })
      .catch((err) => {
        console.log(err);
      });
  });

router.get("/search/:str", (req, res) => {
    const { str } = req.params;
  
    if (!str) {
      res.json({ err: "Nothing is searched!" });
    }
  
    Post.find({ $text: { $search: str } })
      .then((post) => {
        res.json({ msg: "Found!", post });
      })
      .catch((err) => {
        console.log(err);
      });
  });


module.exports = router;
