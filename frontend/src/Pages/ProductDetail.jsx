import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

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

  if (!product) return <div>Loading...</div>;

  return (
    <div className="px-6 py-10 max-w-3xl mx-auto">
      <img
        src={product.productImage}
        alt={product.productName}
        className="w-full h-[400px] object-cover rounded"
      />
      <h2 className="text-2xl font-bold mt-4">{product.productName}</h2>
      <p className="text-gray-600 mt-2">${product.productPrice}</p>
      <p className="mt-4">{product.productDescription}</p>
    </div>
  );
};

export default ProductDetail;
