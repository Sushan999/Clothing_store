import express from "express";
import {
  createProduct,
  getProducts,
  getProductsByCategory,
} from "../controllers/productController.js";
import protect from "../middlewares/auth.js";

const productRouter = express.Router();

productRouter.post("/create-product", protect, createProduct);

productRouter.get("/all-products", getProducts);

productRouter.get("/category/:category", getProductsByCategory);

export default productRouter;
