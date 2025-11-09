import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import DashboardLayout from "../../components/Customer/DashboardLayout";

// Danh sách dữ liệu booking mẫu
const BOOKINGS = [
  {
    id: '1',
    title: 'Trải Nghiệm Bắt Cá & Hái Trái Cây – Cần Thơ',
    location: 'Phong Điền – Cần Thơ',
    price: "250,000 VND",
    rating: 4.8,
    reviews: 112,
    duration: '2–3 giờ',
    groupSize: 'Tối đa 12 khách',
    difficulty: 'Dễ',
    description:
      'Trải nghiệm đời sống miệt vườn Cần Thơ: lội mương bắt cá, hái trái cây tại vườn, thưởng thức ẩm thực dân dã và chụp ảnh phong cảnh đồng quê cực chill.',
    highlights: [
      'Lội mương bắt cá như nông dân miền Tây',
      'Hái trái cây theo mùa tại vườn',
      'Thưởng thức bánh xèo miền Tây tự tay làm',
      'Chụp ảnh với áo bà ba và khung cảnh đồng quê',
      'Tham quan vườn trái cây – ăn trái tại chỗ'
    ],
    itinerary: {
      '8:00 AM': 'Tập trung tại điểm hẹn Phong Điền – nhận áo bà ba',
      '8:15 – 9:00 AM': 'Hái trái cây theo mùa tại vườn',
      '9:00 – 10:00 AM': 'Lội mương bắt cá – trải nghiệm vui nhộn',
      '10:00 – 11:00 AM': 'Đổ bánh xèo miền Tây – dùng bữa trưa nhẹ',
      '11:00 – 12:00 AM': 'Chụp ảnh “miệt vườn vibe” & nghỉ ngơi võng'
    },
    includes: [
      'Áo bà ba & nón lá',
      '1 bữa ăn nhẹ (bánh xèo, trái cây)',
      'Nước uống miễn phí',
      'Vé tham quan vườn',
      'Chi phí trải nghiệm bắt cá & hái trái cây',
      'Hướng dẫn viên bản địa'
    ],
    images: [
      'https://images.unsplash.com/photo-1526318472351-bc6c2ac1f1c3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1463595373836-6e0b0a8ee322?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80'
    ]
  },

  {
    id: '2',
    title: 'Khám Phá Văn Hóa & Lịch Sử Sóc Trăng – 1 Ngày',
    location: 'Sóc Trăng',
    price: "350,000 VND",
    rating: 4.9,
    reviews: 98,
    duration: '1 ngày (8:00 – 17:00)',
    groupSize: 'Tối đa 20 khách',
    difficulty: 'Dễ',
    description:
      'Hành trình khám phá văn hoá Khmer đặc sắc tại Sóc Trăng: chùa Som Rong, chùa Dơi, bảo tàng Khmer và trải nghiệm ẩm thực truyền thống.',
    highlights: [
      'Tham quan chùa Som Rong – tuyệt đẹp với tượng Phật nằm',
      'Khám phá chùa Dơi linh thiêng',
      'Tham quan bảo tàng văn hóa Khmer',
      'Chụp ảnh phong cách Khmer truyền thống',
      'Thưởng thức bún nước lèo và bánh Pía đặc sản Sóc Trăng'
    ],
    itinerary: {
      '8:00 AM': 'Đón khách tại trung tâm Sóc Trăng',
      '8:30 – 10:00 AM': 'Tham quan chùa Som Rong – điểm check-in nổi tiếng',
      '10:00 – 11:30 AM': 'Khám phá chùa Dơi – tìm hiểu văn hoá Phật giáo Nam Tông',
      '11:30 AM – 1:00 PM': 'Ăn trưa với món Khmer truyền thống',
      '1:00 – 3:00 PM': 'Thăm Bảo tàng Văn hoá Khmer',
      '3:00 – 5:00 PM': 'Tự do tham quan & mua đặc sản bánh Pía – kết thúc tour'
    },
    includes: [
      'Vé vào cổng các điểm tham quan',
      'Hướng dẫn viên văn hóa Khmer',
      'Bữa trưa món Khmer truyền thống',
      'Nước uống & khăn lạnh',
      'Bảo hiểm du lịch',
      'Xe đưa đón suốt hành trình'
    ],
    images: [
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1494475673543-6a6a27143b16?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1200&q=80'
    ]
  }
];

export default function BookingDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showCancelModal, setShowCancelModal] = useState(false);

  // Tìm booking theo id
  const booking = BOOKINGS.find(b => b.id === id);

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleCancelBooking = () => {
    // Handle cancel booking logic
    setShowCancelModal(false);
  };

  if (!booking) {
    return (
      <DashboardLayout activeTab="bookings">
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Booking not found</h2>
          <p className="text-gray-600 mb-6">We couldn't find the booking you are looking for.</p>
          <button onClick={() => navigate(-1)} className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Go Back</button>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout activeTab="bookings">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate(-1)}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer"
            >
              <i className="ri-arrow-left-line text-gray-600"></i>
            </button>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Booking Details</h1>
              <p className="text-gray-600">Booking ID: {booking.id}</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <span className={`px-3 py-1 text-sm font-medium rounded-full whitespace-nowrap ${getStatusColor(booking.status)}`}>
              {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
            </span>
            {booking.status === 'confirmed' && (
              <button
                onClick={() => setShowCancelModal(true)}
                className="px-4 py-2 border border-red-300 text-red-700 rounded-lg hover:bg-red-50 transition-colors cursor-pointer whitespace-nowrap"
              >
                Cancel Booking
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Tour Information */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="relative">
                <img
                  src={booking.image}
                  alt={booking.tour}
                  className="w-full h-64 object-cover object-top rounded-t-lg"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{booking.tour}</h2>
                <div className="flex items-center text-gray-600 mb-4">
                  <div className="w-4 h-4 flex items-center justify-center mr-2">
                    <i className="ri-map-pin-line"></i>
                  </div>
                  {booking.destination}
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">{booking.description}</p>
                <div className="mb-2">
                  <span className="font-semibold text-gray-900">Duration:</span> {booking.duration}
                </div>
                <div className="mb-2">
                  <span className="font-semibold text-gray-900">Estimated Price:</span> {booking.amount}
                </div>
                <div className="mb-2">
                  <span className="font-semibold text-gray-900">Meeting Point:</span> {booking.meetingPoint}
                </div>
                <div className="mb-2">
                  <span className="font-semibold text-gray-900">Meeting Time:</span> {booking.meetingTime}
                </div>
              </div>
            </div>

            {/* Itinerary */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b">
                <h3 className="text-lg font-semibold text-gray-900">Detailed Itinerary</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {booking.itinerary.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-32 text-sm font-medium text-blue-600">{item.time}</div>
                      <div className="flex-1">
                        <p className="text-gray-900">{item.activity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* What's Included */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b">
                <h3 className="text-lg font-semibold text-gray-900">What&apos;s Included</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                      <div className="w-4 h-4 flex items-center justify-center mr-2">
                        <i className="ri-check-line text-green-600"></i>
                      </div>
                      Included
                    </h4>
                    <ul className="space-y-2">
                      {booking.included.map((item, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-start">
                          <div className="w-4 h-4 flex items-center justify-center mr-2 mt-0.5">
                            <i className="ri-check-line text-green-500 text-xs"></i>
                          </div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                      <div className="w-4 h-4 flex items-center justify-center mr-2">
                        <i className="ri-close-line text-red-600"></i>
                      </div>
                      Not Included
                    </h4>
                    <ul className="space-y-2">
                      {booking.notIncluded.map((item, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-start">
                          <div className="w-4 h-4 flex items-center justify-center mr-2 mt-0.5">
                            <i className="ri-close-line text-red-500 text-xs"></i>
                          </div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Photography */}
            {booking.photography && (
              <div className="bg-white rounded-lg shadow-sm">
                <div className="p-6 border-b">
                  <h3 className="text-lg font-semibold text-gray-900">Photography Package</h3>
                </div>
                <div className="p-6">
                  <ul className="list-disc pl-6 space-y-2">
                    {booking.photography.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-700">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Booking Summary */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b">
                <h3 className="text-lg font-semibold text-gray-900">Booking Summary</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Date</span>
                  <span className="font-medium text-gray-900">{new Date(booking.date).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration</span>
                  <span className="font-medium text-gray-900">{booking.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Travelers</span>
                  <span className="font-medium text-gray-900">{booking.travelers} person{booking.travelers > 1 ? 's' : ''}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Meeting Point</span>
                  <span className="font-medium text-gray-900">{booking.meetingPoint}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Meeting Time</span>
                  <span className="font-medium text-gray-900">{booking.meetingTime}</span>
                </div>
                <div className="pt-4 border-t">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold text-gray-900">Total Amount</span>
                    <span className="text-lg font-bold text-blue-600">{booking.amount}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Information */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b">
                <h3 className="text-lg font-semibold text-gray-900">Payment Information</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Payment Status</span>
                  <span className={`px-2 py-1 text-xs rounded-full whitespace-nowrap ${booking.paymentStatus === 'paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                    {booking.paymentStatus.charAt(0).toUpperCase() + booking.paymentStatus.slice(1)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Payment Method</span>
                  <span className="font-medium text-gray-900">{booking.paymentMethod}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Booking Date</span>
                  <span className="font-medium text-gray-900">{new Date(booking.bookingDate).toLocaleDateString()}</span>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b">
                <h3 className="text-lg font-semibold text-gray-900">Contact Information</h3>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <span className="text-sm text-gray-600">Name</span>
                  <p className="font-medium text-gray-900">{booking.contactInfo.name}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Email</span>
                  <p className="font-medium text-gray-900">{booking.contactInfo.email}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Phone</span>
                  <p className="font-medium text-gray-900">{booking.contactInfo.phone}</p>
                </div>
                {booking.contactInfo.specialRequests && booking.contactInfo.specialRequests !== '' && (
                  <div>
                    <span className="text-sm text-gray-600">Special Requests</span>
                    <p className="font-medium text-gray-900">{booking.contactInfo.specialRequests}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 space-y-3">
                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">
                  Download Voucher
                </button>
                <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                  Contact Support
                </button>
                <Link
                  to="/customer/reviews"
                  className="w-full px-4 py-2 border border-blue-300 text-blue-700 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer text-center block"
                >
                  Write Review
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Cancel Modal */}
        {showCancelModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-md w-full">
              <div className="p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mx-auto mb-4">
                  <i className="ri-error-warning-line text-red-600 text-xl"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 text-center mb-2">Cancel Booking</h3>
                <p className="text-gray-600 text-center mb-6">
                  Are you sure you want to cancel this booking? This action cannot be undone.
                </p>
                <div className="flex space-x-3">
                  <button
                    onClick={() => setShowCancelModal(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 cursor-pointer"
                  >
                    Keep Booking
                  </button>
                  <button
                    onClick={handleCancelBooking}
                    className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 cursor-pointer"
                  >
                    Cancel Booking
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
} 