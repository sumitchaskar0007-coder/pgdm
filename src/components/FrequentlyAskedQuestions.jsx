// FrequentlyAskedQuestions.jsx
import React, { useState } from "react";
import "./FrequentlyAskedQuestions.css";

const FrequentlyAskedQuestions = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question:
        "What makes AIM PGDM different from other management colleges?",
      answer:
        "AIM PGDM - Aditya Institute of Management offers an industry-focused curriculum, expert faculty, corporate mentorship, live projects, internships, personality development programs, and strong placement assistance. The institute focuses on practical learning, leadership development, and global business exposure to prepare students for successful management careers."
    },
    {
      question:
        "Is the PGDM program at AIM approved and recognized?",
      answer:
        "Yes, the PGDM program at AIM is AICTE-approved and designed according to the latest industry standards. The curriculum is continuously updated to match modern business trends, digital transformation, and corporate requirements."
    },
    {
      question:
        "What are the eligibility criteria for admission to AIM PGDM?",
      answer:
        "Candidates must have completed graduation in any discipline from a recognized university with the required qualifying marks. Final-year students can also apply. Admission is based on entrance exam scores, academic performance, and personal interview rounds."
    },
    {
      question:
        "Which entrance exams are accepted for AIM PGDM admissions?",
      answer:
        "AIM accepts scores from CAT, MAT, XAT, CMAT, ATMA, GMAT, and other recognized management entrance examinations approved by AICTE."
    },
    {
      question:
        "What specializations are available in the PGDM program?",
      answer:
        "AIM PGDM offers multiple career-oriented specializations including Marketing Management, Finance Management, Human Resource Management, Business Analytics, Operations & Supply Chain Management, and Entrepreneurship Development."
    },
    {
      question:
        "Does AIM provide placement assistance and internship opportunities?",
      answer:
        "Yes, AIM has a dedicated Training and Placement Cell that provides internship opportunities, industry training, corporate workshops, mock interviews, resume-building sessions, and placement assistance with reputed national and multinational companies."
    },
    {
      question:
        "Which companies visit AIM PGDM campus for recruitment?",
      answer:
        "Leading companies from sectors like IT, Banking, Consulting, FMCG, Manufacturing, Retail, and Finance participate in campus recruitment drives. Students receive opportunities from reputed organizations through campus placements and industry collaborations."
    },
    {
      question:
        "Are scholarships available for students at AIM?",
      answer:
        "Yes, AIM provides scholarships and financial assistance for deserving and meritorious students based on academic performance, entrance exam scores, and eligibility criteria defined by the institute."
    },
    {
      question:
        "What campus facilities are available at AIM PGDM?",
      answer:
        "The AIM campus offers modern classrooms, Wi-Fi-enabled infrastructure, advanced computer labs, seminar halls, a digital library, sports facilities, hostel accommodation, cafeteria services, and dedicated spaces for academic and extracurricular activities."
    },
    {
      question:
        "How can students apply for admission to AIM PGDM?",
      answer:
        "Students can apply online through the official AIM admission portal by filling out the application form, uploading required documents, and completing the admission process. Candidates may also contact the admission department for counseling and guidance."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      className="faq-section"
      id="faq"
      aria-label="Frequently Asked Questions"
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="faq-tag">AIM PGDM FAQ</span>

          <h2 className="faq-title">
            Frequently Asked Questions About AIM PGDM
          </h2>

          <p className="faq-subtitle">
            Explore important information about AIM PGDM - Aditya Institute of
            Management including admissions, placements, specializations,
            scholarships, campus facilities, internships, and career
            opportunities.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-card ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
              >
                <h3>{faq.question}</h3>

                <span className="faq-icon">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              <div
                className={`faq-answer ${
                  activeIndex === index ? "show" : ""
                }`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestions;