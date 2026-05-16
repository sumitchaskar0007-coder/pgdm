// Admission.jsx
import React from "react";
import "./Admission.css"; // optional, for custom styles

const Admission = () => {
  return (
    <div className="admissions-page">
      {/* Hero Section */}
      <section className="hero">
        <h1>Admissions</h1>
        <p className="email-info">adityainstitute.admission@gmail.com</p>
      </section>

      {/* Program Overview */}
      <section className="program-overview">
        <h2>Post Graduate Diploma in Management (PGDM)</h2>
        <p>
          A 2‑year, outcome‑based program that blends academic excellence, industry integration, and holistic development. Become a future‑ready manager, leader, and entrepreneur.
        </p>
        <div className="stats">
          <div className="stat">
            <h3>5+</h3>
            <p>Live Projects</p>
          </div>
          <div className="stat">
            <h3>10+</h3>
            <p>Case Studies</p>
          </div>
          <div className="stat">
            <h3>12</h3>
            <p>Skill Certifications</p>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="fee-structure">
        <h2>Fee Structure (2025–27)</h2>
        <p>
          At Aditya Institute of Management (AIM), Pune, we ensure that our fee structure is transparent and student-friendly while maintaining the quality of academic delivery and infrastructure.
        </p>
        <div className="fee-details">
          <div className="fee-card">
            <h3>First Year Fee:</h3>
            <p>₹2,50,000</p>
          </div>
          <div className="fee-card">
            <h3>Second Year Fee:</h3>
            <p>₹2,00,000</p>
          </div>
          <div className="fee-card">
            <h3>Total Course Fee:</h3>
            <p>₹4,50,000</p>
          </div>
          <div className="fee-card">
            <h3>Hostel Fee (Optional):</h3>
            <p>₹1,00,000 per year</p>
          </div>
        </div>
        <p className="disclaimer">*Subject to change as per institute policy.</p>
        <div className="call-us">
          <span>Call us: +919356393629</span>
        </div>
      </section>

      {/* Placements Section */}
      <section className="placements">
        <h2>Placements</h2>
        <p>
          At Aditya Institute of Management (AIM), Pune, we take pride in shaping careers and building future leaders. Our dedicated Training & Placement Cell bridges the gap between academia and the corporate world, ensuring that every student is industry-ready.
        </p>
        <div className="placement-highlights">
          <div className="highlight">
            <h3>100% placement</h3>
            <p>Assistance with top recruiters.</p>
          </div>
          <div className="highlight">
            <h3>Strong industry connect</h3>
            <p>Guest lectures, live projects & internships.</p>
          </div>
          <div className="highlight">
            <h3>Pre-placement training</h3>
            <p>Aptitude, communication, GD & PI.</p>
          </div>
          <div className="highlight">
            <h3>Diverse sectors</h3>
            <p>IT, BFSI, Consulting, FMCG, Manufacturing, and Start-ups.</p>
          </div>
        </div>
        <h3>Our Top Recruiters</h3>
        {/* Add logos or names as needed */}
        <p>TCS, Infosys, Deloitte, HDFC Bank, ICICI Bank, Capgemini, ITC, HUL, Asian Paints, and more.</p>
      </section>

      {/* Admissions Open Banner */}
      <section className="admissions-open">
        <h2>Admissions Open | PGDM 2025–27</h2>
        <p>
          Join a future-ready PGDM program blending academic rigour, corporate immersion and entrepreneurial focus. Apply now for the 2025–27 batch.
        </p>
        <div className="admission-info">
          <div>
            <strong>Program:</strong> PGDM — 2 years (2025–27)
          </div>
          <div>
            <strong>Intake:</strong> Limited seats — merit & interview based
          </div>
          <div>
            <strong>Placement Focus:</strong> Corporate immersion, internships & industry projects
          </div>
        </div>
        <button className="apply-btn">Apply Now</button>
        <div className="contact">
          <p>Get in touch with us!</p>
          <p>Call: +919356393629 | Email: adityainstitute.admission@gmail.com</p>
        </div>
      </section>

      {/* Important Dates & Eligibility */}
      <section className="dates-eligibility">
        <div className="important-dates">
          <h3>Important Dates</h3>
          <ul>
            <li>Applications Open: [Insert date]</li>
            <li>Last Date to Apply: [Insert date]</li>
            <li>GD / PI: [Insert date range]</li>
            <li>Program Start: [Insert date]</li>
          </ul>
        </div>
        <div className="eligibility">
          <h3>Eligibility</h3>
          <ul>
            <li>Any graduate from a recognized university with minimum 50% or equivalent CGPA</li>
            <li>Valid scores accepted: CAT / XAT / CMAT / ATMA / MAT (as applicable)</li>
          </ul>
        </div>
        <div className="selection-process">
          <h3>Selection Process</h3>
          <ul>
            <li>Shortlisting based on academic record & test scores</li>
            <li>Group Discussion / Written Ability Test</li>
            <li>Personal Interview (final admission decision)</li>
          </ul>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <h2>Frequently Asked Questions (FAQ)</h2>
        <div className="faq-item">
          <h4>What is the eligibility criteria for the PGDM program?</h4>
          <p>Any graduate (10+2+3) with a minimum of 50% marks from a recognized university is eligible. Final-year students awaiting results may also apply.</p>
        </div>
        <div className="faq-item">
          <h4>Is an entrance exam score mandatory?</h4>
          <p>Yes, candidates must have a valid score in CAT / MAT / XAT / CMAT / ATMA / GMAT or any other AICTE-approved entrance test.</p>
        </div>
        <div className="faq-item">
          <h4>How can I apply for admission?</h4>
          <p>You can apply online through our official website or visit the Admissions Office at AIM Pune. After application, shortlisted candidates are called for GD-PI rounds.</p>
        </div>
        <div className="faq-item">
          <h4>What is the duration of the program?</h4>
          <p>The program is a two-year, full-time, AICTE-approved residential course.</p>
        </div>
        <div className="faq-item">
          <h4>What specializations are offered?</h4>
          <p>
            Students can choose from: Marketing Management, Finance Management, Human Resource Management, Operations & Supply Chain Management, Business Analytics.
          </p>
        </div>
        <div className="faq-item">
          <h4>Does AIM offer additional certifications?</h4>
          <p>
            Yes, AIM offers certifications in areas like Six Sigma, Business Analytics, SAP/ERP, Digital Marketing, Project Management, and more, depending on the chosen specialization.
          </p>
        </div>
        <div className="faq-item">
          <h4>What is the fee structure?</h4>
          <p>The PGDM program fees are structured semester-wise. Hostel and mess facilities are available at additional cost. (Refer to the Fees section for details).</p>
        </div>
        <div className="faq-item">
          <h4>Are scholarships or financial assistance available?</h4>
          <p>Yes, AIM offers scholarships for meritorious students and financial assistance through tie-ups with leading banks for education loans.</p>
        </div>
        <div className="faq-item">
          <h4>How is the placement support at AIM?</h4>
          <p>
            AIM has a dedicated Placement Cell with strong industry connect. Students get opportunities in top companies across domains like Consulting, BFSI, IT, Manufacturing, and FMCG.
          </p>
        </div>
        <div className="faq-item">
          <h4>Which companies recruit from AIM?</h4>
          <p>
            Companies from diverse sectors such as TCS, Infosys, Deloitte, HDFC Bank, ICICI Bank, Capgemini, ITC, HUL, Asian Paints, and more participate in the recruitment drive.
          </p>
        </div>
        <div className="faq-item">
          <h4>Is hostel accommodation available?</h4>
          <p>Yes, separate hostel facilities are available for boys and girls, equipped with modern amenities.</p>
        </div>
        <div className="faq-item">
          <h4>What are the campus facilities like?</h4>
          <p>
            AIM offers a state-of-the-art campus with a library, computer labs, Wi-Fi-enabled classrooms, seminar halls, sports, and recreational facilities.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Admission;