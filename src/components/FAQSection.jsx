import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What is the PGDM program offered at AIM?",
      a: "The Post Graduate Diploma in Management (PGDM) at Aditya Institute of Management (AIM) is a professionally designed management program focused on developing leadership, analytical, communication, and business management skills required in today’s corporate world."
    },
    {
      q: "Is the PGDM course at AIM approved and industry-oriented?",
      a: "Yes, the PGDM program at AIM is designed according to modern industry requirements and focuses on practical learning, business exposure, corporate training, and professional development to prepare students for successful careers."
    },
    {
      q: "What is the eligibility criteria for admission to the PGDM course?",
      a: "Candidates who have completed graduation in any discipline from a recognized university with qualifying marks are eligible to apply for the PGDM program at AIM."
    },
    {
      q: "What specializations are available in the PGDM program?",
      a: "AIM offers career-focused specializations such as Marketing Management, Human Resource Management, Finance Management, Business Analytics, and Operations Management to match current industry demands."
    },
    {
      q: "Does AIM provide placement assistance to PGDM students?",
      a: "Yes, AIM has a dedicated Training and Placement Cell that provides placement assistance, career guidance, resume building sessions, mock interviews, aptitude training, and corporate interaction programs."
    },
    {
      q: "Are internships included in the PGDM curriculum?",
      a: "Yes, students are encouraged to participate in internships, live projects, industrial visits, workshops, and practical business training programs to gain real-world corporate experience."
    },
    {
      q: "What facilities are available on the AIM campus?",
      a: "AIM provides modern classrooms, computer laboratories, seminar halls, digital learning resources, library facilities, Wi-Fi-enabled campus, industry interaction sessions, and student development activities."
    },
    {
      q: "Why should students choose AIM for PGDM studies?",
      a: "Aditya Institute of Management (AIM) focuses on quality management education, industry exposure, personality development, leadership training, and skill enhancement, helping students build strong careers in the corporate sector."
    }
  ];

  return (
    <section
      className="w-full bg-gradient-to-b from-gray-50 to-white py-14 md:py-20"
      id="faq"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-blue-700 text-xs md:text-sm font-semibold px-4 py-1 rounded-full mb-4 uppercase tracking-wide">
            AIM PGDM FAQs
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Frequently Asked Questions About{" "}
            <span className="text-blue-700">
              AIM PGDM Program
            </span>
          </h2>

          <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto mt-4 leading-relaxed">
            Explore commonly asked questions about admissions, eligibility,
            placements, internships, specializations, campus facilities, and
            career opportunities at Aditya Institute of Management (AIM).
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`bg-white border rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-blue-500"
                    : "border-gray-200"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-start justify-between gap-4 p-5 text-left"
                >
                  <h3 className="font-semibold text-gray-900 text-sm md:text-lg leading-snug">
                    {faq.q}
                  </h3>

                  <div className="flex-shrink-0 mt-1">
                    {isOpen ? (
                      <Minus className="w-5 h-5 text-blue-700" />
                    ) : (
                      <Plus className="w-5 h-5 text-blue-700" />
                    )}
                  </div>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-5 pb-5">
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}