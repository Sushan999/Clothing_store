import express from "express";
import protect from "../middlewares/auth.js";
import { addToCart, getCart } from "../controllers/cartController.js";

const cartRouter = express();

cartRouter.post("/cart/add", protect, addToCart);
cartRouter.get("/cart", protect, getCart);

export default cartRouter;
