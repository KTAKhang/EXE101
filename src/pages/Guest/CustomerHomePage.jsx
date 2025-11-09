import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import anh3 from "../../assets/img/a3.jpg"
import anh5 from "../../assets/img/a5.jpg"
const CustomerHomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://readdy.ai/api/search-image?query=Stunning%20travel%20destination%20panoramic%20view%20with%20mountains%2C%20ocean%2C%20and%20adventure%20activities%2C%20epic%20landscape%20for%20travel%20website%20hero%20section%2C%20inspiring%20wanderlust%20feeling%2C%20professional%20travel%20photography&width=1920&height=1080&seq=hero-travel&orientation=landscape',
      title: 'Khám Phá Hành Trình Tiếp Theo Của Bạn',
      description: 'Trải nghiệm những điểm đến tuyệt đẹp và tạo nên những kỷ niệm khó quên với các tour được thiết kế chuyên nghiệp'
    },
    {
      image: 'https://transviet.com.vn/Media/Uploads/tour/HL/VN/tim-ve-mien-tay-song-nuoc-hanh-trinh-tren-dat-phu-sa.jpg',
      title: 'Trải Nghiệm Miền Tây Sông Nước',
      description: 'Khám phá vẻ đẹp bình dị của đồng bằng sông Cửu Long với vườn trái cây và làng nghề truyền thống'
    },
    {
      image: 'https://exotrails.com/wp-content/uploads/2024/11/chua-som-rong.jpg',
      title: 'Khám Phá Di Sản Văn Hóa',
      description: 'Hành trình khám phá những ngôi chùa cổ kính và di tích lịch sử độc đáo của vùng đất phương Nam'
    },
    {
      image: 'https://booking.muongthanh.com/upload_images/images/2024%20-%20Nh/thuong-thuc-am-thuc-cho-noi.jpg',
      title: 'Chợ Nổi Cần Thơ',
      description: 'Trải nghiệm không gian mua bán độc đáo trên sông nước và thưởng thức ẩm thực địa phương đặc sắc'
    }
  ];

  const featuredTours = [
    {
      id: '1',
      title: 'Trải Nghiệm Bắt Cá & Hái Trái Cây – Cần Thơ',
      location: 'Phong Điền – Cần Thơ',
      price: "250,000 VND",
      duration: '2–3 giờ',
      rating: 4.8,
      image: anh3
    },
    {
      id: '2',
      title: 'Khám Phá Văn Hóa & Lịch Sử Sóc Trăng – 1 Ngày',
      location: 'Sóc Trăng',
      price: "350,000 VND",
      duration: '1 ngày (8:00 – 17:00)',
      rating: 4.9,
      image: anh5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Carousel Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${slide.image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="h-full flex items-center justify-center">
              <div className="text-center text-white max-w-4xl mx-auto px-4">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-200">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/tours" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 whitespace-nowrap">
                    Khám Phá Tour
                  </Link>
                  <Link to="/search" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 whitespace-nowrap">
                    Tìm Điểm Đến
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft size={32} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition z-10"
          aria-label="Next slide"
        >
          <ChevronRight size={32} />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === currentSlide
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/75'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Featured Tours */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tour Nổi Bật</h2>
            <p className="text-xl text-gray-600">Những hành trình được lựa chọn dành riêng cho bạn</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTours.map((tour) => (
              <div key={tour.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
                <div className="relative h-48 bg-gray-200">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-sm font-semibold">
                    <i className="ri-star-fill text-yellow-400 mr-1"></i>
                    {tour.rating}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-2">
                    <i className="ri-map-pin-line mr-1"></i>
                    {tour.location}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{tour.title}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-gray-600">
                      <i className="ri-time-line mr-1"></i>
                      {tour.duration}
                    </div>
                    <div className="text-2xl font-bold text-blue-600">{tour.price}</div>
                  </div>
                  <Link to={`/tours/${tour.id}`} className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 block text-center">
                    Xem Chi Tiết
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/tours" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700">
              Xem Tất Cả Tour
            </Link>
          </div>
        </div>
      </section>

      {/* Promotions */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ưu Đãi Đặc Biệt</h2>
          <p className="text-xl text-blue-100 mb-8">Các chương trình khuyến mãi giới hạn thời gian</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Early Bird */}
            <div className="bg-white rounded-xl p-8 text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mx-auto mb-4">
                <i className="ri-percent-line text-2xl text-green-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Giá Sớm – Early Bird</h3>
              <p className="text-gray-600 mb-4">Đặt trước 3 tháng và nhận ưu đãi lên đến 25%</p>
              <div className="text-3xl font-bold text-green-600 mb-4">25% GIẢM</div>
              <Link to="/tours" className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700">
                Đặt Ngay
              </Link>
            </div>

            {/* Group Discount */}
            <div className="bg-white rounded-xl p-8 text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-orange-100 rounded-full mx-auto mb-4">
                <i className="ri-user-group-line text-2xl text-orange-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Giảm Giá Nhóm</h3>
              <p className="text-gray-600 mb-4">Đi theo nhóm 4 người trở lên để nhận giá ưu đãi đặc biệt</p>
              <div className="text-3xl font-bold text-orange-600 mb-4">15% GIẢM</div>
              <Link to="/contact" className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700">
                Liên Hệ Tư Vấn
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tại Sao Chọn Chúng Tôi</h2>
            <p className="text-xl text-gray-600">Người bạn đồng hành đáng tin cậy cho mọi chuyến đi</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-4">
                <i className="ri-shield-check-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Hướng Dẫn Viên Chuyên Nghiệp</h3>
              <p className="text-gray-600">Đội ngũ am hiểu sâu sắc văn hóa & lịch sử địa phương</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mx-auto mb-4">
                <i className="ri-customer-service-line text-2xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Hỗ Trợ 24/7</h3>
              <p className="text-gray-600">Luôn sẵn sàng hỗ trợ bạn trong mọi tình huống</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-purple-100 rounded-full mx-auto mb-4">
                <i className="ri-medal-line text-2xl text-purple-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Giá Trị Tốt Nhất</h3>
              <p className="text-gray-600">Giá hợp lý – trải nghiệm chất lượng cao</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomerHomePage;