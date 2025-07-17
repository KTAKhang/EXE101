import { useState } from "react";
import { useParams } from "react-router-dom";

// Tour data - in a real app, this would come from your data file
  const tours = [
    {
      id: '1',
      title: 'Immersive Day as a Traditional Mekong Delta Farmer',
      location: 'Vinh Long / Can Tho',
      price: "450,000 VND",
    rating: 4.8,
    reviews: 124,
      duration: '1 day',
    groupSize: 'Max 15 people',
    difficulty: 'Easy',
    description: 'Experience authentic farm life in the Mekong Delta! Harvest fresh produce, cook traditional dishes, and capture beautiful memories in the countryside with our basic photo package included.',
    highlights: [
      'Harvest vegetables and fruits with local farmers',
      'Cook traditional dishes: grilled snakehead fish, Mekong-style pancakes',
      'Lunch at garden house with traditional hammocks',
      'Professional photo shoot in rice fields and countryside',
      'Make traditional cakes (pandan leaf cake, baked sponge cake)',
      'Includes conical hat and traditional áo bà ba attire'
    ],
    itinerary: {
      '8:00 AM': 'Pick-up at homestay or central meeting point',
      '8:30 – 10:00 AM': 'Harvest vegetables/fruits with local farmers (boat ride to orchard)',
      '10:00 – 11:30 AM': 'Cook traditional dishes: grilled snakehead fish, Mekong-style pancakes',
      '11:30 AM – 1:00 PM': 'Lunch at garden house, rest on traditional hammocks',
      '1:00 – 3:00 PM': 'Photo shoot in rice fields/ponds/countryside scenery',
      '3:00 – 4:30 PM': 'Make traditional cakes (pandan leaf cake, baked sponge cake)',
      '4:30 – 5:00 PM': 'Return and drop off guests'
    },
    includes: [
      '10–15 photos with basic light adjustments (JPEG)',
      '2 professionally edited bonus photos',
      'Traditional áo bà ba attire and conical hat',
      'All meals and cooking ingredients',
      'Local farmer guide and transportation',
      'All activities and entrance fees'
    ],
    images: [
      'https://mia.vn/media/uploads/blog-du-lich/vuon-trai-cay-ben-tre-01-1696636918.jpeg',
      'https://lavenderstudio.vn/wp-content/uploads/tao-dang-chup-anh-ao-dai-voi-non-la-dep-o-ho-sen.jpg',
      'https://cafebiz.cafebizcdn.vn/162123310254002176/2024/1/17/photo-10-banh-trai-mien-tay-3-17054588673831717119554.jpg'
    ]
    },
    {
      id: '2',
      title: 'Traditional Music & Sunset on the Mekong River',
      location: 'My Tho – Ben Tre',
      price: "500,000 VND",
    rating: 4.9,
    reviews: 89,
    duration: 'Half-day',
    groupSize: 'Max 15 people',
    difficulty: 'Easy',
    description: 'Experience the magical sunset on the Mekong River while enjoying traditional Vietnamese music. Perfect for romantic moments and cultural immersion with professional photography.',
    highlights: [
      'Visit fruit gardens and sample local delicacies',
      'Paddle traditional sampan through small canals',
      'Enjoy traditional Đờn ca tài tử music performance',
      'Sunset photo shoot with "dreamy Mekong" concept',
      'Tea service on the river',
      'Traditional áo bà ba costume included'
    ],
    itinerary: {
      '2:00 PM': 'Pick-up at the tourism pier',
      '2:30 – 3:30 PM': 'Visit islets, explore fruit gardens, sample local delicacies',
      '3:30 – 4:30 PM': 'Paddle sampan through small canals, photo session in áo bà ba',
      '4:30 – 6:00 PM': 'Large boat to middle of Mekong River, tea and traditional music',
      '6:00 – 6:45 PM': 'Sunset photo shoot on the river with "dreamy Mekong" concept',
      '7:00 PM': 'Tour ends'
    },
    includes: [
      '15 wide-angle and portrait shots',
      '1 behind-the-scenes highlight video (30–60 seconds)',
      'Traditional áo bà ba costume',
      'Tea service and light refreshments',
      'Traditional music performance',
      'Premium editing option available'
    ],
    images: [
      'https://elitetour.com.vn/files/images/Blogs/cu-lao-tan-qui.jpg',
      'https://thienmekongtravel.com/wp-content/uploads/2022/12/conphung.jpg',
      'https://images.baodantoc.vn/uploads/2024/Thang-8/Ngay-21/Bang-Ngan/5t49.jpg'
    ]
    },
    {
      id: '3',
      title: 'Mekong Memories – Floating Market & Traditional Craft Village',
      location: 'Cai Rang (Can Tho)',
      price: "400,000 VND",
    rating: 4.7,
    reviews: 156,
      duration: 'Morning',
    groupSize: 'Max 15 people',
    difficulty: 'Easy',
    description: 'Start your day early at the famous Cai Rang Floating Market, enjoy breakfast on the river, and explore traditional craft villages with nostalgic photo opportunities.',
    highlights: [
      'Visit famous Cai Rang Floating Market',
      'Unique "breakfast on the river" experience',
      'Visit rice noodle or rice paper-making villages',
      'Interact with locals and try traditional crafts',
      'Artistic photos in nostalgic setting',
      'Vintage Mekong concept with traditional áo dài'
    ],
    itinerary: {
      '5:30 AM': 'Pick-up and boat ride to Cai Rang Floating Market',
      '6:00 – 7:00 AM': 'Breakfast on boat: bun rieu or hu tieu - unique river dining',
      '7:00 – 8:00 AM': 'Visit rice noodle or rice paper-making villages',
      '8:00 – 9:30 AM': 'Interact with locals, try traditional crafts, nostalgic photos',
      '9:30 – 11:00 AM': 'Return by boat, morning river photo session'
    },
    includes: [
      '12 lightly color-graded photos',
      'Commemorative collage photo (photo + tour info)',
      'Traditional áo dài and checkered scarf',
      'Breakfast on the river',
      'Local guide and transportation',
      'All craft activities and materials'
    ],
    images: [
      'https://thamhiemmekong.com/wp-content/uploads/2019/05/lo-hu-tieu-can-tho-3.jpg',
      'https://media.vov.vn/sites/default/files/styles/large_watermark/public/2023-02/329518642_1151748552200787_4237649310514734967_n.jpg',
      'https://thamhiemmekong.com/wp-content/uploads/2019/07/lang-nghe-cham-non-la-can-tho-1.jpg'
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