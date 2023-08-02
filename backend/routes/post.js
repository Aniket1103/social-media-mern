import express from "express";
import { Post } from "../models/Posts.js";
import cloudinary from "cloudinary";
import fs from "fs";
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();

router.use(isAuthenticated);

router.route("/")
  .post(async (req, res) => {
    try {
      // console.log(req.body, req.files);
      // return res.send(req.files);
      const { userId, description, tags, mediaType, location } = req.body;
      let { mediaUrl } = req.body;

      if(!mediaUrl){
        const postMedia = req.files.postMedia.tempFilePath;

        const mycloud = await cloudinary.v2.uploader.upload(postMedia);

        console.log(mycloud);
        mediaUrl = mycloud.secure_url;

        fs.rmSync("./tmp", { recursive: true });
      }
      
      const post = await Post.create({ userId, description, tags, mediaType, mediaUrl, location })
      if(post){
        res.json(post);
      }
      else res.json("Error");
      // res.json({test: "test"})
      
    } catch (error) {
      console.log(error);  
      res.send(error);
    }
  })
  .get(async (req, res) => {
    try {
      const posts = await Post.find();
      console.log(posts.length);
  
      if(!posts){
        res
          .status(404)
          .send("No Posts available");
      }
      return res.status(200).json({"posts" : posts});
      
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  })

router.route("/:type")
.get(async (req, res) => {
  const { type } = req.params;
  
  try {
    const photoPosts = await Post.find({mediaType: type})
      .populate('userId') // Populating userId
      .populate('likes') // Populating likes array with users
    
    if(!photoPosts){
      return res.status(404).json({ error : "photoPosts not found."});
    }

    return res.status(200).json(photoPosts);
    
  } catch (error) {
    console.error('Error fetching photoPosts:', error);
    res.status(500).json({ error: 'Failed to fetch photoPosts.'});
  }
})

router.route("/:postId/like")
  .post(async (req, res) => {
    const { postId } = req.params;
    const { userId } = req.body;

    try {
      // Find the post by its ID
      const post = await Post.findById(postId);

      if (!post) {
        return res.status(404).json({ error: 'Post not found.' });
      }

      // Check if the user has already liked the post
      const userAlreadyLiked = post.likes.includes(userId);

      if (userAlreadyLiked) {
        // If the user already liked the post, remove their userId from the likes array to "unlike" the post
        post.likes.pull(userId);
      } else {
        // If the user has not liked the post, add their userId to the likes array to "like" the post
        post.likes.push(userId);
      }

      // Save the updated post to the database
      await post.save();

      res.status(200).json(post);
    } catch (error) {
      console.error('Error handling like action:', error);
      res.status(500).json({ error: 'Failed to handle like action.' });
    }
  })
  .get(async (req, res) => {
    const { postId } = req.params;
    
    try {
      const likes = await Post.findById(postId).populate("likes");
      
      if(!likes){
        return res.status(404).json({ error : "Likes not found."});
      }

      return res.status(200).json(likes);
      
    } catch (error) {
      console.error('Error fetching Likes:', error);
      res.status(500).json({ error: 'Failed to fetch Likes.'});
    }
  })
  

export default router;