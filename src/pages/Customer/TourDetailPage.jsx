import { useState } from "react";
import { useParams } from "react-router-dom";

// Tour data - in a real app, this would come from your data file
const tours = [
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

const TourDetailPage = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);

  const tour = tours.find((t) => t.id === id);

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600 text-lg">Tour not found.</p>
      </div>
    );
  }

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <i
          key={i}
          className={`ri-star-fill ${i <= Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
        />
      );
    }
    return stars;
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Tour Images */}
            <div>
              <div className="mb-4">
                <img
                  src={tour?.images?.[selectedImage]}
                  alt={tour.title}
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {tour.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`border-2 rounded-lg overflow-hidden ${selectedImage === index ? 'border-blue-500' : 'border-gray-200'}`}
                  >
                    <img
                      src={image}
                      alt={`${tour.title} ${index + 1}`}
                      className="w-full h-24 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Tour Info */}
            <div>
              <div className="mb-6">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <i className="ri-map-pin-line mr-1"></i>
                  {tour.location}
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{tour.title}</h1>
                <div className="flex items-center mb-4">
                  <div className="flex items-center mr-4">
                    {renderStars(tour.rating)}
                    <span className="ml-2 text-gray-600">{tour.rating}</span>
                  </div>
                  <span className="text-gray-500">({tour.reviews} reviews)</span>
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-6">{tour.price}</div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-lg font-semibold text-gray-900">{tour.duration}</div>
                    <div className="text-sm text-gray-600">Duration</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-lg font-semibold text-gray-900">{tour.groupSize}</div>
                    <div className="text-sm text-gray-600">Group Size</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-lg font-semibold text-gray-900">{tour.difficulty}</div>
                    <div className="text-sm text-gray-600">Difficulty</div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed">{tour.description}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  <i className="ri-calendar-line mr-2"></i>
                  Book Now
                </button>
                <button className="flex-1 bg-gray-100 text-gray-800 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                  <i className="ri-heart-line mr-2"></i>
                  Add to Wishlist
                </button>
              </div>

              {/* Highlights */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Highlights</h3>
                <ul className="space-y-2">
                  {tour.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <i className="ri-check-line text-green-500 mr-2"></i>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Itinerary */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Itinerary</h3>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="space-y-4">
                {Object.entries(tour.itinerary).map(([day, activity]) => (
                  <div key={day} className="flex justify-between py-2 border-b border-gray-200 last:border-b-0">
                    <span className="font-medium text-gray-700">{day}</span>
                    <span className="text-gray-600">{activity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* What&apos;s Included */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">What&apos;s Included</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tour.includes.map((item, index) => (
                <div key={index} className="flex items-center text-gray-700">
                  <i className="ri-check-line text-green-500 mr-2"></i>
                  {item}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default TourDetailPage;