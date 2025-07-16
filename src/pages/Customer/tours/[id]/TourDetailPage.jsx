import { useState } from "react";
import { useParams } from "react-router-dom";

// Tour data - in a real app, this would come from your data file
const tours = [
  {
    id: '1',
    title: 'Mekong Delta Discovery',
    location: 'Can Tho, Vietnam',
    price: 899,
    rating: 4.7,
    reviews: 158,
    duration: '5 days',
    groupSize: 'Max 15 people',
    difficulty: 'Easy',
    description: 'Experience the charm of the Mekong Delta with lush rice fields, vibrant floating markets, and warm Southern Vietnamese hospitality.',
    highlights: [
      'Visit Cai Rang Floating Market',
      'Boat ride through Tra Su Cajuput Forest',
      'Taste authentic Mekong cuisine',
      'Traditional rice paper village',
      'Rowing boat through small canals',
      'Southern folk music performance'
    ],
    itinerary: {
      'Day 1': 'Arrival in Can Tho, hotel check-in, welcome dinner',
      'Day 2': 'Floating market visit, handicraft village, fruit garden',
      'Day 3': 'Transfer to Chau Doc, explore Tra Su Forest',
      'Day 4': 'Cultural experience, folk music show',
      'Day 5': 'Shopping, farewell lunch, departure'
    },
    includes: [
      '4-star hotel accommodation',
      'Professional English-speaking guide',
      'All meals (breakfast, lunch, dinner)',
      'Entrance fees and boat trips',
      'Travel insurance'
    ],
    images: [
      'https://suntravelgroup.vn/media/4215/c%E1%BA%A7n-th%C6%A1-2.jpg?width=1300&height=720&mode=crop',
      'https://thamhiemmekong.com/wp-content/uploads/2019/05/caudibo-cantho.jpg',
      'https://anhdaomekong2hotel.vn/upload/images/du-lich-can-tho-1.png'
    ]
  },
  {
    id: '2',
    title: 'Floating Market Explorer',
    location: 'Tien Giang & Vinh Long, Vietnam',
    price: 759,
    rating: 4.6,
    reviews: 96,
    duration: '4 days',
    groupSize: 'Max 12 people',
    difficulty: 'Easy',
    description: 'Immerse yourself in life on water and discover the authentic culture of the Mekong’s floating markets.',
    highlights: [
      'Explore Cai Be Floating Market',
      'Visit local handicraft workshops',
      'Enjoy fresh tropical fruits in orchards',
      'Traditional rowing sampan experience',
      'Local homestay by the river',
      'Cook and dine with locals'
    ],
    itinerary: {
      'Day 1': 'Depart from Ho Chi Minh City to Tien Giang, check in homestay',
      'Day 2': 'Cai Be Market tours, local craft demo, candy making',
      'Day 3': 'Transfer to Vinh Long, orchard tours, cooking class',
      'Day 4': 'Morning relax, lunch, return to HCMC'
    },
    includes: [
      'Riverside homestay',
      'English-speaking local guide',
      'All meals',
      'Transportation and entrance tickets',
      'Small local gifts'
    ],
    images: [
      'https://suntravelgroup.vn/media/4215/c%E1%BA%A7n-th%C6%A1-2.jpg?width=1300&height=720&mode=crop',
      'https://thamhiemmekong.com/wp-content/uploads/2019/05/caudibo-cantho.jpg',
      'https://anhdaomekong2hotel.vn/upload/images/du-lich-can-tho-1.png'
    ]
  },
  {
    id: '3',
    title: 'Ben Tre Coconut Adventure',
    location: 'Ben Tre, Vietnam',
    price: 499,
    rating: 4.8,
    reviews: 112,
    duration: '2 days',
    groupSize: 'Max 12 people',
    difficulty: 'Easy',
    description: 'Discover the “Land of Coconuts” with boat rides, local workshops, and warm countryside hospitality.',
    highlights: [
      'Visit coconut candy workshop',
      'Cycle through peaceful villages',
      'Sampan ride in small canals',
      'Cook traditional Vietnamese pancakes',
      'Relax at riverside homestay'
    ],
    itinerary: {
      'Day 1': 'Arrive in Ben Tre, bike tours, canoe trip',
      'Day 2': 'Cooking experience, fruit orchard visit, return'
    },
    includes: [
      'Riverside homestay',
      'All transfers and activities',
      'Local guide',
      'Meals included',
      'Entrance fees'
    ],
    images: [
      'https://suntravelgroup.vn/media/4215/c%E1%BA%A7n-th%C6%A1-2.jpg?width=1300&height=720&mode=crop',
      'https://thamhiemmekong.com/wp-content/uploads/2019/05/caudibo-cantho.jpg',
      'https://anhdaomekong2hotel.vn/upload/images/du-lich-can-tho-1.png'
    ]
  },
  {
    id: '4',
    title: 'Tra Su Eco Retreat',
    location: 'An Giang, Vietnam',
    price: 599,
    rating: 4.9,
    reviews: 88,
    duration: '3 days',
    groupSize: 'Max 10 people',
    difficulty: 'Moderate',
    description: 'Reconnect with nature at the tranquil Tra Su Forest and explore An Giang’s spiritual and cultural highlights.',
    highlights: [
      'Paddle through Tra Su Cajuput Forest',
      'Visit Sam Mountain & Ba Chua Xu Temple',
      'Discover Cham ethnic village',
      'Watch sunset over Hau River',
      'Taste vegetarian and local specialties'
    ],
    itinerary: {
      'Day 1': 'Arrive in Chau Doc, visit Cham village',
      'Day 2': 'Explore Tra Su Forest, boat and walking tours',
      'Day 3': 'Visit Sam Mountain, local market, return trip'
    },
    includes: [
      'Eco-lodge accommodation',
      'Local expert guide',
      'All meals',
      'Entrance fees and transportation',
      'Insurance'
    ],
    images: [
      'https://suntravelgroup.vn/media/4215/c%E1%BA%A7n-th%C6%A1-2.jpg?width=1300&height=720&mode=crop',
      'https://thamhiemmekong.com/wp-content/uploads/2019/05/caudibo-cantho.jpg',
      'https://anhdaomekong2hotel.vn/upload/images/du-lich-can-tho-1.png'
    ]
  },
  {
    id: '5',
    title: 'Sa Dec Flower & Culture tours',
    location: 'Dong Thap, Vietnam',
    price: 399,
    rating: 4.5,
    reviews: 74,
    duration: '2 days',
    groupSize: 'Max 10 people',
    difficulty: 'Easy',
    description: 'Discover the colorful flower city of Sa Dec and its rich French-Vietnamese heritage.',
    highlights: [
      'Sa Dec Flower Village',
      'Visit Huynh Thuy Le Ancient House',
      'Explore local craft villages',
      'Taste signature Sa Dec noodles',
      'Walk through charming alleys'
    ],
    itinerary: {
      'Day 1': 'Arrival, visit ancient house and flower village',
      'Day 2': 'Craft village tours, lunch, return to HCMC'
    },
    includes: [
      '3-star hotel stay',
      'Local guide',
      'Entrance tickets',
      'Meals',
      'Transportation'
    ],
    images: [
      'https://suntravelgroup.vn/media/4215/c%E1%BA%A7n-th%C6%A1-2.jpg?width=1300&height=720&mode=crop',
      'https://thamhiemmekong.com/wp-content/uploads/2019/05/caudibo-cantho.jpg',
      'https://anhdaomekong2hotel.vn/upload/images/du-lich-can-tho-1.png'
    ]
  },
  {
    id: '6',
    title: 'Long Xuyen Heritage tours',
    location: 'An Giang, Vietnam',
    price: 549,
    rating: 4.6,
    reviews: 63,
    duration: '3 days',
    groupSize: 'Max 12 people',
    difficulty: 'Easy',
    description: 'Step into the cultural heart of the Mekong and discover the untold stories of Long Xuyen.',
    highlights: [
      'Visit Long Xuyen Floating Market',
      'Memorial House of President Ton Duc Thang',
      'Explore ancient Oc Eo ruins',
      'Discover Khmer & Cham cultures',
      'Catch fish in the countryside'
    ],
    itinerary: {
      'Day 1': 'Arrival in Long Xuyen, city tours',
      'Day 2': 'Visit Oc Eo ruins, cultural exchange activities',
      'Day 3': 'Traditional fish catching, farewell lunch, return'
    },
    includes: [
      'Comfortable hotel stay',
      'English-speaking guide',
      'All meals',
      'Transport & entry tickets',
      'Travel insurance'
    ],
    images: [
      'https://suntravelgroup.vn/media/4215/c%E1%BA%A7n-th%C6%A1-2.jpg?width=1300&height=720&mode=crop',
      'https://thamhiemmekong.com/wp-content/uploads/2019/05/caudibo-cantho.jpg',
      'https://anhdaomekong2hotel.vn/upload/images/du-lich-can-tho-1.png'
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
                <div className="text-3xl font-bold text-blue-600 mb-6">${tour.price}</div>

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

          {/* What's Included */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">What's Included</h3>
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