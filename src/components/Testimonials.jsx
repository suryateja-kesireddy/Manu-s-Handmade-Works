function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "Priya",
      review:
        "Beautiful handmade bangles. Quality is amazing and delivery was fast.",
    },
    {
      id: 2,
      name: "Sravani",
      review:
        "Customized jewellery exactly as I requested. Highly recommended.",
    },
    {
      id: 3,
      name: "Keerthana",
      review:
        "Very affordable and elegant designs. Loved the earrings.",
    },
  ];

  return (
    <section className="py-20 bg-purple-50">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-purple-700 mb-12">
          Customer Reviews
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <div className="text-yellow-500 text-xl">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="mt-4 text-gray-600">
                "{review.review}"
              </p>

              <h3 className="mt-4 font-bold text-purple-700">
                {review.name}
              </h3>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;