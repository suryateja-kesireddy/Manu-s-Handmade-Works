import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { getOrders } from "./services/orderService";

function Orders() {

  const [orders, setOrders] = useState([]);

useEffect(() => {

  loadOrders();

}, []);

const loadOrders = async () => {

  const data = await getOrders();

  setOrders(data);

};
  return (

    <div className="p-8">

      <h1 className="text-4xl font-bold mb-8">

        Orders

      </h1>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

        <table className="w-full">

          <thead className="bg-purple-600 text-white">

            <tr>

              <th className="p-4">Order ID</th>

              <th>Customer</th>

              <th>Phone</th>

              <th>Amount</th>

              <th>Payment</th>

              <th>Status</th>

              <th>Action</th>

            </tr>
            </thead>

         <tbody>

  {orders.map((order) => (

    <tr
      key={order.id}
      className="border-b hover:bg-purple-50"
    >

      <td className="p-4 font-bold">
        {order.id}
      </td>

      <td>
        {order.customerName}
      </td>

      <td>
        {order.phone}
      </td>

      <td className="font-semibold text-purple-700">
        ₹{order.totalAmount}
      </td>

      <td>

        <span
          className={`px-3 py-1 rounded-full text-sm font-semibold

          ${
            order.paymentStatus === "Paid"
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }

          `}
        >

          {order.paymentStatus}

        </span>

      </td>

      <td>

        <span
          className={`px-3 py-1 rounded-full text-sm font-semibold

          ${
            order.orderStatus === "Approved"
              ? "bg-green-100 text-green-700"
              : order.orderStatus === "Rejected"
              ? "bg-red-100 text-red-700"
              : "bg-orange-100 text-orange-700"
          }

          `}
        >

          {order.orderStatus}

        </span>

      </td>

      <td>

        <Link
          to={`/admin/orders/${order.id}`}
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition"
        >

          View

        </Link>

      </td>

    </tr>

  ))}

</tbody>

        </table>

      </div>

    </div>

  );

}

export default Orders;