import express from "express";
import userRoutes from "./routes/user.js"
import postsRoutes from "./routes/post.js"
import fileUpload from "express-fileupload";
import cors from "cors";
import cookieParser from "cookie-parser";

export const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use(cookieParser());
app.use(
  fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
    useTempFiles: true,
  })
);
app.use(cors());

app.use("/api/v1", userRoutes);
app.use("/api/v1/posts", postsRoutes);