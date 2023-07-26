import express from "express";
import { Post } from "../models/Posts.js";

const router = express.Router();

router.route("/")
  .post(async (req, res) => {
    try {
      console.log(req.body);
      const { userId, description, tags, mediaType, mediaUrl } = req.body;
      
      const post = await Post.create({ userId, description, tags, mediaType, mediaUrl })
      if(post){
        res.json(post);
      }
      else res.json("Error");
      // res.json({test: "test"})
      
    } catch (error) {
      console.log(error);  
      res.send(error);
    }
  });

export default router;