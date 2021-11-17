const bodyParser= require("body-parser");
const express = require("express");
const mongoose=require("mongoose");
const app = express();
const indexRoutes=require("./routes/index");
const postRoutes=require("jsonwebtoken");

mongoose.connect("mongodb://localhost/instaclone");


app.use("/posts", function(req,res,next){
    try {
        const token=req.headers.authorization?.split(" ")[1];
        console.log(token);
        if (!token){
            return res.status(401).json({
                status:"failed",
                message:"Not Authenticated"
            });

        }

        const decoded=jwt.verify(token,process.env.SECRET);

        if (!decoded){
            return res.status(401).json({
                status:"failed",
                message:"Invalid Token"
            })
        }
        req.user=decoded.data
    }catch(e){
        return res.status(500).json({
            status:"failed",
            message:e.message
        })
    }
    next();

})

app.use(bodyParser());
app.use("/", indexRoutes);
app.use("/posts", postRoutes);


app.listen(4000, () => console.log("server listening on port 4000"));