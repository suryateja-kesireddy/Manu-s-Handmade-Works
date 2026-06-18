import { Heart, Sparkles, Gift, Star } from "lucide-react";

function About() {
  return (
    <section className="bg-linear-to-br from-purple-50 via-pink-50 to-white py-20">

      <div className="max-w-7xl mx-auto px-6">

        {/* Badge */}
        <div className="flex justify-center">
          <span className="bg-purple-100 text-purple-700 px-5 py-2 rounded-full font-medium">
            ✨ Crafted With Love
          </span>
        </div>

        {/* Heading */}
        <div className="text-center mt-6">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800">
            About
            <span className="text-purple-600">
              {" "}Manu's Handmade Works
            </span>
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-600">
            Handmade jewellery and customized accessories
            designed with creativity, elegance and passion.
            Every product is carefully crafted to make your
            moments memorable.
          </p>
        </div>

        {/* Main Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mt-20">

          {/* Image */}
          <div className="relative">

            <img
              src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800"
              alt="Jewellery"
              className="rounded-3xl shadow-2xl"
            />

            <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-2xl shadow-xl">
              <h3 className="text-3xl font-bold text-purple-600">
                100+
              </h3>
              <p className="text-gray-500">
                Handmade Products
              </p>
            </div>

          </div>

          {/* Content */}
          <div>

            <h2 className="text-4xl font-bold text-gray-800">
              Crafted With Love ❤️
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              At Manu's Handmade Works, every accessory tells
              a story. From elegant bangles and chains to
              customized rings and beautiful earrings,
              every piece is handcrafted with attention
              to detail.
            </p>

            <p className="mt-4 text-gray-600 leading-8">
              We believe jewellery should not just be worn —
              it should express your personality, celebrate
              your style and make every occasion special.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10">

              <div className="text-center">
                <h3 className="text-3xl font-bold text-purple-600">
                  100+
                </h3>
                <p className="text-gray-500">
                  Products
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-3xl font-bold text-pink-600">
                  50+
                </h3>
                <p className="text-gray-500">
                  Customers
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-3xl font-bold text-yellow-500">
                  5★
                </h3>
                <p className="text-gray-500">
                  Quality
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Features */}
        <div className="grid md:grid-cols-4 gap-8 mt-24">

          <div className="bg-white/70 backdrop-blur-lg p-8 rounded-3xl shadow-lg text-center hover:-translate-y-2 transition">

            <Heart
              size={42}
              className="mx-auto text-purple-600"
            />

            <h3 className="mt-4 text-xl font-bold">
              Handmade
            </h3>

            <p className="mt-2 text-gray-600">
              Every product crafted by hand.
            </p>

          </div>

          <div className="bg-white/70 backdrop-blur-lg p-8 rounded-3xl shadow-lg text-center hover:-translate-y-2 transition">

            <Sparkles
              size={42}
              className="mx-auto text-pink-600"
            />

            <h3 className="mt-4 text-xl font-bold">
              Unique Designs
            </h3>

            <p className="mt-2 text-gray-600">
              Exclusive jewellery collections.
            </p>

          </div>

          <div className="bg-white/70 backdrop-blur-lg p-8 rounded-3xl shadow-lg text-center hover:-translate-y-2 transition">

            <Gift
              size={42}
              className="mx-auto text-yellow-500"
            />

            <h3 className="mt-4 text-xl font-bold">
              Perfect Gifts
            </h3>

            <p className="mt-2 text-gray-600">
              Beautiful gifts for loved ones.
            </p>

          </div>

          <div className="bg-white/70 backdrop-blur-lg p-8 rounded-3xl shadow-lg text-center hover:-translate-y-2 transition">

            <Star
              size={42}
              className="mx-auto text-orange-500"
            />

            <h3 className="mt-4 text-xl font-bold">
              Premium Quality
            </h3>

            <p className="mt-2 text-gray-600">
              Elegant and durable materials.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;