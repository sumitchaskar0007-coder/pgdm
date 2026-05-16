import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'

const team = [
	{ name: 'Prof. Rohan Mehta', role: 'Director - Corporate Relations', bio: 'Specialist in industry partnerships and student career development.', img: '/assets/team1.jpg' },
	{ name: 'Prof. Neha Kulkarni', role: 'Faculty - Marketing', bio: 'Focuses on brand strategy, consumer insights, and experiential learning.', img: '/assets/team2.jpg' },
	{ name: 'Prof. Arjun S.', role: 'Faculty - Finance', bio: 'Works on analytics, financial strategy, and business decision-making.', img: '/assets/team3.jpg' },
]

export default function Team() {
	return (
		<div className="container-responsive py-10">
			<Helmet><title>Our Team - AIM PGDM</title></Helmet>
			<h1 className="text-3xl font-display font-bold">Our Team</h1>
			<motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 }}}} className="grid gap-4 md:grid-cols-3 mt-6">
				{team.map((m, i) => (
					<motion.div key={i} variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 }}} className="rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition">
						<div className="aspect-square rounded-xl overflow-hidden bg-gray-100">
							<img src={m.img} alt={m.name} className="w-full h-full object-cover" loading="lazy" />
						</div>
						<h3 className="font-semibold mt-3">{m.name}</h3>
						<p className="text-sm text-gray-600">{m.role}</p>
						<p className="text-sm text-gray-700 mt-2">{m.bio}</p>
					</motion.div>
				))}
			</motion.div>
		</div>
	)
}
