

import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-sm border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link to="/customer/home" className="flex items-center">
                        <span className="text-2xl font-bold text-blue-600" style={{ fontFamily: 'Pacifico, serif' }}>
                            IDMiềnTây
                        </span>
                    </Link>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/customer/home" className="text-gray-600 hover:text-gray-900 cursor-pointer">Home</Link>
                        <Link to="/customer/tours" className="text-gray-600 hover:text-gray-900 cursor-pointer">Tours</Link>
                        <Link to="/customer/about" className="text-gray-600 hover:text-gray-900 cursor-pointer">About</Link>
                        <Link to="/customer/search" className="text-gray-600 hover:text-gray-900 cursor-pointer">Search</Link>
                        <Link to="/customer/contact" className="text-gray-600 hover:text-gray-900 cursor-pointer">Contact</Link>
                        {/* <Link to="/customer/" className="text-gray-600 hover:text-gray-900 cursor-pointer">Dashboard</Link> */}
                        <div className="flex items-center space-x-4">

                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center cursor-pointer">
                                <i className="ri-notification-line text-blue-600"></i>
                            </div>
                            <Link to="/customer/" className="text-gray-600 hover:text-gray-900 cursor-pointer"> <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer">
                                <i className="ri-user-line text-gray-600"></i>
                            </div></Link>

                        </div>
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
                                Home
                            </Link>
                            <Link to="/tours" className="text-gray-700 hover:text-blue-600 cursor-pointer">
                                Tours
                            </Link>
                            <Link to="/search" className="text-gray-700 hover:text-blue-600 cursor-pointer">
                                Search
                            </Link>
                            <Link to="/about" className="text-gray-700 hover:text-blue-600 cursor-pointer">
                                About Us
                            </Link>
                            <Link to="/contact" className="text-gray-700 hover:text-blue-600 cursor-pointer">
                                Contact
                            </Link>

                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}