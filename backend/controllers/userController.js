import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const findUser = await User.findOne({ email });
    if (findUser)
      return res
        .status(400)
        .json({ success: false, message: "User already exist" });

    let hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);

    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      sucess: true,
      message: "User created Sucessfully",
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    let user = await User.findOne({ email: email });
    if (!user)
      return res
        .status(400)
        .json({ success: false, message: "Account does not exist" });

    let isPassCorrect = await bcrypt.compare(password, user.password);

    if (!isPassCorrect)
      return res
        .status(401)
        .json({ success: false, message: "Invalid email or password" });

    const token = generateToken(user._id);
    res.json({
      sucess: true,
      message: "Logged in Sucessfully",
      token: token,
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET);
};

export const getUserProfile = async (req, res) => {
  res.status(200).json({
    success: true,
    user: req.user,
  });
};
