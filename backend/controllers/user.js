import { User } from "../models/Users.js";

export const register = async (req, res) => {
  try{
    // console.log(req.body);
    // return res.json(req.body);
    const { name, email, password } = req.body;
    // const { avatar } = req.files;

    let user = await User.findOne({email});

    if(user){
      return res
        .status(400)
        .json({success : false, message : "User already exists"});
    }

    const otp = Math.floor(Math.random() * 1000000);

    user = await User.create({
      name,
      email,
      password,
      otp,
      // otp_expiry: new Date(Date.now() + process.env.OTP_EXPIRE * 60 * 1000),
    })

    return res.send(user);

    
  }
  catch(error) {
    console.log(error);
    res.send(error);
  }
}

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body)

    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Please enter all fields" });
    }

    const user = await User.findOne({ email }).select("+password");
    console.log(user);

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid Email or Password" });
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid Email or Password" });
    }

    res
    .status(200)
    .json({ success: true, message : "Login Successfull!", user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const logout = async (req, res) => {
  try {
    res
      .status(200)
      .json({ success: true, message: "Logged out successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};