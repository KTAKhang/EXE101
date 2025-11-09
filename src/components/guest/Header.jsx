import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-600" style={{ fontFamily: 'Arial, sanserif' }}>
              IDMiềnTây
            </span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 whitespace-nowrap cursor-pointer">
              Trang Chủ
            </Link>
            <Link to="/tours" className="text-gray-700 hover:text-blue-600 whitespace-nowrap cursor-pointer">
              Tour
            </Link>
            <Link to="/search" className="text-gray-700 hover:text-blue-600 whitespace-nowrap cursor-pointer">
              Tìm Kiếm
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 whitespace-nowrap cursor-pointer">
              Về Chúng Tôi
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 whitespace-nowrap cursor-pointer">
              Liên Hệ
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login" className="text-gray-700 hover:text-blue-600 whitespace-nowrap cursor-pointer">
              Đăng Nhập
            </Link>
            <Link to="/register" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 whitespace-nowrap cursor-pointer">
              Đăng Ký
            </Link>
          </div>

          <button
            className="md:hidden w-6 h-6 flex items-center justify-center cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="ri-menu-line text-xl"></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-blue-600 cursor-pointer">
                Trang Chủ
              </Link>
              <Link to="/tours" className="text-gray-700 hover:text-blue-600 cursor-pointer">
                Tour
              </Link>
              <Link to="/search" className="text-gray-700 hover:text-blue-600 cursor-pointer">
                Tìm Kiếm
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 cursor-pointer">
                Về Chúng Tôi
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 cursor-pointer">
                Liên Hệ
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-100">
                <Link to="/login" className="text-gray-700 hover:text-blue-600 cursor-pointer">
                  Đăng Nhập
                </Link>
                <Link to="/register" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-center cursor-pointer">
                  Đăng Ký
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
