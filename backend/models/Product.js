import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    productName: { type: String },
    productPrice: { type: Number },
    productDescription: { type: String },
    productCategory: { type: String },
    productImage: { type: String },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
