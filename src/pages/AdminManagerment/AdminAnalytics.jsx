import { Link } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';

const analyticsData = [
  { month: 'Jan', revenue: 45000, users: 120, bookings: 89, tours: 15 },
  { month: 'Feb', revenue: 52000, users: 145, bookings: 102, tours: 18 },
  { month: 'Mar', revenue: 48000, users: 138, bookings: 95, tours: 16 },
  { month: 'Apr', revenue: 61000, users: 167, bookings: 128, tours: 22 },
  { month: 'May', revenue: 55000, users: 152, bookings: 115, tours: 19 },
  { month: 'Jun', revenue: 67000, users: 185, bookings: 142, tours: 25 }
];

const userGrowthData = [
  { day: 'Mon', newUsers: 12, activeUsers: 89, returningUsers: 67 },
  { day: 'Tue', newUsers: 15, activeUsers: 92, returningUsers: 71 },
  { day: 'Wed', newUsers: 18, activeUsers: 95, returningUsers: 74 },
  { day: 'Thu', newUsers: 14, activeUsers: 88, returningUsers: 69 },
  { day: 'Fri', newUsers: 22, activeUsers: 105, returningUsers: 82 },
  { day: 'Sat', newUsers: 25, activeUsers: 118, returningUsers: 95 },
  { day: 'Sun', newUsers: 20, activeUsers: 112, returningUsers: 88 }
];

const topToursData = [
  { name: 'Bali Adventure', bookings: 45, revenue: 58500, rating: 4.8 },
  { name: 'Tokyo Cultural', bookings: 38, revenue: 81700, rating: 4.9 },
  { name: 'Paris Romance', bookings: 32, revenue: 59200, rating: 4.7 },
  { name: 'Swiss Alps', bookings: 28, revenue: 67200, rating: 4.6 },
  { name: 'Mediterranean', bookings: 25, revenue: 80000, rating: 4.5 }
];

const deviceData = [
  { name: 'Desktop', value: 45, color: '#3B82F6' },
  { name: 'Mobile', value: 38, color: '#10B981' },
  { name: 'Tablet', value: 12, color: '#F59E0B' },
  { name: 'Other', value: 5, color: '#EF4444' }
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