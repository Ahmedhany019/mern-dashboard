/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";

function Products() {
  const [products, setProducts] = useState([]);
  const [isFrom, setIsFrom] = useState(false);

  // Product Data
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("available");

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "http://server-4qcbbnzkq-ahmedhany019s-projects.vercel.app/api/product/"
      );
      setProducts(response.data);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const addProduct = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://server-4qcbbnzkq-ahmedhany019s-projects.vercel.app/api/product/add",
        {
          name,
          price,
          stock,
          category,
        },
        {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
          },
        }
      );
      fetchProducts();
      setCategory("");
      setName("");
      setPrice("");
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="m-10">
      <h1 className="text-3xl font-bold mb-4">Products</h1>
      <button
        onClick={() => setIsFrom(!isFrom)}
        className="bg-blue-500 hover:bg-blue-700 mb-4 text-white font-bold py-2 px-4 rounded-xl cursor-pointer"
      >
        Add Product
      </button>
      {isFrom ? (
        <form
          onSubmit={addProduct}
          className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md mb-4"
        >
          <h2 className="text-xl font-bold text-white mb-4">Add Product</h2>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            placeholder="Product Name"
            className="w-full p-2 mb-3 rounded bg-gray-700 text-white"
            required
          />
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="text"
            name="price"
            placeholder="Price"
            className="w-full p-2 mb-3 rounded bg-gray-700 text-white"
            required
          />
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            type="text"
            name="category"
            placeholder="Category"
            className="w-full p-2 mb-3 rounded bg-gray-700 text-white"
            required
          />
          <select
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            name="stock"
            className="w-full p-2 mb-3 rounded bg-gray-700 text-white"
          >
            <option value="Available">Available</option>
            <option value="Out of Stock">Out of Stock</option>
          </select>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded"
          >
            Add Product
          </button>
        </form>
      ) : null}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-full ">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            setProducts={setProducts}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
