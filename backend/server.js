import { app } from "./app.js";
import { config } from "dotenv";
import { connectDatabase } from "./config/database.js";
import mongoose from "mongoose";

config({
  path : "./config/config.env"
})

connectDatabase();

// mongoose.connect("mongodb://127.0.0.1:27017/social-media-dev")
// .then(resp => {
//   console.log("mongodb Connected")
//   console.log(resp.connection.host);
// })
// .catch(error => {
//   console.log(error);
// })

app.listen(process.env.PORT, ()=> {
  console.log("Server Running on Port " + process.env.PORT);
})