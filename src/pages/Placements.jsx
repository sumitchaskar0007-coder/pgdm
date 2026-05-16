import React from "react";

const Placement = () => {
  // Recruiters data array
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
    <section className="bg-white py-16 px-6 md:px-20">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Placement Highlights
        </h2>

        <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-relaxed">
          AIM has a consistent record of strong placements. With 100% placement
          assistance and a dedicated Training & Placement Cell, the institute
          ensures every student is industry-ready. Recruiters span across BFSI,
          Consulting, IT, Pharma, FMCG, Retail, and Agri-Business sectors,
          offering opportunities in diverse management domains.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        
        {/* Card 1 */}
        <div className="bg-gray-50 rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            100% Assistance
          </h3>
          <p className="text-gray-600">
            Dedicated T&P Cell providing complete placement support.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-50 rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            40+ Recruiters
          </h3>
          <p className="text-gray-600">
            Top companies across BFSI, IT, Pharma, FMCG, Consulting,
            Agri-Business.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-50 rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Diverse Roles
          </h3>
          <p className="text-gray-600">
            Marketing, Finance, HR, Analytics, Pharma, Agri-Business & more.
          </p>
        </div>

      </div>

      {/* Career Opportunities Section - Black, Gray, White only */}
      <div className="bg-gray-900 rounded-2xl shadow-lg p-8 md:p-12 mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Career Opportunities
          </h2>
          <p className="text-gray-300 mt-3 max-w-2xl mx-auto">
            The program emphasizes academic rigor, industry integration, and holistic development to help graduates excel as managers, leaders, and entrepreneurs.
          </p>
          <p className="text-gray-400 font-medium mt-2">
            Choose a pathway that matches your career goals
          </p>
        </div>

        {/* Career Pathways Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Agri-Business */}
          <div className="text-center p-5 bg-gray-800 rounded-xl hover:bg-gray-700 transition border border-gray-700">
            <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Agri-Business</h3>
            <p className="text-gray-400 text-sm">
              Rural marketing, supply chain, risk & finance in agriculture.
            </p>
          </div>

          {/* Marketing & Sales */}
          <div className="text-center p-5 bg-gray-800 rounded-xl hover:bg-gray-700 transition border border-gray-700">
            <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Marketing & Sales</h3>
            <p className="text-gray-400 text-sm">
              Brand management, digital marketing, B2B/B2C sales roles.
            </p>
          </div>

          {/* Finance & Banking */}
          <div className="text-center p-5 bg-gray-800 rounded-xl hover:bg-gray-700 transition border border-gray-700">
            <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Finance & Banking</h3>
            <p className="text-gray-400 text-sm">
              Investment, corporate finance, financial services & banking.
            </p>
          </div>

          {/* Strategic & Leadership */}
          <div className="text-center p-5 bg-gray-800 rounded-xl hover:bg-gray-700 transition border border-gray-700">
            <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Strategic & Leadership</h3>
            <p className="text-gray-400 text-sm">
              Strategic thinking, data-driven decisions, leadership, ethics & social responsibility.
            </p>
          </div>

        </div>
      </div>

      {/* Placement Process Section */}
      <div className="bg-gray-50 rounded-2xl shadow-lg p-8 md:p-12 border border-gray-200">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Placement Process
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            The placement process at AIM is designed to prepare students holistically:
          </p>
          <div className="mt-4">
            <a 
              href="#" 
              className="inline-block bg-gray-900 hover:bg-gray-800 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
            >
              Get a Free Counselling
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Pre-Placement Training */}
          <div className="text-center p-5 bg-white rounded-xl hover:shadow-md transition border border-gray-200">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Pre-Placement Training</h3>
            <p className="text-gray-600 text-sm">
              Aptitude tests, GDs, mock interviews<br />
              Resume workshops & soft skills
            </p>
          </div>

          {/* Industry Connect */}
          <div className="text-center p-5 bg-white rounded-xl hover:shadow-md transition border border-gray-200">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Industry Connect</h3>
            <p className="text-gray-600 text-sm">
              Guest lectures & corporate mentorship<br />
              Leadership talks & networking events
            </p>
          </div>

          {/* Experiential Learning */}
          <div className="text-center p-5 bg-white rounded-xl hover:shadow-md transition border border-gray-200">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Experiential Learning</h3>
            <p className="text-gray-600 text-sm">
              Summer & Winter Internships<br />
              Live projects & industrial visits
            </p>
          </div>

          {/* Campus Recruitment */}
          <div className="text-center p-5 bg-white rounded-xl hover:shadow-md transition border border-gray-200">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Campus Recruitment</h3>
            <p className="text-gray-600 text-sm">
              Exclusive interviews with top recruiters<br />
              Pool drives with leading MNCs
            </p>
          </div>

        </div>
      </div>

      {/* ================= PLACEMENTS SECTION ================= */}
      <div className="mt-20 px-4 md:px-10">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Placements</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            At Aditya Institute of Management (AIM), Pune, we take pride in shaping careers and building future leaders. 
            Our dedicated Training & Placement Cell bridges the gap between academia and the corporate world, ensuring 
            that every student is industry-ready.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-4 gap-12 text-center">

          {/* CARD 1 */}
          <div>
            <img
              src="/assets/images/p1.png"
              alt="placement"
              className="mx-auto w-[300px] h-[200px] object-contain mb-6 hover:scale-105 transition duration-300"
            />
            <h3 className="text-lg font-bold text-gray-900 mb-2">100% placement</h3>
            <p className="text-gray-600 text-sm">
              Assistance with top recruiters.
            </p>
          </div>

          {/* CARD 2 */}
          <div>
            <img
              src="/assets/images/p2.png"
              alt="industry"
              className="mx-auto w-[300px] h-[200px] object-contain mb-6 hover:scale-105 transition duration-300"
            />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Strong industry connect</h3>
            <p className="text-gray-600 text-sm">
              Guest lectures, live projects & internships.
            </p>
          </div>

          {/* CARD 3 */}
          <div>
            <img
              src="/assets/images/p3.png"
              alt="training"
              className="mx-auto w-[220px] h-[220px] object-contain mb-6 hover:scale-105 transition duration-300"
            />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Pre-placement training</h3>
            <p className="text-gray-600 text-sm">
              Aptitude, communication, GD & PI.
            </p>
          </div>

          {/* CARD 4 */}
          <div>
            <img
              src="/assets/images/p4.png"
              alt="sectors"
              className="mx-auto w-[220px] h-[220px] object-contain mb-6 hover:scale-105 transition duration-300"
            />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Diverse sectors</h3>
            <p className="text-gray-600 text-sm">
              IT, BFSI, Consulting, FMCG, Manufacturing, and Start-ups.
            </p>
          </div>

        </div>

        {/* Recruiters */}
        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
            Our Top Recruiters
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {recruiters.map((recruiter, index) => (
              <div
                key={index}
                className={`${recruiter.bgColor} p-6 rounded-xl shadow-sm hover:shadow-md transition flex items-center justify-center min-h-[110px] border border-gray-200`}
              >
                <span className="font-semibold text-gray-800 text-center">
                  {recruiter.name}
                </span>
              </div>
            ))}
          </div>
        </div>
		

      </div>
    </section>
  );
};

export default Placement;