import { useState } from 'react';
import { Link } from 'react-router-dom';

const toursData = [
  { id: 'T001', name: 'Bali Adventure Package', destination: 'Bali, Indonesia', duration: '7 days', price: '$1,299', capacity: 20, booked: 12, status: 'active', guide: 'Alex Chen', departure: '2024-03-15' },
  { id: 'T002', name: 'Tokyo Cultural Tour', destination: 'Tokyo, Japan', duration: '5 days', price: '$2,150', capacity: 15, booked: 8, status: 'active', guide: 'Yuki Tanaka', departure: '2024-03-18' },
  { id: 'T003', name: 'Paris Romance', destination: 'Paris, France', duration: '6 days', price: '$1,850', capacity: 12, booked: 6, status: 'active', guide: 'Marie Dubois', departure: '2024-03-20' },
  { id: 'T004', name: 'Swiss Alps Trek', destination: 'Swiss Alps', duration: '8 days', price: '$2,400', capacity: 18, booked: 10, status: 'active', guide: 'Hans Mueller', departure: '2024-03-22' },
  { id: 'T005', name: 'Mediterranean Cruise', destination: 'Mediterranean Sea', duration: '10 days', price: '$3,200', capacity: 25, booked: 18, status: 'active', guide: 'Maria Santos', departure: '2024-03-25' },
  { id: 'T006', name: 'Iceland Northern Lights', destination: 'Reykjavik, Iceland', duration: '6 days', price: '$2,800', capacity: 16, booked: 14, status: 'active', guide: 'Erik Jonsson', departure: '2024-03-28' },
  { id: 'T007', name: 'Safari Adventure Kenya', destination: 'Nairobi, Kenya', duration: '9 days', price: '$4,200', capacity: 12, booked: 8, status: 'active', guide: 'John Mwangi', departure: '2024-04-02' },
  { id: 'T008', name: 'New Zealand Explorer', destination: 'Auckland, New Zealand', duration: '12 days', price: '$2,950', capacity: 14, booked: 6, status: 'draft', guide: 'Sarah Wilson', departure: '2024-04-05' }
];

export default function StaffTours() {
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTour, setSelectedTour] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const filteredTours = toursData.filter(tour => {
    const matchesStatus = selectedStatus === 'all' || tour.status === selectedStatus;
    const matchesSearch = tour.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tour.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tour.id.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'draft': return 'bg-yellow-100 text-yellow-800';
      case 'inactive': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleTourAction = (tour, action) => {
    setSelectedTour({ ...tour, action });
    setShowModal(true);
  };

  const confirmAction = () => {
    console.log(`${selectedTour.action} tour ${selectedTour.id}`);
    setShowModal(false);
    setSelectedTour(null);
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
            <Link to="/staff/bookings" className="flex items-center px-4 py-3 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 cursor-pointer">
              <div className="w-5 h-5 flex items-center justify-center mr-3">
                <i className="ri-calendar-check-line text-lg"></i>
              </div>
              Manage Bookings
            </Link>
            <Link to="/staff/tours" className="flex items-center px-4 py-3 rounded-lg text-sm font-medium bg-blue-100 text-blue-700 cursor-pointer">
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
              <h1 className="text-2xl font-bold text-gray-900">Manage Tours</h1>
              <p className="text-sm text-gray-600">View and manage all available tours</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                Add New Tour
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
                      placeholder="Search tours..."
                      className="pl-10 pr-4 py-2 w-full sm:w-80 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  
                  <div className="flex gap-2">
                    {['all', 'active', 'draft', 'inactive'].map((status) => (
                      <button
                        key={status}
                        onClick={() => setSelectedStatus(status)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                          selectedStatus === status
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        {status.charAt(0).toUpperCase() + status.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tour ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tour Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Destination</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Capacity</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Booked</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredTours.map((tour) => (
                    <tr key={tour.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {tour.id}
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{tour.name}</div>
                          <div className="text-sm text-gray-500">Guide: {tour.guide}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">{tour.destination}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {tour.duration}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {tour.price}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {tour.capacity}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <div className="flex items-center">
                          <span className="mr-2">{tour.booked}</span>
                          <div className="w-16 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full" 
                              style={{ width: `${(tour.booked / tour.capacity) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(tour.status)}`}>
                          {tour.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex items-center gap-2">
                          <button className="text-blue-600 hover:text-blue-700 cursor-pointer">
                            <div className="w-4 h-4 flex items-center justify-center">
                              <i className="ri-edit-line"></i>
                            </div>
                          </button>
                          <button className="text-green-600 hover:text-green-700 cursor-pointer">
                            <div className="w-4 h-4 flex items-center justify-center">
                              <i className="ri-eye-line"></i>
                            </div>
                          </button>
                          {tour.status === 'draft' && (
                            <button
                              onClick={() => handleTourAction(tour, 'publish')}
                              className="text-purple-600 hover:text-purple-700 cursor-pointer"
                            >
                              <div className="w-4 h-4 flex items-center justify-center">
                                <i className="ri-send-plane-line"></i>
                              </div>
                            </button>
                          )}
                          {tour.status === 'active' && (
                            <button
                              onClick={() => handleTourAction(tour, 'deactivate')}
                              className="text-red-600 hover:text-red-700 cursor-pointer"
                            >
                              <div className="w-4 h-4 flex items-center justify-center">
                                <i className="ri-pause-line"></i>
                              </div>
                            </button>
                          )}
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
                  Showing {filteredTours.length} of {toursData.length} tours
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
              {selectedTour.action === 'publish' ? 'Publish Tour' : 'Deactivate Tour'}
            </h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to {selectedTour.action} tour {selectedTour.id} - {selectedTour.name}?
            </p>
            <div className="flex gap-3">
              <button
                onClick={confirmAction}
                className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium ${
                  selectedTour.action === 'publish'
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : 'bg-red-600 text-white hover:bg-red-700'
                }`}
              >
                {selectedTour.action === 'publish' ? 'Publish' : 'Deactivate'}
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