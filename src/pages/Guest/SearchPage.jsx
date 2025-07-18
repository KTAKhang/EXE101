import { useState } from "react";
import { Link } from "react-router-dom";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  // Mock tours data
  const allTours = [
    {
      id: '1',
      title: 'Immersive Day as a Traditional Mekong Delta Farmer',
      location: 'Vinh Long / Can Tho',
      category: 'Beach',
      price: "450,000 VND",
      duration: '1 day',
      rating: 4.7,
      image: 'https://suntravelgroup.vn/media/4215/c%E1%BA%A7n-th%C6%A1-2.jpg?width=1300&height=720&mode=crop'
    },
    {
      id: '2',
      title: 'Traditional Music & Sunset on the Mekong River',
      location: 'My Tho – Ben Tre',
      category: 'Adventure',
      price: "500,000 VND",
      duration: 'Half-day afternoon',
      rating: 4.6,
      image: 'https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/6/27/du-lich-ben-tre-khach-tay-nghe-don-ca-tai-tu-tat-muong-bat-ca-lam-keo-dua-88966.jpg?width=0&s=8ERrUWb0g7GKF0LLlt16og'
    },
    {
      id: '3',
      title: 'Mekong Memories – Floating Market & Traditional Craft Village',
      location: 'Cai Rang (Can Tho)',
      category: 'Cultural',
      price: "400,000 VND",
      duration: 'Morning',
      rating: 4.8,
      image: 'https://anhdaomekong2hotel.vn/upload/images/du-lich-can-tho-1.png'
    }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setIsSearching(true);

    // Simulate API call delay
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

  const popularSearches = ['Bali', 'Adventure', 'Cultural', 'Beach', 'Mountain', 'Safari'];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Search Tours</h1>
          <p className="text-xl text-blue-100">Find your perfect adventure destination</p>
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
                  placeholder="Search for destinations, tour types, or locations..."
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
                    Searching...
                  </span>
                ) : (
                  'Search'
                )}
              </button>
            </div>
          </form>

          {/* Popular Searches */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Destinations</h3>
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
                  {searchResults.length} Tours Found
                </h2>
                <p className="text-gray-600">Search: "{searchQuery}"</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {searchResults.map((tour) => (
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
                        <div className="text-2xl font-bold text-blue-600">
                          ${tour.price}
                        </div>
                      </div>
                      <Link to={`/customer/tours/${tour.id}`} className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 block text-center">
                        View Details
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
              <div className="text-gray-500 text-lg mb-4">No tours found matching "{searchQuery}"</div>
              <p className="text-gray-400 mb-6">Try searching for different keywords or browse our popular destinations</p>
              <Link to="/customer/tours" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
                Browse All Tours
              </Link>
            </div>
          )}

          {/* Initial State */}
          {!searchQuery && searchResults.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg mb-4">Start your journey by searching for destinations</div>
              <p className="text-gray-400">Discover amazing tours and adventures around the world</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default SearchPage; 