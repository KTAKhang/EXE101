import { Link } from "react-router-dom";
import { useState } from 'react';
import DashboardLayout from "../../../components/Customer/DashboardLayout";

export default function Reviews() {
  const [activeTab, setActiveTab] = useState('my-reviews');
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');

  const myReviews = [
    {
      id: 1,
      tour: 'European Grand Tour',
      destination: 'Paris, Rome, Barcelona',
      rating: 5,
      date: '2023-09-15',
      review: 'Absolutely incredible experience! The tour guide was knowledgeable and friendly. Every destination was breathtaking and well-organized. Highly recommend!',
      image: 'https://readdy.ai/api/search-image?query=European%20grand%20tour%20collage%20featuring%20iconic%20landmarks%20Paris%20Eiffel%20Tower%20Rome%20Colosseum%20Barcelona%20Sagrada%20Familia%2C%20elegant%20travel%20montage%20with%20warm%20golden%20lighting&width=300&height=200&seq=europe3&orientation=landscape'
    },
    {
      id: 2,
      tour: 'Mediterranean Cruise',
      destination: 'Greek Islands',
      rating: 4,
      date: '2023-07-22',
      review: 'Beautiful cruise with stunning views. The food was excellent and the staff was very accommodating. Only minor issue was some crowded ports.',
      image: 'https://readdy.ai/api/search-image?query=Mediterranean%20cruise%20through%20Greek%20islands%20with%20crystal%20blue%20waters%20white%20cliff%20villages%20luxury%20cruise%20ship%20sailing%20sunset%20golden%20hour%20peaceful%20ocean%20scenery&width=300&height=200&seq=greece2&orientation=landscape'
    },
    {
      id: 3,
      tour: 'African Safari Experience',
      destination: 'Kenya, Tanzania',
      rating: 5,
      date: '2023-05-10',
      review: 'Once in a lifetime experience! Saw the Big Five and the guides were exceptional. The accommodations were comfortable and the wildlife viewing was spectacular.',
      image: 'https://readdy.ai/api/search-image?query=African%20safari%20adventure%20with%20majestic%20wildlife%20elephants%20lions%20zebras%20in%20natural%20savanna%20landscape%20acacia%20trees%20golden%20sunset%20adventure%20photography%20pristine%20wilderness&width=300&height=200&seq=safari3&orientation=landscape'
    }
  ];

  const pendingReviews = [
    {
      id: 4,
      tour: 'Asian Discovery Adventure',
      destination: 'Tokyo, Kyoto, Osaka',
      completedDate: '2024-01-15',
      image: 'https://readdy.ai/api/search-image?query=Japanese%20cultural%20journey%20showcasing%20Tokyo%20modern%20skyline%20Kyoto%20traditional%20temples%20Osaka%20castle%20cherry%20blossoms%2C%20serene%20travel%20photography%20with%20soft%20natural%20lighting&width=300&height=200&seq=japan2&orientation=landscape'
    },
    {
      id: 5,
      tour: 'Swiss Alps Adventure',
      destination: 'Switzerland',
      completedDate: '2023-12-20',
      image: 'https://readdy.ai/api/search-image?query=Swiss%20Alps%20mountain%20adventure%20snow-capped%20peaks%20alpine%20villages%20hiking%20trails%20pristine%20nature%20outdoor%20activities%20breathtaking%20mountain%20scenery%20crystal%20clear%20lakes&width=300&height=200&seq=swiss2&orientation=landscape'
    }
  ];

  const handleWriteReview = (tour) => {
    setSelectedTour(tour);
    setShowReviewModal(true);
    setRating(0);
    setReviewText('');
  };

  const handleSubmitReview = () => {
    // Handle review submission logic here
    console.log('Submitting review:', { tour: selectedTour, rating, reviewText });
    setShowReviewModal(false);
    setSelectedTour(null);
  };

  const renderStars = (rating, interactive = false) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={interactive ? () => setRating(star) : undefined}
            className={`w-5 h-5 flex items-center justify-center ${interactive ? 'cursor-pointer' : ''}`}
            disabled={!interactive}
          >
            <i className={`ri-star-${star <= rating ? 'fill' : 'line'} ${star <= rating ? 'text-yellow-400' : 'text-gray-300'
              }`}></i>
          </button>
        ))}
      </div>
    );
  };

  return (
    <DashboardLayout activeTab="reviews">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Reviews</h1>
          <p className="text-gray-600">Share your experiences and help other travelers</p>
        </div>

        {/* Tabs */}
        <div className="flex bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setActiveTab('my-reviews')}
            className={`flex-1 px-4 py-2 text-sm rounded-md transition-colors cursor-pointer whitespace-nowrap ${activeTab === 'my-reviews'
              ? 'bg-white text-blue-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
              }`}
          >
            My Reviews ({myReviews.length})
          </button>
          <button
            onClick={() => setActiveTab('pending')}
            className={`flex-1 px-4 py-2 text-sm rounded-md transition-colors cursor-pointer whitespace-nowrap ${activeTab === 'pending'
              ? 'bg-white text-blue-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
              }`}
          >
            Pending Reviews ({pendingReviews.length})
          </button>
        </div>

        {/* Content */}
        {activeTab === 'my-reviews' ? (
          <div className="space-y-6">
            {myReviews.map((review) => (
              <div key={review.id} className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <img
                    src={review.image}
                    alt={review.tour}
                    className="w-full md:w-48 h-32 object-cover object-top rounded-lg"
                  />
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{review.tour}</h3>
                        <p className="text-gray-600 text-sm flex items-center">
                          <div className="w-4 h-4 flex items-center justify-center mr-1">
                            <i className="ri-map-pin-line"></i>
                          </div>
                          {review.destination}
                        </p>
                      </div>
                      <div className="text-right mt-2 sm:mt-0">
                        {renderStars(review.rating)}
                        <p className="text-sm text-gray-500 mt-1">{new Date(review.date).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{review.review}</p>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t">
                      <div className="flex items-center text-sm text-gray-500">
                        <div className="w-4 h-4 flex items-center justify-center mr-1">
                          <i className="ri-thumb-up-line"></i>
                        </div>
                        Helpful to other travelers
                      </div>
                      <button className="text-blue-600 hover:text-blue-800 text-sm cursor-pointer whitespace-nowrap">
                        Edit Review
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {pendingReviews.map((tour) => (
              <div key={tour.id} className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <img
                    src={tour.image}
                    alt={tour.tour}
                    className="w-full md:w-48 h-32 object-cover object-top rounded-lg"
                  />
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{tour.tour}</h3>
                        <p className="text-gray-600 text-sm flex items-center mb-2">
                          <div className="w-4 h-4 flex items-center justify-center mr-1">
                            <i className="ri-map-pin-line"></i>
                          </div>
                          {tour.destination}
                        </p>
                        <p className="text-sm text-gray-500">
                          Completed on {new Date(tour.completedDate).toLocaleDateString()}
                        </p>
                      </div>
                      <button
                        onClick={() => handleWriteReview(tour)}
                        className="mt-4 sm:mt-0 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap"
                      >
                        Write Review
                      </button>
                    </div>
                    <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-5 h-5 flex items-center justify-center mr-2">
                          <i className="ri-time-line text-yellow-600"></i>
                        </div>
                        <p className="text-sm text-yellow-800">
                          Share your experience to help other travelers and earn reward points!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {pendingReviews.length === 0 && (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-star-line text-gray-400 text-3xl"></i>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No pending reviews</h3>
                <p className="text-gray-500">Complete a tour to write your first review!</p>
              </div>
            )}
          </div>
        )}

        {/* Review Modal */}
        {showReviewModal && selectedTour && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900">Write Review</h3>
                  <button
                    onClick={() => setShowReviewModal(false)}
                    className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer"
                  >
                    <i className="ri-close-line text-gray-400"></i>
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src={selectedTour.image}
                    alt={selectedTour.tour}
                    className="w-16 h-16 object-cover object-top rounded-lg"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{selectedTour.tour}</h4>
                    <p className="text-sm text-gray-600">{selectedTour.destination}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Overall Rating
                  </label>
                  {renderStars(rating, true)}
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Your Review
                  </label>
                  <textarea
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value.slice(0, 500))}
                    placeholder="Share your experience with other travelers..."
                    className="w-full h-32 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-sm"
                    maxLength={500}
                  />
                  <p className="text-xs text-gray-500 mt-1">{reviewText.length}/500 characters</p>
                </div>

                <div className="flex space-x-3">
                  <button
                    onClick={() => setShowReviewModal(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 cursor-pointer whitespace-nowrap"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSubmitReview}
                    disabled={rating === 0 || reviewText.trim() === ''}
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap"
                  >
                    Submit Review
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}