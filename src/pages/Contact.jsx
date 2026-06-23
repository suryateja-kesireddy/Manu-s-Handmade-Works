import { MapPin, MessageCircle } from "lucide-react";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const whatsappMessage = `
Hello Manu's Handmade Works,

Name: ${name}
Email: ${email}

Message:
${message}
`;

    window.open(
      `https://wa.me/919999999999?text=${encodeURIComponent(
        whatsappMessage
      )}`,
      "_blank"
    );

    e.target.reset();
  };

  return (
    <div className="min-h-screen bg-purple-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-purple-700">
            Contact Us
          </h1>

          <p className="mt-4 text-gray-600">
            Have questions or want to place an order?
            We'd love to hear from you.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">

          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <MessageCircle
              size={45}
              className="mx-auto text-green-500"
            />

            <h2 className="text-xl font-semibold mt-4">
              WhatsApp
            </h2>

            <p className="text-gray-600 mt-2">
              Chat directly with us.
            </p>

            <a
              href="https://wa.me/918074326428"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-600"
            >
              Chat Now
            </a>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <div className="text-5xl">📸</div>

            <h2 className="text-xl font-semibold mt-4">
              Instagram
            </h2>

            <p className="text-gray-600 mt-2">
              Follow our latest collections.
            </p>

            <a
              href="https://www.instagram.com/manus.handmadeworks?igsh=MWpyYjMybzZ5bThncA=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-pink-500 text-white px-5 py-2 rounded-lg hover:bg-pink-600"
            >
              Follow Us
            </a>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <MapPin
              size={45}
              className="mx-auto text-purple-600"
            />

            <h2 className="text-xl font-semibold mt-4">
              Location
            </h2>

            <p className="text-gray-600 mt-2">
              Gannavaram, Andhra Pradesh
            </p>
          </div>

        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-3xl shadow-lg p-8">

          <h2 className="text-3xl font-bold text-center mb-8">
            Send a Message
          </h2>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            <input
              name="name"
              type="text"
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 p-3 rounded-lg"
            />

            <input
              name="email"
              type="email"
              placeholder="Your Email"
              required
              className="w-full border border-gray-300 p-3 rounded-lg"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full border border-gray-300 p-3 rounded-lg"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </div>
  );
}

export default Contact;