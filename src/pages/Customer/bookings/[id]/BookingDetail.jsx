import { Link } from "react-router-dom";
import { useState } from 'react';
import DashboardLayout from "../../../../components/Customer/DashboardLayout";



export default function BookingDetail({ bookingId }) {
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  // Mock data - in real app, fetch based on bookingId
  const booking = {
    id: bookingId,
    tour: 'European Grand Tour',
    destination: 'Paris, Rome, Barcelona',
    startDate: '2024-03-15',
    endDate: '2024-03-29',
    duration: '14 days',
    amount: '$4,299',
    paid: '$2,149',
    remaining: '$2,150',
    status: 'confirmed',
    travelers: 2,
    bookingDate: '2024-01-20',
    image: 'https://readdy.ai/api/search-image?query=European%20grand%20tour%20collage%20featuring%20iconic%20landmarks%20Paris%20Eiffel%20Tower%20Rome%20Colosseum%20Barcelona%20Sagrada%20Familia%2C%20elegant%20travel%20montage%20with%20warm%20golden%20lighting&width=800&height=400&seq=europe2&orientation=landscape',
    itinerary: [
      { day: 1, city: 'Paris', activity: 'Arrival and Eiffel Tower visit' },
      { day: 2, city: 'Paris', activity: 'Louvre Museum and Seine River cruise' },
      { day: 3, city: 'Paris', activity: 'Versailles Palace day trip' },
      { day: 4, city: 'Rome', activity: 'Flight to Rome, Colosseum tour' },
      { day: 5, city: 'Rome', activity: 'Vatican City and Sistine Chapel' },
      { day: 6, city: 'Rome', activity: 'Roman Forum and Pantheon' },
      { day: 7, city: 'Barcelona', activity: 'Travel to Barcelona, city orientation' },
      { day: 8, city: 'Barcelona', activity: 'Sagrada Familia and Park Güell' },
    ],
    travelers_info: [
      { name: 'John Smith', age: 32, passport: 'US1234567' },
      { name: 'Sarah Smith', age: 29, passport: 'US7654321' }
    ],
    contact: {
      guide: 'Marco Rodriguez',
      phone: '+34 123 456 789',
      email: 'marco@tourguide.com'
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <DashboardLayout activeTab="bookings">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link
              to="/dashboard/bookings"
              className="w-10 h-10 flex items-center justify-center rounded-lg border hover:bg-gray-50 cursor-pointer"
            >
              <i className="ri-arrow-left-line"></i>
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Booking Details</h1>
              <p className="text-gray-600">Booking ID: {booking.id}</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <span className={`px-3 py-1 text-sm font-medium rounded-full whitespace-nowrap ${getStatusColor(booking.status)}`}>
              {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Tour Overview */}
            <div className="bg-white rounded-lg shadow-sm">
              <img
                src={booking.image}
                alt={booking.tour}
                className="w-full h-64 object-cover object-top rounded-t-lg"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{booking.tour}</h2>
                <p className="text-gray-600 mb-4">{booking.destination}</p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <i className="ri-calendar-line text-blue-600"></i>
                    </div>
                    <p className="text-sm font-medium text-gray-900">{new Date(booking.startDate).toLocaleDateString()}</p>
                    <p className="text-xs text-gray-500">Start Date</p>
                  </div>

                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <i className="ri-time-line text-green-600"></i>
                    </div>
                    <p className="text-sm font-medium text-gray-900">{booking.duration}</p>
                    <p className="text-xs text-gray-500">Duration</p>
                  </div>

                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <i className="ri-group-line text-purple-600"></i>
                    </div>
                    <p className="text-sm font-medium text-gray-900">{booking.travelers}</p>
                    <p className="text-xs text-gray-500">Travelers</p>
                  </div>

                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <i className="ri-money-dollar-circle-line text-orange-600"></i>
                    </div>
                    <p className="text-sm font-medium text-gray-900">{booking.amount}</p>
                    <p className="text-xs text-gray-500">Total Cost</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Itinerary */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b">
                <h3 className="text-lg font-semibold text-gray-900">Itinerary</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {booking.itinerary.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-medium text-blue-600">{item.day}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{item.city}</h4>
                        <p className="text-sm text-gray-600">{item.activity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Travelers */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b">
                <h3 className="text-lg font-semibold text-gray-900">Travelers</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {booking.travelers_info.map((traveler, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <i className="ri-user-line text-blue-600"></i>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{traveler.name}</p>
                          <p className="text-sm text-gray-500">Age: {traveler.age}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500">Passport</p>
                        <p className="font-medium text-gray-900">{traveler.passport}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Payment Summary */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b">
                <h3 className="text-lg font-semibold text-gray-900">Payment Summary</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Amount</span>
                  <span className="font-medium text-gray-900">{booking.amount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Paid</span>
                  <span className="font-medium text-green-600">{booking.paid}</span>
                </div>
                <div className="flex justify-between pt-2 border-t">
                  <span className="font-medium text-gray-900">Remaining</span>
                  <span className="font-bold text-orange-600">{booking.remaining}</span>
                </div>

                {booking.remaining !== '$0' && (
                  <button
                    onClick={() => setShowPaymentModal(true)}
                    className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Pay Remaining Amount
                  </button>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b">
                <h3 className="text-lg font-semibold text-gray-900">Tour Guide Contact</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <i className="ri-user-line text-blue-600"></i>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{booking.contact.guide}</p>
                    <p className="text-sm text-gray-500">Tour Guide</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-phone-line text-gray-400"></i>
                    </div>
                    <span className="text-gray-900">{booking.contact.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-mail-line text-gray-400"></i>
                    </div>
                    <span className="text-gray-900">{booking.contact.email}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Actions</h3>
                <div className="space-y-3">
                  <button className="w-full px-4 py-2 text-left border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer whitespace-nowrap">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 flex items-center justify-center">
                        <i className="ri-download-line text-gray-600"></i>
                      </div>
                      <span>Download Itinerary</span>
                    </div>
                  </button>

                  <button className="w-full px-4 py-2 text-left border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer whitespace-nowrap">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 flex items-center justify-center">
                        <i className="ri-share-line text-gray-600"></i>
                      </div>
                      <span>Share Trip Details</span>
                    </div>
                  </button>

                  {booking.status === 'confirmed' && (
                    <button
                      onClick={() => setShowCancelModal(true)}
                      className="w-full px-4 py-2 text-left border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors cursor-pointer whitespace-nowrap"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 flex items-center justify-center">
                          <i className="ri-close-line text-red-600"></i>
                        </div>
                        <span>Cancel Booking</span>
                      </div>
                    </button>
                  )}

                  {booking.status === 'completed' && (
                    <Link
                      to="/dashboard/reviews"
                      className="w-full px-4 py-2 text-left border border-blue-300 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer whitespace-nowrap block"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 flex items-center justify-center">
                          <i className="ri-star-line text-blue-600"></i>
                        </div>
                        <span>Write Review</span>
                      </div>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cancel Modal */}
        {showCancelModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-md w-full p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Cancel Booking</h3>
              <p className="text-gray-600 mb-6">Are you sure you want to cancel this booking? This action cannot be undone and cancellation fees may apply.</p>
              <div className="flex space-x-3">
                <button
                  onClick={() => setShowCancelModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 cursor-pointer whitespace-nowrap"
                >
                  Keep Booking
                </button>
                <button className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 cursor-pointer whitespace-nowrap">
                  Cancel Booking
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Payment Modal */}
        {showPaymentModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-md w-full p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Complete Payment</h3>
              <div className="mb-6">
                <p className="text-gray-600 mb-2">Remaining amount to pay:</p>
                <p className="text-2xl font-bold text-gray-900">{booking.remaining}</p>
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={() => setShowPaymentModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 cursor-pointer whitespace-nowrap"
                >
                  Cancel
                </button>
                <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer whitespace-nowrap">
                  Pay Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}