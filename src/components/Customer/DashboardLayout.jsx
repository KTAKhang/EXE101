import { Link } from "react-router-dom";
import { useState } from 'react';

export default function DashboardLayout({ children, activeTab }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', to: '/customer/dashboard', icon: 'ri-dashboard-line' },
    { id: 'bookings', label: 'My Bookings', to: '/customer/bookings', icon: 'ri-calendar-line' },
    { id: 'favorites', label: 'Favorites', to: '/customer/favorites', icon: 'ri-heart-line' },
    { id: 'reviews', label: 'Reviews', to: '/customer/reviews', icon: 'ri-star-line' },
    { id: 'profile', label: 'Profile', to: '/customer/profile', icon: 'ri-user-line' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <i className="ri-user-line text-blue-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">John Smith</h3>
                  <p className="text-sm text-gray-500">Explorer Member</p>
                </div>
              </div>

              <nav className="space-y-2">
                {menuItems.map((item) => (
                  <Link
                    key={item.id}
                    to={item.to}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors cursor-pointer whitespace-nowrap ${activeTab === item.id
                      ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                  >
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className={item.icon}></i>
                    </div>
                    <span>{item.label}</span>
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}