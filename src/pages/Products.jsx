import { useState } from "react";
import { Link } from "react-router-dom";
import products from "../data/products";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

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

    "Bracelets",

    
    "Neck Piece",
  ];

  const addToCart = (product) => {
    const cart =
      JSON.parse(localStorage.getItem("cart")) || [];

    const existing = cart.find(
      (item) => item.id === product.id
    );

    if (existing) {
      existing.quantity += 1;
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

  const filteredProducts = products.filter(
    (product) => {
      const searchMatch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const categoryMatch =
        category === "All" ||
        product.category === category;

      return searchMatch && categoryMatch;
    }
  );

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 via-pink-50 to-white py-12">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">

          <h1 className="text-5xl font-bold text-purple-700">
            Our Handmade Collection
          </h1>

          <p className="mt-4 text-gray-600">
            Explore our premium handmade jewellery
            collection crafted with love.
          </p>

        </div>

        <input
          type="text"
          placeholder="Search Handmade Jewellery..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="w-full p-4 rounded-2xl border-2 border-purple-200 focus:border-purple-500 outline-none shadow-sm mb-8"
        />

        <div className="flex flex-wrap gap-3 justify-center mb-10">

          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() =>
                setCategory(cat)
              }
              className={`px-5 py-2 rounded-full transition-all duration-300 font-medium

              ${
                category === cat
                  ? "bg-purple-600 text-white shadow-lg"
                  : "bg-white hover:bg-purple-100 shadow"
              }
              `}
            >
              {cat}
            </button>
          ))}

        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8">

          {filteredProducts.map((product) => (

            <div
              key={product.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
            >

              <Swiper
  modules={[
    Pagination,
    Autoplay,
  ]}

  pagination={{
    clickable: true,
  }}

  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}

  loop={true}
>

                {product.images.map(
                  (img, index) => (

                    <SwiperSlide
                      key={index}
                    >

                      <Link
                        to={`/product/${product.id}`}
                      >

                        <img
                          src={img}
                          alt={product.name}
                          className="w-full h-72 object-cover hover:scale-110 transition duration-700"
                        />

                      </Link>

                    </SwiperSlide>

                  )
                )}

              </Swiper>

              <div className="p-5">

                <div className="flex justify-between items-center">

                  <h2 className="text-xl font-bold">

                    {product.name}

                  </h2>

                  <span className="bg-pink-100 text-pink-600 text-xs px-3 py-1 rounded-full">

                    Handmade

                  </span>

                </div>

                <div className="flex items-center justify-between mt-4">

                  <p className="text-2xl font-bold text-purple-700">

                    ₹{product.price}

                  </p>

                  <div className="text-yellow-500">

                    ⭐⭐⭐⭐⭐

                  </div>

                </div>
                              

              <p className="text-gray-500 text-sm mt-4 line-clamp-2">
                {product.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">

                {product.customizable && (
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                    ✨ Customizable
                  </span>
                )}

                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs">
                  💜 Premium
                </span>

              </div>

              <div className="flex gap-3 mt-6">

                <button
                  onClick={() => addToCart(product)}
                  className="flex-1 bg-linear-to-r from-purple-600 to-pink-500 text-white py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Add To Cart
                </button>

                <Link
                  to={`/product/${product.id}`}
                  className="flex-1 text-center bg-white border-2 border-purple-600 text-purple-600 py-3 rounded-xl font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300"
                >
                  View
                </Link>

              </div>

            </div>

          </div>

        ))}

      </div>

      {filteredProducts.length === 0 && (

        <div className="text-center py-20">

          <h2 className="text-3xl font-bold text-gray-700">

            No Products Found

          </h2>

          <p className="text-gray-500 mt-4">

            Try another search or category.

          </p>

        </div>

      )}

    </div>

  </div>

);

}

export default Products;