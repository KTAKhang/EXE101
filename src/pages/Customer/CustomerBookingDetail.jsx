import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import DashboardLayout from "../../components/Customer/DashboardLayout";

// Danh sách dữ liệu booking mẫu
const BOOKINGS = [
  {
    id: 'BK-2024-001',
    tour: 'A Day as a Farmer in the Mekong Delta',
    destination: 'Vinh Long / Can Tho',
    date: '2024-03-15',
    duration: '1 day (8:00 AM – 5:00 PM)',
    amount: '450,000 VND',
    status: 'confirmed',
    travelers: 2,
    bookingDate: '2024-01-20',
    paymentStatus: 'paid',
    paymentMethod: 'Credit Card',
    image: 'https://suntravelgroup.vn/media/4215/c%E1%BA%A7n-th%C6%A1-2.jpg?width=1300&height=720&mode=crop',
    description: 'Trải nghiệm một ngày làm nông dân miền Tây, tham gia các hoạt động nông nghiệp, nấu ăn, chụp ảnh và làm bánh truyền thống.',
    meetingPoint: 'Homestay hoặc điểm tập trung trung tâm',
    meetingTime: '08:00 AM',
    endTime: '05:00 PM',
    included: [
      '10–15 ảnh chỉnh sáng cơ bản (JPEG)',
      '2 ảnh bonus chỉnh chuyên nghiệp',
      'Gợi ý trang phục: nón lá, áo bà ba',
      'Tham gia thu hoạch trái cây, nấu ăn, làm bánh',
      'Ăn trưa tại nhà vườn',
      'Thuyền di chuyển vào vườn',
      'Bảo hiểm du lịch'
    ],
    notIncluded: [
      'Chi phí cá nhân',
      'Tiền tip',
      'Bảo hiểm ngoài chương trình',
      'Đồ uống ngoài bữa ăn'
    ],
    itinerary: [
      { time: '08:00', activity: 'Đón tại homestay hoặc điểm tập trung' },
      { time: '08:30 – 10:00', activity: 'Thu hoạch rau/trái cây cùng nông dân (đi thuyền vào vườn)' },
      { time: '10:00 – 11:30', activity: 'Học nấu món dân dã: cá lóc nướng, bánh xèo miền Tây' },
      { time: '11:30 – 13:00', activity: 'Ăn trưa tại nhà vườn, nghỉ võng truyền thống' },
      { time: '13:00 – 15:00', activity: 'Chụp ảnh tạo dáng ở ruộng/vườn/cảnh làng quê' },
      { time: '15:00 – 16:30', activity: 'Làm bánh truyền thống (bánh lá dứa, bánh tổ ong nướng)' },
      { time: '16:30 – 17:00', activity: 'Kết thúc, trả khách về điểm đón' }
    ],
    contactInfo: {
      name: 'John Smith',
      email: 'john.smith@email.com',
      phone: '+1 (555) 123-4567',
      specialRequests: 'Vegetarian meal preference'
    },
    photography: [
      '10–15 ảnh chỉnh sáng cơ bản (JPEG)',
      '2 ảnh bonus chỉnh chuyên nghiệp',
      'Gợi ý trang phục: nón lá, áo bà ba'
    ]
  },
  {
    id: 'BK-2024-002',
    tour: 'Traditional Music & Sunset on the Mekong River',
    destination: 'My Tho – Ben Tre',
    date: '2024-04-22',
    duration: 'Half-day (afternoon, 2:00 PM – 7:00 PM)',
    amount: '500,000 VND',
    status: 'pending',
    travelers: 1,
    bookingDate: '2024-02-10',
    paymentStatus: 'pending',
    paymentMethod: 'Credit Card',
    image: 'https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/6/27/du-lich-ben-tre-khach-tay-nghe-don-ca-tai-tu-tat-muong-bat-ca-lam-keo-dua-88966.jpg?width=0&s=8ERrUWb0g7GKF0LLlt16og',
    description: 'Khám phá cồn, vườn trái cây, nghe đờn ca tài tử trên sông, chụp ảnh hoàng hôn và trải nghiệm chèo xuồng.',
    meetingPoint: 'Bến du thuyền',
    meetingTime: '02:00 PM',
    endTime: '07:00 PM',
    included: [
      '15 ảnh góc rộng và chân dung',
      '1 video hậu trường highlight (30–60 giây)',
      'Gói premium: chỉnh ảnh nâng cao + album số (tùy chọn)',
      'Tham quan cồn, vườn trái cây, chèo xuồng',
      'Nghe đờn ca tài tử, thưởng trà',
      'Chụp ảnh concept "Mekong mộng mơ" trên sông lúc hoàng hôn'
    ],
    notIncluded: [
      'Chi phí cá nhân',
      'Tiền tip',
      'Bảo hiểm ngoài chương trình',
      'Đồ uống ngoài bữa ăn'
    ],
    itinerary: [
      { time: '14:00', activity: 'Đón tại bến du thuyền' },
      { time: '14:30 – 15:30', activity: 'Tham quan cồn, vườn trái cây, thưởng thức đặc sản' },
      { time: '15:30 – 16:30', activity: 'Chèo xuồng rạch nhỏ, chụp ảnh áo bà ba' },
      { time: '16:30 – 18:00', activity: 'Du thuyền lớn trên sông, nghe đờn ca tài tử, thưởng trà' },
      { time: '18:00 – 18:45', activity: 'Chụp ảnh hoàng hôn concept "Mekong mộng mơ"' },
      { time: '19:00', activity: 'Kết thúc tour' }
    ],
    contactInfo: {
      name: 'John Smith',
      email: 'john.smith@email.com',
      phone: '+1 (555) 123-4567',
      specialRequests: ''
    },
    photography: [
      '15 ảnh góc rộng và chân dung',
      '1 video hậu trường highlight (30–60 giây)',
      'Gói premium: chỉnh ảnh nâng cao + album số (tùy chọn)'
    ]
  },
  {
    id: 'BK-2023-015',
    tour: 'Memories of the Mekong – Floating Market & Traditional Crafts',
    destination: 'Cai Rang (Can Tho)',
    date: '2023-09-10',
    duration: 'Morning (5:30 AM – 11:00 AM)',
    amount: '400,000 VND',
    status: 'completed',
    travelers: 2,
    bookingDate: '2023-06-15',
    paymentStatus: 'paid',
    paymentMethod: 'Credit Card',
    image: 'https://anhdaomekong2hotel.vn/upload/images/du-lich-can-tho-1.png',
    description: 'Khám phá chợ nổi Cái Răng, làng nghề truyền thống, ăn sáng trên sông và chụp ảnh nghệ thuật vintage.',
    meetingPoint: 'Điểm đón trung tâm',
    meetingTime: '05:30 AM',
    endTime: '11:00 AM',
    included: [
      '12 ảnh chỉnh màu nhẹ',
      'Ăn sáng trên sông',
      'Tham quan làng nghề, trải nghiệm thủ công',
      'Chụp ảnh nghệ thuật vintage',
      'Bảo hiểm du lịch'
    ],
    notIncluded: [
      'Chi phí cá nhân',
      'Tiền tip',
      'Bảo hiểm ngoài chương trình',
      'Đồ uống ngoài bữa ăn'
    ],
    itinerary: [
      { time: '05:30', activity: 'Đón, đi thuyền ra chợ nổi Cái Răng' },
      { time: '06:00 – 07:00', activity: 'Ăn sáng trên sông với bún riêu/ hủ tiếu' },
      { time: '07:00 – 08:00', activity: 'Tham quan làng nghề bánh hỏi hoặc bún gạo' },
      { time: '08:00 – 09:30', activity: 'Trải nghiệm thủ công, chụp ảnh nghệ thuật vintage' },
      { time: '09:30 – 11:00', activity: 'Trở về, chụp ảnh sông nước sáng sớm' }
    ],
    contactInfo: {
      name: 'John Smith',
      email: 'john.smith@email.com',
      phone: '+1 (555) 123-4567',
      specialRequests: ''
    },
    photography: [
      '12 ảnh chỉnh màu nhẹ'
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