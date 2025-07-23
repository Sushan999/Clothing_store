import express from "express";
import {
  createProduct,
  getProducts,
  getProductsByCategory,
  getSingleProduct,
} from "../controllers/productController.js";
import protect from "../middlewares/auth.js";

const productRouter = express.Router();

productRouter.post("/create-product", protect, createProduct);

productRouter.get("/all-products", getProducts);

productRouter.get("/category/:category", getProductsByCategory);

productRouter.get("/:id", getSingleProduct);

export default productRouter;
