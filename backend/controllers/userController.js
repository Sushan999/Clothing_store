import User from "../models/User.js";

export const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
    });
    res.json("Success");
  } catch (error) {
    res.json(error.message);
  }
};
