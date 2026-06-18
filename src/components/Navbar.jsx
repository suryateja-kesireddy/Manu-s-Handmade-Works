import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCartCount = () => {
      const cart =
        JSON.parse(localStorage.getItem("cart")) || [];

      const totalItems = cart.reduce(
        (sum, item) => sum + item.quantity,
        0
      );

      setCartCount(totalItems);
    };

    updateCartCount();

    window.addEventListener("storage", updateCartCount);

    return () => {
      window.removeEventListener(
        "storage",
        updateCartCount
      );
    };
  }, []);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/">
  <h1 className="text-3xl font-extrabold bg-linear-to-r from-purple-700 to-pink-500 bg-clip-text text-transparent">
    Manu's Handmade Works
  </h1>
</Link>

        {/* Menu */}
        <div className="flex items-center gap-8">

          <Link
            to="/"
            className="font-medium hover:text-purple-600 transition"
          >
            Home
          </Link>

          <Link
            to="/products"
            className="font-medium hover:text-purple-600 transition"
          >
            Products
          </Link>

          <Link
            to="/about"
            className="font-medium hover:text-purple-600 transition"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="font-medium hover:text-purple-600 transition"
          >
            Contact
          </Link>

          {/* Cart */}
          <Link
            to="/cart"
            className="relative text-2xl"
          >
            🛒

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          {/* WhatsApp Button */}
          <a
  href={`https://wa.me/918074326428?text=${encodeURIComponent(
    "Hello Manu's Handmade Works 👋\n\nI am interested in your handmade jewellery collection. Please share more details."
  )}`}
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 px-5 py-2 rounded-full bg-linear-to-r from-purple-600 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
>
  💬 WhatsApp Us
</a>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;