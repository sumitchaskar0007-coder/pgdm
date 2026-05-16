import React from "react";
import { Helmet } from 'react-helmet-async';
import { Download, BookOpen, Users, Target, Award } from "lucide-react";

function FounderPage() {
  return (
    <>
      {/* SEO Meta Data */}
      <Helmet>
        <title>Founder & Leadership Team | Jadhavar Group of Institutes</title>
        <meta name="description" content="Meet the visionary leaders of Jadhavar Group of Institutes - Prin. Dr. Sudhakarrao Jadhavar, Adv. Shardulrao Jadhavar, and Mrs. Surekha Jadhavar. Learn about their mission and vision for quality education." />
        <meta name="keywords" content="founder, jadhavar group of institutes, dr sudhakarrao jadhavar, shardulrao jadhavar, surekha jadhavar, pgdm pune" />
      </Helmet>

      {/* ================= FOUNDER SECTION ================= */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Image */}
            <div className="order-2 lg:order-1">
              <img
                src="/assets/images/president.png"
                alt="Prin. Dr. Sudhakarrao Jadhavar - Founder of Jadhavar Group of Institutes"
                className="w-full max-w-md mx-auto rounded-2xl shadow-xl object-cover"
                loading="lazy"
              />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <div className="mb-4">
                <span className="text-blue-600 text-sm font-semibold uppercase tracking-wide">Founder & President</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                Prin. Dr. Sudhakarrao Jadhavar
              </h1>
              <p className="text-gray-600 text-sm md:text-base mb-4">
                M.Com, M.A., LL.M., M.P.M., D.T.L., D.L.L. & L.W., G.D.C. & A., Ph.D.
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-600 p-5 mb-6 rounded-r-xl">
                <p className="text-gray-700 italic text-base md:text-lg">
                  "With the vision 'Education for strength, wisdom and intellect', it is my pride and privilege to welcome you to our PGDM program."
                </p>
              </div>

              {/* Autobiography */}
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                  Autobiography
                </h2>
                <div className="flex flex-wrap gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-blue-600 hover:text-white rounded-lg transition text-sm">
                    मराठी <Download size={14} />
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-blue-600 hover:text-white rounded-lg transition text-sm">
                    हिंदी <Download size={14} />
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-blue-600 hover:text-white rounded-lg transition text-sm">
                    English <Download size={14} />
                  </button>
                </div>
              </div>

              {/* Books */}
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                  Books
                </h2>
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-blue-600 hover:text-white rounded-lg transition text-sm">
                  मानवी कल्याणाचे शिल्पकार <Download size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= VICE PRESIDENT SECTION ================= */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Content */}
            <div>
              <div className="mb-4">
                <span className="text-blue-600 text-sm font-semibold uppercase tracking-wide">Vice President</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Adv. Shardulrao Sudhakarrao Jadhavar
              </h2>
              <p className="text-gray-600 text-sm md:text-base mb-4">
                M.B.A., P.G.D.H.R.M., LL.M.
              </p>
              
              <div className="bg-white border-l-4 border-blue-600 p-5 mb-6 rounded-r-xl shadow-sm">
                <p className="text-gray-700 italic text-base md:text-lg">
                  "Our student-centric approach focuses on all-round development, skill enhancement, and building future-ready leaders. AIM's PGDM shapes professionals who can face global challenges with confidence."
                </p>
              </div>
            </div>

            {/* Image */}
            <div>
              <img
                src="/assets/images/vicepresident.png"
                alt="Adv. Shardulrao Sudhakarrao Jadhavar - Vice President of Jadhavar Group of Institutes"
                className="w-full max-w-md mx-auto rounded-2xl shadow-xl object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Additional Image */}
          
        </div>
      </section>

      {/* ================= TREASURER SECTION ================= */}
      {/*  */}

      {/* ================= STATS SECTION ================= */}
      <section className="py-16 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">25+</div>
              <p className="text-blue-100">Years of Excellence</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">5000+</div>
              <p className="text-blue-100">Alumni Network</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">100%</div>
              <p className="text-blue-100">Placement Assistance</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
              <p className="text-blue-100">Corporate Partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Start Your Journey with Us
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join Jadhavar Group of Institutes and get quality education, industry exposure, and a bright future.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/admission" className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition shadow-md">
              Apply Now
            </a>
            <a href="/contact" className="inline-block px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default FounderPage;