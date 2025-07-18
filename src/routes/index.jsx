
// import ForgotPassword from "../pages/ForgotPassword";
import NotFoundPage from "../pages/NotFoundPage";
import AdminLayout from "../layout/AdminLayout";
import PrivateRoute from "../components/PrivateRouter";

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
import CustomerBookingPage from "../pages/Customer/CustomerBookings";
import CustomerFavoritesPage from "../pages/Customer/CustomerFavorites";
import CustomerProfilePage from "../pages/Customer/CustomerProfile";
import CustomerReviewPage from "../pages/Customer/CustomerReviews";
import CustomerTourListPage from "../pages/Customer/TourListPage";
import CustomerTourDetailPage from "../pages/Customer/TourDetailPage";
import CustomerHomePage from "../pages/Customer/CustomerHomePage";
import CustomerSearchPage from "../pages/Customer/SearchPage";
import CustomerDashboard from "../pages/Customer/CustomerDashboard";
import CustomerBookingDetail from "../pages/Customer/CustomerBookingDetail";

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
      { path: "", element: <CustomerHomePage /> },
      { path: "dashboard", element: <CustomerDashboard /> },
      { path: "bookings", element: <CustomerBookingPage /> },
      { path: "bookings/:id", element: <CustomerBookingDetail /> },
      { path: "favorites", element: <CustomerFavoritesPage /> },
      { path: "reviews", element: <CustomerReviewPage /> },
      { path: "profile", element: <CustomerProfilePage /> },
      { path: "tours", element: <CustomerTourListPage /> },
      { path: "tours/:id", element: <CustomerTourDetailPage /> },
      { path: "search", element: <CustomerSearchPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
    ],
  },

  // {
  //   path: "/forgot-password",
  //   element: <ForgotPassword />,
  // },

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

  // Trang 404
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
