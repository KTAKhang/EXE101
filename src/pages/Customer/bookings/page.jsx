import { Link } from "react-router-dom";
import { useState } from 'react';
import DashboardLayout from "../../../components/Customer/DashboardLayout";

export default function BookingHistory() {
  const [activeFilter, setActiveFilter] = useState('all');

  const bookings = [
    {
      id: 'BK-2024-001',
      tour: 'Mekong Delta Discovery',
      destination: 'Can Tho, Vietnam',
      date: '2024-03-15',
      duration: '5 days',
      amount: '$899',
      status: 'confirmed',
      travelers: 2,
      bookingDate: '2024-01-20',
      image: 'https://suntravelgroup.vn/media/4215/c%E1%BA%A7n-th%C6%A1-2.jpg?width=1300&height=720&mode=crop'
    },
    {
      id: 'BK-2024-002',
      tour: 'Floating Market Explorer',
      destination: 'Tien Giang & Vinh Long, Vietnam',
      date: '2024-04-22',
      duration: '4 days',
      amount: '$759',
      status: 'pending',
      travelers: 1,
      bookingDate: '2024-02-10',
      image: 'https://thamhiemmekong.com/wp-content/uploads/2019/05/caudibo-cantho.jpg'
    },
    {
      id: 'BK-2023-015',
      tour: 'Ben Tre Coconut Adventure',
      destination: 'Ben Tre, Vietnam',
      date: '2023-09-10',
      duration: '2 days',
      amount: '$499',
      status: 'completed',
      travelers: 2,
      bookingDate: '2023-06-15',
      image: 'https://anhdaomekong2hotel.vn/upload/images/du-lich-can-tho-1.png'
    },
    {
      id: 'BK-2023-012',
      tour: 'Tra Su Eco Retreat',
      destination: 'An Giang, Vietnam',
      date: '2023-07-05',
      duration: '3 days',
      amount: '$599',
      status: 'completed',
      travelers: 3,
      bookingDate: '2023-04-20',
      image: 'https://suntravelgroup.vn/media/4215/c%E1%BA%A7n-th%C6%A1-2.jpg?width=1300&height=720&mode=crop'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredBookings = activeFilter === 'all'
    ? bookings
    : bookings.filter(booking => booking.status === activeFilter);

  return (
    <DashboardLayout activeTab="bookings">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">My Bookings</h1>
            <p className="text-gray-600">View and manage all your tour bookings</p>
          </div>

          {/* Filter Tabs */}
          <div className="flex bg-gray-100 rounded-lg p-1">
            {[
              { key: 'all', label: 'All' },
              { key: 'confirmed', label: 'Confirmed' },
              { key: 'pending', label: 'Pending' },
              { key: 'completed', label: 'Completed' },
              { key: 'cancelled', label: 'Cancelled' }
            ].map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-4 py-2 text-sm rounded-md transition-colors cursor-pointer whitespace-nowrap ${activeFilter === filter.key
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
                  }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bookings Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredBookings.map((booking) => (
            <div key={booking.id} className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="relative">
                <img
                  src={booking.image}
                  alt={booking.tour}
                  className="w-full h-48 object-cover object-top rounded-t-lg"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full whitespace-nowrap ${getStatusColor(booking.status)}`}>
                    {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{booking.tour}</h3>
                    <p className="text-gray-600 text-sm">{booking.destination}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-gray-900">{booking.amount}</p>
                    <p className="text-sm text-gray-500">{booking.travelers} traveler{booking.travelers > 1 ? 's' : ''}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex items-center text-gray-600">
                    <div className="w-4 h-4 flex items-center justify-center mr-2">
                      <i className="ri-calendar-line"></i>
                    </div>
                    {new Date(booking.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <div className="w-4 h-4 flex items-center justify-center mr-2">
                      <i className="ri-time-line"></i>
                    </div>
                    {booking.duration}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <p className="text-sm text-gray-500">
                    Booking ID: {booking.id}
                  </p>
                  <div className="flex space-x-2">
                    <Link
                      to={`/customer/dashboard/bookings/${booking.id}`}
                      className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap"
                    >
                      View Details
                    </Link>
                    {booking.status === 'confirmed' && (
                      <button className="px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer whitespace-nowrap">
                        Cancel
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredBookings.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-calendar-line text-gray-400 text-3xl"></i>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No bookings found</h3>
            <p className="text-gray-500 mb-6">You don't have any {activeFilter === 'all' ? '' : activeFilter} bookings yet.</p>
            <Link
              to="/tours"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap"
            >
              Explore Tours
            </Link>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}