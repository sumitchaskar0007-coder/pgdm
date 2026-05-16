import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Program = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Slider images
  const sliderImages = [
    { src: "/assets/images/campus.png", alt: "Campus View" },
    { src: "/assets/images/hero4.png", alt: "Hero Image" },
    { src: "/assets/images/aim.png", alt: "AIM Gallery" },
    { src: "/assets/images/library.png", alt: "Library" },
  ];

  const cards = [
    {
      title: "Marketing Management",
      desc: "Master the art of marketing, branding & digital strategy.",
      points: [
        "Market Research & Consumer Insights",
        "Digital Marketing & Brand Management",
      ],
      cert: "Digital Marketing (Google), Salesforce CRM, Brand Management",
    },
    {
      title: "Finance Management",
      desc: "Develop analytical and strategic financial expertise.",
      points: [
        "Corporate Finance & Investment Banking",
        "Financial Analytics & Risk Management",
      ],
      cert: "Financial Modeling, Capital Markets, FinTech & Blockchain",
    },
    {
      title: "Human Resource Management",
      desc: "Build people-centric leaders and organizational designers.",
      points: [
        "Recruitment & Talent Acquisition",
        "Employee Engagement & Training",
      ],
      cert: "HR Analytics, SAP HRMS, Labour Laws",
    },
    {
      title: "Operations & Supply Chain",
      desc: "Drive efficiency through supply chain strategy & process excellence.",
      points: [
        "Logistics & Distribution Management",
        "Production Planning & Quality Control",
      ],
      cert: "Six Sigma, Lean Management, SAP/ERP, PMP, ISO Standards",
    },
    {
      title: "Applied Business Analytics",
      desc: "Turn data into strategic decisions using modern analytics.",
      points: [
        "Data Visualization & Predictive Analytics",
        "AI & Machine Learning Applications",
      ],
      cert: "Data Analytics with Python & R, SQL, Tableau, Power BI",
    },
  ];

  const recruiters = [
    { name: "WILDCRAFT", bgColor: "bg-gray-100" },
    { name: "THERMAX LIMITED", bgColor: "bg-gray-100" },
    { name: "TIBCO®", bgColor: "bg-gray-100" },
    { name: "Universal Sempo", bgColor: "bg-gray-100" },
    { name: "Taxblock", bgColor: "bg-gray-100" },
    { name: "Tech Mahindra", bgColor: "bg-blue-50" },
  ];

  // Check screen size for responsive layout
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Auto-slide for image slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [sliderImages.length]);

  // Auto-slide for carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Get visible cards (responsive: 1 on mobile, 3 on desktop)
  const getVisibleCards = () => {
    const visibleCount = isMobile ? 1 : 3;
    const visible = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % cards.length;
      visible.push({ ...cards[index], originalIndex: index });
    }
    return visible;
  };

  return (
    <div className="w-full bg-gray-100">
      {/* ================= TOP SECTION ================= */}
      <div className="py-12 px-4 md:py-16 md:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 text-xs md:text-sm bg-gray-200 rounded-full">
                AICTE & DTE Approved
              </span>
              <span className="px-3 py-1 text-xs md:text-sm bg-gray-200 rounded-full">
                ✱ Industry Aligned
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Post Graduate Diploma In Management (PGDM)
            </h1>

            <p className="text-gray-600 mb-6 text-sm md:text-base">
              A 2-year, outcome-based program that blends academic excellence,
              industry integration, and holistic development.
            </p>

            <div className="flex flex-wrap gap-6 mb-6">
              <div>
                <h2 className="text-xl md:text-2xl font-bold">5+</h2>
                <p className="text-xs md:text-sm text-gray-500">Live Projects</p>
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold">10+</h2>
                <p className="text-xs md:text-sm text-gray-500">Case Studies</p>
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold">12</h2>
                <p className="text-xs md:text-sm text-gray-500">Skill Certifications</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button className="bg-yellow-400 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition">
                Quick Enquiry
              </button>
              <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
                Apply Now →
              </button>
            </div>
          </motion.div>

          {/* RIGHT IMAGE SLIDER */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 w-full"
          >
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={sliderImages[currentIndex].src}
                  alt={sliderImages[currentIndex].alt}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Slider Dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {sliderImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentIndex === idx
                        ? "w-6 bg-yellow-400"
                        : "w-2 bg-white/70"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ================= FEATURES STRIP ================= */}
      <div className="bg-gray-900 text-white py-8 md:py-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              "Outcome-Based Education (OBE)",
              "60-day Winter & Summer Internships",
              "Strong Alumni & Corporate Mentorship",
              "Major + Minor Specializations",
              "Global & National Exposure & Industrial Tours",
            ].map((item, i) => (
              <div key={i} className="border-l-4 border-yellow-400 pl-4 text-sm md:text-base">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= DURATION & FEE SECTION ================= */}
      <div className="py-12 px-4 md:py-16 md:px-8 lg:px-16">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
            {/* LEFT - Duration & Eligibility */}
            <div className="p-6 md:p-8 lg:w-1/2">
              <h2 className="text-xl md:text-2xl font-bold mb-6">Program Details</h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-100 rounded-lg flex items-center justify-center text-yellow-600 flex-shrink-0">
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Duration</h3>
                    <p className="text-sm md:text-base text-gray-600">24 Months</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-100 rounded-lg flex items-center justify-center text-yellow-600 flex-shrink-0">
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Eligibility</h3>
                    <p className="text-sm md:text-base text-gray-600">Any Graduate</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-100 rounded-lg flex items-center justify-center text-yellow-600 flex-shrink-0">
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Mode</h3>
                    <p className="text-sm md:text-base text-gray-600">On Campus</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-100 rounded-lg flex items-center justify-center text-yellow-600 flex-shrink-0">
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Approval</h3>
                    <p className="text-sm md:text-base text-gray-600">AICTE Approved</p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT - Fee Structure */}
            <div className="p-6 md:p-8 lg:w-1/2">
              <h2 className="text-xl md:text-2xl font-bold mb-2">Fee Structure (2025–27)</h2>
              <p className="text-xs md:text-sm text-gray-500 mb-4">
                At Aditya Institute of Management (AIM), Pune, we ensure that our fee structure is transparent 
                and student-friendly while maintaining the quality of academic delivery and infrastructure.
              </p>
              <p className="text-xs text-gray-400 mb-4 italic">*Subject to change as per institute policy.</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="text-sm md:text-base text-gray-700">First Year Fee</span>
                  <span className="font-semibold text-gray-900">₹2,50,000</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="text-sm md:text-base text-gray-700">Second Year Fee</span>
                  <span className="font-semibold text-gray-900">₹2,00,000</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <span className="text-sm md:text-base text-gray-900 font-semibold">Total Course Fee</span>
                  <span className="font-bold text-yellow-600 text-base md:text-lg">₹4,50,000</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-sm md:text-base text-gray-700">Hostel Fee (Optional)</span>
                  <span className="font-semibold text-gray-900">₹1,00,000 <span className="text-xs md:text-sm font-normal">per year</span></span>
                </div>
              </div>
            </div>
          </div>

          {/* Scholarships Section */}
          <div className="bg-gray-50 p-6 md:p-8 border-t border-gray-200">
            <h3 className="text-lg md:text-xl font-bold mb-4">Scholarships & Financial Assistance</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-start gap-3">
                <span className="text-yellow-500 text-lg flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </span>
                <p className="text-xs md:text-sm text-gray-700">Merit-based scholarships available for high scorers in entrance exams.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-yellow-500 text-lg flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <p className="text-xs md:text-sm text-gray-700">Need-based financial aid and installment facility.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-yellow-500 text-lg flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </span>
                <p className="text-xs md:text-sm text-gray-700">Tie-ups with banks for education loans at student-friendly rates.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= SPECIALIZATION SECTION ================= */}
      <div className="py-12 px-4 md:py-16 md:px-8 lg:px-16">
        {/* TOP SECTION */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-12">
          <div className="lg:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Specializations Offered</h2>
            <p className="text-sm md:text-base text-gray-600 mb-4">
              The program emphasizes academic rigor, industry integration, and holistic development.
            </p>
            <p className="text-sm md:text-base text-gray-500 mb-6">
              Choose a pathway that matches your career goals
            </p>
            <button className="border px-5 py-3 rounded-lg hover:bg-gray-100 transition">
              ⬇ Download Brochure
            </button>
          </div>

          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {[
                "Strategic thinking & problem-solving",
                "Leadership & team effectiveness",
                "Data-driven decision-making",
                "Ethics, values & social responsibility",
              ].map((item, i) => (
                <div key={i} className="bg-gray-200 p-3 md:p-4 rounded-lg text-xs md:text-sm font-medium">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CAROUSEL SLIDER */}
        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex justify-center items-stretch gap-4 md:gap-6">
              {getVisibleCards().map((card, index) => (
                <div key={`${currentIndex}-${index}`} className="flex-1 min-w-0">
                  <Card {...card} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 bg-white rounded-full p-2 md:p-3 shadow-lg hover:bg-gray-100 transition z-10"
          >
            ◀
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 bg-white rounded-full p-2 md:p-3 shadow-lg hover:bg-gray-100 transition z-10"
          >
            ▶
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 md:mt-8 gap-2">
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? "w-6 md:w-8 bg-yellow-400" : "w-2 bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ================= PLACEMENTS SECTION ================= */}
      <div className="py-12 px-4 md:py-16 md:px-8 lg:px-16 bg-white">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Placements</h2>
          <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto">
            At Aditya Institute of Management (AIM), Pune, we take pride in shaping careers and building future leaders. 
            Our dedicated Training & Placement Cell bridges the gap between academia and the corporate world, ensuring 
            that every student is industry-ready.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
          <div>
            <img
              src="/assets/images/p1.png"
              alt="placement"
              className="mx-auto w-40 h-32 md:w-60 md:h-48 object-contain mb-4 hover:scale-105 transition duration-300"
            />
            <h3 className="text-base md:text-lg font-bold mb-2">100% placement</h3>
            <p className="text-xs md:text-sm text-gray-600">Assistance with top recruiters.</p>
          </div>
          <div>
            <img
              src="/assets/images/p2.png"
              alt="industry"
              className="mx-auto w-40 h-32 md:w-60 md:h-48 object-contain mb-4 hover:scale-105 transition duration-300"
            />
            <h3 className="text-base md:text-lg font-bold mb-2">Strong industry connect</h3>
            <p className="text-xs md:text-sm text-gray-600">Guest lectures, live projects & internships.</p>
          </div>
          <div>
            <img
              src="/assets/images/p3.png"
              alt="training"
              className="mx-auto w-40 h-32 md:w-48 md:h-48 object-contain mb-4 hover:scale-105 transition duration-300"
            />
            <h3 className="text-base md:text-lg font-bold mb-2">Pre-placement training</h3>
            <p className="text-xs md:text-sm text-gray-600">Aptitude, communication, GD & PI.</p>
          </div>
          <div>
            <img
              src="/assets/images/p4.png"
              alt="sectors"
              className="mx-auto w-40 h-32 md:w-48 md:h-48 object-contain mb-4 hover:scale-105 transition duration-300"
            />
            <h3 className="text-base md:text-lg font-bold mb-2">Diverse sectors</h3>
            <p className="text-xs md:text-sm text-gray-600">IT, BFSI, Consulting, FMCG, Manufacturing, and Start-ups.</p>
          </div>
        </div>

        {/* Recruiters */}
        <div className="mt-16 md:mt-20">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-8 md:mb-10">
            Our Top Recruiters
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
            {recruiters.map((recruiter, index) => (
              <div
                key={index}
                className={`${recruiter.bgColor} p-4 md:p-6 rounded-xl shadow-sm hover:shadow-md transition flex items-center justify-center min-h-[80px] md:min-h-[110px]`}
              >
                <span className="font-semibold text-gray-800 text-center text-xs md:text-sm lg:text-base">
                  {recruiter.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= ADMISSIONS OPEN SECTION ================= */}
      <div className="py-12 px-4 md:py-16 md:px-8 lg:px-16 bg-gray-100">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Admissions Open | PGDM 2025–27
            </h2>
            <p className="text-sm md:text-base text-gray-600 mb-6 max-w-lg">
              Join a future-ready PGDM program blending academic rigour, corporate 
              immersion and entrepreneurial focus. Apply now for the 2025–27 batch.
            </p>
            <button className="border border-gray-400 px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-200 transition">
              ⬇ Download Brochure
            </button>
          </div>

          <div className="lg:w-1/2 w-full space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-gray-200 p-4 md:p-6 rounded-lg">
                <h3 className="font-semibold text-base md:text-lg mb-2">Program:</h3>
                <p className="text-sm md:text-base text-gray-700">PGDM — 2 years (2025–27)</p>
              </div>
              <div className="bg-gray-200 p-4 md:p-6 rounded-lg">
                <h3 className="font-semibold text-base md:text-lg mb-2">Intake:</h3>
                <p className="text-sm md:text-base text-gray-700">Limited seats — merit & interview based</p>
              </div>
            </div>
            <div className="bg-gray-200 p-4 md:p-6 rounded-lg">
              <h3 className="font-semibold text-base md:text-lg mb-2">Placement Focus:</h3>
              <p className="text-sm md:text-base text-gray-700">Corporate immersion, internships & industry projects</p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= GET IN TOUCH SECTION ================= */}
      <div className="py-12 px-4 md:py-16 md:px-8 lg:px-16">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* LEFT - Form Section */}
            <div className="p-6 md:p-8 lg:p-10 lg:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Get in touch with us!</h2>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none text-sm md:text-base"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email ID <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none text-sm md:text-base"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    WhatsApp Number <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none text-sm md:text-base"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Select Program <span className="text-red-500">*</span>
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none text-sm md:text-base">
                    <option>Select Program</option>
                    <option>PGDM</option>
                    <option>MBA</option>
                    <option>Executive PGDM</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Select Country
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none text-sm md:text-base">
                    <option>Select Country</option>
                    <option>India</option>
                    <option>USA</option>
                    <option>UK</option>
                    <option>Canada</option>
                    <option>Australia</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Select State
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none text-sm md:text-base">
                    <option>Select State</option>
                    <option>Maharashtra</option>
                    <option>Delhi</option>
                    <option>Karnataka</option>
                    <option>Tamil Nadu</option>
                    <option>Gujarat</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Select City
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none text-sm md:text-base">
                    <option>Select City</option>
                    <option>Pune</option>
                    <option>Mumbai</option>
                    <option>Delhi</option>
                    <option>Bangalore</option>
                    <option>Chennai</option>
                  </select>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-yellow-400 text-gray-900 font-semibold py-3 rounded-lg hover:bg-yellow-500 transition mt-6 text-sm md:text-base"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* RIGHT - Information Section */}
            <div className="bg-gray-50 p-6 md:p-8 lg:p-10 lg:w-1/2">
              <div className="mb-6 md:mb-8">
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Important Dates</h3>
                <div className="space-y-2 text-xs md:text-sm text-gray-700">
                  <p>• Applications Open: <span className="text-gray-500">[Insert date]</span> &nbsp;&nbsp;●&nbsp;&nbsp; Last Date to Apply: <span className="text-gray-500">[Insert date]</span></p>
                  <p>• GD / PI: <span className="text-gray-500">[Insert date range]</span> &nbsp;&nbsp;●&nbsp;&nbsp; Program Start: <span className="text-gray-500">[Insert date]</span></p>
                </div>
              </div>

              <div className="mb-6 md:mb-8">
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Eligibility</h3>
                <ul className="space-y-2 text-xs md:text-sm text-gray-700">
                  <li>• Any graduate from a recognized university with minimum 50% or equivalent CGPA</li>
                  <li>• Valid scores accepted: CAT / XAT / CMAT / ATMA / MAT (as applicable)</li>
                </ul>
              </div>

              <div className="mb-6 md:mb-8">
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Selection Process</h3>
                <ul className="space-y-2 text-xs md:text-sm text-gray-700">
                  <li>• Shortlisting based on academic record & test scores</li>
                  <li>• Group Discussion / Written Ability Test</li>
                  <li>• Personal Interview (final admission decision)</li>
                </ul>
              </div>

              <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-gray-200">
                <div className="text-green-600 font-semibold mb-2 text-sm md:text-base">✓ Success!</div>
                <div className="text-xs text-gray-500">CLOUDFLARE Privacy • Help</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* CARD COMPONENT - Responsive */
const Card = ({ title, desc, points, cert }) => (
  <div className="w-full bg-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition flex flex-col h-full">
    <div className="p-4 md:p-5 flex-grow">
      <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3">{title}</h3>
      <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4 leading-relaxed">{desc}</p>

      <ul className="text-xs text-yellow-700 space-y-1 md:space-y-2">
        {points.map((p, i) => (
          <li key={i}>• {p}</li>
        ))}
      </ul>
    </div>

    <div className="bg-gray-300 p-3 md:p-4">
      <span className="font-semibold text-xs md:text-sm block mb-1">Certifications</span>
      <p className="text-gray-700 text-xs leading-relaxed">{cert}</p>
    </div>
  </div>
);

export default Program;