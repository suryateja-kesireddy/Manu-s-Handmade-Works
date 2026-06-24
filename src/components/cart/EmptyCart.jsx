import { Link } from "react-router-dom";

function EmptyCart() {

  return (

    <div className="min-h-[70vh] flex flex-col justify-center items-center">

      <h1 className="text-7xl">

        🛒

      </h1>

      <h2 className="text-4xl font-bold mt-6">

        Your Cart is Empty

      </h2>

      <p className="text-gray-500 mt-3">

        Add beautiful handmade products to continue shopping.

      </p>

      <Link

        to="/products"

        className="mt-8 bg-linear-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-xl"

      >

        Continue Shopping

      </Link>

    </div>

  );

}

export default EmptyCart;