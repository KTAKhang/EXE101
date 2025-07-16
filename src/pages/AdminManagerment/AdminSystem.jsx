import { useState } from 'react';
import { Link } from 'react-router-dom';

const systemData = [
  { service: 'Web Server', status: 'online', uptime: '99.9%', response: '45ms', cpu: 23, memory: 67, disk: 45 },
  { service: 'Database', status: 'online', uptime: '99.8%', response: '12ms', cpu: 15, memory: 89, disk: 78 },
  { service: 'Payment Gateway', status: 'online', uptime: '99.7%', response: '78ms', cpu: 8, memory: 34, disk: 12 },
  { service: 'Email Service', status: 'warning', uptime: '98.5%', response: '120ms', cpu: 45, memory: 92, disk: 23 },
  { service: 'File Storage', status: 'online', uptime: '99.9%', response: '23ms', cpu: 12, memory: 56, disk: 89 },
  { service: 'CDN', status: 'online', uptime: '99.9%', response: '8ms', cpu: 5, memory: 23, disk: 15 },
  { service: 'Backup Service', status: 'offline', uptime: '0%', response: 'N/A', cpu: 0, memory: 0, disk: 0 },
  { service: 'Monitoring', status: 'online', uptime: '99.9%', response: '5ms', cpu: 3, memory: 12, disk: 8 }
];

const logsData = [
  { id: 'L001', level: 'INFO', service: 'Web Server', message: 'Server started successfully', timestamp: '2024-03-15 10:30:15' },
  { id: 'L002', level: 'WARNING', service: 'Email Service', message: 'High memory usage detected', timestamp: '2024-03-15 10:28:42' },
  { id: 'L003', level: 'ERROR', service: 'Backup Service', message: 'Backup failed - insufficient disk space', timestamp: '2024-03-15 10:25:18' },
  { id: 'L004', level: 'INFO', service: 'Database', message: 'Connection pool optimized', timestamp: '2024-03-15 10:22:33' },
  { id: 'L005', level: 'INFO', service: 'Payment Gateway', message: 'Transaction processed successfully', timestamp: '2024-03-15 10:20:55' }
];

export default function AdminSystem() {
  const [selectedStatus, setSelectedStatus] = useState('all');


  const filteredSystem = systemData.filter(service => {
    const matchesStatus = selectedStatus === 'all' || service.status === selectedStatus;
    return matchesStatus;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'online': return 'bg-green-100 text-green-800';
      case 'warning': return 'bg-yellow-100 text-yellow-800';
      case 'offline': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getLogLevelColor = (level) => {
    switch (level) {
      case 'INFO': return 'bg-blue-100 text-blue-800';
      case 'WARNING': return 'bg-yellow-100 text-yellow-800';
      case 'ERROR': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getResourceColor = (value) => {
    if (value >= 90) return 'text-red-600';
    if (value >= 70) return 'text-yellow-600';
    return 'text-green-600';
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
            <Link to="/admin-management/system" className="flex items-center px-4 py-3 rounded-lg text-sm font-medium bg-blue-100 text-blue-700 cursor-pointer">
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
              <h1 className="text-2xl font-bold text-gray-900">System Monitor</h1>
              <p className="text-sm text-gray-600">Real-time system monitoring and logs</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
                Restart All Services
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">System Services</h3>
                <div className="flex gap-2">
                  {['all', 'online', 'warning', 'offline'].map((status) => (
                    <button
                      key={status}
                      onClick={() => setSelectedStatus(status)}
                      className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
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
              <div className="space-y-3">
                {filteredSystem.map((service, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-sm font-medium text-gray-900">{service.service}</p>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(service.status)}`}>
                          {service.status}
                        </span>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-xs text-gray-600">
                        <div>Uptime: {service.uptime}</div>
                        <div>Response: {service.response}</div>
                        <div>CPU: <span className={getResourceColor(service.cpu)}>{service.cpu}%</span></div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 mt-1">
                        <div className="text-xs text-gray-600">
                          Memory: <span className={getResourceColor(service.memory)}>{service.memory}%</span>
                        </div>
                        <div className="text-xs text-gray-600">
                          Disk: <span className={getResourceColor(service.disk)}>{service.disk}%</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      <button className="text-blue-600 hover:text-blue-700 cursor-pointer">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <i className="ri-refresh-line"></i>
                        </div>
                      </button>
                      <button className="text-green-600 hover:text-green-700 cursor-pointer">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <i className="ri-restart-line"></i>
                        </div>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">System Logs</h3>
                <button className="text-sm text-blue-600 hover:text-blue-700 cursor-pointer">
                  View All Logs
                </button>
              </div>
              <div className="space-y-3">
                {logsData.map((log) => (
                  <div key={log.id} className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-1">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getLogLevelColor(log.level)}`}>
                        {log.level}
                      </span>
                      <span className="text-xs text-gray-500">{log.timestamp}</span>
                    </div>
                    <p className="text-sm font-medium text-gray-900 mb-1">{log.service}</p>
                    <p className="text-xs text-gray-600">{log.message}</p>
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
                  <i className="ri-database-2-line text-blue-600 text-xl"></i>
                </div>
                <span className="text-sm font-medium text-blue-700">Backup System</span>
              </button>
              <button className="flex flex-col items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors cursor-pointer">
                <div className="w-8 h-8 flex items-center justify-center mb-2">
                  <i className="ri-restart-line text-green-600 text-xl"></i>
                </div>
                <span className="text-sm font-medium text-green-700">Restart Services</span>
              </button>
              <button className="flex flex-col items-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors cursor-pointer">
                <div className="w-8 h-8 flex items-center justify-center mb-2">
                  <i className="ri-shield-check-line text-purple-600 text-xl"></i>
                </div>
                <span className="text-sm font-medium text-purple-700">Security Scan</span>
              </button>
              <button className="flex flex-col items-center p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors cursor-pointer">
                <div className="w-8 h-8 flex items-center justify-center mb-2">
                  <i className="ri-settings-3-line text-orange-600 text-xl"></i>
                </div>
                <span className="text-sm font-medium text-orange-700">System Config</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 