import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Users, Briefcase, BarChart3, MessageSquare } from "lucide-react";

const mentors = [
  {
    name: "Prof. Rohan Mehta",
    specialization: "Corporate Strategy",
    experience: "12+ Years",
    focus: "Guides students on business strategy, consulting frameworks, and corporate readiness."
  },
  {
    name: "Prof. Neha Kulkarni",
    specialization: "Marketing & Branding",
    experience: "10+ Years",
    focus: "Supports market research, consumer behavior studies, and campaign planning projects."
  },
  {
    name: "Prof. Arjun S.",
    specialization: "Finance & Analytics",
    experience: "11+ Years",
    focus: "Mentors students in financial modelling, analytics, and decision-making case work."
  },
  {
    name: "Prof. Kavya Patil",
    specialization: "HR & Leadership",
    experience: "9+ Years",
    focus: "Helps students strengthen communication, talent strategy, and leadership development."
  }
];

export default function IndustryMentors() {
  return (
    <>
      <Helmet>
        <title>Industry Mentors | AIM PGDM</title>
        <meta
          name="description"
          content="Meet the faculty and mentors supporting student growth at AIM PGDM."
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Industry Mentors</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Students at AIM PGDM are supported by experienced faculty and
              mentors who bring academic depth and industry insight to the classroom.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mentors.map((mentor, index) => (
              <motion.div
                key={mentor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
              >
                <div className="flex items-center gap-3 mb-4 text-blue-700">
                  {index % 4 === 0 && <Users className="h-6 w-6" />}
                  {index % 4 === 1 && <Briefcase className="h-6 w-6" />}
                  {index % 4 === 2 && <BarChart3 className="h-6 w-6" />}
                  {index % 4 === 3 && <MessageSquare className="h-6 w-6" />}
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">{mentor.name}</h2>
                    <p className="text-sm text-gray-500">{mentor.specialization}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 mb-3">Experience: {mentor.experience}</p>
                <p className="text-gray-600 leading-relaxed">{mentor.focus}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
