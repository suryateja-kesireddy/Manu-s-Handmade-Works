import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getProducts,
  deleteProduct,
} from "./services/productService";

function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this product?"
    );

    if (!confirmDelete) return;

    await deleteProduct(id);

    loadProducts();
  };

  const filteredProducts = products.filter((product) =>
    product.name
      ?.toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="p-8 bg-gray-100 min-h-screen">

      <div className="flex justify-between items-center mb-8">

        <div>

          <h1 className="text-4xl font-bold">
            Products
          </h1>

          <p className="text-gray-500 mt-2">
            Manage your handmade collection
          </p>

        </div>

        <Link
  to="/admin/products/add"
  className="bg-linear-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
>
  + Add Product
</Link>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-5 mb-6">

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="w-full border rounded-xl p-4"
        />

      </div>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

        <table className="w-full">

          <thead className="bg-linear-to-r from-purple-600 to-pink-500 text-white">

            <tr>

              <th className="p-4">Image</th>

              <th>Name</th>

              <th>Category</th>

              <th>Price</th>

              <th>Stock</th>

              <th>Status</th>

              <th>Actions</th>

            </tr>

          </thead>

          <tbody>

            {filteredProducts.map((product) => (

              <tr
                key={product.id}
                className="border-b hover:bg-purple-50"
              >

                <td className="p-4">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 rounded-xl object-cover"
                  />

                </td>

                <td className="font-semibold">

                  {product.name}

                </td>

                <td>

                  {product.category}

                </td>

                <td className="font-bold text-purple-600">

                  ₹{product.price}

                </td>

                <td>

                  {product.stock}

                </td>

                <td>

                  <span
                    className={`px-3 py-1 rounded-full text-sm

                    ${
                      product.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }

                    `}
                  >

                    {product.status}

                  </span>

                </td>

                <td>

                  <div className="flex gap-2 justify-center">

                    <button
                      className="bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() =>
                        handleDelete(product.id)
                      }
                      className="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600"
                    >
                      Delete
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Products;