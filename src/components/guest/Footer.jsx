

import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold text-blue-400" style={{ fontFamily: 'Pacifico, serif' }}>
                logo
              </span>
            </Link>
            <p className="text-gray-400 text-sm">
              Discover amazing destinations and create unforgettable memories with our carefully curated travel experiences.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/tours" className="text-gray-400 hover:text-white cursor-pointer">
                  All Tours
                </Link>
              </li>
              <li>
                <Link to="/search" className="text-gray-400 hover:text-white cursor-pointer">
                  Search Tours
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white cursor-pointer">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white cursor-pointer">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white cursor-pointer">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white cursor-pointer">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white cursor-pointer">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white cursor-pointer">
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a to="#" className="w-8 h-8 flex items-center justify-center bg-blue-600 rounded-full hover:bg-blue-700 cursor-pointer">
                <i className="ri-facebook-fill text-sm"></i>
              </a>
              <a to="#" className="w-8 h-8 flex items-center justify-center bg-blue-400 rounded-full hover:bg-blue-500 cursor-pointer">
                <i className="ri-twitter-fill text-sm"></i>
              </a>
              <a to="#" className="w-8 h-8 flex items-center justify-center bg-pink-600 rounded-full hover:bg-pink-700 cursor-pointer">
                <i className="ri-instagram-fill text-sm"></i>
              </a>
              <a to="#" className="w-8 h-8 flex items-center justify-center bg-red-600 rounded-full hover:bg-red-700 cursor-pointer">
                <i className="ri-youtube-fill text-sm"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Travel Tours. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}