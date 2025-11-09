import { useState } from "react";
import { Link } from "react-router-dom";
import anh3 from "../../assets/img/a3.jpg";
import anh5 from "../../assets/img/a5.jpg";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  // Dữ liệu tour mẫu
  const allTours = [
    {
      id: '1',
      title: 'Trải Nghiệm Bắt Cá & Hái Trái Cây – Cần Thơ',
      location: 'Phong Điền – Cần Thơ',
      category: 'Trải nghiệm',
      price: 250000,
      duration: '3 giờ',
      rating: 4.8,
      image: anh3
    },
    {
      id: '2',
      title: 'Khám Phá Văn Hóa & Lịch Sử Sóc Trăng – 1 Ngày',
      location: 'Sóc Trăng',
      category: 'Văn hóa – Lịch sử',
      price: 350000,
      duration: '1 ngày',
      rating: 4.9,
      image: anh5
    }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setIsSearching(true);

    // Giả lập delay API
    setTimeout(() => {
      const results = allTours.filter(tour =>
        tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tour.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tour.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(results);
      setIsSearching(false);
    }, 500);
  };

  const handleQuickSearch = (term) => {
    setSearchQuery(term);
    const results = allTours.filter(tour =>
      tour.title.toLowerCase().includes(term.toLowerCase()) ||
      tour.location.toLowerCase().includes(term.toLowerCase()) ||
      tour.category.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResults(results);
  };

  const popularSearches = [
    'Cần Thơ',
    'Sóc Trăng',
    'Miền Tây',
    'Chợ nổi',
    'Bắt cá',
    'Trải nghiệm nông dân'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tìm Kiếm Tour</h1>
          <p className="text-xl text-blue-100">Khám phá những hành trình thú vị tại miền Tây</p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Search Form */}
          <form onSubmit={handleSearch} className="mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Tìm kiếm theo địa điểm, tên tour, loại tour..."
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-gray-400 hover:text-gray-600"
                >
                  <i className="ri-search-line text-xl"></i>
                </button>
              </div>

              <button
                type="submit"
                disabled={isSearching}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSearching ? (
                  <span className="flex items-center">
                    <i className="ri-loader-4-line animate-spin mr-2"></i>
                    Đang tìm...
                  </span>
                ) : (
                  'Tìm kiếm'
                )}
              </button>
            </div>
          </form>

          {/* Popular Searches */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Tìm kiếm phổ biến</h3>
            <div className="flex flex-wrap gap-2">
              {popularSearches.map((term) => (
                <button
                  key={term}
                  onClick={() => handleQuickSearch(term)}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>

          {/* Search Results */}
          {searchResults.length > 0 && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Tìm thấy {searchResults.length} tour
                </h2>
                <p className="text-gray-600">Từ khóa: "{searchQuery}"</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {searchResults.map((tour) => (
                  <div
                    key={tour.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                  >
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

                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {tour.title}
                      </h3>

                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center text-gray-600">
                          <i className="ri-time-line mr-1"></i>
                          {tour.duration}
                        </div>
                        <div className="text-2xl font-bold text-blue-600">
                          {tour.price.toLocaleString()}đ
                        </div>
                      </div>

                      <Link
                        to={`/tours/${tour.id}`}
                        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 block text-center"
                      >
                        Xem chi tiết
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* No Results */}
          {searchQuery && searchResults.length === 0 && !isSearching && (
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg mb-4">
                Không tìm thấy tour nào với từ khóa "{searchQuery}"
              </div>
              <p className="text-gray-400 mb-6">
                Hãy thử từ khóa khác hoặc xem các tour phổ biến
              </p>

              <Link
                to="/tours"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
              >
                Xem tất cả tour
              </Link>
            </div>
          )}

          {/* Initial State */}
          {!searchQuery && searchResults.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg mb-4">
                Bắt đầu hành trình của bạn bằng cách tìm kiếm tour
              </div>
              <p className="text-gray-400">
                Khám phá những trải nghiệm độc đáo và thú vị tại miền Tây
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default SearchPage;
