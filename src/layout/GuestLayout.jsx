import { Outlet } from "react-router-dom";
import CustomerNavbar from "../components/Navbar/CustomerNavbar";
import Header from "../components/guest/Header";
import Footer from "../components/guest/Footer";

const CustomerLayout = () => {
  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gray-50">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default CustomerLayout; 