import { useEffect, useState } from "react";
import { getOrders } from "./services/orderService";

function Customers() {
  const [customers, setCustomers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadCustomers();
  }, []);

  const loadCustomers = async () => {
    const orders = await getOrders();

    const customerMap = {};

    orders.forEach((order) => {
      const key = order.phone;

      if (!customerMap[key]) {
        customerMap[key] = {
          customerName: order.customerName,
          phone: order.phone,
          address: order.address,
          totalOrders: 1,
          totalSpent: order.totalAmount || 0,
        };
      } else {
        customerMap[key].totalOrders += 1;
        customerMap[key].totalSpent += order.totalAmount || 0;
      }
    });

    setCustomers(Object.values(customerMap));
  };

  const filteredCustomers = customers.filter((customer) =>
    customer.customerName
      ?.toLowerCase()
      .includes(search.toLowerCase()) ||
    customer.phone?.includes(search)
  );

  return (
    <div className="p-8">

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-4xl font-bold">
          Customers
        </h1>

        <input
          type="text"
          placeholder="Search Customer..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-xl px-4 py-3 w-80"
        />

      </div>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

        <table className="w-full">

          <thead className="bg-linear-to-r from-purple-600 to-pink-500 text-white">

            <tr>

              <th className="p-4">Customer</th>

              <th>Phone</th>

              <th>Address</th>

              <th>Total Orders</th>

              <th>Total Spent</th>

            </tr>

          </thead>

          <tbody>

            {filteredCustomers.map((customer, index) => (

              <tr
                key={index}
                className="border-b hover:bg-purple-50 transition"
              >

                <td className="p-4 font-semibold">

                  {customer.customerName}

                </td>

                <td>{customer.phone}</td>

                <td className="max-w-xs truncate">

                  {customer.address}

                </td>

                <td>

                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full">

                    {customer.totalOrders}

                  </span>

                </td>

                <td className="font-bold text-green-600">

                  ₹{customer.totalSpent}

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Customers;