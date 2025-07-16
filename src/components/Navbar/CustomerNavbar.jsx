import { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { useNavigate, Link } from 'react-router-dom';

const CustomerNavbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/customer");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchValue.trim()) {
      navigate(`/customer/search?q=${encodeURIComponent(searchValue)}`);
    }
  };

  const handleLogin = () => {
    navigate("/");
  };

  return (
    <div className="w-full relative overflow-visible sticky top-0 z-50" style={{ background: 'linear-gradient(135deg, #0D364C 0%, #13C2C2 100%)' }}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-20 animate-pulse" style={{ backgroundColor: '#13C2C2' }}></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full opacity-15 animate-pulse animation-delay-2000" style={{ backgroundColor: '#0D364C' }}></div>
      </div>

      {/* Main navbar content */}
      <div className="relative z-10 backdrop-blur-sm bg-white/5 border-b border-white/10">
        <div className="flex justify-between items-center p-4">
          {/* Left Section: Logo */}
          <div className="flex items-center space-x-4">
            <button
              onClick={handleHome}
              className="group relative overflow-hidden rounded-2xl p-2 transition-all duration-300 hover:scale-105"
              style={{ background: 'linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))' }}
            >
              <div className="flex items-center space-x-2">
                <i className="ri-plane-line text-white text-xl"></i>
                <span className="text-white font-bold text-lg">TravelEase</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </div>

          {/* Center Section: Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="w-full relative">
              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search destinations, tours..."
                className="w-full px-4 py-2 pr-10 bg-white/90 backdrop-blur-sm border border-white/20 rounded-full text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-300"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-gray-500 hover:text-gray-700 transition-colors"
              >
                <Search className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Right Section: Navigation & User Actions */}
          <div className="flex items-center space-x-6">
            {/* Main Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/customer" className="text-white hover:text-blue-200 transition-colors font-medium">
                Home
              </Link>
              <Link to="/customer/tours" className="text-white hover:text-blue-200 transition-colors font-medium">
                Tours
              </Link>
              <Link to="/customer/search" className="text-white hover:text-blue-200 transition-colors font-medium">
                Search
              </Link>
              <Link to="/customer/about" className="text-white hover:text-blue-200 transition-colors font-medium">
                About
              </Link>
              <Link to="/customer/contact" className="text-white hover:text-blue-200 transition-colors font-medium">
                Contact
              </Link>
            </nav>

            {/* Login Button */}
            <button
              onClick={handleLogin}
              className="hidden md:block bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
            >
              <i className="ri-user-line mr-2"></i>
              Login
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Bottom gradient border */}
        <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, #13C2C2, transparent, #13C2C2)' }}></div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm border-b border-white/20">
          <nav className="px-4 py-4 space-y-3">
            <Link 
              to="/customer" 
              className="block text-gray-800 hover:text-blue-600 font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/customer/tours" 
              className="block text-gray-800 hover:text-blue-600 font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Tours
            </Link>
            <Link 
              to="/customer/search" 
              className="block text-gray-800 hover:text-blue-600 font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Search
            </Link>
            <Link 
              to="/customer/about" 
              className="block text-gray-800 hover:text-blue-600 font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/customer/contact" 
              className="block text-gray-800 hover:text-blue-600 font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-2 border-t border-gray-200">
              <button
                onClick={() => {
                  handleLogin();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                <i className="ri-user-line mr-2"></i>
                Login
              </button>
            </div>
          </nav>
        </div>
      )}

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default CustomerNavbar; 