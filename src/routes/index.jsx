
import ForgotPassword from "../pages/ForgotPassword";
import NotFoundPage from "../pages/NotFoundPage";
import AdminLayout from "../layout/AdminLayout";
import PrivateRoute from "../components/PrivateRouter"; // đảm bảo component này hoạt động

// Customer Full Page imports
import GuestLayout from "../layout/GuestLayout";
import GuestHomePage from "../pages/Guest/CustomerHomePage";
import TourListPage from "../pages/Guest/TourListPage";
import TourDetailPage from "../pages/Guest/TourDetailPage";
import SearchPage from "../pages/Guest/SearchPage";
import AboutPage from "../pages/Guest/AboutPage";
import ContactPage from "../pages/Guest/ContactPage";
import RegisterPage from "../pages/Guest/Register";
import LoginPage from "../pages/Guest/Login";

import CustomerLayout from "../layout/CustomerLayout";
import CustomerDashboardPage from "../pages/Customer/page";
import CustomerBookingPage from "../pages/Customer/bookings/page";
import CustomerBookingDetailPage from "../pages/Customer/bookings/[id]/page";
import CustomerFavoritesPage from "../pages/Customer/favorites/page";
import CustomerProfilePage from "../pages/Customer/profile/page";
import CustomerReviewPage from "../pages/Customer/reviews/page";
import CustomerTourListPage from "../pages/Customer/tours/TourListPage";
import CustomerTourDetailPage from "../pages/Customer/tours/[id]/TourDetailPage";
import CustomerHomePage from "../pages/Customer/CustomerHomePage";
import CustomerSearchPage from "../pages/Customer/SearchPage";

// Staff Management imports
import StaffLayout from "../layout/StaffLayout";
import StaffDashboard from "../pages/StaffManagerment/StaffDashboard";
import StaffBookings from "../pages/StaffManagerment/StaffBookings";
import StaffTours from "../pages/StaffManagerment/StaffTours";
import StaffSchedule from "../pages/StaffManagerment/StaffSchedule";
import StaffSupport from "../pages/StaffManagerment/StaffSupport";

// Admin Management imports
import AdminDashboard from "../pages/AdminManagerment/AdminDashboard";
import AdminUsers from "../pages/AdminManagerment/AdminUsers";
import AdminStaff from "../pages/AdminManagerment/AdminStaff";
import AdminSystem from "../pages/AdminManagerment/AdminSystem";
import AdminAnalytics from "../pages/AdminManagerment/AdminAnalytics";
import AdminSettings from "../pages/AdminManagerment/AdminSettings";


export const routes = [
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      { path: "", element: <GuestHomePage /> },
      { path: "tours", element: <TourListPage /> },
      { path: "tours/:id", element: <TourDetailPage /> },
      { path: "search", element: <SearchPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
    ],
  },
  {
    path: "/customer",
    element: <CustomerLayout />,
    children: [
      { path: "", element: <CustomerDashboardPage /> },
      { path: "dashboard/bookings", element: <CustomerBookingPage /> },
      { path: "dashboard/bookings:id", element: <CustomerBookingDetailPage /> },
      { path: "dashboard/favorites", element: <CustomerFavoritesPage /> },
      { path: "dashboard/reviews", element: <CustomerReviewPage /> },
      { path: "dashboard/profile", element: <CustomerProfilePage /> },
      { path: "home", element: <CustomerHomePage /> },
      { path: "tours", element: <CustomerTourListPage /> },
      { path: "tours/:id", element: <CustomerTourDetailPage /> },
      { path: "search", element: <CustomerSearchPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
    ],
  },

  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },



  {
    path: "/admin-management",
    element: <AdminLayout />,
    children: [
      { path: "", element: <AdminDashboard /> },
      { path: "users", element: <AdminUsers /> },
      { path: "staff", element: <AdminStaff /> },
      { path: "system", element: <AdminSystem /> },
      { path: "analytics", element: <AdminAnalytics /> },
      { path: "settings", element: <AdminSettings /> },
    ],
  },

  // Các route dành cho staff (không cần xác thực)
  {
    path: "/staff",
    element: <StaffLayout />,
    children: [
      { path: "", element: <StaffDashboard /> },
      { path: "bookings", element: <StaffBookings /> },
      { path: "tours", element: <StaffTours /> },
      { path: "schedule", element: <StaffSchedule /> },
      { path: "support", element: <StaffSupport /> },
    ],
  },

  // Các route dành cho customer (Guest role)


  // Trang 404
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
