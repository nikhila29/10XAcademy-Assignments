const express=require("express");
const Post= require("../model/post");
const mongoose=require("mongoose");

const router=express.Router();

router.get("/",async function(req,res){
    try{
        const posts=await Post.find();
        return res.json({
            status:"success",
            data:{
                posts
            }
        })
    } catch(e){
        res.json({
            status:"failed",
            message:e.message
        })
    }
})

router.post("/", async function(req,res){
    const { title,body,image}= req.body;
    const post=await Post.create({
        title, body,image,user:req.user
    });
    res.json({
        status:"success",
        data:{
            post
        }
    })
})

router.put("/:id", async function(req,res){
    const {title}=req.body;

    console.log("Here->",req.user);
    const post=await Post.findOne({_id: req.params.id});

    if (!post){
        return res.status(404).json({
            status:"failed",
            message:"Post Not Found"
        })
    }

    console.log("post-",post.user,req.user);
    if (String(post.user)!==req.user){
        return res.status(403).json({
            status:"failed",
            message:"Forbidden"
        })
    }

    await Post.updateone({ _id:req.params.id},{
        title
    });

    res.json({
        status:"success"
    })
});

router.delete("/:id", async function(req,res){

})

module.exports=router;