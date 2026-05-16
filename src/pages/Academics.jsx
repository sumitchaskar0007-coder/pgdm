import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  CalendarDays,
  BookOpen,
  ClipboardCheck,
  Landmark,
  Briefcase,
  FileText,
  Users
} from "lucide-react";

const academicsData = [
  {
    title: "Academic Calendar",
    icon: <CalendarDays />,
    description:
      "The academic calendar of Jadhavar College of Law outlines the schedule for admissions, lectures, examinations, vacations, moot court activities, and academic events for the 3-Year LL.B program."
  },
  {
    title: "Teaching–Learning Process",
    icon: <BookOpen />,
    description:
      "The college follows an interactive teaching–learning process including lectures, case law discussions, presentations, group discussions, and problem-based learning to strengthen legal understanding."
  },
  {
    title: "Examination & Evaluation",
    icon: <ClipboardCheck />,
    description:
      "Evaluation is conducted as per university and Bar Council of India norms through internal assessments, semester examinations, assignments, viva-voce, and practical evaluations."
  },
  {
    title: "Moot Court Activities",
    icon: <Landmark />,
    description:
      "Moot court activities form a core part of legal education, enabling students to practice advocacy skills, court etiquette, drafting, and oral arguments through mock trials and competitions."
  },
  {
    title: "Internships & Training",
    icon: <Briefcase />,
    description:
      "Students undergo compulsory internships with advocates, law firms, courts, NGOs, and legal institutions to gain real-world exposure and practical legal experience."
  },
  {
    title: "Research & Publications",
    icon: <FileText />,
    description:
      "The college encourages legal research and publications through research projects, law journals, paper presentations, and participation in national and international conferences."
  },
  {
    title: "Seminars & Workshops",
    icon: <Users />,
    description:
      "Regular seminars, workshops, guest lectures, and training programs are organized to enhance professional skills, legal awareness, and career readiness."
  }
];

export default function Academics() {
  return (
    <>
      {/* ================= SEO ================= */}
      <Helmet>
        <title>
          Academics | 3-Year LL.B Program | Jadhavar College of Law Pune
        </title>
        <meta
          name="description"
          content="Explore academic structure of Jadhavar College of Law Pune including academic calendar, teaching-learning process, examinations, moot courts, internships, research, seminars and workshops for 3-Year LL.B."
        />
        <meta
          name="keywords"
          content="Law College Academics Pune, 3 Year LL.B Academics, Moot Court Activities, Legal Internships, Law College Curriculum"
        />
      </Helmet>

      {/* ================= PAGE CONTENT ================= */}
      <section className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">

          {/* PAGE HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              Academics
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The academic framework of Jadhavar College of Law is designed to
              provide comprehensive legal education through structured
              curriculum, practical training, and continuous evaluation under
              the 3-Year LL.B Program.
            </p>
          </motion.div>

          {/* ACADEMICS CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {academicsData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.04 }}
                className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 transition-all"
              >
                <div className="flex items-center gap-3 mb-4 text-blue-700">
                  <div className="p-3 rounded-xl bg-blue-50">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
