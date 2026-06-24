import { Link } from "react-router-dom";

function Sidebar() {

  return (

    <div className="w-72 bg-purple-700 text-white min-h-screen p-6">

      <h1 className="text-3xl font-bold mb-10">

        Manu Admin

      </h1>

      <div className="space-y-4">

        <Link to="/admin/dashboard" className="block hover:bg-purple-600 p-3 rounded-lg">
          Dashboard
        </Link>

        <Link

to="/admin/orders"

className="block py-3"

>

📦 Orders

</Link>

        <Link to="/admin/customers" className="block hover:bg-purple-600 p-3 rounded-lg">
          Customers
        </Link>

        <Link to="/admin/products" className="block hover:bg-purple-600 p-3 rounded-lg">
          Products
        </Link>

        <Link to="/admin/reports" className="block hover:bg-purple-600 p-3 rounded-lg">
          Reports
        </Link>

        <Link to="/admin/settings" className="block hover:bg-purple-600 p-3 rounded-lg">
          Settings
        </Link>

      </div>

    </div>

  );

}

export default Sidebar;