import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { CalendarDays, BookOpen, ClipboardCheck, Briefcase, FileText, Users } from "lucide-react";

const academicSections = [
  {
    title: "Academic Calendar",
    icon: <CalendarDays />,
    description:
      "The academic calendar outlines admissions, induction, lectures, internships, examinations, and institute events for the PGDM program."
  },
  {
    title: "Teaching-Learning Process",
    icon: <BookOpen />,
    description:
      "The program uses lectures, case studies, presentations, simulations, and collaborative learning to strengthen managerial understanding."
  },
  {
    title: "Evaluation & Assessment",
    icon: <ClipboardCheck />,
    description:
      "Evaluation is based on internal assessments, projects, presentations, assignments, examinations, and participation in experiential learning."
  },
  {
    title: "Industry Projects",
    icon: <Briefcase />,
    description:
      "Students work on live projects, internships, and company interactions to build practical exposure and business readiness."
  },
  {
    title: "Research & Publications",
    icon: <FileText />,
    description:
      "The institute encourages research, white papers, business analysis, and participation in conferences and competitions."
  },
  {
    title: "Seminars & Workshops",
    icon: <Users />,
    description:
      "Regular seminars, workshops, guest lectures, and training programs are organized to enhance professional skills and career readiness."
  }
];

export default function Academics() {
  return (
    <>
      <Helmet>
        <title>Academics | PGDM Program | AIM PGDM Pune</title>
        <meta
          name="description"
          content="Explore the academic structure of AIM PGDM Pune including calendar, pedagogy, assessments, internships, research, seminars, and workshops."
        />
        <meta
          name="keywords"
          content="PGDM Academics Pune, Management Curriculum, Industry Projects, Research, Internship Program"
        />
      </Helmet>

      <section className="min-h-screen bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Academics</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The academic framework of AIM PGDM is designed to provide
              comprehensive management education through structured curriculum,
              practical learning, and continuous evaluation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {academicSections.map((section) => (
              <div key={section.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <div className="text-blue-700 mb-4">{section.icon}</div>
                <h2 className="text-xl font-semibold mb-2 text-gray-900">{section.title}</h2>
                <p className="text-gray-600 text-sm leading-relaxed">{section.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
