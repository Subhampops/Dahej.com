import React from 'react';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-red-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <Heart className="text-yellow-400 mr-2" size={24} />
              <h3 className="text-xl font-bold">
                Dahej<span className="text-yellow-400">.Com</span>
              </h3>
            </div>
            <p className="text-red-200 mb-4">
              Calculating your true worth in the marriage market since 2025.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-yellow-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-yellow-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-yellow-400 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-red-200 hover:text-white transition-colors">Home</a></li>
              <li><a href="#calculator" className="text-red-200 hover:text-white transition-colors">Calculator</a></li>
              <li><a href="#" className="text-red-200 hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="#" className="text-red-200 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-red-200 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-red-200 hover:text-white transition-colors">Marriage Tips</a></li>
              <li><a href="#" className="text-red-200 hover:text-white transition-colors">Negotiation Guide</a></li>
              <li><a href="#" className="text-red-200 hover:text-white transition-colors">Premium Matches</a></li>
              <li><a href="#" className="text-red-200 hover:text-white transition-colors">Marriage Events</a></li>
              <li><a href="#" className="text-red-200 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-yellow-400" />
                <span>+91 1234 567 890</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-yellow-400" />
                <span>info@dahej.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1 text-yellow-400" />
                <span>123 Marriage Market, Wedding Lane, Shaadi Nagar, India</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-red-800 pt-6 mt-6 text-center text-red-300 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Dahej.Com. All rights reserved. 
            <span className="block sm:inline sm:ml-2">This is a satirical website. We do not endorse dowry, which is illegal in India.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;