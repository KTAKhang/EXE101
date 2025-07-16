import { Outlet } from "react-router-dom";
import Footer from "../components/guest/Footer";
import Header from "../components/Customer/Header";

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