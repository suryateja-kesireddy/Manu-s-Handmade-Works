function CartItem({

  item,

  increaseQuantity,

  decreaseQuantity,

  removeItem,

}) {

  return (

    <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-purple-100 hover:shadow-2xl transition">

      <div className="flex flex-col md:flex-row">

        <div className="md:w-60 bg-purple-50 p-5 flex justify-center">

          <img

            src={item.images[0]}

            alt={item.name}

            className="w-48 h-48 object-cover rounded-2xl"

          />

        </div>

        <div className="flex-1 p-6">

          <div className="flex justify-between">

            <div>

              <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs">

                Handmade

              </span>

              <h2 className="text-3xl font-bold mt-3">

                {item.name}

              </h2>

              <p className="text-gray-500 mt-2">

                Premium Handmade Collection

              </p>

            </div>

            <div className="text-right">

              <p className="text-3xl font-bold text-purple-700">

                ₹{item.price}

              </p>

            </div>

          </div>

          <div className="flex flex-wrap justify-between items-center mt-8 gap-4">

            <div className="flex items-center bg-purple-50 rounded-full">

              <button

                onClick={() =>

                  decreaseQuantity(item.id)

                }

                className="w-12 h-12"

              >

                -

              </button>

              <span className="w-12 text-center font-bold">

                {item.quantity}

              </span>

              <button

                onClick={() =>

                  increaseQuantity(item.id)

                }

                className="w-12 h-12"

              >

                +

              </button>

            </div>

            <div>

              <p className="text-green-600 text-2xl font-bold">

                ₹{item.price * item.quantity}

              </p>

            </div>

            <button

              onClick={() =>

                removeItem(item.id)

              }

              className="bg-red-500 text-white px-5 py-2 rounded-xl"

            >

              Remove

            </button>

          </div>

        </div>

      </div>

    </div>

  );

}

export default CartItem;