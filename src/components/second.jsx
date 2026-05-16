import React from 'react';

const AIMSPGDMComponent = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-200 pb-4 mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Jadhavar<span className="text-red-600">®</span>
            </h1>
            <p className="text-gray-500 text-sm mt-1">The Symbol of Success (Since 2014)</p>
          </div>
          <div className="mt-4 md:mt-0 text-right">
            <p className="text-gray-700 font-medium">General MBA VS Specialised MBA</p>
          </div>
        </div>

        {/* Badge and Title Section */}
        <div className="mb-6">
          <span className="inline-block bg-red-600 text-white text-sm font-semibold px-4 py-1 rounded-full">
            BestPGDM College in Pune
          </span>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left Column - Main Message */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Why AIM’S PGDM?
            </h2>
            <p className="text-gray-600 mt-4 text-lg leading-relaxed">
              Recognized as one of the best PGDM colleges in Pune, we offer a future-ready program that combines academic excellence, corporate immersion, and entrepreneurial spirit – empowering tomorrow’s business leaders.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-md transition duration-300">
                Admissions 2025–27
              </button>
              <button className="border border-gray-300 hover:border-red-600 text-gray-700 hover:text-red-600 font-semibold px-6 py-3 rounded-md transition duration-300">
                Explore Program
              </button>
            </div>
          </div>

          {/* Right Column - Stats/Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Feature 1 */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:shadow-md transition">
              <div className="text-3xl font-bold text-red-600 mb-2">5</div>
              <h3 className="text-xl font-semibold text-gray-800">Specializations</h3>
              <p className="text-gray-500 text-sm mt-1">Major + Minor Options</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:shadow-md transition">
              <div className="text-3xl font-bold text-red-600 mb-2">🌍</div>
              <h3 className="text-xl font-semibold text-gray-800">Global Exposure</h3>
              <p className="text-gray-500 text-sm mt-1">Dubai Immersion Program</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:shadow-md transition">
              <div className="text-3xl font-bold text-red-600 mb-2">12+</div>
              <h3 className="text-xl font-semibold text-gray-800">Certifications</h3>
              <p className="text-gray-500 text-sm mt-1">Career-focused add-ons</p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:shadow-md transition">
              <div className="text-3xl font-bold text-red-600 mb-2">💼</div>
              <h3 className="text-xl font-semibold text-gray-800">Placement Support</h3>
              <p className="text-gray-500 text-sm mt-1">Campus → Corporate</p>
            </div>
          </div>
        </div>

        {/* Optional: Additional styling for responsiveness and hover effects */}
      </div>
    </div>
  );
};

export default AIMSPGDMComponent;