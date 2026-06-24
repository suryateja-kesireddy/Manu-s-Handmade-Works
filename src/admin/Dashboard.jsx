import StatsCard from "./components/StatsCard";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function Dashboard() {

  return (

    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <div className="flex-1">

        <Header />

        <div className="p-8">

          <h1 className="text-4xl font-bold mb-8">
            Dashboard
          </h1>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">

            <StatsCard
              title="Total Orders"
              value="125"
              color="bg-purple-600"
            />

            <StatsCard
              title="Pending Orders"
              value="15"
              color="bg-yellow-500"
            />

            <StatsCard
              title="Approved"
              value="90"
              color="bg-green-500"
            />

            <StatsCard
              title="Revenue"
              value="₹45,250"
              color="bg-pink-500"
            />

          </div>

          <div className="bg-white mt-10 rounded-2xl shadow p-6">

            <h2 className="text-2xl font-bold mb-5">
              Recent Orders
            </h2>

            <table className="w-full">

              <thead>

                <tr className="border-b">

                  <th className="text-left p-3">
                    Customer
                  </th>

                  <th className="text-left p-3">
                    Product
                  </th>

                  <th className="text-left p-3">
                    Amount
                  </th>

                  <th className="text-left p-3">
                    Status
                  </th>

                </tr>

              </thead>

              <tbody>

                <tr>

                  <td className="p-3">
                    Priya
                  </td>

                  <td className="p-3">
                    Bangles
                  </td>

                  <td className="p-3">
                    ₹499
                  </td>

                  <td className="p-3">

                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">

                      Pending

                    </span>

                  </td>

                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Dashboard;