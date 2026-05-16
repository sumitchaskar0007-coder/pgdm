import React from "react";
import {
  MapPin,
  Building2,
  BookOpen,
  GraduationCap,
  Globe2,
  Users,
  Award,
  School,
  Leaf,
} from "lucide-react";

export default function GlimpseAIM() {
  return (
    <section className="w-full bg-[#2f4a92] py-14 px-6 text-white">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Glimpse @ AIM
        </h2>

        <p className="max-w-2xl mx-auto text-gray-200 text-sm mb-10">
          Aditya Institute of Management (AIM), under Jadhavar Group of Institutes,
          is one of Pune’s leading PGDM institutions, shaping future-ready leaders through
          academic excellence, corporate immersion, and value-driven learning.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-left">

          <Card icon={<MapPin />} title="Location" desc="Strategically situated in Pune, India’s education & IT hub" />

          <Card icon={<Building2 />} title="Placements" desc="Excellent track record with leading corporates & MNCs" />

          <Card icon={<BookOpen />} title="Beyond Academics" desc="Student clubs, cultural events, sports & leadership activities" />

          <Card icon={<GraduationCap />} title="Programs Offered" desc="AICTE-approved PGDM (2 Years Full-Time)" />

          <Card icon={<Globe2 />} title="Industry Connect" desc="Regular corporate talks, live projects & internships" />

          <Card icon={<School />} title="Faculty" desc="Blend of academic scholars and corporate professionals" />

          <Card icon={<Award />} title="Legacy" desc="Trusted brand in management education with a strong alumni" />

          <Card icon={<Users />} title="Facilities" desc="Modern classrooms, library, computer labs & Wi-Fi campus" />

          <Card icon={<Leaf />} title="Values" desc="Focus on ethics, leadership, and holistic development" />

        </div>

        {/* Bottom Text */}
        <p className="mt-10 text-xs text-gray-200">
          AIM is not just a business school, it’s a launchpad for your professional success and personal growth!
        </p>

      </div>
    </section>
  );
}

/* ---------------- CARD ---------------- */

function Card({ icon, title, desc }) {
  return (
    <div className="bg-[#f3f3f3] text-gray-800 rounded-md p-4 shadow-sm border border-gray-200 hover:shadow-md transition">
      
      {/* Icon */}
      <div className="text-[#2f4a92] mb-2">
        {React.cloneElement(icon, { size: 24 })}
      </div>

      {/* Title */}
      <h3 className="font-semibold text-base mb-1">
        {title}
      </h3>

      {/* Description */}
      <p className="text-xs text-gray-600 leading-snug">
        {desc}
      </p>

    </div>
  );
}