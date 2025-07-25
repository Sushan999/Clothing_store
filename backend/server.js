import express from "express";
import connectDB from "./configs/db.js";
import dotenv from "dotenv";
import { registerUser } from "./controllers/userController.js";
import userRouter from "./routes/userRoutes.js";
import cors from "cors";
import productRouter from "./routes/productRoutes.js";

const app = express();

dotenv.config();
connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Working");
});

app.use("/api/user", userRouter);
app.use("/api/product", productRouter);

app.listen(3000, () => {
  console.log("Server is running");
});
