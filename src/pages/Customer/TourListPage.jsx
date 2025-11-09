import { useState } from "react";
import { Link } from "react-router-dom";

const TourListPage = () => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('');

  const tours = [
    {
      id: '1',
      title: 'Trải Nghiệm Bắt Cá & Hái Trái Cây – Cần Thơ',
      location: 'Phong Điền – Cần Thơ',
      price: 250000,
      duration: '3 hours',
      rating: 4.8,
      category: 'Adventure',
      image: 'https://images.unsplash.com/photo-1526318472351-bc6c2ac1f1c3?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: '2',
      title: 'Khám Phá Văn Hóa & Lịch Sử Sóc Trăng – 1 Ngày',
      location: 'Sóc Trăng',
      price: 350000,
      duration: '1 day',
      rating: 4.9,
      category: 'Cultural',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80'
    }
  ];

  const locations = ['All Locations', 'Asia', 'Europe', 'Africa', 'Americas'];
  const priceRanges = ['All Prices', 'Under $1000', '$1000-$1500', '$1500-$2000', 'Over $2000'];
  const durations = ['All Durations', '1-5 days', '6-10 days', 'Over 10 days'];

  const filteredTours = tours.filter(tour => {
    if (selectedLocation && selectedLocation !== 'All Locations') {
      const locationMatch = {
        'Asia': ['Bali, Indonesia', 'Kyoto, Japan'],
        'Europe': ['Swiss Alps, Switzerland', 'Greek Islands'],
        'Africa': ['Kenya, Africa'],
        'Americas': ['Peru, South America']
      };
      if (!locationMatch[selectedLocation]?.includes(tour.location)) return false;
    }

    if (selectedPriceRange && selectedPriceRange !== 'All Prices') {
      const priceMatch = {
        'Under $1000': tour.price < 1000,
        '$1000-$1500': tour.price >= 1000 && tour.price <= 1500,
        '$1500-$2000': tour.price >= 1500 && tour.price <= 2000,
        'Over $2000': tour.price > 2000
      };
      if (!priceMatch[selectedPriceRange]) return false;
    }

    if (selectedDuration && selectedDuration !== 'All Durations') {
      const days = parseInt(tour.duration);
      const durationMatch = {
        '1-5 days': days <= 5,
        '6-10 days': days >= 6 && days <= 10,
        'Over 10 days': days > 10
      };
      if (!durationMatch[selectedDuration]) return false;
    }

    return true;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">All Tours</h1>
          <p className="text-xl text-blue-100">Discover amazing destinations around the world</p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <div className="relative">
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full px-4 py-2 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white cursor-pointer"
                >
                  {locations.map(location => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <i className="ri-arrow-down-s-line text-gray-400"></i>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
              <div className="relative">
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="w-full px-4 py-2 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white cursor-pointer"
                >
                  {priceRanges.map(range => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <i className="ri-arrow-down-s-line text-gray-400"></i>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
              <div className="relative">
                <select
                  value={selectedDuration}
                  onChange={(e) => setSelectedDuration(e.target.value)}
                  className="w-full px-4 py-2 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white cursor-pointer"
                >
                  {durations.map(duration => (
                    <option key={duration} value={duration}>{duration}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <i className="ri-arrow-down-s-line text-gray-400"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {filteredTours.length} Tours Found
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTours.map((tour) => (
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2 flex-1">{tour.title}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-gray-600">
                      <i className="ri-time-line mr-1"></i>
                      {tour.duration}
                    </div>
                    <div className="text-xl font-bold text-blue-600">
                      {tour.price}
                    </div>
                  </div>
                  <Link to={`/customer/tours/${tour.id}`} className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 block text-center">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredTours.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg">No tours found matching your criteria</div>
              <button
                onClick={() => {
                  setSelectedLocation('');
                  setSelectedPriceRange('');
                  setSelectedDuration('');
                }}
                className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default TourListPage;