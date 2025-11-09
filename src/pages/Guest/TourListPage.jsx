import { useState } from "react";
import { Link } from "react-router-dom";
import anh3 from "../../assets/img/a3.jpg";
import anh5 from "../../assets/img/a5.jpg";

const TourListPage = () => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("");

  // ✅ DANH SÁCH TOUR VIỆT NAM
  const tours = [
    {
      id: "1",
      title: "Trải Nghiệm Bắt Cá & Hái Trái Cây – Cần Thơ",
      location: "Phong Điền – Cần Thơ",
      price: 250000,
      duration: "3 giờ",
      rating: 4.8,
      category: "Trải nghiệm",
      image: anh3,
    },
    {
      id: "2",
      title: "Khám Phá Văn Hóa & Lịch Sử Sóc Trăng – 1 Ngày",
      location: "Sóc Trăng",
      price: 350000,
      duration: "1 ngày",
      rating: 4.9,
      category: "Văn hóa",
      image: anh5,
    },
  ];

  // ✅ BỘ LỌC PHÙ HỢP VIỆT NAM
  const locations = [
    "Tất cả địa điểm",
    "Cần Thơ",
    "Sóc Trăng",
    "Bến Tre",
    "An Giang",
    "Vĩnh Long",
  ];

  const priceRanges = [
    "Tất cả giá",
    "Dưới 200.000đ",
    "200.000đ - 300.000đ",
    "300.000đ - 500.000đ",
    "Trên 500.000đ",
  ];

  const durations = [
    "Tất cả thời lượng",
    "Dưới 4 giờ",
    "Nửa ngày",
    "1 ngày",
    "Trên 1 ngày",
  ];

  // ✅ LỌC TOUR
  const filteredTours = tours.filter((tour) => {
    if (selectedLocation && selectedLocation !== "Tất cả địa điểm") {
      if (!tour.location.includes(selectedLocation)) return false;
    }

    if (selectedPriceRange && selectedPriceRange !== "Tất cả giá") {
      const price = tour.price;

      const priceMatch = {
        "Dưới 200.000đ": price < 200000,
        "200.000đ - 300.000đ": price >= 200000 && price <= 300000,
        "300.000đ - 500.000đ": price >= 300000 && price <= 500000,
        "Trên 500.000đ": price > 500000,
      };

      if (!priceMatch[selectedPriceRange]) return false;
    }

    if (selectedDuration && selectedDuration !== "Tất cả thời lượng") {
      const hours = tour.duration.includes("giờ")
        ? parseInt(tour.duration)
        : tour.duration.includes("ngày")
          ? parseInt(tour.duration) * 24
          : 0;

      const timeMatch = {
        "Dưới 4 giờ": hours < 4,
        "Nửa ngày": hours >= 4 && hours <= 6,
        "1 ngày": hours >= 24 && hours < 30,
        "Trên 1 ngày": hours >= 30,
      };

      if (!timeMatch[selectedDuration]) return false;
    }

    return true;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tour Miền Tây</h1>
          <p className="text-xl text-blue-100">
            Khám phá văn hóa – thiên nhiên – ẩm thực miền Tây sông nước
          </p>
        </div>
      </section>

      {/* Bộ lọc */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Địa điểm */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Địa điểm
              </label>
              <div className="relative">
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full px-4 py-2 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white cursor-pointer"
                >
                  {locations.map((l) => (
                    <option key={l} value={l}>
                      {l}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Giá */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Giá
              </label>
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white cursor-pointer"
              >
                {priceRanges.map((range) => (
                  <option key={range} value={range}>
                    {range}
                  </option>
                ))}
              </select>
            </div>

            {/* Thời lượng */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Thời lượng
              </label>
              <select
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white cursor-pointer"
              >
                {durations.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Danh sách tour */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-gray-900">
            {filteredTours.length} tour được tìm thấy
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTours.map((tour) => (
              <div
                key={tour.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl overflow-hidden"
              >
                <div className="relative h-48">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-sm font-semibold">
                    ⭐ {tour.rating}
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-gray-500 text-sm flex items-center mb-2">
                    📍 {tour.location}
                  </div>

                  <h3 className="text-xl font-bold mb-2">{tour.title}</h3>

                  <div className="flex justify-between items-center mb-4">
                    <div className="text-gray-600">⏱ {tour.duration}</div>
                    <div className="text-xl font-bold text-blue-600">
                      {tour.price.toLocaleString("vi-VN")}đ
                    </div>
                  </div>

                  <Link
                    to={`/tours/${tour.id}`}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg block text-center font-semibold hover:bg-blue-700"
                  >
                    Xem chi tiết
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Không có tour */}
          {filteredTours.length === 0 && (
            <div className="text-center py-10">
              <p className="text-gray-500 text-lg">
                Không có tour nào phù hợp với bộ lọc của bạn
              </p>
              <button
                onClick={() => {
                  setSelectedLocation("");
                  setSelectedPriceRange("");
                  setSelectedDuration("");
                }}
                className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
              >
                Xóa bộ lọc
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default TourListPage;
