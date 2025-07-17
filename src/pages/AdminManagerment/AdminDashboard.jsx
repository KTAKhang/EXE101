import { Link } from 'react-router-dom';
import StatsCard from './components/StatsCard';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const revenueData = [
  { month: 'Jan', revenue: 45000, profit: 32000, users: 120 },
  { month: 'Feb', revenue: 52000, profit: 38000, users: 145 },
  { month: 'Mar', revenue: 48000, profit: 35000, users: 138 },
  { month: 'Apr', revenue: 61000, profit: 44000, users: 167 },
  { month: 'May', revenue: 55000, profit: 40000, users: 152 },
  { month: 'Jun', revenue: 67000, profit: 48000, users: 185 }
];

const userData = [
  { name: 'Customers', value: 1250, color: '#3B82F6' },
  { name: 'Staff', value: 45, color: '#10B981' },
  { name: 'Admins', value: 8, color: '#F59E0B' },
  { name: 'Inactive', value: 23, color: '#EF4444' }
];

const recentActivities = [
  { id: 'T001', user: 'Admin', action: 'Published new tour', target: 'Immersive Day as a Farmer', time: '10 minutes ago', type: 'create' },
  { id: 'T002', user: 'Admin', action: 'Updated itinerary', target: 'Mekong Memories Tour', time: '20 minutes ago', type: 'update' },
  { id: 'T003', user: 'Admin', action: 'Added photo package', target: 'Sunset on Mekong River', time: '35 minutes ago', type: 'update' },
  { id: 'T004', user: 'System', action: 'Synced booking data', target: 'All tours', time: '1 hour ago', type: 'system' },
  { id: 'T005', user: 'Admin', action: 'Removed expired promo', target: 'Tour 1', time: '2 hours ago', type: 'delete' }
];


const systemStatus = [
  { service: 'Web Server', status: 'online', uptime: '99.9%', response: '45ms' },
  { service: 'Database', status: 'online', uptime: '99.8%', response: '12ms' },
  { service: 'Payment Gateway', status: 'online', uptime: '99.7%', response: '78ms' },
  { service: 'Email Service', status: 'warning', uptime: '98.5%', response: '120ms' },
  { service: 'File Storage', status: 'online', uptime: '99.9%', response: '23ms' }
];

export default function AdminDashboard() {
  const getActivityColor = (type) => {
    switch (type) {
      case 'create': return 'bg-green-100 text-green-800';
      case 'update': return 'bg-blue-100 text-blue-800';
      case 'delete': return 'bg-red-100 text-red-800';
      case 'system': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'online': return 'bg-green-100 text-green-800';
      case 'warning': return 'bg-yellow-100 text-yellow-800';
      case 'offline': return 'bg-red-100 text-red-800';
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
            AdminPro
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <div className="space-y-2">
            <Link to="/admin-management" className="flex items-center px-4 py-3 rounded-lg text-sm font-medium bg-blue-100 text-blue-700 cursor-pointer">
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
            <Link to="/admin-management/analytics" className="flex items-center px-4 py-3 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 cursor-pointer">
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
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-sm text-gray-600">Complete system overview and management</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium">
                Emergency Mode
              </button>
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
              title="Total Revenue"
              value="5,045,280 VND"
              icon="ri-money-dollar-circle-fill"
              color="bg-green-500"
              change="+23% from last month"
              changeType="positive"
            />
            <StatsCard
              title="Active Users"
              value="1,247"
              icon="ri-user-fill"
              color="bg-blue-500"
              change="+12% from last month"
              changeType="positive"
            />
            <StatsCard
              title="System Uptime"
              value="99.9%"
              icon="ri-server-fill"
              color="bg-purple-500"
              change="+0.1% from last month"
              changeType="positive"
            />
            <StatsCard
              title="Pending Actions"
              value="8"
              icon="ri-time-fill"
              color="bg-yellow-500"
              change="-3 from yesterday"
              changeType="negative"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue Trends</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="revenue" stroke="#3B82F6" fill="#93C5FD" />
                    <Area type="monotone" dataKey="profit" stroke="#10B981" fill="#6EE7B7" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">User Distribution</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={userData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {userData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Recent Activities</h3>
                <Link to="/admin-management/analytics" className="text-sm text-blue-600 hover:text-blue-700 cursor-pointer">
                  View All
                </Link>
              </div>
              <div className="space-y-3">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{activity.user}</p>
                      <p className="text-xs text-gray-600">{activity.action} - {activity.target}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                    <div className="text-right">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getActivityColor(activity.type)}`}>
                        {activity.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">System Status</h3>
                <Link to="/admin-management/system" className="text-sm text-blue-600 hover:text-blue-700 cursor-pointer">
                  View Details
                </Link>
              </div>
              <div className="space-y-3">
                {systemStatus.map((service, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{service.service}</p>
                      <p className="text-xs text-gray-600">Uptime: {service.uptime} | Response: {service.response}</p>
                    </div>
                    <div className="text-right">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(service.status)}`}>
                        {service.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <button className="flex flex-col items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer">
                <div className="w-8 h-8 flex items-center justify-center mb-2">
                  <i className="ri-user-add-line text-blue-600 text-xl"></i>
                </div>
                <span className="text-sm font-medium text-blue-700">Add User</span>
              </button>
              <button className="flex flex-col items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors cursor-pointer">
                <div className="w-8 h-8 flex items-center justify-center mb-2">
                  <i className="ri-team-add-line text-green-600 text-xl"></i>
                </div>
                <span className="text-sm font-medium text-green-700">Add Staff</span>
              </button>
              <button className="flex flex-col items-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors cursor-pointer">
                <div className="w-8 h-8 flex items-center justify-center mb-2">
                  <i className="ri-database-2-line text-purple-600 text-xl"></i>
                </div>
                <span className="text-sm font-medium text-purple-700">Backup System</span>
              </button>
              <button className="flex flex-col items-center p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors cursor-pointer">
                <div className="w-8 h-8 flex items-center justify-center mb-2">
                  <i className="ri-shield-check-line text-orange-600 text-xl"></i>
                </div>
                <span className="text-sm font-medium text-orange-700">Security Scan</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 