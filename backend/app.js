import express from "express";
import userRoutes from "./routes/user.js"
import postsRoutes from "./routes/post.js"

export const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended : true }));

app.use("/api/v1", userRoutes);
app.use("/api/v1/posts", postsRoutes);