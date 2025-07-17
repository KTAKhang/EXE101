import { Link } from 'react-router-dom';
import StatsCard from './components/StatsCard';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const bookingData = [
  { month: 'Jan', bookings: 45 },
  { month: 'Feb', bookings: 52 },
  { month: 'Mar', bookings: 48 },
  { month: 'Apr', bookings: 61 },
  { month: 'May', bookings: 55 },
  { month: 'Jun', bookings: 67 }
];

const recentBookings = [
  { id: 'B001', customer: 'Nguyen Van A', tour: 'Immersive Day as a Farmer', date: '2025-07-14', status: 'confirmed', amount: '450,000 VND' },
  { id: 'B002', customer: 'Tran Thi B', tour: 'Traditional Music & Sunset', date: '2025-07-13', status: 'pending', amount: '500,000 VND' },
  { id: 'B003', customer: 'Le Van C', tour: 'Mekong Memories', date: '2025-07-12', status: 'confirmed', amount: '400,000 VND' },
  { id: 'B004', customer: 'Pham Thi D', tour: 'Immersive Day as a Farmer', date: '2025-07-11', status: 'cancelled', amount: '450,000 VND' },
  { id: 'B005', customer: 'Hoang Van E', tour: 'Traditional Music & Sunset', date: '2025-07-10', status: 'confirmed', amount: '500,000 VND' }
];


const upcomingTours = [
  { id: 'T001', name: 'Immersive Day as a Farmer', departure: '2025-07-18', duration: '1 day', participants: 12, guide: 'Mr. Binh' },
  { id: 'T002', name: 'Traditional Music & Sunset', departure: '2025-07-19', duration: 'Half-day', participants: 10, guide: 'Ms. Hoa' },
  { id: 'T003', name: 'Mekong Memories', departure: '2025-07-20', duration: 'Morning', participants: 15, guide: 'Mr. Long' }
];


export default function StaffDashboard() {
  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
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
            <Link to="/staff" className="flex items-center px-4 py-3 rounded-lg text-sm font-medium bg-blue-100 text-blue-700 cursor-pointer">
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
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-sm text-gray-600">Welcome back! Here&apos;s what&apos;s happening with your tours today.</p>
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

        {/* Dashboard Content */}
        <div className="px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatsCard
              title="Total Bookings"
              value={342}
              icon="ri-calendar-check-fill"
              color="bg-blue-500"
              change="+12% from last month"
              changeType="positive"
            />
            <StatsCard
              title="Active Tours"
              value={28}
              icon="ri-map-pin-fill"
              color="bg-green-500"
              change="+5% from last month"
              changeType="positive"
            />
            <StatsCard
              title="Pending Bookings"
              value={15}
              icon="ri-time-fill"
              color="bg-yellow-500"
              change="-8% from last month"
              changeType="negative"
            />
            <StatsCard
              title="Revenue"
              value="5,045,280 VND"
              icon="ri-money-dollar-circle-fill"
              color="bg-purple-500"
              change="+18% from last month"
              changeType="positive"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Booking Trends</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={bookingData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="bookings" stroke="#3B82F6" fill="#93C5FD" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-4">
                <button className="flex flex-col items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer">
                  <div className="w-8 h-8 flex items-center justify-center mb-2">
                    <i className="ri-add-circle-line text-blue-600 text-xl"></i>
                  </div>
                  <span className="text-sm font-medium text-blue-700">Add New Tour</span>
                </button>
                <button className="flex flex-col items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors cursor-pointer">
                  <div className="w-8 h-8 flex items-center justify-center mb-2">
                    <i className="ri-calendar-check-line text-green-600 text-xl"></i>
                  </div>
                  <span className="text-sm font-medium text-green-700">Confirm Booking</span>
                </button>
                <button className="flex flex-col items-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors cursor-pointer">
                  <div className="w-8 h-8 flex items-center justify-center mb-2">
                    <i className="ri-calendar-schedule-line text-purple-600 text-xl"></i>
                  </div>
                  <span className="text-sm font-medium text-purple-700">Update Schedule</span>
                </button>
                <button className="flex flex-col items-center p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors cursor-pointer">
                  <div className="w-8 h-8 flex items-center justify-center mb-2">
                    <i className="ri-customer-service-line text-orange-600 text-xl"></i>
                  </div>
                  <span className="text-sm font-medium text-orange-700">Support Ticket</span>
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Recent Bookings</h3>
                <Link to="/staff/bookings" className="text-sm text-blue-600 hover:text-blue-700 cursor-pointer">
                  View All
                </Link>
              </div>
              <div className="space-y-3">
                {recentBookings.map((booking) => (
                  <div key={booking.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{booking.customer}</p>
                      <p className="text-xs text-gray-600">{booking.tour}</p>
                      <p className="text-xs text-gray-500">{booking.date}</p>
                    </div>
                    <div className="text-right">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(booking.status)}`}>
                        {booking.status}
                      </span>
                      <p className="text-sm font-medium text-gray-900 mt-1">{booking.amount}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Upcoming Tours</h3>
                <Link to="/staff/tours" className="text-sm text-blue-600 hover:text-blue-700 cursor-pointer">
                  View All
                </Link>
              </div>
              <div className="space-y-3">
                {upcomingTours.map((tour) => (
                  <div key={tour.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{tour.name}</p>
                      <p className="text-xs text-gray-600">{tour.departure} • {tour.duration}</p>
                      <p className="text-xs text-gray-500">Guide: {tour.guide}</p>
                    </div>
                    <div className="text-right">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-xs font-medium text-blue-700">{tour.participants}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}