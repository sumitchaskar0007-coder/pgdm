import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Trophy, Users, Briefcase, GraduationCap } from "lucide-react";

const highlights = [
  {
    icon: <Trophy className="h-6 w-6" />,
    title: "Case Competitions",
    description: "Participate in national and regional business case competitions to sharpen strategic thinking."
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Leadership Labs",
    description: "Develop communication, teamwork, and leadership capabilities through hands-on simulations."
  },
  {
    icon: <Briefcase className="h-6 w-6" />,
    title: "Corporate Challenges",
    description: "Engage with real-world problem statements from industry and build solution-oriented thinking."
  },
  {
    icon: <GraduationCap className="h-6 w-6" />,
    title: "Professional Growth",
    description: "Build presentation, analysis, and decision-making skills aligned with management careers."
  }
];

export default function LeadershipForum() {
  return (
    <>
      <Helmet>
        <title>Leadership Forum | AIM PGDM</title>
        <meta
          name="description"
          content="Explore leadership activities, case competitions, and corporate challenges at AIM PGDM."
        />
      </Helmet>

      <section className="min-h-screen bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Leadership Forum</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              A platform for students to build confidence, strategic thinking,
              and industry-facing skills through competitions, simulations, and collaborative learning.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item) => (
              <div key={item.title} className="rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm">
                <div className="text-primary mb-4">{item.icon}</div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h2>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
