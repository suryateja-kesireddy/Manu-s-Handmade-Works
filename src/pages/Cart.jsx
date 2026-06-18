import { useEffect, useState } from "react";

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

  const handleWhatsAppOrder = () => {
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

    let message = `
🌸 NEW ORDER - MANU'S HANDMADE WORKS 🌸

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

    window.open(
      `https://wa.me/918074326428?text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );
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

          <div className="space-y-5">

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center bg-white shadow-md p-5 rounded-xl"
              >
                <div>
                  <h2 className="font-semibold text-lg">
                    {item.name}
                  </h2>

                  <p>
                    ₹{item.price} ×{" "}
                    {item.quantity}
                  </p>

                  <p className="font-bold text-purple-600">
                    ₹
                    {item.price *
                      item.quantity}
                  </p>
                </div>

                <button
                  onClick={() =>
                    removeItem(item.id)
                  }
                  className="bg-red-500 text-white px-4 py-2 rounded-lg"
                >
                  Remove
                </button>
              </div>
            ))}

          </div>

          {/* Customer Form */}

          <div className="bg-white shadow-lg rounded-2xl p-6 mt-10">

            <h2 className="text-2xl font-bold text-purple-700 mb-6">
              🛍️ Customer Details
            </h2>

            <div className="space-y-4">

              <input
                type="text"
                placeholder="Full Name *"
                value={customerName}
                onChange={(e) =>
                  setCustomerName(
                    e.target.value
                  )
                }
                className="w-full border p-3 rounded-lg"
              />

              <input
                type="tel"
                placeholder="Phone Number *"
                value={phone}
                onChange={(e) =>
                  setPhone(
                    e.target.value
                  )
                }
                className="w-full border p-3 rounded-lg"
              />

              <textarea
                placeholder="Complete Address *"
                value={address}
                onChange={(e) =>
                  setAddress(
                    e.target.value
                  )
                }
                rows="3"
                className="w-full border p-3 rounded-lg"
              />

              <input
                type="text"
                placeholder="Colour Requirement (Optional)"
                value={colorRequirement}
                onChange={(e) =>
                  setColorRequirement(
                    e.target.value
                  )
                }
                className="w-full border p-3 rounded-lg"
              />

              <select
                value={needCustomization}
                onChange={(e) =>
                  setNeedCustomization(
                    e.target.value
                  )
                }
                className="w-full border p-3 rounded-lg"
              >
                <option>
                  No Customization
                </option>

                <option>
                  Need Customization
                </option>
              </select>

              {needCustomization ===
                "Need Customization" && (
                <textarea
                  placeholder="Customization Details *"
                  value={customization}
                  onChange={(e) =>
                    setCustomization(
                      e.target.value
                    )
                  }
                  rows="3"
                  className="w-full border p-3 rounded-lg"
                />
              )}

              <div>

                <label className="font-medium">
                  Delivery Date Required *
                </label>

                <input
                  type="date"
                  value={deliveryDate}
                  onChange={(e) =>
                    setDeliveryDate(
                      e.target.value
                    )
                  }
                  className="w-full border p-3 rounded-lg mt-2"
                />

              </div>

            </div>

          </div>

          {/* Order Summary */}

          <div className="bg-purple-50 p-6 rounded-xl mt-10">

            <div className="bg-white border border-purple-200 rounded-xl p-5 mb-5">

              <h3 className="text-xl font-bold text-purple-700 mb-3">
                Order Summary
              </h3>

              <p>
                Total Products:{" "}
                {cartItems.length}
              </p>

              <p>
                Total Quantity:{" "}
                {totalQuantity}
              </p>

              <p className="text-3xl font-bold text-green-600 mt-3">
                ₹{totalAmount}
              </p>

            </div>

            <button
              onClick={
                handleWhatsAppOrder
              }
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold"
            >
              Order on WhatsApp
            </button>

          </div>
        </>
      )}
    </div>
  );
}

export default Cart;