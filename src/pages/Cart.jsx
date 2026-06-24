import { useEffect, useState } from "react";
//import CartItem from "../components/cart/CartItem";

//import EmptyCart from "../components/cart/EmptyCart";
import { saveOrder } from "../admin/services/orderService";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const [colorRequirement, setColorRequirement] =
    useState("");

  const [
    needCustomization,
    setNeedCustomization,
  ] = useState("No Customization");

  const [customization, setCustomization] =
    useState("");

  const [deliveryDate, setDeliveryDate] =
    useState("");

  useEffect(() => {
    const items =
      JSON.parse(localStorage.getItem("cart")) ||
      [];

    setCartItems(items);
  }, []);

  const removeItem = (id) => {
    const updatedCart = cartItems.filter(
      (item) => item.id !== id
    );

    setCartItems(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );

    window.dispatchEvent(new Event("storage"));
  };

  const totalAmount = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const totalQuantity = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

 const handleWhatsAppOrder = async () => {
    if (
      !customerName ||
      !phone ||
      !address ||
      !deliveryDate
    ) {
      alert("Please fill all required fields");
      return;
    }

    if (phone.length !== 10) {
      alert("Enter valid 10 digit phone number");
      return;
    }

    if (
      needCustomization ===
        "Need Customization" &&
      !customization
    ) {
      alert(
        "Please enter customization details"
      );
      return;
    }
    const orderData = {

  customerName,

  phone,

  address,

  colorRequirement,

  needCustomization,

  customization,

  deliveryDate,

  products: cartItems,

  totalAmount,

  totalQuantity,

};

const orderId = await saveOrder(orderData);

    let message = `
🌸 NEW ORDER - MANU'S HANDMADE WORKS 🌸

🆔 Order ID : ${orderId}

━━━━━━━━━━━━━━━━━━

👤 CUSTOMER DETAILS

📝 Name: ${customerName}

📱 Phone: ${phone}

🏠 Address:
${address}

🎨 Colour Requirement:
${colorRequirement || "Not Specified"}

✨ Customization:
${needCustomization}

${
  needCustomization ===
  "Need Customization"
    ? `
📝 Customization Details:
${customization}
`
    : ""
}

📅 Delivery Date:
${deliveryDate}

━━━━━━━━━━━━━━━━━━

🛍️ ORDER ITEMS
`;

    cartItems.forEach((item) => {
      message += `

• ${item.name}

📦 Quantity: ${item.quantity}

💰 Price: ₹${item.price}

🧾 Subtotal: ₹${
        item.price * item.quantity
      }
`;
    });

    message += `

━━━━━━━━━━━━━━━━━━

💵 TOTAL AMOUNT: ₹${totalAmount}

📦 TOTAL QUANTITY: ${totalQuantity}

❤️ Thank You For Shopping With
Manu's Handmade Works
`;

    try {

  const orderData = {

    customerName,

    phone,

    address,

    colorRequirement,

    needCustomization,

    customization,

    deliveryDate,

    products: cartItems,

    totalAmount,

    totalQuantity,

  };

  // Save order to Firebase
  const orderId = await saveOrder(orderData);

  // Add Order ID to WhatsApp message
  const finalMessage = `

🆔 Order ID : ${orderId}

${message}

`;

  // Open WhatsApp
  window.open(

    `https://wa.me/918074326428?text=${encodeURIComponent(
      finalMessage
    )}`,

    "_blank"

  );

  // Clear cart
  localStorage.removeItem("cart");

  setCartItems([]);

  window.dispatchEvent(new Event("storage"));

  alert("Order placed successfully!");

} catch (error) {

  console.log(error);

  alert("Failed to place order");

}
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">

      <h1 className="text-4xl font-bold text-center mb-8 text-purple-700">
        Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <h2 className="text-center text-xl">
          Your cart is empty
        </h2>
      ) : (
        <>
          {/* Cart Items */}

          {/* Cart Items */}

<div className="space-y-6">

  {cartItems.map((item) => (

    <div
      key={item.id}
      className="bg-white rounded-3xl shadow-lg border border-purple-100 overflow-hidden hover:shadow-2xl transition-all duration-300"
    >

      <div className="flex flex-col md:flex-row">

        {/* Product Image */}

        <div className="md:w-64 w-full bg-purple-50 flex items-center justify-center p-5">

          <img
            src={item.images ? item.images[0] : item.image}
            alt={item.name}
            className="w-52 h-52 object-cover rounded-2xl hover:scale-105 transition duration-500"
          />

        </div>

        {/* Product Details */}

        <div className="flex-1 p-6 flex flex-col justify-between">

          <div>

            <div className="flex flex-wrap gap-2 mb-3">

              <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold">

                ✨ Handmade

              </span>

              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">

                🚚 Delivery 2-5 Days

              </span>

            </div>

            <h2 className="text-3xl font-bold text-gray-800">

              {item.name}

            </h2>

            <div className="flex items-center mt-3 gap-2 text-yellow-500">

              ⭐⭐⭐⭐⭐

              <span className="text-gray-500 text-sm">

                Premium Quality

              </span>

            </div>

            <p className="text-purple-700 text-3xl font-bold mt-4">

              ₹{item.price}

            </p>

          </div>

          {/* Quantity & Remove */}

          <div className="flex flex-col lg:flex-row justify-between items-center mt-8 gap-5">

            <div className="flex items-center bg-purple-50 rounded-full p-2">

              <button

                onClick={() => {

                  const updated = cartItems.map((cartItem) =>

                    cartItem.id === item.id

                      ? {

                          ...cartItem,

                          quantity:

                            cartItem.quantity > 1

                              ? cartItem.quantity - 1

                              : 1,

                        }

                      : cartItem

                  );

                  setCartItems(updated);

                  localStorage.setItem(

                    "cart",

                    JSON.stringify(updated)

                  );

                  window.dispatchEvent(new Event("storage"));

                }}

                className="w-10 h-10 rounded-full bg-white shadow font-bold"

              >

                -

              </button>

              <span className="w-16 text-center text-2xl font-bold">

                {item.quantity}

              </span>

              <button

                onClick={() => {

                  const updated = cartItems.map((cartItem) =>

                    cartItem.id === item.id

                      ? {

                          ...cartItem,

                          quantity:

                            cartItem.quantity + 1,

                        }

                      : cartItem

                  );

                  setCartItems(updated);

                  localStorage.setItem(

                    "cart",

                    JSON.stringify(updated)

                  );

                  window.dispatchEvent(new Event("storage"));

                }}

                className="w-10 h-10 rounded-full bg-white shadow font-bold"

              >

                +

              </button>

            </div>

            <div className="text-center">

              <p className="text-gray-500">

                Sub Total

              </p>

              <p className="text-2xl font-bold text-green-600">

                ₹{item.price * item.quantity}

              </p>

            </div>

            <button

              onClick={() => removeItem(item.id)}

              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-semibold transition"

            >

              🗑 Remove

            </button>

          </div>

        </div>

      </div>

    </div>

  ))}

</div>
          {/* Customer Form */}

          

        {/* Customer Details */}

<div className="mt-12 bg-white rounded-3xl shadow-xl border border-purple-100 overflow-hidden">

  {/* Header */}

  <div className="bg-linear-to-r from-purple-600 to-pink-500 p-6">

    <h2 className="text-3xl font-bold text-white">

      👤 Customer Details

    </h2>

    <p className="text-purple-100 mt-2">

      Please fill the details carefully for a smooth order process.

    </p>

  </div>

  <div className="p-8">

    <div className="grid lg:grid-cols-2 gap-6">

      {/* Name */}

      <div>

        <label className="font-semibold text-gray-700">

          Full Name *

        </label>

        <input

          type="text"

          value={customerName}

          onChange={(e) =>
            setCustomerName(e.target.value)
          }

          placeholder="Enter your full name"

          className="w-full mt-2 border-2 border-purple-100 rounded-xl p-4 focus:border-purple-500 outline-none"

        />

      </div>

      {/* Phone */}

      <div>

        <label className="font-semibold text-gray-700">

          Phone Number *

        </label>

        <input

          type="tel"

          value={phone}

          onChange={(e) =>
            setPhone(e.target.value)
          }

          placeholder="10 digit mobile number"

          className="w-full mt-2 border-2 border-purple-100 rounded-xl p-4 focus:border-purple-500 outline-none"

        />

      </div>

    </div>

    {/* Address */}

    <div className="mt-6">

      <label className="font-semibold text-gray-700">

        Delivery Address *

      </label>

      <textarea

        rows="4"

        value={address}

        onChange={(e) =>
          setAddress(e.target.value)
        }

        placeholder="Complete Address"

        className="w-full mt-2 border-2 border-purple-100 rounded-xl p-4 focus:border-purple-500 outline-none"

      />

    </div>

    <div className="grid lg:grid-cols-2 gap-6 mt-6">

      {/* Colour */}

      <div>

        <label className="font-semibold text-gray-700">

          Colour Requirement

        </label>

        <input

          type="text"

          value={colorRequirement}

          onChange={(e) =>
            setColorRequirement(e.target.value)
          }

          placeholder="Example : Red / Green / Gold"

          className="w-full mt-2 border-2 border-purple-100 rounded-xl p-4 focus:border-purple-500 outline-none"

        />

      </div>

      {/* Delivery Date */}

      <div>

        <label className="font-semibold text-gray-700">

          Required Delivery Date *

        </label>

        <input

          type="date"

          value={deliveryDate}

          onChange={(e) =>
            setDeliveryDate(e.target.value)
          }

          className="w-full mt-2 border-2 border-purple-100 rounded-xl p-4 focus:border-purple-500 outline-none"

        />

      </div>

    </div>

    {/* Customization */}

    <div className="mt-8">

      <label className="font-semibold text-gray-700">

        Customization

      </label>

      <select

        value={needCustomization}

        onChange={(e) =>
          setNeedCustomization(e.target.value)
        }

        className="w-full mt-2 border-2 border-purple-100 rounded-xl p-4 focus:border-purple-500 outline-none"

      >

        <option>No Customization</option>

        <option>Need Customization</option>

      </select>

    </div>

    {needCustomization ===
      "Need Customization" && (

      <div className="mt-6">

        <label className="font-semibold text-gray-700">

          Customization Details *

        </label>

        <textarea

          rows="4"

          value={customization}

          onChange={(e) =>
            setCustomization(e.target.value)
          }

          placeholder="Write your customization requirements..."

          className="w-full mt-2 border-2 border-purple-100 rounded-xl p-4 focus:border-purple-500 outline-none"

        />

      </div>

    )}
    {/* Order Summary */}

<div className="mt-10 bg-white rounded-3xl shadow-lg border border-purple-100 p-8">

  <h2 className="text-2xl font-bold text-purple-700 mb-6">
    Order Summary
  </h2>

  <div className="space-y-3 text-gray-700">

    <div className="flex justify-between">
      <span>Total Products</span>
      <span className="font-semibold">{cartItems.length}</span>
    </div>

    <div className="flex justify-between">
      <span>Total Quantity</span>
      <span className="font-semibold">{totalQuantity}</span>
    </div>

    <div className="flex justify-between">
      <span>Delivery</span>
      <span className="text-green-600 font-semibold">
        Free
      </span>
    </div>

    <hr />

    <div className="flex justify-between text-3xl font-bold text-purple-700">

      <span>Total</span>

      <span>₹{totalAmount}</span>

    </div>

  </div>

  <button
    onClick={handleWhatsAppOrder}
    className="w-full mt-8 bg-linear-to-r from-green-500 to-green-600 text-white py-4 rounded-2xl text-lg font-semibold hover:scale-[1.02] transition shadow-lg"
  >
    🛒 Order on WhatsApp
  </button>

</div>

    {/* Information Box */}

    <div className="mt-8 bg-purple-50 border border-purple-200 rounded-2xl p-5">

      <h3 className="text-xl font-bold text-purple-700">

        💜 Order Information

      </h3>

      <ul className="mt-4 space-y-2 text-gray-600">

        <li>✅ 100% Handmade Products</li>

        <li>✅ Custom Orders Accepted</li>

        <li>✅ Premium Quality Materials</li>

        <li>✅ WhatsApp Confirmation After Order</li>

        <li>✅ Delivery Across India</li>

      </ul>

    </div>

  </div>

      </div>

        </>
      )}

    </div>
  );

}

export default Cart;