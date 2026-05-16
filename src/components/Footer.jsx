import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaTwitter, 
  FaFacebookF, 
  FaLinkedinIn, 
  FaInstagram,
  FaYoutube,
  FaArrowRight,
  FaClock,
  FaGraduationCap,
  FaNewspaper,
  FaImages,
  FaAddressCard,
  FaHome,
  FaBook,
  FaBriefcase,
  FaUserGraduate
} from 'react-icons/fa';
import { toast } from 'react-hot-toast';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }
    
    setIsSubscribing(true);
    // Simulate API call - replace with your actual subscription API
    setTimeout(() => {
      toast.success('Successfully subscribed to newsletter!');
      setEmail('');
      setIsSubscribing(false);
    }, 1000);
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-navy-900 to-gray-900 text-gray-300 mt-20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          
          {/* Column 1: Logo & Contact Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white p-2 rounded-lg shadow-md">
                <img 
                  src="/assets/logo/pgdm.png" 
                  alt="AIM PGDM Logo" 
                  className="h-10 w-auto object-contain"
                  onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; }}
                />
              </div>
              <div>
                <h3 className="font-bold text-white text-base md:text-lg">AIM | PGDM</h3>
                <p className="text-xs text-gray-400">Aditya Institute of Management, Pune</p>
              </div>
            </div>
            
            <p className="text-sm text-gray-400 leading-relaxed">
              Empowering future business leaders through excellence in management education since 2010.
            </p>
            
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-white mt-1 flex-shrink-0" />
                <p className="text-sm text-gray-400">
                  Narhe, Pune – 411041, Maharashtra, India.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-white flex-shrink-0" />
                <p className="text-sm text-gray-400">+91 9356393629</p>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-white flex-shrink-0" />
                <p className="text-sm text-gray-400">adityainstitute.admission@gmail.com</p>
              </div>
              <div className="flex items-center gap-3">
                <FaClock className="text-white flex-shrink-0" />
                <p className="text-sm text-gray-400">Mon-Sat: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-white mt-1"></span>
            </h4>
            <ul className="space-y-3">
              <li>
                <Link className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-300 group" to="/">
                  <FaHome className="text-xs group-hover:translate-x-1 transition-transform" />
                  Home
                </Link>
              </li>
              <li>
                <Link className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-300 group" to="/program">
                  <FaBook className="text-xs group-hover:translate-x-1 transition-transform" />
                  Program
                </Link>
              </li>
              <li>
                <Link className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-300 group" to="/placements">
                  <FaBriefcase className="text-xs group-hover:translate-x-1 transition-transform" />
                  Placements
                </Link>
              </li>
              <li>
                <Link className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-300 group" to="/admission">
                  <FaUserGraduate className="text-xs group-hover:translate-x-1 transition-transform" />
                  Admission
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4 relative inline-block">
              Resources
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-white mt-1"></span>
            </h4>
            <ul className="space-y-3">
              <li>
                <Link className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-300 group" to="/blogs">
                  <FaNewspaper className="text-xs group-hover:translate-x-1 transition-transform" />
                  Blog
                </Link>
              </li>
              <li>
                <Link className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-300 group" to="/gallery">
                  <FaImages className="text-xs group-hover:translate-x-1 transition-transform" />
                  Gallery
                </Link>
              </li>
              <li>
                <Link className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-300 group" to="/contact">
                  <FaAddressCard className="text-xs group-hover:translate-x-1 transition-transform" />
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-300 group" to="/about">
                  <FaGraduationCap className="text-xs group-hover:translate-x-1 transition-transform" />
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Subscribe & Social */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4 relative inline-block">
              Newsletter
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-white mt-1"></span>
            </h4>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                  placeholder="Your email address" 
                  className="w-full rounded-lg bg-gray-800 border border-gray-700 focus:border-white focus:ring-2 focus:ring-white px-4 py-2.5 text-sm text-white placeholder-gray-500 transition-all outline-none" 
                />
              </div>
              <button 
                type="submit"
                disabled={isSubscribing}
                className="w-full px-4 py-2.5 rounded-lg bg-white text-gray-900 font-semibold text-sm hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-md"
              >
                {isSubscribing ? (
                  'Subscribing...'
                ) : (
                  <>
                    Subscribe
                    <FaArrowRight className="text-xs" />
                  </>
                )}
              </button>
            </form>
            
            {/* Social Media Links */}
            <div className="mt-6">
              <h4 className="text-white font-semibold text-sm mb-3">Follow Us</h4>
              <div className="flex gap-3">
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-110"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </a>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-110"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-110"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-110"
                  aria-label="YouTube"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
            <p className="text-center md:text-left">
              © {new Date().getFullYear()} Trijja Media Works, Pune. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <span>Narhe, Pune – 411041</span>
              <span className="hidden md:inline">|</span>
              <div className="flex gap-4">
                <Link to="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms-conditions" className="hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center mt-4 text-xs text-gray-600">
            Designed and Developed by Trijja Media & Works, Pune
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 bg-white text-gray-900 w-10 h-10 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 z-50"
        aria-label="Back to top"
      >
        ↑
      </button>
    </footer>
  );
}