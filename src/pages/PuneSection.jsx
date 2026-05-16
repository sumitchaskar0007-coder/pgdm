import React from "react";
import FrequentlyAskedQuestions from '../components/FrequentlyAskedQuestions';

const PuneSection = () => {
  return (
    <div>
      {/* ================= HERO SECTION ================= */}
      <div
        className="w-full min-h-screen py-20 px-6 md:px-16 bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/assets/images/pune.png')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/80"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT SIDE */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-snug text-gray-900">
              Pune Is The Perfect City To Study PGDM
            </h2>

            <p className="text-gray-700 mb-8 max-w-lg">
              Discover how Pune's unique mix of academic excellence,
              industry access, and vibrant student life makes it an ideal place
              to build your management career.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition">
                Call us 📞
              </button>

              <button className="border px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-100 transition">
                Whats App 💬
              </button>

              <button className="border px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-100 transition">
                Email us ✉️
              </button>
            </div>
          </div>

          {/* RIGHT SIDE CARDS */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <h3 className="text-3xl font-bold text-gray-900">100+</h3>
              <p className="text-gray-600 mt-1">Education Institutions</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <h3 className="text-3xl font-bold text-gray-900">500+</h3>
              <p className="text-gray-600 mt-1">IT & Tech Companies</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <h3 className="text-3xl font-bold text-gray-900">200+</h3>
              <p className="text-gray-600 mt-1">Industrial Hubs</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <h3 className="text-3xl font-bold text-gray-900">Vibrant</h3>
              <p className="text-gray-600 mt-1">Student Life</p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= EDUCATION HUB SECTION ================= */}
      <div className="w-full py-20 px-6 md:px-16 bg-gray-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT IMAGE */}
          <div>
            <img
              src="/assets/images/wp1.png"
              alt="Education Hub"
              className="w-full rounded-2xl shadow-md object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Education Hub — "Oxford Of The East"
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Pune is renowned as one of India's top education hubs, home to
              world-class universities, research centers, and professional
              colleges. With its rich academic ecosystem, Pune nurtures talent
              and innovation, making it the preferred destination for higher
              education.
            </p>
          </div>
        </div>
      </div>

      {/* ================= INDUSTRIAL SECTION ================= */}
      <div className="w-full py-20 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
              Industrial Strength — Automotive & Manufacturing Capital
            </h2>

            <p className="text-gray-600 leading-relaxed max-w-xl">
              Known as the Detroit of India, Pune hosts leading automotive, engineering, and 
              manufacturing companies. Students gain exposure to world-class industries and 
              benefit from internships, industry visits, and strong corporate linkages.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div>
            <img
              src="/assets/images/wp1.png"
              alt="Industrial Strength"
              className="w-full rounded-2xl shadow-md object-cover"
            />
          </div>
        </div>
      </div>

      {/* ================= IT & TECHNOLOGY HUB SECTION ================= */}
      <div className="w-full py-20 px-6 md:px-16 bg-gray-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT IMAGE */}
          <div>
            <img
              src="/assets/images/wp1.png"
              alt="IT & Technology Hub"
              className="w-full rounded-2xl shadow-md object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              IT & Technology Hub
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Pune has emerged as a major IT hub, with global giants like Infosys, Wipro, TCS, Tech Mahindra, and Cognizant establishing large campuses. This creates immense opportunities for management graduates in IT consulting, business analytics, and corporate leadership.
            </p>
          </div>
        </div>
      </div>

      {/* ================= STUDENT LIFESTYLE SECTION ================= */}
      <div className="w-full py-20 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
              Student Lifestyle in Pune
            </h2>

            <p className="text-gray-600 leading-relaxed max-w-xl">
              Pune offers the perfect blend of academic focus and vibrant lifestyle. From cultural festivals and sports arenas to cafes, start-up communities, and youth-centric events, the city provides an exciting environment that shapes confident, well-rounded professionals.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div>
            <img
              src="/assets/images/wp1.png"
              alt="Student Lifestyle"
              className="w-full rounded-2xl shadow-md object-cover"
            />
          </div>
        </div>
      </div>

      {/* ================= FAQ SECTION ================= */}
      <FrequentlyAskedQuestions />
    </div>
  );
};

export default PuneSection;