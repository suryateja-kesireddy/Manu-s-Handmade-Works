import { useState } from "react";
import { addProduct } from "./services/productService";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
    image: "",
    customizable: true,
    stock: "",
    status: "Active",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setProduct({
      ...product,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addProduct({
      ...product,
      price: Number(product.price),
      stock: Number(product.stock),
    });

    alert("Product Added Successfully");

    navigate("/admin/products");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8">

        <h1 className="text-4xl font-bold text-purple-700 mb-8">

          Add Product

        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <input
            name="name"
            placeholder="Product Name"
            value={product.name}
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
            required
          />

          <input
            name="category"
            placeholder="Category"
            value={product.category}
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
            required
          />

          <input
            name="price"
            type="number"
            placeholder="Price"
            value={product.price}
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
            required
          />

          <textarea
            rows="4"
            name="description"
            placeholder="Description"
            value={product.description}
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
          />

          <input
            name="image"
            placeholder="Image URL"
            value={product.image}
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
          />

          <input
            name="stock"
            type="number"
            placeholder="Stock"
            value={product.stock}
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
          />

          <select
            name="status"
            value={product.status}
            onChange={handleChange}
            className="w-full border rounded-xl p-4"
          >

            <option>Active</option>

            <option>Inactive</option>

          </select>

          <label className="flex items-center gap-3">

            <input
              type="checkbox"
              name="customizable"
              checked={product.customizable}
              onChange={handleChange}
            />

            Customizable Product

          </label>

          <button
            type="submit"
            className="w-full bg-linear-to-r from-purple-600 to-pink-500 text-white py-4 rounded-xl text-lg font-bold hover:scale-[1.02] transition"
          >

            Save Product

          </button>

        </form>

      </div>

    </div>
  );
}

export default AddProduct;