import { useState } from 'react';
import { Link } from 'react-router-dom';

const staffData = [
  { id: 'S001', name: 'Sarah Wilson', email: 'sarah.wilson@email.com', department: 'Customer Service', position: 'Senior Staff', status: 'active', permissions: ['bookings', 'tours', 'support'], lastActive: '2024-03-15 10:30', performance: 95 },
  { id: 'S002', name: 'Mike Johnson', email: 'mike.johnson@email.com', department: 'Tour Operations', position: 'Tour Guide', status: 'active', permissions: ['tours', 'schedule'], lastActive: '2024-03-15 09:15', performance: 88 },
  { id: 'S003', name: 'Emma Davis', email: 'emma.davis@email.com', department: 'Customer Service', position: 'Staff', status: 'inactive', permissions: ['bookings'], lastActive: '2024-03-10 14:20', performance: 72 },
  { id: 'S004', name: 'David Brown', email: 'david.brown@email.com', department: 'Tour Operations', position: 'Senior Guide', status: 'active', permissions: ['tours', 'schedule', 'bookings'], lastActive: '2024-03-15 11:45', performance: 92 },
  { id: 'S005', name: 'Lisa Garcia', email: 'lisa.garcia@email.com', department: 'Support', position: 'Support Specialist', status: 'active', permissions: ['support'], lastActive: '2024-03-15 08:30', performance: 89 },
  { id: 'S006', name: 'Tom Wilson', email: 'tom.wilson@email.com', department: 'Tour Operations', position: 'Tour Guide', status: 'active', permissions: ['tours', 'schedule'], lastActive: '2024-03-14 17:30', performance: 85 },
  { id: 'S007', name: 'Anna Martinez', email: 'anna.martinez@email.com', department: 'Customer Service', position: 'Staff', status: 'suspended', permissions: ['bookings'], lastActive: '2024-03-08 12:15', performance: 65 },
  { id: 'S008', name: 'James Lee', email: 'james.lee@email.com', department: 'Support', position: 'Support Lead', status: 'active', permissions: ['support', 'bookings'], lastActive: '2024-03-15 13:20', performance: 96 }
];

export default function AdminStaff() {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const filteredStaff = staffData.filter(staff => {
    const matchesDepartment = selectedDepartment === 'all' || staff.department === selectedDepartment;
    const matchesStatus = selectedStatus === 'all' || staff.status === selectedStatus;
    const matchesSearch = staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         staff.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         staff.id.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesDepartment && matchesStatus && matchesSearch;
  });

  const getDepartmentColor = (department) => {
    switch (department) {
      case 'Customer Service': return 'bg-blue-100 text-blue-800';
      case 'Tour Operations': return 'bg-green-100 text-green-800';
      case 'Support': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'inactive': return 'bg-gray-100 text-gray-800';
      case 'suspended': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPerformanceColor = (performance) => {
    if (performance >= 90) return 'text-green-600';
    if (performance >= 80) return 'text-yellow-600';
    return 'text-red-600';
  };

  const handleStaffAction = (staff, action) => {
    setSelectedStaff({ ...staff, action });
    setShowModal(true);
  };

  const confirmAction = () => {
    console.log(`${selectedStaff.action} staff ${selectedStaff.id}`);
    setShowModal(false);
    setSelectedStaff(null);
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
            <Link to="/admin-management/staff" className="flex items-center px-4 py-3 rounded-lg text-sm font-medium bg-blue-100 text-blue-700 cursor-pointer">
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
              <h1 className="text-2xl font-bold text-gray-900">Staff Management</h1>
              <p className="text-sm text-gray-600">Manage staff members and their permissions</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                Add New Staff
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
                      placeholder="Search staff..."
                      className="pl-10 pr-4 py-2 w-full sm:w-80 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  
                  <div className="flex gap-2">
                    {['all', 'Customer Service', 'Tour Operations', 'Support'].map((department) => (
                      <button
                        key={department}
                        onClick={() => setSelectedDepartment(department)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                          selectedDepartment === department
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        {department === 'all' ? 'All Departments' : department}
                      </button>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    {['all', 'active', 'inactive', 'suspended'].map((status) => (
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
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Staff ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Performance</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Active</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredStaff.map((staff) => (
                    <tr key={staff.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {staff.id}
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{staff.name}</div>
                          <div className="text-sm text-gray-500">{staff.email}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getDepartmentColor(staff.department)}`}>
                          {staff.department}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {staff.position}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(staff.status)}`}>
                          {staff.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <span className={`text-sm font-medium ${getPerformanceColor(staff.performance)}`}>
                            {staff.performance}%
                          </span>
                          <div className="w-16 bg-gray-200 rounded-full h-2 ml-2">
                            <div 
                              className={`h-2 rounded-full ${staff.performance >= 90 ? 'bg-green-600' : staff.performance >= 80 ? 'bg-yellow-600' : 'bg-red-600'}`}
                              style={{ width: `${staff.performance}%` }}
                            ></div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {staff.lastActive}
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
                          <button className="text-purple-600 hover:text-purple-700 cursor-pointer">
                            <div className="w-4 h-4 flex items-center justify-center">
                              <i className="ri-shield-keyhole-line"></i>
                            </div>
                          </button>
                          {staff.status === 'active' && (
                            <button
                              onClick={() => handleStaffAction(staff, 'suspend')}
                              className="text-yellow-600 hover:text-yellow-700 cursor-pointer"
                            >
                              <div className="w-4 h-4 flex items-center justify-center">
                                <i className="ri-pause-line"></i>
                              </div>
                            </button>
                          )}
                          {staff.status === 'suspended' && (
                            <button
                              onClick={() => handleStaffAction(staff, 'activate')}
                              className="text-green-600 hover:text-green-700 cursor-pointer"
                            >
                              <div className="w-4 h-4 flex items-center justify-center">
                                <i className="ri-play-line"></i>
                              </div>
                            </button>
                          )}
                          <button
                            onClick={() => handleStaffAction(staff, 'delete')}
                            className="text-red-600 hover:text-red-700 cursor-pointer"
                          >
                            <div className="w-4 h-4 flex items-center justify-center">
                              <i className="ri-delete-bin-line"></i>
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
                  Showing {filteredStaff.length} of {staffData.length} staff members
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
              {selectedStaff.action === 'delete' ? 'Delete Staff' : 
               selectedStaff.action === 'suspend' ? 'Suspend Staff' : 'Activate Staff'}
            </h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to {selectedStaff.action} staff member {selectedStaff.id} - {selectedStaff.name}?
            </p>
            <div className="flex gap-3">
              <button
                onClick={confirmAction}
                className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium ${
                  selectedStaff.action === 'delete'
                    ? 'bg-red-600 text-white hover:bg-red-700'
                    : selectedStaff.action === 'suspend'
                    ? 'bg-yellow-600 text-white hover:bg-yellow-700'
                    : 'bg-green-600 text-white hover:bg-green-700'
                }`}
              >
                {selectedStaff.action === 'delete' ? 'Delete' : 
                 selectedStaff.action === 'suspend' ? 'Suspend' : 'Activate'}
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