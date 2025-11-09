import { Link } from "react-router-dom";

const CustomerHomePage = () => {
  const featuredTours = [
    {
      id: '1',
      title: 'Trải Nghiệm Bắt Cá & Hái Trái Cây – Cần Thơ',
      location: 'Phong Điền – Cần Thơ',
      price: "250,000 VND",
      duration: '2–3 giờ',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1526318472351-bc6c2ac1f1c3?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: '2',
      title: 'Khám Phá Văn Hóa & Lịch Sử Sóc Trăng – 1 Ngày',
      location: 'Sóc Trăng',
      price: "350,000 VND",
      duration: '1 ngày (8:00 – 17:00)',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=Stunning%20travel%20destination%20panoramic%20view%20with%20mountains%2C%20ocean%2C%20and%20adventure%20activities%2C%20epic%20landscape%20for%20travel%20website%20hero%20section%2C%20inspiring%20wanderlust%20feeling%2C%20professional%20travel%20photography&width=1920&height=1080&seq=hero-travel&orientation=landscape')`
        }}
      >
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Discover Your Next Adventure
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Explore breathtaking destinations and create unforgettable memories with our expertly crafted tours
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/tours" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 whitespace-nowrap">
              Explore Tours
            </Link>
            <Link to="/search" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 whitespace-nowrap">
              Search Destinations
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Tours</h2>
            <p className="text-xl text-gray-600">Handpicked adventures for every type of traveler</p>
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
                    <div className="text-2xl font-bold text-blue-600">
                      {tour.price}
                    </div>
                  </div>
                  <Link to={`/tours/${tour.id}`} className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 block text-center">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/tours" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700">
              View All Tours
            </Link>
          </div>
        </div>
      </section>

      {/* Promotions */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Special Offers</h2>
          <p className="text-xl text-blue-100 mb-8">Limited time deals you don't want to miss</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mx-auto mb-4">
                <i className="ri-percent-line text-2xl text-green-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Early Bird Special</h3>
              <p className="text-gray-600 mb-4">Book 3 months in advance and save up to 25% on all tours</p>
              <div className="text-3xl font-bold text-green-600 mb-4">25% OFF</div>
              <Link to="/tours" className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700">
                Book Now
              </Link>
            </div>

            <div className="bg-white rounded-xl p-8 text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-orange-100 rounded-full mx-auto mb-4">
                <i className="ri-truck-line text-2xl text-orange-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Group Discount</h3>
              <p className="text-gray-600 mb-4">Travel with friends and family - groups of 4+ get exclusive rates</p>
              <div className="text-3xl font-bold text-orange-600 mb-4">15% OFF</div>
              <Link to="/contact" className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600">Your trusted partner for quality products</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-4">
                <i className="ri-shield-check-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Guides</h3>
              <p className="text-gray-600">Professional local guides with deep knowledge of destinations</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mx-auto mb-4">
                <i className="ri-customer-service-line text-2xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer support for your peace of mind</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-purple-100 rounded-full mx-auto mb-4">
                <i className="ri-medal-line text-2xl text-purple-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Best Value</h3>
              <p className="text-gray-600">Competitive prices with premium experiences included</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomerHomePage;