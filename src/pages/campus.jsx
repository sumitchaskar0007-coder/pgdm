import React, { useState } from 'react';
import { 
  Wifi, 
  MonitorSmartphone, 
  Users, 
  Computer, 
  Trophy, 
  Home, 
  Library, 
  Building2,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const Campus = () => {
  // State to manage FAQ accordion
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Facilities data
  const facilities = [
    { icon: <Wifi className="w-10 h-10 text-blue-600" />, title: "Wi‑Fi Campus", description: "High-speed Wi-Fi across the campus for learning, projects, and communication." },
    { icon: <MonitorSmartphone className="w-10 h-10 text-blue-600" />, title: "Smart Classrooms", description: "Modern classrooms with projectors & audiovisual systems." },
    { icon: <Users className="w-10 h-10 text-blue-600" />, title: "Conference Hall", description: "Equipped for GDs, corporate talks & career development." },
    { icon: <Computer className="w-10 h-10 text-blue-600" />, title: "Digital Labs", description: "Over 100 high-performance dual-core machines with broadband connectivity." },
    { icon: <Trophy className="w-10 h-10 text-blue-600" />, title: "Sports", description: "Facilities for indoor and outdoor games: Cricket, Volleyball, Football, etc." },
    { icon: <Home className="w-10 h-10 text-blue-600" />, title: "Hostel", description: "Separate hostels for boys & girls, designed for comfort & security." },
    { icon: <Library className="w-10 h-10 text-blue-600" />, title: "Library", description: "A well-stocked library with 6,000+ books, journals, periodicals & magazines." },
    { icon: <Building2 className="w-10 h-10 text-blue-600" />, title: "Auditorium", description: "Designed for seminars, GDs, debates, and corporate interactions." }
  ];

  // FAQ data
  const faqs = [
    { question: "What is the eligibility criteria for the PGDM program?", answer: "Any graduate (10+2+3) with a minimum of 50% marks from a recognized university is eligible. Final-year students awaiting results may also apply." },
    { question: "Is there any entrance exam requirement?", answer: "Yes, candidates must have a valid score in CAT / MAT / XAT / CMAT / ATMA / GMAT or any other AICTE-approved entrance test." },
    { question: "How can I apply for admission?", answer: "You can apply online through our official website or visit the Admissions Office at AIM Pune. After application, shortlisted candidates are called for GD-PI rounds." },
    { question: "What is the duration of the PGDM program?", answer: "The program is a two-year, full-time, AICTE-approved residential course." },
    { question: "What specializations are offered?", answer: "Students can choose from: Marketing Management, Finance Management, Human Resource Management, Operations & Supply Chain Management, Business Analytics." },
    { question: "Are there any additional certifications available?", answer: "Yes, AIM offers certifications in areas like Six Sigma, Business Analytics, SAP/ERP, Digital Marketing, Project Management, and more, depending on the chosen specialization." },
    { question: "What is the fee structure?", answer: "The PGDM program fees are structured semester-wise. Hostel and mess facilities are available at additional cost. (Refer to the Fees section for details)." },
    { question: "Are scholarships available?", answer: "Yes, AIM offers scholarships for meritorious students and financial assistance through tie-ups with leading banks for education loans." },
    { question: "What is the placement record like?", answer: "AIM has a dedicated Placement Cell with strong industry connect. Students get opportunities in top companies across domains like Consulting, BFSI, IT, Manufacturing, and FMCG." },
    { question: "Which companies recruit from AIM?", answer: "Companies from diverse sectors such as TCS, Infosys, Deloitte, HDFC Bank, ICICI Bank, Capgemini, ITC, HUL, Asian Paints, and more participate in the recruitment drive." },
    { question: "Is hostel facility available?", answer: "Yes, separate hostel facilities are available for boys and girls, equipped with modern amenities." },
    { question: "What other facilities does the campus offer?", answer: "AIM offers a state-of-the-art campus with a library, computer labs, Wi-Fi-enabled classrooms, seminar halls, sports, and recreational facilities." }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-blue-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Campus</h1>
          <p className="text-xl md:text-2xl">Campus Life at AIM</p>
          <p className="text-lg mt-4 max-w-3xl mx-auto opacity-90">
            Experience a vibrant campus with world-class facilities, holistic learning spaces, and a thriving student community.
          </p>
        </div>
      </div>

      {/* Facilities & Infrastructure Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Facilities & Infrastructure</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            AIM's PGDM is committed to providing world-class infrastructure that creates the right learning environment for future leaders. 
            The campus blends modern amenities with a professional atmosphere, ensuring holistic growth for every student.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map((facility, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-4">{facility.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{facility.title}</h3>
              <p className="text-gray-600">{facility.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Campus Life Image Gallery Placeholder */}
      

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions (FAQ)</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
                {openFaq === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-blue-600" />
                )}
              </button>
              {openFaq === index && (
                <div className="px-6 pb-4 text-gray-600 border-t border-gray-100 pt-3">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Contact/CTA Section */}
      <div className="bg-blue-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Visit Our Campus</h3>
          <p className="text-lg mb-6 opacity-90">
            Experience the vibrant campus life at AIM. Contact us for a campus tour or more information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Schedule a Visit
            </button>
            <button className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-300">
              Contact Admissions
            </button>
          </div>
          <p className="mt-6 text-sm opacity-75">jadhavarinstitute.smm@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Campus;