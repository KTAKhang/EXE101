export default function StatsCard({ title, value, icon, color, change, changeType }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          {change && (
            <div className={`flex items-center mt-2 text-sm ${
              changeType === 'positive' ? 'text-green-600' : 'text-red-600'
            }`}>
              <div className="w-4 h-4 flex items-center justify-center mr-1">
                <i className={`ri-arrow-${changeType === 'positive' ? 'up' : 'down'}-line`}></i>
              </div>
              <span>{change}</span>
            </div>
          )}
        </div>
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${color}`}>
          <div className="w-6 h-6 flex items-center justify-center">
            <i className={`${icon} text-white text-lg`}></i>
          </div>
        </div>
      </div>
    </div>
  );
} 