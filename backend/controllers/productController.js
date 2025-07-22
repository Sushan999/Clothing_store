import Product from "../models/Product.js";

export const createProduct = async (req, res) => {
  try {
    const {
      productName,
      productPrice,
      productDescription,
      productCategory,
      productImage,
    } = req.body;

    const product = await Product.create({
      productName,
      productPrice,
      productDescription,
      productCategory,
      productImage,
    });
    res
      .status(200)
      .json({ success: true, message: "Created Product", product });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      success: true,
      products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getProductsByCategory = async (req, res) => {
  const { category } = req.params;

  try {
    const products = await Product.find({ productCategory: category });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
};
