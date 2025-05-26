import React from 'react';
import { Heart } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-red-800 to-red-600 shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Heart className="text-yellow-400 mr-2" size={28} />
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            Dahej<span className="text-yellow-400">.Com</span>
          </h1>
        </div>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><a href="#" className="text-white hover:text-yellow-300 transition-colors">Home</a></li>
            <li><a href="#calculator" className="text-white hover:text-yellow-300 transition-colors">Calculator</a></li>
            <li><a href="#" className="text-white hover:text-yellow-300 transition-colors">Success Stories</a></li>
            <li><a href="#" className="text-white hover:text-yellow-300 transition-colors">Contact</a></li>
          </ul>
        </nav>
        
        <div className="flex items-center space-x-2">
          <button className="hidden md:block bg-yellow-500 hover:bg-yellow-600 text-red-900 font-medium py-2 px-4 rounded-full transition-colors">
            Sign Up
          </button>
          <button className="bg-white hover:bg-gray-100 text-red-700 font-medium p-2 md:py-2 md:px-4 rounded-full transition-colors">
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;