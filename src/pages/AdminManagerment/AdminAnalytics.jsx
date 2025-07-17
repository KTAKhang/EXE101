import { Link } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';

const analyticsData = [
  { month: 'Jan', revenue: 450000, users: 30, bookings: 25, tours: 1 },
  { month: 'Feb', revenue: 500000, users: 35, bookings: 30, tours: 1 },
  { month: 'Mar', revenue: 400000, users: 40, bookings: 28, tours: 1 },
  { month: 'Apr', revenue: 900000, users: 60, bookings: 52, tours: 2 },
  { month: 'May', revenue: 1200000, users: 72, bookings: 65, tours: 3 },
  { month: 'Jun', revenue: 1350000, users: 80, bookings: 70, tours: 3 }
];


const userGrowthData = [
  { day: 'Mon', newUsers: 5, activeUsers: 28, returningUsers: 18 },
  { day: 'Tue', newUsers: 8, activeUsers: 30, returningUsers: 22 },
  { day: 'Wed', newUsers: 10, activeUsers: 34, returningUsers: 26 },
  { day: 'Thu', newUsers: 6, activeUsers: 31, returningUsers: 21 },
  { day: 'Fri', newUsers: 12, activeUsers: 38, returningUsers: 30 },
  { day: 'Sat', newUsers: 15, activeUsers: 44, returningUsers: 35 },
  { day: 'Sun', newUsers: 11, activeUsers: 40, returningUsers: 33 }
];


const topToursData = [
  { name: 'Mekong Delta Farmer', bookings: 65, revenue: 450000 * 65, rating: 4.8 },
  { name: 'Sunset on Mekong River', bookings: 52, revenue: 500000 * 52, rating: 4.9 },
  { name: 'Floating Market & Craft Village', bookings: 70, revenue: 400000 * 70, rating: 4.7 }
];


const deviceData = [
  { name: 'Mobile', value: 60, color: '#10B981' },
  { name: 'Desktop', value: 30, color: '#3B82F6' },
  { name: 'Tablet', value: 7, color: '#F59E0B' },
  { name: 'Other', value: 3, color: '#EF4444' }
];


export default function AdminAnalytics() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <div className="text-2xl font-pacifico text-blue-600">
            AdminPro
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <div className="space-y-2">
            <Link to="/admin-management" className="flex items-center px-4 py-3 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 cursor-pointer">
              <div className="w-5 h-5 flex items-center justify-center mr-3">
                <i className="ri-dashboard-line text-lg"></i>
              </div>
              Dashboard
            </Link>
            <Link to="/admin-management/users" className="flex items-center px-4 py-3 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 cursor-pointer">
              <div className="w-5 h-5 flex items-center justify-center mr-3">
                <i className="ri-user-line text-lg"></i>
              </div>
              User Management
            </Link>
            <Link to="/admin-management/staff" className="flex items-center px-4 py-3 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 cursor-pointer">
              <div className="w-5 h-5 flex items-center justify-center mr-3">
                <i className="ri-team-line text-lg"></i>
              </div>
              Staff Management
            </Link>
            <Link to="/admin-management/system" className="flex items-center px-4 py-3 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 cursor-pointer">
              <div className="w-5 h-5 flex items-center justify-center mr-3">
                <i className="ri-server-line text-lg"></i>
              </div>
              System Monitor
            </Link>
            <Link to="/admin-management/analytics" className="flex items-center px-4 py-3 rounded-lg text-sm font-medium bg-blue-100 text-blue-700 cursor-pointer">
              <div className="w-5 h-5 flex items-center justify-center mr-3">
                <i className="ri-bar-chart-line text-lg"></i>
              </div>
              Analytics
            </Link>
            <Link to="/admin-management/settings" className="flex items-center px-4 py-3 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 cursor-pointer">
              <div className="w-5 h-5 flex items-center justify-center mr-3">
                <i className="ri-settings-3-line text-lg"></i>
              </div>
              System Settings
            </Link>
          </div>
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50">
            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">AD</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-700">Admin User</p>
              <p className="text-xs text-gray-500">Super Administrator</p>
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
              <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
              <p className="text-sm text-gray-600">Detailed business analytics and insights</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                Export Report
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue & Bookings Trend</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={analyticsData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="revenue" stroke="#3B82F6" fill="#93C5FD" />
                    <Area type="monotone" dataKey="bookings" stroke="#10B981" fill="#6EE7B7" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">User Growth (Weekly)</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={userGrowthData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="newUsers" stroke="#3B82F6" strokeWidth={2} />
                    <Line type="monotone" dataKey="activeUsers" stroke="#10B981" strokeWidth={2} />
                    <Line type="monotone" dataKey="returningUsers" stroke="#F59E0B" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performing Tours</h3>
              <div className="space-y-3">
                {topToursData.map((tour, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{tour.name}</p>
                      <div className="flex items-center gap-4 mt-1">
                        <span className="text-xs text-gray-600">{tour.bookings} bookings</span>
                        <span className="text-xs text-gray-600">${tour.revenue.toLocaleString()}</span>
                        <span className="text-xs text-gray-600">⭐ {tour.rating}</span>
                      </div>
                    </div>
                    <div className="w-16 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${(tour.bookings / 45) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Device Usage</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={deviceData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {deviceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Key Metrics</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">$328,450</div>
                <div className="text-sm text-gray-600">Total Revenue</div>
                <div className="text-xs text-green-600 mt-1">+23% from last month</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">1,247</div>
                <div className="text-sm text-gray-600">Active Users</div>
                <div className="text-xs text-green-600 mt-1">+12% from last month</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">671</div>
                <div className="text-sm text-gray-600">Total Bookings</div>
                <div className="text-xs text-green-600 mt-1">+18% from last month</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">4.8</div>
                <div className="text-sm text-gray-600">Average Rating</div>
                <div className="text-xs text-green-600 mt-1">+0.2 from last month</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 