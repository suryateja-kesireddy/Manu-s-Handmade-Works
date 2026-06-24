import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import About from "./pages/About";
import "./styles/mobile.css";
import Dashboard from "./admin/Dashboard";
import Login from "./admin/Login";
import Orders from "./admin/Orders";
import AddProduct from "./admin/AddProduct";
import Customers from "./admin/Customers";
import Reports from "./admin/Reports";
import AdminProducts from "./admin/Products";
import Settings from "./admin/Settings";
function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/admin/login" element={<Login />} />

<Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin/customers" element={<Customers/>}/>
        <Route path="/admin/reports" element={<Reports/>}/>
        <Route path="/admin/products" element={<AdminProducts/>}/>
        <Route path="/admin/settings" element={<Settings/>}/>
        <Route

path="/admin/orders"

element={<Orders />}

/>
<Route
  path="/admin/products/add"
  element={<AddProduct />}
/>
      </Routes>

      <Footer />

      

    </BrowserRouter>
  );
}

export default App;