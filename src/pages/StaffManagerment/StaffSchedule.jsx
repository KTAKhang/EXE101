import { useState } from 'react';
import { Link } from 'react-router-dom';

const scheduleData = [
  {
    id: 'S001',
    tour: 'Immersive Day as a Traditional Mekong Delta Farmer',
    guide: 'Nguyen Van Tam',
    date: '2024-07-20',
    time: '08:00',
    location: 'Vinh Long Pier',
    status: 'confirmed',
    participants: 12,
    maxParticipants: 20
  },
  {
    id: 'S002',
    tour: 'Traditional Music & Sunset on the Mekong River',
    guide: 'Tran Thi Hoa',
    date: '2024-07-22',
    time: '16:00',
    location: 'Ninh Kieu Wharf, Can Tho',
    status: 'confirmed',
    participants: 10,
    maxParticipants: 15
  },
  {
    id: 'S003',
    tour: 'Mekong Memories – Floating Market & Traditional Craft Village',
    guide: 'Le Hoang Minh',
    date: '2024-07-25',
    time: '06:00',
    location: 'Cai Rang Floating Market, Can Tho',
    status: 'pending',
    participants: 8,
    maxParticipants: 12
  },
  {
    id: 'S004',
    tour: 'Immersive Day as a Traditional Mekong Delta Farmer',
    guide: 'Nguyen Van Tam',
    date: '2024-07-27',
    time: '08:00',
    location: 'Vinh Long Pier',
    status: 'confirmed',
    participants: 18,
    maxParticipants: 20
  },
  {
    id: 'S005',
    tour: 'Traditional Music & Sunset on the Mekong River',
    guide: 'Tran Thi Hoa',
    date: '2024-07-30',
    time: '16:30',
    location: 'Ninh Kieu Wharf, Can Tho',
    status: 'draft',
    participants: 5,
    maxParticipants: 15
  }
];


export default function StaffSchedule() {
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const filteredSchedules = scheduleData.filter(schedule => {
    const matchesStatus = selectedStatus === 'all' || schedule.status === selectedStatus;
    const matchesSearch = schedule.tour.toLowerCase().includes(searchTerm.toLowerCase()) ||
      schedule.guide.toLowerCase().includes(searchTerm.toLowerCase()) ||
      schedule.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDate = !selectedDate || schedule.date === selectedDate;
    return matchesStatus && matchesSearch && matchesDate;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'draft': return 'bg-gray-100 text-gray-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'confirmed': return 'ri-check-line';
      case 'pending': return 'ri-time-line';
      case 'draft': return 'ri-edit-line';
      case 'cancelled': return 'ri-close-line';
      default: return 'ri-question-line';
    }
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
            <Link to="/staff/tours" className="flex items-center px-4 py-3 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 cursor-pointer">
              <div className="w-5 h-5 flex items-center justify-center mr-3">
                <i className="ri-map-pin-line text-lg"></i>
              </div>
              Manage Tours
            </Link>
            <Link to="/staff/schedule" className="flex items-center px-4 py-3 rounded-lg text-sm font-medium bg-blue-100 text-blue-700 cursor-pointer">
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
              <h1 className="text-2xl font-bold text-gray-900">Tour Schedule</h1>
              <p className="text-sm text-gray-600">Manage and view all tour schedules</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                Add Schedule
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
                      placeholder="Search schedules..."
                      className="pl-10 pr-4 py-2 w-full sm:w-80 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>

                  <div className="flex gap-2">
                    {['all', 'confirmed', 'pending', 'draft', 'cancelled'].map((status) => (
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

                  <input
                    type="date"
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Schedule ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tour</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Guide</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Participants</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredSchedules.map((schedule) => (
                    <tr key={schedule.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {schedule.id}
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-gray-900">{schedule.tour}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">{schedule.guide}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{schedule.date}</div>
                          <div className="text-sm text-gray-500">{schedule.time}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">{schedule.location}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <div className="flex items-center">
                          <span className="mr-2">{schedule.participants}/{schedule.maxParticipants}</span>
                          <div className="w-16 bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-blue-600 h-2 rounded-full"
                              style={{ width: `${(schedule.participants / schedule.maxParticipants) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(schedule.status)}`}>
                          <i className={`${getStatusIcon(schedule.status)} mr-1`}></i>
                          {schedule.status}
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
                          {schedule.status === 'pending' && (
                            <button className="text-purple-600 hover:text-purple-700 cursor-pointer">
                              <div className="w-4 h-4 flex items-center justify-center">
                                <i className="ri-check-line"></i>
                              </div>
                            </button>
                          )}
                          {schedule.status !== 'cancelled' && (
                            <button className="text-red-600 hover:text-red-700 cursor-pointer">
                              <div className="w-4 h-4 flex items-center justify-center">
                                <i className="ri-close-line"></i>
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
                  Showing {filteredSchedules.length} of {scheduleData.length} schedules
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
    </div>
  );
} 