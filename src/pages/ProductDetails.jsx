import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import products from "../data/products";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h1 className="text-4xl font-bold text-purple-700">
          Product Not Found
        </h1>
      </div>
    );
  }

  const nextImage = () => {
    setSelectedImage(
      (prev) => (prev + 1) % product.images.length
    );
  };

  const previousImage = () => {
    setSelectedImage(
      (prev) =>
        prev === 0
          ? product.images.length - 1
          : prev - 1
    );
  };

  const addToCart = () => {
    const cart =
      JSON.parse(localStorage.getItem("cart")) || [];

    const existing = cart.find(
      (item) => item.id === product.id
    );

    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.push({
        ...product,
        quantity,
      });
    }

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

    window.dispatchEvent(new Event("storage"));

    alert("Product Added Successfully");
  };

  const buyNow = () => {
    const message = `🌸 Manu's Handmade Works 🌸

Product : ${product.name}

Quantity : ${quantity}

Price : ₹${product.price}

Please confirm my order.`;

    window.open(
      `https://wa.me/918074326428?text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 via-pink-50 to-white py-12">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT */}

          <div>

            <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden">

              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-162.5 object-cover hover:scale-105 transition duration-700"
              />

            </div>

            <div className="flex gap-3 mt-5 overflow-x-auto pb-2">

              {product.images.map((image, index) => (

                <img
                  key={index}
                  src={image}
                  alt={product.name}
                  onClick={() =>
                    setSelectedImage(index)
                  }
                  className={`w-24 h-24 rounded-xl object-cover cursor-pointer border-4 transition

                  ${
                    selectedImage === index
                      ? "border-purple-600 scale-105"
                      : "border-transparent"
                  }

                  `}
                />

              ))}

            </div>

          </div>
                    {/* RIGHT */}

          <div className="sticky top-24">

            <div className="flex flex-wrap gap-3">

              <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold">
                ✨ Handmade
              </span>

              {product.customizable && (
                <span className="bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-semibold">
                  💖 Customizable
                </span>
              )}

              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                🚚 Fast Delivery
              </span>

            </div>

            <h1 className="text-5xl font-bold text-gray-800 mt-6">

              {product.name}

            </h1>

            <div className="flex items-center gap-3 mt-5">

              <div className="text-yellow-500 text-xl">

                ⭐⭐⭐⭐⭐

              </div>

              <span className="text-gray-500">

                4.9 (120+ Reviews)

              </span>

            </div>

            <h2 className="text-5xl font-bold text-purple-700 mt-6">

              ₹{product.price}

            </h2>

            <p className="text-gray-600 leading-8 mt-8">

              {product.description}

            </p>

            {/* Available Colours */}

            <div className="mt-10">

              <h3 className="text-xl font-bold mb-4">

                Available Colours

              </h3>

              <div className="flex flex-wrap gap-3">

                {product.colors.map((color) => (

                  <div
                    key={color}
                    className="bg-white shadow-md px-5 py-2 rounded-full hover:shadow-lg transition cursor-pointer"
                  >

                    {color}

                  </div>

                ))}

              </div>

            </div>

            {/* Quantity */}

            <div className="mt-10">

              <h3 className="text-xl font-bold mb-4">

                Quantity

              </h3>

              <div className="flex items-center gap-5">

                <button
                  onClick={() =>
                    quantity > 1 &&
                    setQuantity(quantity - 1)
                  }
                  className="w-12 h-12 rounded-xl bg-gray-200 text-2xl hover:bg-purple-100"
                >

                  -

                </button>

                <span className="text-2xl font-bold">

                  {quantity}

                </span>

                <button
                  onClick={() =>
                    setQuantity(quantity + 1)
                  }
                  className="w-12 h-12 rounded-xl bg-gray-200 text-2xl hover:bg-purple-100"
                >

                  +

                </button>

              </div>

            </div>

            {/* Buttons */}

            <div className="grid grid-cols-2 gap-4 mt-10">

              <button

                onClick={addToCart}

                className="bg-linear-to-r from-purple-600 to-pink-500 text-white py-4 rounded-2xl font-bold hover:scale-105 transition-all duration-300 shadow-lg"

              >

                🛒 Add To Cart

              </button>

              <button

                onClick={buyNow}

                className="bg-green-500 text-white py-4 rounded-2xl font-bold hover:bg-green-600 transition shadow-lg"

              >

                💬 Buy Now

              </button>

            </div>

            {/* Features */}

            <div className="bg-white rounded-3xl shadow-lg p-8 mt-10">

              <h2 className="text-2xl font-bold text-purple-700">

                Why Choose Us?

              </h2>

              <div className="space-y-4 mt-6 text-gray-600">

                <div>

                  ✅ 100% Handmade Products

                </div>

                <div>

                  🎨 Customized Designs Available

                </div>

                <div>

                  💎 Premium Quality Materials

                </div>

                <div>

                  🎁 Perfect Gift Collection

                </div>

                <div>

                  🚚 Secure & Fast Delivery

                </div>

                <div>

                  ❤️ Made With Love & Creativity

                </div>

              </div>

            </div>

          </div>

        </div>
                {/* Related Products */}

        <div className="mt-24">

          <div className="text-center mb-10">

            <h2 className="text-4xl font-bold text-purple-700">

              You May Also Like

            </h2>

            <p className="text-gray-500 mt-3">

              Explore more handmade collections crafted with love.

            </p>

          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

            {products
              .filter((item) => item.id !== product.id)
              .slice(0, 4)
              .map((item) => (

                <Link
                  key={item.id}
                  to={`/product/${item.id}`}
                  className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300"
                >

                  <div className="overflow-hidden">

                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-full h-72 object-cover group-hover:scale-110 transition duration-700"
                    />

                  </div>

                  <div className="p-5">

                    <div className="flex justify-between items-center">

                      <h3 className="text-xl font-bold">

                        {item.name}

                      </h3>

                      <span className="bg-pink-100 text-pink-600 text-xs px-3 py-1 rounded-full">

                        Handmade

                      </span>

                    </div>

                    <div className="flex justify-between items-center mt-4">

                      <p className="text-2xl font-bold text-purple-700">

                        ₹{item.price}

                      </p>

                      <span className="text-yellow-500">

                        ⭐⭐⭐⭐⭐

                      </span>

                    </div>

                  </div>

                </Link>

              ))}

          </div>

        </div>

        {/* Customer Promise */}

        <div className="mt-20 bg-linear-to-r from-purple-600 to-pink-500 rounded-3xl text-white p-10 shadow-xl">

          <div className="grid md:grid-cols-3 gap-8 text-center">

            <div>

              <div className="text-5xl mb-3">

                🎁

              </div>

              <h3 className="text-2xl font-bold">

                Handmade Gifts

              </h3>

              <p className="mt-3 opacity-90">

                Unique handcrafted products for every special occasion.

              </p>

            </div>

            <div>

              <div className="text-5xl mb-3">

                🚚

              </div>

              <h3 className="text-2xl font-bold">

                Fast Delivery

              </h3>

              <p className="mt-3 opacity-90">

                Safe packaging with quick delivery across India.

              </p>

            </div>

            <div>

              <div className="text-5xl mb-3">

                💖

              </div>

              <h3 className="text-2xl font-bold">

                Custom Orders

              </h3>

              <p className="mt-3 opacity-90">

                We customize products according to your requirements.

              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

export default ProductDetails;