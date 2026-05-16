import React from 'react'
import { Helmet } from 'react-helmet-async'
import EventCard from '../components/cards/EventCard.jsx'

export default function Events() {
	return (
		<div className="container-responsive py-10">
			<Helmet>
				<title>Events - AIM PGDM, Pune</title>
				<meta name="description" content="Events, seminars, conclaves, and workshops at AIM PGDM, Pune." />
				<link rel="canonical" href="https://adityainstitutepgdm.com/events" />
			</Helmet>
			<h1 className="text-3xl font-bold">Events</h1>
			<div className="grid gap-4 md:grid-cols-3 mt-6">
				<EventCard title="Management Conclave 2026" date="Mar 10, 2026" location="Campus" />
				<EventCard title="Seminar: Emerging Business Trends" date="Feb 28, 2026" location="Auditorium" />
				<EventCard title="Workshop: Leadership & Negotiation" date="Feb 12, 2026" location="Hall B" />
			</div>
		</div>
	)
}
