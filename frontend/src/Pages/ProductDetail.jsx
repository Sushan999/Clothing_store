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
    <div className="container  pb-6 py-10  mx-auto">
      <div className="flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="">
            <img
              src={product.productImage}
              alt={product.productName}
              className="w-[500px] h-[500px] object-cover rounded"
            />
          </div>
          <div className=" flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold mt-4">{product.productName}</h2>
            <p className="text-gray-600 mt-2">${product.productPrice}</p>
            <p className="mt-4">{product.productDescription}</p>
          </div>
        </div>
        <button className="px-8 py-1 border rounded-sm hover:bg-gray-300 ">
          Buy
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
