/* eslint-disable no-unused-vars */
import axios from "axios";
import React from "react";

function ProductCard({ product, index, setProducts }) {
  const deleteProduct = async (id) => {
    try {
      const response = await axios.delete(
        `http://server-4qcbbnzkq-ahmedhany019s-projects.vercel.app/api/product/delete/${id}`
      );
      setProducts((prev) => prev.filter((product) => product._id !== id));
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  return (
    <div
      key={index}
      className="h-[300px] bg-gradient-to-r from-blue-900 to-blue-700 text-white p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
    >
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p className="text-lg font-semibold text-yellow-300">{product.price}</p>
      <p className="text-sm text-gray-300">Category: {product.category}</p>
      <div className="flex justify-between items-center">
        <span
          className={`inline-block mt-3 px-4 py-1 rounded-full text-xs uppercase tracking-wide ${
            product.stock === "Available" ? "bg-green-600" : "bg-red-600"
          }`}
        >
          {product.stock}
        </span>
        <button
          onClick={() => deleteProduct(product._id)}
          className="cursor-pointer bg-red-500 text-white px-4 py-2 rounded mt-4"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
