import Cart from "../models/Cart.js";

export const addToCart = async (req, res) => {
  const userId = req.user.id;
  const { productId } = req.body;

  try {
    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
      cart = new Cart({
        user: userId,
        products: [productId],
      });
    } else {
      if (!cart.products.includes(productId)) {
        cart.products.push(productId);
      }
    }

    await cart.save();
    res.status(200).json({ success: true, cart });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getCart = async (req, res) => {
  const userId = req.user.id; // from auth middleware

  try {
    // Populate products details inside cart.products
    const cart = await Cart.findOne({ user: userId }).populate("products");

    if (!cart) {
      return res.status(404).json({ success: false, message: "Cart is empty" });
    }

    res.status(200).json({ success: true, cart });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
