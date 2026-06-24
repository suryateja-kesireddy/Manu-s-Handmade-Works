import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../assets/images/Logo.jpeg";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [cartCount, setCartCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

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

      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        {/* Logo */}

        <Link
          to="/"
          className="flex items-center gap-3 group"
        >

          <img
            src={logo}
            alt="Manu's Handmade Works"
            className="w-14 h-14 object-contain transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110"
          />

          <div>

            <h1 className="text-3xl font-extrabold bg-linear-to-r from-purple-700 via-pink-500 to-pink-600 bg-clip-text text-transparent">

              Manu's Handmade Works

            </h1>

            <p className="text-xs text-gray-500 tracking-widest uppercase">

              Handmade With Love

            </p>

          </div>

        </Link>

        {/* Desktop Menu */}

        <div className="hidden md:flex items-center gap-8">

          <Link
            to="/"
            className="font-medium hover:text-purple-600"
          >
            Home
          </Link>

          <Link
            to="/products"
            className="font-medium hover:text-purple-600"
          >
            Products
          </Link>

          <Link
            to="/about"
            className="font-medium hover:text-purple-600"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="font-medium hover:text-purple-600"
          >
            Contact
          </Link>

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

          <a
            href={`https://wa.me/918074326428?text=${encodeURIComponent(
              "Hello Manu's Handmade Works 👋\n\nI am interested in your handmade jewellery collection."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-linear-to-r from-purple-600 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300"
          >

            💬 WhatsApp Us

          </a>

        </div>

        {/* Mobile Right */}

        <div className="flex md:hidden items-center gap-5">

          <Link
            to="/cart"
            className="relative text-2xl"
          >
            🛒

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">

                {cartCount}

              </span>
            )}

          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl text-purple-700"
          >

            {menuOpen ? <FaTimes /> : <FaBars />}

          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (

        <div className="md:hidden bg-white shadow-lg border-t">

          <div className="flex flex-col p-5 gap-5">

            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>

            <Link to="/products" onClick={() => setMenuOpen(false)}>
              Products
            </Link>

            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>

            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>

            <a
              href={`https://wa.me/918074326428?text=${encodeURIComponent(
                "Hello Manu's Handmade Works 👋"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-linear-to-r from-purple-600 to-pink-500 text-white text-center py-3 rounded-full font-semibold"
            >
              💬 WhatsApp Us
            </a>

          </div>

        </div>

      )}

    </nav>
  );
}

export default Navbar;