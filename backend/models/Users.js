import mongoose from "mongoose";

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

export const User = mongoose.model("User", userSchema);