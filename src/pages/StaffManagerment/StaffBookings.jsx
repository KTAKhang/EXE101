import { useState } from 'react';
import { Link } from 'react-router-dom';

const bookingsData = [
  { id: 'B001', customer: 'Nguyen Van A', email: 'a@example.com', tour: 'Immersive Day as a Farmer', date: '2025-07-14', participants: 2, amount: '450,000 VND', status: 'confirmed', phone: '0901-000-001' },
  { id: 'B002', customer: 'Tran Thi B', email: 'b@example.com', tour: 'Traditional Music & Sunset', date: '2025-07-13', participants: 1, amount: '500,000 VND', status: 'pending', phone: '0901-000-002' },
  { id: 'B003', customer: 'Le Van C', email: 'c@example.com', tour: 'Mekong Memories', date: '2025-07-12', participants: 2, amount: '400,000 VND', status: 'confirmed', phone: '0901-000-003' },
  { id: 'B004', customer: 'Pham Thi D', email: 'd@example.com', tour: 'Immersive Day as a Farmer', date: '2025-07-11', participants: 3, amount: '450,000 VND', status: 'cancelled', phone: '0901-000-004' },
  { id: 'B005', customer: 'Hoang Van E', email: 'e@example.com', tour: 'Traditional Music & Sunset', date: '2025-07-10', participants: 2, amount: '500,000 VND', status: 'confirmed', phone: '0901-000-005' },
  { id: 'B006', customer: 'Dang Thi F', email: 'f@example.com', tour: 'Mekong Memories', date: '2025-07-09', participants: 2, amount: '400,000 VND', status: 'pending', phone: '0901-000-006' },
  { id: 'B007', customer: 'Vo Van G', email: 'g@example.com', tour: 'Immersive Day as a Farmer', date: '2025-07-08', participants: 4, amount: '450,000 VND', status: 'confirmed', phone: '0901-000-007' },
  { id: 'B008', customer: 'Nguyen Thi H', email: 'h@example.com', tour: 'Traditional Music & Sunset', date: '2025-07-07', participants: 1, amount: '500,000 VND', status: 'pending', phone: '0901-000-008' }
];

export default function StaffBookings() {
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const filteredBookings = bookingsData.filter(booking => {
    const matchesStatus = selectedStatus === 'all' || booking.status === selectedStatus;
    const matchesSearch = booking.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.tour.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.id.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleBookingAction = (booking, action) => {
    setSelectedBooking({ ...booking, action });
    setShowModal(true);
  };

  const confirmAction = () => {
    console.log(`${selectedBooking.action} booking ${selectedBooking.id}`);
    setShowModal(false);
    setSelectedBooking(null);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <div className="text-2xl font-pacifico text-blue-600">
            TourPro
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <div className="space-y-2">
            <Link to="/staff" className="flex items-center px-4 py-3 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 cursor-pointer">
              <div className="w-5 h-5 flex items-center justify-center mr-3">
                <i className="ri-dashboard-line text-lg"></i>
              </div>
              Dashboard
            </Link>
            <Link to="/staff/bookings" className="flex items-center px-4 py-3 rounded-lg text-sm font-medium bg-blue-100 text-blue-700 cursor-pointer">
              <div className="w-5 h-5 flex items-center justify-center mr-3">
                <i className="ri-calendar-check-line text-lg"></i>
              </div>
              Manage Bookings
            </Link>
            <Link to="/staff/tours" className="flex items-center px-4 py-3 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 cursor-pointer">
              <div className="w-5 h-5 flex items-center justify-center mr-3">
                <i className="ri-map-pin-line text-lg"></i>
              </div>
              Manage Tours
            </Link>
            <Link to="/staff/schedule" className="flex items-center px-4 py-3 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 cursor-pointer">
              <div className="w-5 h-5 flex items-center justify-center mr-3">
                <i className="ri-calendar-schedule-line text-lg"></i>
              </div>
              Tour Schedule
            </Link>
            <Link to="/staff/support" className="flex items-center px-4 py-3 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 cursor-pointer">
              <div className="w-5 h-5 flex items-center justify-center mr-3">
                <i className="ri-customer-service-line text-lg"></i>
              </div>
              Customer Support
            </Link>
          </div>
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">JD</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-700">John Doe</p>
              <p className="text-xs text-gray-500">Staff Manager</p>
            </div>
            <div className="w-5 h-5 flex items-center justify-center cursor-pointer">
              <i className="ri-notification-line text-gray-600"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Top Bar */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Manage Bookings</h1>
              <p className="text-sm text-gray-600">View and manage all customer bookings</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 cursor-pointer">
                <i className="ri-search-line text-gray-600"></i>
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 cursor-pointer">
                <i className="ri-settings-3-line text-gray-600"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 py-8">
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm">
            <div className="p-6 border-b border-gray-100">
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                <div className="flex flex-col sm:flex-row gap-4 flex-1">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <div className="w-4 h-4 flex items-center justify-center">
                        <i className="ri-search-line text-gray-400"></i>
                      </div>
                    </div>
                    <input
                      type="text"
                      placeholder="Search bookings..."
                      className="pl-10 pr-4 py-2 w-full sm:w-80 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>

                  <div className="flex gap-2">
                    {['all', 'pending', 'confirmed', 'cancelled'].map((status) => (
                      <button
                        key={status}
                        onClick={() => setSelectedStatus(status)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${selectedStatus === status
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                          }`}
                      >
                        {status.charAt(0).toUpperCase() + status.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium whitespace-nowrap cursor-pointer">
                    Export Data
                  </button>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Booking ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tour</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Participants</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredBookings.map((booking) => (
                    <tr key={booking.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {booking.id}
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{booking.customer}</div>
                          <div className="text-sm text-gray-500">{booking.email}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">{booking.tour}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {booking.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {booking.participants}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {booking.amount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(booking.status)}`}>
                          {booking.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex items-center gap-2">
                          {booking.status === 'pending' && (
                            <button
                              onClick={() => handleBookingAction(booking, 'confirm')}
                              className="text-green-600 hover:text-green-700 cursor-pointer"
                            >
                              <div className="w-4 h-4 flex items-center justify-center">
                                <i className="ri-check-line"></i>
                              </div>
                            </button>
                          )}
                          {booking.status !== 'cancelled' && (
                            <button
                              onClick={() => handleBookingAction(booking, 'cancel')}
                              className="text-red-600 hover:text-red-700 cursor-pointer"
                            >
                              <div className="w-4 h-4 flex items-center justify-center">
                                <i className="ri-close-line"></i>
                              </div>
                            </button>
                          )}
                          <button className="text-blue-600 hover:text-blue-700 cursor-pointer">
                            <div className="w-4 h-4 flex items-center justify-center">
                              <i className="ri-edit-line"></i>
                            </div>
                          </button>
                          <button className="text-gray-600 hover:text-gray-700 cursor-pointer">
                            <div className="w-4 h-4 flex items-center justify-center">
                              <i className="ri-eye-line"></i>
                            </div>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="px-6 py-4 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  Showing {filteredBookings.length} of {bookingsData.length} bookings
                </div>
                <div className="flex items-center gap-2">
                  <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50 cursor-pointer whitespace-nowrap">
                    Previous
                  </button>
                  <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 cursor-pointer whitespace-nowrap">
                    1
                  </button>
                  <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50 cursor-pointer whitespace-nowrap">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {selectedBooking.action === 'confirm' ? 'Confirm Booking' : 'Cancel Booking'}
            </h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to {selectedBooking.action} booking {selectedBooking.id} for {selectedBooking.customer}?
            </p>
            <div className="flex gap-3">
              <button
                onClick={confirmAction}
                className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium ${selectedBooking.action === 'confirm'
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : 'bg-red-600 text-white hover:bg-red-700'
                  }`}
              >
                {selectedBooking.action === 'confirm' ? 'Confirm' : 'Cancel'}
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 