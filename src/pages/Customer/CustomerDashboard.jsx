'use client';

import { Link } from "react-router-dom";
import DashboardLayout from "../../components/Customer/DashboardLayout";

export default function Dashboard() {
  const upcomingTrips = [
    { 
      id: 1, 
      tour: 'Immersive Day as a Traditional Mekong Delta Farmer',
      destination: 'Vinh Long / Can Tho', 
      date: 'Mar 15, 2024', 
      status: 'Confirmed', 
      image: 'https://suntravelgroup.vn/media/4215/c%E1%BA%A7n-th%C6%A1-2.jpg?width=1300&height=720&mode=crop' 
    },
    { 
      id: 2, 
      tour: 'Traditional Music & Sunset on the Mekong River',
      destination: 'My Tho – Ben Tre', 
      date: 'Apr 22, 2024', 
      status: 'Pending', 
      image: 'https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/6/27/du-lich-ben-tre-khach-tay-nghe-don-ca-tai-tu-tat-muong-bat-ca-lam-keo-dua-88966.jpg?width=0&s=8ERrUWb0g7GKF0LLlt16og' 
    },
  ];

  const recentBookings = [
    { id: 1, tour: 'Immersive Day as a Traditional Mekong Delta Farmer', date: 'Feb 28, 2024', amount: '450,000 VND', status: 'Completed' },
    { id: 2, tour: 'Traditional Music & Sunset on the Mekong River', date: 'Jan 15, 2024', amount: '500,000 VND', status: 'Completed' },
    { id: 3, tour: 'Mekong Memories – Floating Market & Traditional Craft Village', date: 'Dec 10, 2023', amount: '400,000 VND', status: 'Completed' },
  ];

  return (
    <DashboardLayout activeTab="dashboard">
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
          <h1 className="text-3xl font-bold mb-2">Welcome back, John!</h1>
          <p className="text-blue-100">Ready for your next adventure? Check out your upcoming trips and explore new destinations.</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-sm h-[110px]">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <i className="ri-calendar-line text-blue-600 text-xl"></i>
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500 min-h-[1.25rem]">Upcoming Trips</p>
                <p className="text-2xl font-bold text-gray-900">2</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm h-[110px]">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <i className="ri-map-pin-line text-green-600 text-xl"></i>
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500 min-h-[1.25rem]">Visited</p>
                <p className="text-2xl font-bold text-gray-900">5</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm h-[110px]">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <i className="ri-heart-line text-purple-600 text-xl"></i>
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500 min-h-[1.25rem]">Favorite Tours</p>
                <p className="text-2xl font-bold text-gray-900">8</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm h-[110px]">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <i className="ri-star-line text-orange-600 text-xl"></i>
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500 min-h-[1.25rem]">Reviews Given</p>
                <p className="text-2xl font-bold text-gray-900">15</p>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Trips */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold text-gray-900">Upcoming Trips</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcomingTrips.map((trip) => (
                <div key={trip.id} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                  <img
                    src={trip.image}
                    alt={trip.tour}
                    className="w-full h-48 object-cover object-top"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-1">{trip.tour}</h3>
                    <p className="text-sm text-gray-600 mb-2 flex items-center">
                      <i className="ri-map-pin-line mr-1"></i>
                      {trip.destination}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <div className="w-4 h-4 flex items-center justify-center mr-1">
                          <i className="ri-calendar-line"></i>
                        </div>
                        {trip.date}
                      </div>
                      <span className={`px-2 py-1 text-xs rounded-full whitespace-nowrap ${trip.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                        {trip.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Bookings */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold text-gray-900">Recent Bookings</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tour</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {recentBookings.map((booking) => (
                  <tr key={booking.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{booking.tour}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {booking.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                      {booking.amount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800 whitespace-nowrap">
                        {booking.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <Link to={`/customer/bookings/BK-2024-00${booking.id}`} className="text-blue-600 hover:text-blue-800 cursor-pointer whitespace-nowrap">
                        View Details
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold text-gray-900">Recent Notifications</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-information-line text-blue-600"></i>
                </div>
                <div>
                  <p className="text-sm text-gray-900">Your Mekong Delta farmer experience confirmation has been sent to your email.</p>
                  <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-check-line text-green-600"></i>
                </div>
                <div>
                  <p className="text-sm text-gray-900">Payment for sunset music tour has been processed successfully.</p>
                  <p className="text-xs text-gray-500 mt-1">1 day ago</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-time-line text-yellow-600"></i>
                </div>
                <div>
                  <p className="text-sm text-gray-900">Reminder: Your floating market tour starts at 5:30 AM tomorrow.</p>
                  <p className="text-xs text-gray-500 mt-1">3 days ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}