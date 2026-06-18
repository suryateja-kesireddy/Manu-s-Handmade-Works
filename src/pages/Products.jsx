import { useState } from "react";
import { Link } from "react-router-dom";
import products from "../data/products";

function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    "Bangles",
    "Chains",
    "Earrings",
    "Hair Clips",
    "Rings",
    "Jewellery",
    "Bracelets",
    "Key Chains",
    "Nose Pins",
    "Neck Piece",
  ];

  const addToCart = (product) => {
    const cart =
      JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = cart.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({
        ...product,
        quantity: 1,
      });
    }

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

    window.dispatchEvent(new Event("storage"));

    alert(`${product.name} added to cart`);
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" ||
      product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      {/* Heading */}
      <h1 className="text-4xl font-bold text-center text-purple-700 mb-10">
        Our Products
      </h1>

      {/* Search */}
      <input
        type="text"
        placeholder="🔍 Search jewellery..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-4 rounded-2xl border-2 border-purple-200 focus:border-purple-500 outline-none mb-6"
      />

      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 mb-10">

        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded-full transition ${
              category === cat
                ? "bg-purple-600 text-white"
                : "bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}

      </div>

      {/* Products Grid */}
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">

        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
          >

            {/* Product Image */}
            <Link to={`/product/${product.id}`}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-60 object-cover"
              />
            </Link>

            <div className="p-4">

              {/* Product Name */}
              <Link to={`/product/${product.id}`}>
                <h2 className="font-bold text-lg hover:text-purple-600">
                  {product.name}
                </h2>
              </Link>

              <p className="text-purple-600 font-semibold mt-2">
                ₹{product.price}
              </p>

              <div className="flex gap-2 mt-4">

                <button
                  onClick={() => addToCart(product)}
                  className="flex-1 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700"
                >
                  Add To Cart
                </button>

                <Link
                  to={`/product/${product.id}`}
                  className="flex-1 text-center bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600"
                >
                  View
                </Link>

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Products;