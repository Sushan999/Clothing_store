import React, { useEffect, useState } from "react";
import axios from "axios";

const Cart = () => {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setLoading(false);
          return;
        }

        const res = await axios.get("http://localhost:3000/api/user/cart", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.data.success) {
          setCart(res.data.cart);
        }
      } catch (error) {
        console.error("Error fetching cart:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  if (loading) return <div>Loading cart...</div>;
  if (!cart) return <div>Your cart is empty.</div>;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
      <ul>
        {cart.products.map((product) => (
          <li
            key={product._id}
            className="border-b py-2 flex items-center gap-4"
          >
            <img
              src={product.productImage}
              alt={product.productName}
              className="w-20 h-20 object-cover rounded"
            />
            <div>
              <h3 className="font-medium">{product.productName}</h3>
              <p>${product.productPrice}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
