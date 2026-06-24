import { useEffect, useState } from "react";
import { getOrders } from "./services/orderService";

function Reports() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    loadReports();
  }, []);

  const loadReports = async () => {
    const data = await getOrders();
    setOrders(data);
  };

  const totalOrders = orders.length;

  const pendingOrders = orders.filter(
    (order) => order.orderStatus === "Pending"
  ).length;

  const approvedOrders = orders.filter(
    (order) => order.orderStatus === "Approved"
  ).length;

  const rejectedOrders = orders.filter(
    (order) => order.orderStatus === "Rejected"
  ).length;

  const paidOrders = orders.filter(
    (order) => order.paymentStatus === "Paid"
  ).length;

  const totalRevenue = orders.reduce(
    (sum, order) => sum + (order.totalAmount || 0),
    0
  );

  const today = new Date().toDateString();

  const todayOrders = orders.filter((order) => {
    if (!order.createdAt?.seconds) return false;

    return (
      new Date(order.createdAt.seconds * 1000).toDateString() === today
    );
  }).length;

  const customerMap = {};

  orders.forEach((order) => {
    if (!customerMap[order.customerName]) {
      customerMap[order.customerName] = order.totalAmount || 0;
    } else {
      customerMap[order.customerName] += order.totalAmount || 0;
    }
  });

  const topCustomer =
    Object.entries(customerMap).sort((a, b) => b[1] - a[1])[0] || [];

  return (
    <div className="p-8">

      <h1 className="text-4xl font-bold mb-8">
        Reports & Analytics
      </h1>

      <div className="grid grid-cols-4 gap-6">

        <div className="bg-linear-to-r from-purple-600 to-pink-500 rounded-2xl text-white p-6 shadow-lg">
          <h3>Total Orders</h3>
          <p className="text-4xl font-bold mt-3">
            {totalOrders}
          </p>
        </div>

        <div className="bg-green-500 rounded-2xl text-white p-6 shadow-lg">
          <h3>Total Revenue</h3>
          <p className="text-4xl font-bold mt-3">
            ₹{totalRevenue}
          </p>
        </div>

        <div className="bg-yellow-500 rounded-2xl text-white p-6 shadow-lg">
          <h3>Pending</h3>
          <p className="text-4xl font-bold mt-3">
            {pendingOrders}
          </p>
        </div>

        <div className="bg-blue-500 rounded-2xl text-white p-6 shadow-lg">
          <h3>Approved</h3>
          <p className="text-4xl font-bold mt-3">
            {approvedOrders}
          </p>
        </div>

      </div>

      <div className="grid grid-cols-2 gap-8 mt-10">

        <div className="bg-white rounded-2xl shadow-lg p-6">

          <h2 className="text-2xl font-bold mb-6">
            Business Summary
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between">
              <span>Today's Orders</span>
              <span className="font-bold">
                {todayOrders}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Paid Orders</span>
              <span className="font-bold text-green-600">
                {paidOrders}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Rejected Orders</span>
              <span className="font-bold text-red-600">
                {rejectedOrders}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Pending Orders</span>
              <span className="font-bold text-yellow-600">
                {pendingOrders}
              </span>
            </div>

          </div>

        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">

          <h2 className="text-2xl font-bold mb-6">
            Top Customer
          </h2>

          <div className="text-center mt-10">

            <h3 className="text-3xl font-bold text-purple-600">

              {topCustomer[0] || "No Orders"}

            </h3>

            <p className="text-xl mt-4">

              ₹{topCustomer[1] || 0}

            </p>

          </div>

        </div>

      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6 mt-10">

        <h2 className="text-2xl font-bold mb-6">

          Recent Orders

        </h2>

        <table className="w-full">

          <thead className="bg-purple-600 text-white">

            <tr>

              <th className="p-4">Customer</th>

              <th>Amount</th>

              <th>Payment</th>

              <th>Status</th>

            </tr>

          </thead>

          <tbody>

            {orders.slice(0, 10).map((order) => (

              <tr
                key={order.id}
                className="border-b hover:bg-purple-50"
              >

                <td className="p-4">

                  {order.customerName}

                </td>

                <td>

                  ₹{order.totalAmount}

                </td>

                <td>

                  {order.paymentStatus}

                </td>

                <td>

                  {order.orderStatus}

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Reports;