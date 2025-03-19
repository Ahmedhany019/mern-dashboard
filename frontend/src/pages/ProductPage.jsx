import { useEffect, useState } from "react";
import axios from "axios";
// import { Trash } from "lucide-react"; // مكتبة أيقونات حديثة

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        "http://meta.env.VITE_APP_URL+/api/product/",
        {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
          },
        }
      );
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">إدارة المنتجات</h1>
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="w-full text-center border-collapse bg-white rounded-lg">
          <thead>
            <tr className="bg-gray-800 text-white text-lg">
              <th className="p-4">Name</th>
              <th className="p-4">Price</th>
              <th className="p-4">Stock</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr
                key={product._id}
                className="border-b hover:bg-gray-100 transition-all"
              >
                <td className="p-4 text-gray-700 font-medium">
                  {product.name}
                </td>
                <td className="p-4 text-gray-600">${product.price}</td>
                <td className="p-4 text-gray-600">{product.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsPage;
