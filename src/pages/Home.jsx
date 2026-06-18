import { Link } from "react-router-dom";
import heroImage from "../assets/images/hero-jewellery.jpeg";
import Testimonials from "../components/Testimonials";
function Home() {
  const scrollToCollection = () => {
    document
      .getElementById("collections")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen bg-linear-to-br from-purple-50 via-pink-50 to-white flex items-center">

        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>

            <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
              Handmade Jewellery Collection
            </span>

            <h1 className="mt-6 text-5xl lg:text-6xl font-bold leading-tight">
              Handmade
              <span className="text-purple-600">
                {" "}With Love{" "}
              </span>
              & Creativity ✨
            </h1>

            <p className="mt-6 text-gray-600 text-lg">
              Discover beautiful handmade jewellery,
              bangles, chains, hair clips and customized
              accessories crafted specially for you.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-8">

              <Link
                to="/products"
                className="bg-linear-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition duration-300 shadow-lg"
              >
                Shop Now →
              </Link>

              <button
                onClick={scrollToCollection}
                className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-purple-50 transition duration-300"
              >
                View Collection
              </button>

            </div>

            {/* Stats */}
            <div className="mt-10 flex gap-8">

              <div>
                <h3 className="text-2xl font-bold">
                  100+
                </h3>
                <p className="text-gray-500">
                  Products
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  500+
                </h3>
                <p className="text-gray-500">
                  Happy Customers
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  100%
                </h3>
                <p className="text-gray-500">
                  Handmade
                </p>
              </div>

            </div>

          </div>

          {/* Right Image */}
          <div className="flex justify-center">

            <img
              src={heroImage}
              alt="Handmade Jewellery"
              className="w-full max-w-md rounded-3xl shadow-2xl hover:scale-105 transition duration-500"
            />

          </div>

        </div>

      </section>

      {/* Featured Collections */}
      <section
        id="collections"
        className="py-20 bg-white"
      >

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-purple-700 mb-4">
            Featured Collections
          </h2>

          <p className="text-center text-gray-600 mb-12">
            Explore our beautiful handmade jewellery collections
          </p>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Thread Bangles */}
            <div className="bg-purple-50 rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition">

              <h3 className="text-2xl font-bold text-purple-700">
                Thread Bangles
              </h3>

              <p className="text-gray-600 mt-3">
                Customized handmade bangles available
                in different colors and designs.
              </p>

            </div>

            {/* Invisible Chains */}
            <div className="bg-pink-50 rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition">

              <h3 className="text-2xl font-bold text-pink-600">
                Invisible Chains
              </h3>

              <p className="text-gray-600 mt-3">
                Elegant lightweight chains perfect
                for everyday wear and gifting.
              </p>

            </div>

            {/* Hair Clips */}
            <div className="bg-purple-50 rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition">

              <h3 className="text-2xl font-bold text-purple-700">
                Hair Clips
              </h3>

              <p className="text-gray-600 mt-3">
                Beautiful handcrafted hair accessories
                made with love and creativity.
              </p>

            </div>

          </div>

        </div>

      </section>
      <Testimonials />
    </>
  );
}

export default Home;