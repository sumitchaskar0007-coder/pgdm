import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Scale,
  Users,
  Briefcase,
  Landmark,
  FileText,
  Gavel,
  GraduationCap
} from "lucide-react";

const udanPrograms = [
  {
    id: 1,
    title: "Udan 1",
    icon: <BookOpen />,
    description:
      "Foundational understanding of management, business, and professional growth."
  },
  {
    id: 2,
    title: "Udan 2",
    icon: <Scale />,
    description:
      "Introduction to business environment, ethics, and responsible leadership."
  },
  {
    id: 3,
    title: "Udan 3",
    icon: <Users />,
    description:
      "Community engagement, market awareness, and communication development."
  },
  {
    id: 4,
    title: "Udan 4",
    icon: <Briefcase />,
    description:
      "Professional orientation towards corporate careers and managerial readiness."
  },
  {
    id: 5,
    title: "Udan 5",
    icon: <Landmark />,
    description:
      "Exposure to organizations, institutions, and real-world business processes."
  },
  {
    id: 6,
    title: "Udan 6",
    icon: <FileText />,
    description:
      "Business documentation, reporting, and research skill development."
  },
  {
    id: 7,
    title: "Udan 7",
    icon: <Gavel />,
    description:
      "Practical training through case studies, simulations, and presentations."
  },
  {
    id: 8,
    title: "Udan 8",
    icon: <GraduationCap />,
    description:
      "Leadership, ethics, and preparation for the management profession."
  }
];

export default function Udan() {
  return (
    <>
      <Helmet>
        <title>Udan Program | AIM PGDM Pune</title>
        <meta
          name="description"
          content="Udan Program at AIM PGDM Pune includes Udan 1 to Udan 8 focusing on management foundations, communication skills, case-based learning, and professional development."
        />
        <meta
          name="keywords"
          content="Udan Program PGDM Pune, Management Foundation Program, Case Study Training, Student Development Activities"
        />
      </Helmet>

      <section className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-3">Udan Program</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The Udan Program at AIM PGDM is a structured initiative designed
              to enhance management awareness, professional skills, ethical
              values, and practical exposure for students.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {udanPrograms.map((udan, index) => (
              <motion.div
                key={udan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-2xl shadow-md border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-4 text-blue-700">
                  <div className="p-3 rounded-xl bg-blue-50">{udan.icon}</div>
                  <h3 className="text-lg font-semibold">{udan.title}</h3>
                </div>

                <p className="text-gray-600 text-sm mb-4">{udan.description}</p>

                <Link
                  to={`/udan/${udan.id}`}
                  className="text-sm font-semibold text-blue-700 hover:underline"
                >
                  View Details ->
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
