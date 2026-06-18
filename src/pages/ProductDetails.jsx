import { useParams } from "react-router-dom";
import products from "../data/products";
import { useState } from "react";

function ProductDetails() {
const { id } = useParams();
const [quantity, setQuantity] = useState(1);

const product = products.find(
(item) => item.id === Number(id)
);

if (!product) {
return ( <div className="text-center py-20"> <h1 className="text-3xl font-bold">
Product Not Found </h1> </div>
);
}

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
      quantity: quantity,
    });
  }

  localStorage.setItem(
    "cart",
    JSON.stringify(cart)
  );

  window.dispatchEvent(new Event("storage"));

  alert(`${product.name} added to cart`);
};

const buyNow = () => {
const message =
`Hello Manu's Handmade Works,%0A%0A` +
`I would like to order:%0A` +
`${product.name}%0A` +
`Quantity: ${quantity}%0A` +
`Price: ₹${product.price}`;

window.open(
  `https://wa.me/918074326428?text=${message}`,
  "_blank"
);


};

return ( <div className="max-w-6xl mx-auto px-6 py-10">

  <div className="grid md:grid-cols-2 gap-10">

    <div>
      <img
        src={product.image}
        alt={product.name}
        className="w-full rounded-2xl shadow-lg"
      />
    </div>

    <div>

      <h1 className="text-4xl font-bold">
        {product.name}
      </h1>

      <p className="text-2xl text-purple-600 font-semibold mt-4">
        ₹{product.price}
      </p>

      <p className="text-gray-600 mt-6 leading-7">
        Beautiful handmade jewellery crafted
        with love and care. Perfect for gifting,
        special occasions and everyday elegance.
      </p>

      {/* Quantity Selector */}
      <div className="flex items-center gap-4 mt-6">

        <button
          onClick={() =>
            quantity > 1 &&
            setQuantity(quantity - 1)
          }
          className="bg-gray-200 px-4 py-2 rounded-lg"
        >
          -
        </button>

        <span className="text-xl font-bold">
          {quantity}
        </span>

        <button
          onClick={() =>
            setQuantity(quantity + 1)
          }
          className="bg-gray-200 px-4 py-2 rounded-lg"
        >
          +
        </button>

      </div>

      <div className="flex gap-4 mt-8">

        <button
          onClick={addToCart}
          className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700"
        >
          Add To Cart
        </button>

        <button
          onClick={buyNow}
          className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600"
        >
          Buy Now
        </button>

      </div>

    </div>

  </div>

</div>


);
}

export default ProductDetails;
