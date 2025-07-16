import { Link } from "react-router-dom";
import { useState } from 'react';
import DashboardLayout from "../../../components/Customer/DashboardLayout";

export default function Favorites() {
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      title: 'Romantic Paris Getaway',
      destination: 'Paris, France',
      duration: '5 days',
      price: '$1,299',
      rating: 4.8,
      reviews: 245,
      image: 'https://readdy.ai/api/search-image?query=Romantic%20Paris%20evening%20scene%20with%20Eiffel%20Tower%20illuminated%20golden%20lights%20Seine%20river%20reflection%20couples%20walking%20tree-lined%20boulevards%20charming%20atmosphere%20warm%20ambient%20lighting&width=400&height=250&seq=paris2&orientation=landscape',
      tags: ['Romantic', 'City Break', 'Culture']
    },
    {
      id: 2,
      title: 'Tokyo Cultural Experience',
      destination: 'Tokyo, Japan',
      duration: '7 days',
      price: '$2,199',
      rating: 4.9,
      reviews: 189,
      image: 'https://readdy.ai/api/search-image?query=Tokyo%20cultural%20experience%20traditional%20temples%20modern%20cityscape%20cherry%20blossoms%20Japanese%20architecture%20peaceful%20zen%20gardens%20cultural%20immersion%20authentic%20atmosphere%20serene%20lighting&width=400&height=250&seq=tokyo2&orientation=landscape',
      tags: ['Culture', 'Adventure', 'Food']
    },
    {
      id: 3,
      title: 'Mediterranean Sailing',
      destination: 'Greek Islands',
      duration: '10 days',
      price: '$3,499',
      rating: 4.7,
      reviews: 156,
      image: 'https://readdy.ai/api/search-image?query=Mediterranean%20sailing%20adventure%20Greek%20islands%20crystal%20blue%20waters%20white%20cliff%20villages%20luxury%20sailboat%20peaceful%20ocean%20sunset%20golden%20hour%20pristine%20waters%20sailing%20experience&width=400&height=250&seq=sailing1&orientation=landscape',
      tags: ['Sailing', 'Luxury', 'Islands']
    },
    {
      id: 4,
      title: 'Swiss Alps Adventure',
      destination: 'Switzerland',
      duration: '8 days',
      price: '$2,799',
      rating: 4.6,
      reviews: 203,
      image: 'https://readdy.ai/api/search-image?query=Swiss%20Alps%20mountain%20adventure%20snow-capped%20peaks%20alpine%20villages%20hiking%20trails%20pristine%20nature%20outdoor%20activities%20breathtaking%20mountain%20scenery%20crystal%20clear%20lakes%20adventure%20tourism&width=400&height=250&seq=swiss1&orientation=landscape',
      tags: ['Adventure', 'Nature', 'Hiking']
    },
    {
      id: 5,
      title: 'Bali Wellness Retreat',
      destination: 'Bali, Indonesia',
      duration: '6 days',
      price: '$1,899',
      rating: 4.8,
      reviews: 167,
      image: 'https://readdy.ai/api/search-image?query=Bali%20wellness%20retreat%20tropical%20paradise%20rice%20terraces%20luxury%20spa%20peaceful%20meditation%20zen%20gardens%20bamboo%20architecture%20serene%20natural%20environment%20healing%20atmosphere&width=400&height=250&seq=bali1&orientation=landscape',
      tags: ['Wellness', 'Spa', 'Tropical']
    },
    {
      id: 6,
      title: 'African Safari Expedition',
      destination: 'Kenya & Tanzania',
      duration: '12 days',
      price: '$4,999',
      rating: 4.9,
      reviews: 134,
      image: 'https://readdy.ai/api/search-image?query=African%20safari%20expedition%20majestic%20wildlife%20elephants%20lions%20giraffes%20natural%20savanna%20landscape%20acacia%20trees%20golden%20sunset%20adventure%20photography%20pristine%20wilderness%20luxury%20safari%20camp&width=400&height=250&seq=safari2&orientation=landscape',
      tags: ['Safari', 'Wildlife', 'Adventure']
    }
  ]);

  const removeFavorite = (id) => {
    setFavorites(favorites.filter(fav => fav.id !== id));
  };

  return (
    <DashboardLayout activeTab="favorites">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Favorites</h1>
          <p className="text-gray-600">Tours you've saved for later</p>
        </div>

        {favorites.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favorites.map((tour) => (
              <div key={tour.id} className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-all duration-200">
                <div className="relative">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-48 object-cover object-top rounded-t-lg"
                  />
                  <button
                    onClick={() => removeFavorite(tour.id)}
                    className="absolute top-3 right-3 w-8 h-8 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all cursor-pointer"
                  >
                    <i className="ri-heart-fill text-red-500"></i>
                  </button>
                  <div className="absolute bottom-3 left-3">
                    <span className="px-2 py-1 bg-black bg-opacity-60 text-white text-xs rounded-full whitespace-nowrap">
                      {tour.duration}
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <div className="mb-2">
                    <h3 className="font-semibold text-gray-900 mb-1">{tour.title}</h3>
                    <p className="text-sm text-gray-600 flex items-center">
                      <div className="w-4 h-4 flex items-center justify-center mr-1">
                        <i className="ri-map-pin-line"></i>
                      </div>
                      {tour.destination}
                    </p>
                  </div>

                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      <div className="w-4 h-4 flex items-center justify-center mr-1">
                        <i className="ri-star-fill text-yellow-400"></i>
                      </div>
                      <span className="text-sm font-medium text-gray-900">{tour.rating}</span>
                      <span className="text-sm text-gray-500 ml-1">({tour.reviews})</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {tour.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full whitespace-nowrap"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t">
                    <div>
                      <span className="text-lg font-bold text-gray-900">{tour.price}</span>
                      <span className="text-sm text-gray-500 ml-1">per person</span>
                    </div>
                    <Link
                      to={`/tours/${tour.id}`}
                      className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-heart-line text-gray-400 text-3xl"></i>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No favorites yet</h3>
            <p className="text-gray-500 mb-6">Start exploring tours and save your favorites here.</p>
            <Link
              to="/tours"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap"
            >
              Explore Tours
            </Link>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}