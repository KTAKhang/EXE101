import { Link } from "react-router-dom";
import { useState } from 'react';
import DashboardLayout from "../../components/Customer/DashboardLayout";

export default function Favorites() {
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      title: 'Immersive Day as a Traditional Mekong Delta Farmer',
      destination: 'Vinh Long / Can Tho',
      duration: '1 day',
      price: '450,000 VND',
      rating: 4.8,
      reviews: 124,
      image: 'https://suntravelgroup.vn/media/4215/c%E1%BA%A7n-th%C6%A1-2.jpg?width=1300&height=720&mode=crop',
      tags: ['Cultural', 'Adventure', 'Photography']
    },
    {
      id: 2,
      title: 'Traditional Music & Sunset on the Mekong River',
      destination: 'My Tho – Ben Tre',
      duration: 'Half-day afternoon',
      price: '500,000 VND',
      rating: 4.9,
      reviews: 89,
      image: 'https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/6/27/du-lich-ben-tre-khach-tay-nghe-don-ca-tai-tu-tat-muong-bat-ca-lam-keo-dua-88966.jpg?width=0&s=8ERrUWb0g7GKF0LLlt16og',
      tags: ['Music', 'Sunset', 'Romantic']
    },
    {
      id: 3,
      title: 'Mekong Memories – Floating Market & Traditional Craft Village',
      destination: 'Cai Rang (Can Tho)',
      duration: 'Morning',
      price: '400,000 VND',
      rating: 4.7,
      reviews: 156,
      image: 'https://anhdaomekong2hotel.vn/upload/images/du-lich-can-tho-1.png',
      tags: ['Market', 'Crafts', 'Cultural']
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
          <p className="text-gray-600">Tours you&apos;ve saved for later</p>
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
                      to={`/customer/tours/${tour.id}`}
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
              to="/customer/tours"
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