import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import FAQSection from "../components/FAQSection";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import GlimpseAIM from "../components/GlimpseAIM";
import second from "../components/second";
import { ChevronLeft, ChevronRight, TrendingUp, BarChart3, Megaphone, Wallet, Users, Truck } from 'lucide-react';

// Specializations Data
const specializations = [
  {
    id: 1,
    title: "Marketing Management",
    icon: <Megaphone className="h-8 w-8 text-gray-700" />,
    description: "Master the art of marketing, branding & digital strategy.",
    features: ["Market Research & Consumer Insights", "Digital Marketing & Brand Management"],
    certifications: ["Digital Marketing (Google)", "Salesforce CRM", "Brand Management"]
  },
  {
    id: 2,
    title: "Finance Management",
    icon: <Wallet className="h-8 w-8 text-gray-700" />,
    description: "Develop analytical and strategic financial expertise.",
    features: ["Corporate Finance & Investment Banking", "Financial Analytics & Risk Management"],
    certifications: ["Financial Modeling", "Capital Markets (NSE/BSE/NISM)", "FinTech & Blockchain"]
  },
  {
    id: 3,
    title: "Human Resource Management",
    icon: <Users className="h-8 w-8 text-gray-700" />,
    description: "Build people-centric leaders and organizational designers.",
    features: ["Recruitment & Talent Acquisition", "Employee Engagement & Training"],
    certifications: ["HR Analytics & Dashboards", "SAP HRMS", "Talent Acquisition", "Industrial Relations"]
  },
  {
    id: 4,
    title: "Operations & Supply Chain",
    icon: <Truck className="h-8 w-8 text-gray-700" />,
    description: "Drive efficiency through supply chain strategy & process excellence.",
    features: ["Logistics & Distribution Management", "Production Planning & Quality Control"],
    certifications: ["Six Sigma", "Lean Management", "SAP / ERP", "PMP", "ISO Standards & Quality Management"]
  },
  {
    id: 5,
    title: "Applied Business Analytics",
    icon: <BarChart3 className="h-8 w-8 text-gray-700" />,
    description: "Turn data into strategic decisions using modern analytics.",
    features: ["Data Visualization & Predictive Analytics", "AI & Machine Learning Applications"],
    certifications: ["Data Analytics with Python & R", "SQL", "Tableau / Power BI", "ML Basics"]
  }
];

// Extended array for loop effect
const extendedSpecializations = [...specializations, ...specializations];

function SpecializationsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoPlayRef = useRef(null);
  const itemsToShow = 3;

  const totalItems = specializations.length;

  const getItemWidth = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 100;
      if (window.innerWidth < 1024) return 50;
      return 33.333;
    }
    return 33.333;
  };

  const [itemWidth, setItemWidth] = useState(getItemWidth());

  useEffect(() => {
    const handleResize = () => {
      setItemWidth(getItemWidth());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying, currentIndex]);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const goToSlide = (index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (currentIndex >= totalItems) {
      setCurrentIndex(currentIndex - totalItems);
    }
    if (currentIndex < 0) {
      setCurrentIndex(currentIndex + totalItems);
    }
  };

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-block">
            <span className="text-gray-600 text-xs md:text-sm font-semibold uppercase tracking-wider bg-gray-200 px-3 md:px-4 py-1 rounded-full">
              Our Programs
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mt-3 md:mt-4 mb-2 md:mb-3">
            Specializations We Offer
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
            Choose from industry-focused specializations designed to shape you into a future-ready professional
          </p>
        </div>

        {/* Slider Controls */}
        <div className="flex justify-center md:justify-end gap-2 mb-4 md:mb-6">
          <button
            onClick={prevSlide}
            className="p-1.5 md:p-2 rounded-full bg-white border border-gray-300 hover:bg-gray-800 hover:text-white hover:border-gray-800 transition-all duration-300 shadow-sm"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
          </button>
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`p-1.5 md:p-2 rounded-full border transition-all duration-300 shadow-sm text-xs md:text-sm ${
              isAutoPlaying 
                ? 'bg-gray-800 text-white border-gray-800' 
                : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-800 hover:text-white'
            }`}
            aria-label={isAutoPlaying ? "Pause autoplay" : "Start autoplay"}
          >
            {isAutoPlaying ? "⏸" : "▶"}
          </button>
          <button
            onClick={nextSlide}
            className="p-1.5 md:p-2 rounded-full bg-white border border-gray-300 hover:bg-gray-800 hover:text-white hover:border-gray-800 transition-all duration-300 shadow-sm"
            aria-label="Next slide"
          >
            <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
          </button>
        </div>

        {/* Slider Container */}
        <div className="relative overflow-hidden rounded-xl">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * itemWidth}%)`,
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedSpecializations.map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className="flex-shrink-0 px-2 md:px-3"
                style={{ width: `${itemWidth}%` }}
              >
                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 h-full overflow-hidden border border-gray-100">
                  {/* Card Header */}
                  <div className="bg-gray-50 p-4 md:p-5 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="bg-white p-2 rounded-lg shadow-sm">
                        {item.icon}
                      </div>
                      <h3 className="text-base md:text-lg font-bold text-gray-800">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Card Body */}
                  <div className="p-4 md:p-5">
                    <p className="text-gray-500 text-xs md:text-sm mb-3 md:mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    
                    {/* Key Areas */}
                    <div className="mb-3 md:mb-4">
                      <h4 className="text-xs font-semibold text-gray-700 mb-1.5 md:mb-2">Key Areas:</h4>
                      <ul className="space-y-1">
                        {item.features.map((feature, i) => (
                          <li key={i} className="text-gray-500 text-xs flex items-start gap-1.5">
                            <span className="text-gray-400 mt-0.5">•</span>
                            <span className="text-xs">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Certifications */}
                    <div className="pt-3 md:pt-4 border-t border-gray-100">
                      <h4 className="text-xs font-semibold text-gray-700 mb-1.5 md:mb-2">Certifications:</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {item.certifications.slice(0, 3).map((cert, i) => (
                          <span
                            key={i}
                            className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full"
                          >
                            {cert}
                          </span>
                        ))}
                        {item.certifications.length > 3 && (
                          <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
                            +{item.certifications.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-1.5 md:gap-2 mt-6 md:mt-8">
          {specializations.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`h-1.5 md:h-2 rounded-full transition-all duration-300 ${
                currentIndex % totalItems === idx
                  ? 'w-6 md:w-8 bg-gray-700'
                  : 'w-1.5 md:w-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-6 md:mt-8">
          <button className="inline-flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 bg-gray-800 text-white text-sm md:text-base font-semibold rounded-lg hover:bg-gray-900 transition-all duration-300 shadow-md hover:shadow-lg">
            View All Programs
            <ChevronRight className="h-3.5 w-3.5 md:h-4 md:w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

// Hero Images Array
const heroImages = [
  "/assets/images/about.png",
  "/assets/images/campus.png",
  "/assets/images/library.png",
  "/assets/images/pune.png",
  "/assets/images/hero4.png"
];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const recruiters = [
    { name: "Deloitte", bgColor: "bg-gray-50" },
    { name: "KPMG", bgColor: "bg-gray-50" },
    { name: "EY", bgColor: "bg-gray-50" },
    { name: "PwC", bgColor: "bg-gray-50" },
    { name: "Tata Motors", bgColor: "bg-gray-50" },
    { name: "Mahindra", bgColor: "bg-gray-50" },
    { name: "HDFC Bank", bgColor: "bg-gray-50" },
    { name: "ICICI Bank", bgColor: "bg-gray-50" },
    { name: "Infosys", bgColor: "bg-gray-50" },
    { name: "TCS", bgColor: "bg-gray-50" },
    { name: "Wipro", bgColor: "bg-gray-50" },
    { name: "Accenture", bgColor: "bg-gray-50" }
  ];

  return (
    <>
      {/* ==================== HERO SECTION ==================== */}
      <section
        className="w-full py-10 md:py-14 px-4 sm:px-6 lg:px-8"
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "#fff",
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 space-y-4 md:space-y-6"
          >
            <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-gray-200">
              AICTE & DTE Approved
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
              Get Set To Rule The Corporate World
            </h1>
            <p className="text-base md:text-lg text-gray-100 leading-relaxed max-w-xl">
              Two-Year Full-Time PGDM in Pune with global immersion,
              certifications, and 100% placement support.
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4 pt-2">
              <button className="bg-yellow-400 text-black px-5 md:px-6 py-2.5 md:py-3 rounded-md font-semibold hover:bg-yellow-300 transition shadow-md flex items-center gap-2 text-sm md:text-base">
                Apply Now →
              </button>
              <button className="bg-white text-black px-5 md:px-6 py-2.5 md:py-3 rounded-md font-semibold hover:bg-gray-100 transition shadow-md flex items-center gap-2 text-sm md:text-base">
                ⬛ Explore Programs
              </button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 pt-4 md:pt-6">
              <div>
                <p className="text-xl md:text-2xl font-bold">2014</p>
                <p className="text-xs md:text-sm text-gray-200">Since</p>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-bold">11,000+</p>
                <p className="text-xs md:text-sm text-gray-200">Students</p>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-bold">700+</p>
                <p className="text-xs md:text-sm text-gray-200">Staff</p>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-bold">55+</p>
                <p className="text-xs md:text-sm text-gray-200">Institutions</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-1/2"
          >
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl">
              <img
                src={heroImages[currentImageIndex]}
                alt={`Hero Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              {/* Image Indicators */}
              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      currentImageIndex === index
                        ? 'w-6 bg-white'
                        : 'w-1.5 bg-white/50 hover:bg-white/80'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
          </motion.div>
        </div>
      </section>
      
      <second />

      {/* ================= WELCOME MESSAGE ================= */}
      <section className="w-full bg-gray-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
            <img
              src="/assets/images/3.png"
              alt="Welcome Image"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-4 md:space-y-6">
            <p className="text-blue-600 font-semibold text-sm md:text-base">
              Best PGDM College In Pune
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
              Why AIM'S PGDM?
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Recognized as one of the best PGDM colleges in Pune, we offer a future-ready
              program that combines academic excellence, corporate immersion, and
              entrepreneurial spirit – empowering tomorrow's business leaders.
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-5 md:px-6 py-2.5 md:py-3 rounded-lg font-semibold flex items-center gap-2 transition text-sm md:text-base">
                ☰ Admissions 2025–27
              </button>
              <button className="bg-gray-800 hover:bg-gray-900 text-white px-5 md:px-6 py-2.5 md:py-3 rounded-lg font-semibold flex items-center gap-2 transition text-sm md:text-base">
                Explore Program →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= NEW SPECIALIZATIONS SLIDER ================= */}
      <SpecializationsSlider />

      {/* ================= PROGRAM HIGHLIGHTS ================= */}
      <section className="w-full bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 md:mb-3">Program Highlights</h2>
            <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto">
              Designed to provide comprehensive learning experiences with industry-aligned specializations
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <div className="group bg-gray-50 rounded-xl p-5 md:p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-xl bg-gray-800 text-white mb-4 text-xl md:text-2xl shadow-md group-hover:scale-105 transition-transform">
                📄
              </div>
              <h3 className="font-bold text-base md:text-lg text-gray-800">5 Specializations</h3>
              <p className="text-gray-500 text-xs md:text-sm mt-1 md:mt-2">Major + Minor Options</p>
            </div>

            <div className="group bg-gray-50 rounded-xl p-5 md:p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-xl bg-gray-800 text-white mb-4 text-xl md:text-2xl shadow-md group-hover:scale-105 transition-transform">
                🌐
              </div>
              <h3 className="font-bold text-base md:text-lg text-gray-800">Global Exposure</h3>
              <p className="text-gray-500 text-xs md:text-sm mt-1 md:mt-2">Dubai Immersion Program</p>
            </div>

            <div className="group bg-gray-50 rounded-xl p-5 md:p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-xl bg-gray-800 text-white mb-4 text-xl md:text-2xl shadow-md group-hover:scale-105 transition-transform">
                ✔️
              </div>
              <h3 className="font-bold text-base md:text-lg text-gray-800">12+ Certifications</h3>
              <p className="text-gray-500 text-xs md:text-sm mt-1 md:mt-2">Industry-recognized add-ons</p>
            </div>

            <div className="group bg-gray-50 rounded-xl p-5 md:p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-xl bg-gray-800 text-white mb-4 text-xl md:text-2xl shadow-md group-hover:scale-105 transition-transform">
                📘
              </div>
              <h3 className="font-bold text-base md:text-lg text-gray-800">Placement Support</h3>
              <p className="text-gray-500 text-xs md:text-sm mt-1 md:mt-2">End-to-end career guidance</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PLACEMENTS SECTION ================= */}
      <div className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">Placements</h2>
            <p className="text-gray-500 text-sm md:text-base max-w-3xl mx-auto">
              At Aditya Institute of Management (AIM), Pune, we take pride in shaping careers and building future leaders. 
              Our dedicated Training & Placement Cell bridges the gap between academia and the corporate world.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-center">
            <div>
              <img
                src="/assets/images/p1.png"
                alt="placement"
                className="mx-auto w-40 h-32 md:w-48 md:h-40 object-contain mb-4 md:mb-6 hover:scale-105 transition duration-300"
                style={{ background: 'transparent' }}
              />
              <h3 className="text-base md:text-lg font-bold text-gray-800 mb-1 md:mb-2">100% placement</h3>
              <p className="text-gray-500 text-xs md:text-sm">Assistance with top recruiters.</p>
            </div>

            <div>
              <img
                src="/assets/images/p2.png"
                alt="industry"
                className="mx-auto w-40 h-32 md:w-48 md:h-40 object-contain mb-4 md:mb-6 hover:scale-105 transition duration-300"
                style={{ background: 'transparent' }}
              />
              <h3 className="text-base md:text-lg font-bold text-gray-800 mb-1 md:mb-2">Strong industry connect</h3>
              <p className="text-gray-500 text-xs md:text-sm">Guest lectures, live projects & internships.</p>
            </div>

            <div>
              <img
                src="/assets/images/p3.png"
                alt="training"
                className="mx-auto w-40 h-32 md:w-48 md:h-40 object-contain mb-4 md:mb-6 hover:scale-105 transition duration-300"
                style={{ background: 'transparent' }}
              />
              <h3 className="text-base md:text-lg font-bold text-gray-800 mb-1 md:mb-2">Pre-placement training</h3>
              <p className="text-gray-500 text-xs md:text-sm">Aptitude, communication, GD & PI.</p>
            </div>

            <div>
              <img
                src="/assets/images/p4.png"
                alt="sectors"
                className="mx-auto w-40 h-32 md:w-48 md:h-40 object-contain mb-4 md:mb-6 hover:scale-105 transition duration-300"
                style={{ background: 'transparent' }}
              />
              <h3 className="text-base md:text-lg font-bold text-gray-800 mb-1 md:mb-2">Diverse sectors</h3>
              <p className="text-gray-500 text-xs md:text-sm">IT, BFSI, Consulting, FMCG, Manufacturing, Start-ups.</p>
            </div>
          </div>

          <div className="mt-12 md:mt-20">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-8 md:mb-10">Our Top Recruiters</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-5">
              {recruiters.map((recruiter, index) => (
                <div
                  key={index}
                  className="bg-white p-4 md:p-6 rounded-xl shadow-sm hover:shadow-md transition flex items-center justify-center min-h-[80px] md:min-h-[110px] border border-gray-200"
                >
                  <span className="font-semibold text-gray-700 text-xs md:text-sm text-center">{recruiter.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ================= VISION & MISSION ================= */}
      <section className="w-full bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 md:mb-12 text-center">Vision & Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-gray-50 p-6 md:p-8 rounded-xl hover:shadow-lg transition">
              <h3 className="text-xl md:text-2xl font-bold mb-3 flex items-center gap-2 text-gray-800">🎯 Vision</h3>
              <p className="text-gray-600 text-sm md:text-base">
                To emerge as a leading institution in management education by producing
                socially responsible, ethically strong, and professionally competent
                business leaders.
              </p>
            </div>
            <div className="bg-gray-50 p-6 md:p-8 rounded-xl hover:shadow-lg transition">
              <h3 className="text-xl md:text-2xl font-bold mb-3 flex items-center gap-2 text-gray-800">🚀 Mission</h3>
              <ul className="text-gray-600 space-y-2 text-sm md:text-base">
                <li>• Deliver quality management education aligned with industry standards</li>
                <li>• Promote research, innovation, and leadership excellence</li>
                <li>• Instill ethical values and social responsibility</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <GlimpseAIM />

      {/* ================= AWARDS & ACHIEVEMENTS ================= */}
      <section className="w-full bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-14 items-center mb-12 md:mb-16">
            <div className="flex justify-center lg:justify-start">
              <img
                src="/assets/images/logo1.png"
                alt="Jadhavar Group of Institutes Logo"
                className="w-40 md:w-48 lg:w-56 object-contain"
                loading="lazy"
              />
            </div>
            <div>
              <p className="text-xs md:text-sm text-blue-600 font-semibold mb-2">Jadhavar Group of Institutes</p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">Awards & Achievements</h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Aditya Institute of Management has been consistently recognized for excellence
                in management education. Our commitment to quality teaching, infrastructure,
                and student outcomes has earned us numerous accolades and certifications.
              </p>
            </div>
          </div>

          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation
            loop
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="pb-10"
          >
            {[
              "/assets/images/certificate1.png",
              "/assets/images/certificate2.png",
              "/assets/images/certificate3.png",
              "/assets/images/certificate4.png",
            ].map((cert, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center">
                  <img
                    src={cert}
                    alt={`Certificate ${index + 1}`}
                    className="w-full max-w-[200px] md:max-w-xs h-40 md:h-56 object-contain border border-gray-200 rounded-lg"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ================= STUDENT TESTIMONIALS ================= */}
      <section className="w-full bg-gray-50 py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 md:mb-10">Student Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-md">
              <p className="text-gray-600 text-sm md:text-base italic">“The faculty guidance and live projects helped me gain confidence for corporate roles.”</p>
              <p className="mt-3 md:mt-4 font-semibold text-gray-800">— PGDM Student</p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-md">
              <p className="text-gray-600 text-sm md:text-base italic">“Internship guidance and placement preparation at AIM shaped my management career.”</p>
              <p className="mt-3 md:mt-4 font-semibold text-gray-800">— Alumni</p>
            </div>
          </div>
        </div>
      </section>

      <FAQSection />
    </>
  );
}


