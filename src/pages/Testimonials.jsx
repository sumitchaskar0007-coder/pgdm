import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'

const testimonials = [
	{ name: 'Amit K.', rating: 5, comment: 'Professional and transparent. Highly recommended.' },
	{ name: 'Priya S.', rating: 5, comment: 'The learning environment and faculty support made my PGDM journey meaningful.' },
	{ name: 'Rahul V.', rating: 4, comment: 'Great exposure to live projects, internships, and placement preparation.' },
]

export default function Testimonials() {
	return (
		<div className="container-responsive py-10">
			<Helmet><title>Testimonials - AIM PGDM</title></Helmet>
			<h1 className="text-3xl font-display font-bold">Student Testimonials</h1>
			<motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 }}}} className="grid gap-4 md:grid-cols-3 mt-6">
				{testimonials.map((t, i) => (
					<motion.div key={i} variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 }}} className="rounded-2xl border bg-white p-5 shadow-sm">
						<p className="text-sm text-gray-700">"{t.comment}"</p>
						<p className="text-sm text-gray-600 mt-3">- {t.name}</p>
						<p className="text-sm text-yellow-500 mt-1">{'*'.repeat(t.rating)}{' '.repeat(5 - t.rating)}</p>
					</motion.div>
				))}
			</motion.div>
		</div>
	)
}
