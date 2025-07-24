import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/product/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.error("Failed to load product:", err);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setMessage("You must be logged in to add to cart.");
        return;
      }

      const res = await axios.post(
        "http://localhost:3000/api/user/cart/add",
        { productId: product._id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.data.success) {
        setMessage("Product added to cart!");
      } else {
        setMessage("Failed to add product to cart.");
      }
    } catch (error) {
      console.error("Add to cart failed:", error);
      setMessage("Something went wrong.");
    }
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container pb-6 py-10 mx-auto">
      <div className="flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <img
              src={product.productImage}
              alt={product.productName}
              className="w-[500px] h-[500px] object-cover rounded"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold mt-4">{product.productName}</h2>
            <p className="text-gray-600 mt-2">${product.productPrice}</p>
            <p className="mt-4">{product.productDescription}</p>
          </div>
        </div>
        <button
          onClick={handleAddToCart}
          className="mt-6 px-8 py-2 border rounded-sm hover:bg-gray-300"
        >
          Add to Cart
        </button>
        {message && <p className="mt-4 text-sm text-green-600">{message}</p>}
      </div>
    </div>
  );
};

export default ProductDetail;
