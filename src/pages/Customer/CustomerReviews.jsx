import { useState } from 'react';
import DashboardLayout from "../../components/Customer/DashboardLayout";

export default function Reviews() {
  const [activeTab, setActiveTab] = useState('my-reviews');
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');

  const myReviews = [
    {
      id: 1,
      tour: 'Immersive Day as a Traditional Mekong Delta Farmer',
      destination: 'Vinh Long / Can Tho',
      rating: 5,
      date: '2023-09-15',
      review: 'Absolutely incredible experience! The tour guide was knowledgeable and friendly. Every activity was authentic and well-organized. The photo package was a wonderful bonus!',
      image: 'https://suntravelgroup.vn/media/4215/c%E1%BA%A7n-th%C6%A1-2.jpg?width=1300&height=720&mode=crop'
    },
    {
      id: 2,
      tour: 'Traditional Music & Sunset on the Mekong River',
      destination: 'My Tho – Ben Tre',
      rating: 4,
      date: '2023-07-22',
      review: 'Beautiful sunset cruise with traditional music. The sampan paddling was peaceful and the áo bà ba photos turned out amazing. Only minor issue was some crowded areas.',
      image: 'https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/6/27/du-lich-ben-tre-khach-tay-nghe-don-ca-tai-tu-tat-muong-bat-ca-lam-keo-dua-88966.jpg?width=0&s=8ERrUWb0g7GKF0LLlt16og'
    },
    {
      id: 3,
      tour: 'Mekong Memories – Floating Market & Traditional Craft Village',
      destination: 'Cai Rang (Can Tho)',
      rating: 5,
      date: '2023-05-10',
      review: 'Early morning at Cai Rang was magical! The breakfast on the boat was unique and delicious. Learning traditional crafts from locals was very meaningful. Highly recommend!',
      image: 'https://anhdaomekong2hotel.vn/upload/images/du-lich-can-tho-1.png'
    }
  ];

  const pendingReviews = [
    {
      id: 4,
      tour: 'Mekong Delta Discovery Extended',
      destination: 'Can Tho - An Giang',
      completedDate: '2024-01-15',
      image: 'https://thamhiemmekong.com/wp-content/uploads/2019/05/caudibo-cantho.jpg'
    },
    {
      id: 5,
      tour: 'Ben Tre Coconut Workshop',
      destination: 'Ben Tre Province',
      completedDate: '2023-12-20',
      image: 'https://anhdaomekong2hotel.vn/upload/images/du-lich-can-tho-1.png'
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