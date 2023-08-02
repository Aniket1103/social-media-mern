import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true,
    minlength: [8, "Password must be at least 8 characters long"],
  },

  avatar: {
    public_id: String,
    url: String,
  },

  createdAt: {
    type: Date,
    defalult: Date.now,
  },

  posts: [
    {
      title: String,
      description: String,
      createdAt: Date,
    }
  ],

  otp: Number,
  otp_expiry: Date,
});

userSchema.methods.comparePassword = async function (password) {
  return password === this.password;
};

userSchema.methods.getJWTToken = function () {
  return jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000,
  });
};

export const User = mongoose.model("User", userSchema);