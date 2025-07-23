// src/pages/Products.jsx
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Products = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchByCategory = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/product/category/${category}`
        );
        setProducts(res.data);
      } catch (err) {
        console.error("Error fetching category products:", err);
      }
    };

    fetchByCategory();
  }, [category]);

  return (
    <div className="px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6 capitalize">{category}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <Link to={`/product/${product._id}`}>
            <div
              key={product._id}
              className="border p-3 rounded shadow-sm cursor-pointer hover:shadow-md transition"
            >
              <img
                src={product.productImage}
                alt={product.productName}
                className="w-full h-60 object-cover mb-2"
              />
              <h3 className="font-medium">{product.productName}</h3>
              <p className="text-sm text-gray-600">${product.productPrice}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
