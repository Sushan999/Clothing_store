import express from "express";
import connectDB from "./configs/db.js";
import dotenv from "dotenv";
import { registerUser } from "./controllers/userController.js";

const app = express();

dotenv.config();
connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Working");
});

app.use("/api/user", registerUser);

app.listen(3000, () => {
  console.log("Server is running");
});
