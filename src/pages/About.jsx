import React from "react";
import {
  Briefcase,
  Globe,
  Award,
  GraduationCap,
    CheckCircle,

} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="w-full bg-white text-gray-800">

      {/* ================= HERO ================= */}
      <section className="bg-[#2f4a92] text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About AIM Pune
        </h1>
        <p className="max-w-3xl mx-auto text-gray-200">
          Aditya Institute of Management (AIM) is committed to developing
          future-ready leaders through innovation, excellence, and global exposure.
        </p>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div>
            <img
              src="/assets/images/aim.png"
              alt="AIM Pune"
              className=" w-full"
            />
          </div>

          {/* Content */}
          <div className="space-y-5">
            <h2 className="text-3xl font-bold">Welcome to AIM Pune!</h2>

            <p className="text-gray-600">
              At Aditya Institute of Management – PGDM, we are committed to shaping
              future-ready professionals through a unique blend of academic excellence,
              industry integration, and holistic development.
            </p>

            <p className="text-gray-600">
              Our flagship PGDM program prepares students for the global business
              environment with industry projects, global exposure, and innovation-driven learning.
            </p>

            <p className="text-gray-600">
              With expert faculty, strong alumni network, and corporate training programs,
              AIM ensures students become confident and capable leaders.
            </p>
          </div>

        </div>
      </section>

      {/* ================= STATS + TAGLINE ================= */}
      <section className="bg-[#2b2b2b] text-white py-10 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-8">

          {/* Left Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center md:text-left">
            <div>
              <h3 className="text-xl font-bold">11,000+</h3>
              <p className="text-sm text-gray-300">Students</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">700+</h3>
              <p className="text-sm text-gray-300">Staff</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">55+</h3>
              <p className="text-sm text-gray-300">Institutions</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">2014</h3>
              <p className="text-sm text-gray-300">Since</p>
            </div>
          </div>

          {/* Right Text */}
          <div className="border-l border-gray-500 pl-6">
            <h2 className="text-2xl font-bold mb-2">
              Nurturing Leaders Of Tomorrow
            </h2>
            <p className="text-gray-300 text-sm">
              professionals with competence, and individuals with character.
            </p>
          </div>

        </div>
      </section>

      {/* ================= MISSION SECTION ================= */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Left Image */}
          <div>
            <img
              src="/assets/images/about.png"  // 🔁 replace with your image path
              alt="Mission AIM"
              className="rounded-xl shadow-lg w-full"
            />
          </div>

          {/* Right Content */}
          <div className="space-y-5">
            <h2 className="text-3xl font-bold text-gray-800">
              Mission
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Our mission goes beyond just delivering a degree. At AIM’s PGDM,
              we strive to: Impart industry-relevant knowledge that bridges academics
              with real-world business. Foster leadership qualities and decision-making
              abilities. Encourage critical & strategic thinking for sustainable growth.
              Inculcate values and ethics to shape responsible professionals.
            </p>

            <p className="text-gray-500 italic">
              We aim to create leaders who are not only skilled but also socially responsible and future-ready.
            </p>
          </div>

        </div>
      </section>

      {/* ================= VISION SECTION ================= */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-5">
            <h2 className="text-3xl font-bold text-gray-800">
              Vision
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Our vision is to be recognized as a premier management institute that shapes
              leaders of tomorrow. We envision to: Nurture globally competent professionals
              with multi-domain expertise. Encourage innovation, entrepreneurship, and
              adaptability in every student. Build managers who lead with integrity, ethics,
              and social commitment. Contribute to nation-building by preparing professionals
              who can thrive in an ever-evolving global economy.
            </p>

            <p className="text-gray-500 italic">
              We aspire to transform ambition into achievement, empowering students to become
              changemakers in the corporate world and society.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div>
            <img
              src="/assets/images/vision.png"   // 🔁 replace with your actual image path
              alt="Vision AIM"
              className="w-full rounded-xl shadow-lg object-cover"
            />
          </div>

        </div>
      </section>

      {/* ================= JADHAVAR GROUP LEGACY SECTION ================= */}
    <section className="py-16 px-6 bg-gray-50">
  <div className="max-w-7xl mx-auto">
    
    {/* Title */}
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
        About AIM - Jadhavar Group Legacy
      </h2>
      <div className="w-24 h-1 bg-[#2f4a92] mx-auto rounded-full"></div>
    </div>

    {/* Content Grid */}
    <div className="grid md:grid-cols-2 gap-12 items-center">

      {/* Left - Description */}
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          The Aditya Institute of Management (AIM), Pune offers a vibrant campus that blends 
          academic excellence with modern infrastructure and a student-friendly environment. 
          Designed to nurture learning, innovation, and holistic development, our campus provides 
          everything students need to excel in their academic and professional journey.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">

          {/* Card 1 */}
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex gap-4 items-start">
            <div className="bg-[#2f4a92]/10 p-3 rounded-lg">
              <GraduationCap className="text-[#2f4a92]" size={22} />
            </div>
            <div>
              <div className="font-semibold text-gray-800">5 Specializations</div>
              <div className="text-sm text-gray-500">Major + Minor Options</div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex gap-4 items-start">
            <div className="bg-[#2f4a92]/10 p-3 rounded-lg">
              <Globe className="text-[#2f4a92]" size={22} />
            </div>
            <div>
              <div className="font-semibold text-gray-800">Global Exposure</div>
              <div className="text-sm text-gray-500">Dubai Immersion Program</div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex gap-4 items-start">
            <div className="bg-[#2f4a92]/10 p-3 rounded-lg">
              <Award className="text-[#2f4a92]" size={22} />
            </div>
            <div>
              <div className="font-semibold text-gray-800">12+ Certifications</div>
              <div className="text-sm text-gray-500">Career-focused add-ons</div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex gap-4 items-start">
            <div className="bg-[#2f4a92]/10 p-3 rounded-lg">
              <Briefcase className="text-[#2f4a92]" size={22} />
            </div>
            <div>
              <div className="font-semibold text-gray-800">Placement Support</div>
              <div className="text-sm text-gray-500">Campus → Corporate</div>
            </div>
          </div>

        </div>

        {/* Watch Stories Button */}
        <div className="pt-2">
          <button className="inline-flex items-center gap-2 bg-[#2f4a92] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1e3a6b] transition">
            Watch Stories
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Right - Video */}
     <div className="relative group">
  {/* Image Container */}
  <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-white">
    <img
      src="/assets/images/campus.png"
      alt="Why AIM PGDM"
      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
    />
  </div>

  {/* Decorative Elements */}
  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#2f4a92]/10 rounded-full -z-10"></div>
  <div className="absolute -top-4 -left-4 w-32 h-32 bg-[#2f4a92]/5 rounded-full -z-10"></div>
</div>

    </div>
  </div>
</section>

<section className="w-full bg-[#f5f5f5] py-10 px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

    {/* Card 1 */}
    <div className="bg-white border rounded-xl p-6 hover:shadow-md transition">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#2f4a92] text-white mb-4">
        <GraduationCap size={20} />
      </div>
      <h3 className="font-semibold text-lg text-gray-800">
        5 Specializations
      </h3>
      <p className="text-sm text-gray-500 mt-1">
        Major + Minor Options
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-white border rounded-xl p-6 hover:shadow-md transition">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 text-white mb-4">
        <Globe size={20} />
      </div>
      <h3 className="font-semibold text-lg text-gray-800">
        Global Exposure
      </h3>
      <p className="text-sm text-gray-500 mt-1">
        Dubai Immersion Program
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-white border rounded-xl p-6 hover:shadow-md transition">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#2f4a92] text-white mb-4">
        <CheckCircle size={20} />
      </div>
      <h3 className="font-semibold text-lg text-gray-800">
        12+ Certifications
      </h3>
      <p className="text-sm text-gray-500 mt-1">
        Career-focused add-ons
      </p>
    </div>

    {/* Card 4 */}
    <div className="bg-white border rounded-xl p-6 hover:shadow-md transition">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 text-white mb-4">
        <Briefcase size={20} />
      </div>
      <h3 className="font-semibold text-lg text-gray-800">
        Placement Support
      </h3>
      <p className="text-sm text-gray-500 mt-1">
        Campus → Corporate
      </p>
    </div>

  </div>
</section>

      {/* ================= CTA ================= */}
      <section className="bg-[#2f4a92] text-white py-12 text-center">
        <h2 className="text-2xl font-bold mb-3">
          Start Your Journey with AIM Pune
        </h2>
        <p className="mb-4 text-gray-200">
          Build your career with the best PGDM institute in Pune.
        </p>
        <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition">
          Apply Now
        </button>
      </section>
      
    </div>
  );
}