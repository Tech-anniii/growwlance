export const metadata = {
	title: "Works — Growwlance",
	description:
		"Selected projects and case studies showcasing performance marketing, SEO, funnels, and website work.",
	openGraph: {
		title: "Works — Growwlance",
		description:
			"Selected projects and case studies showcasing performance marketing, SEO, funnels, and website work.",
		images: "/home/og-works.jpg",
	},
};

import Link from "next/link";
import ClientsShowcase from "@/components/ClientsShowcase";

const projects = [
	{
		title: "E-commerce Growth System",
		category: "Performance Marketing + Funnel",
		summary:
			"Built a paid ads funnel, landing page, and retargeting flow for a D2C brand to improve conversion quality.",
		results: "Outcome: Better lead quality, stronger ROAS, and lower drop-off in checkout flow.",
		stack: ["Meta Ads", "Landing Page", "Analytics"],
		liveUrl: "https://example.com/ecommerce-growth-system",
	},
	{
		title: "Local Service Lead Engine",
		category: "Google Ads + SEO",
		summary:
			"Designed a local acquisition system with search ads, service pages, and location-focused SEO improvements.",
		results: "Outcome: Increased qualified calls and consistent inbound lead flow.",
		stack: ["Google Ads", "SEO", "Call Tracking"],
		liveUrl: "https://example.com/local-service-lead-engine",
	},
	{
		title: "SaaS Demo Booking Funnel",
		category: "B2B Conversion Funnel",
		summary:
			"Created a demo-booking journey for a SaaS brand with stronger messaging, proof, and CTA hierarchy.",
		results: "Outcome: Improved demo completion rate and more sales-ready conversations.",
		stack: ["Funnel Strategy", "Copywriting", "UX"],
		liveUrl: "https://example.com/saas-demo-booking-funnel",
	},
	{
		title: "Healthcare Appointment Campaign",
		category: "Lead Generation",
		summary:
			"Launched multi-channel campaigns for appointment bookings with landing pages and lead qualification steps.",
		results: "Outcome: More booked appointments and cleaner lead intake.",
		stack: ["Paid Social", "CRM", "Forms"],
		liveUrl: "https://example.com/healthcare-appointment-campaign",
	},
	{
		title: "Education Admissions Landing Hub",
		category: "Website + Ads",
		summary:
			"Built a landing hub for admissions with program highlights, inquiry forms, and remarketing entry points.",
		results: "Outcome: Higher inquiry conversion and better campaign tracking.",
		stack: ["Web Design", "Ads", "Tracking"],
		liveUrl: "https://example.com/education-admissions-hub",
	},
	{
		title: "Real Estate Lead Capture Site",
		category: "High-Intent Lead Gen",
		summary:
			"Developed a property-focused website with CTA-led sections and lead forms designed for buyer intent.",
		results: "Outcome: Stronger lead capture and more serious inquiries.",
		stack: ["Website", "Lead Forms", "Automation"],
		liveUrl: "https://example.com/real-estate-lead-capture",
	},
	{
		title: "Brand Awareness Video Campaign",
		category: "Creative Strategy",
		summary:
			"Produced and distributed short-form ad creatives aligned with messaging for awareness and recall.",
		results: "Outcome: Better engagement and improved click-through performance.",
		stack: ["Creative", "Video Ads", "A/B Testing"],
		liveUrl: "https://example.com/brand-awareness-video-campaign",
	},
	{
		title: "Conversion Audit Redesign",
		category: "Optimization Project",
		summary:
			"Reworked a slow-converting website by tightening structure, CTAs, and trust signals across key pages.",
		results: "Outcome: Better session depth and improved lead form completion.",
		stack: ["UX Audit", "CRO", "Copy"],
		liveUrl: "https://example.com/conversion-audit-redesign",
	},
];

export default function WorksPage() {
	return (
		<main className="bg-[#0B0F19] text-white">
			<section className="px-6 md:px-16 pt-28 pb-16">
				<div className="mx-auto max-w-4xl text-center">
					<p className="text-sm uppercase tracking-[0.3em] text-amber-400">
						Selected Work
					</p>
					<h1 className="mt-4 text-4xl font-bold md:text-6xl">
						Projects We Have Built for Growth
					</h1>
					<p className="mt-5 text-gray-400 md:text-lg">
						A snapshot of performance marketing, SEO, funnel, and website projects.
						Each card includes the project focus, what was built, and a live link placeholder
						you can replace with the actual project URL.
					</p>
				</div>
			</section>

			<section className="px-6 md:px-16 pb-24">
				<div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-4">
					{projects.map((project) => (
						<article
							key={project.title}
							className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition hover:-translate-y-1 hover:border-amber-500/40 hover:bg-white/10"
						>
							<div className="flex items-start justify-between gap-4">
								<div>
									<p className="text-xs uppercase tracking-[0.2em] text-amber-400">
										{project.category}
									</p>
									<h2 className="mt-3 text-xl font-semibold leading-tight">
										{project.title}
									</h2>
								</div>
								<span className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-300">
									Live
								</span>
							</div>

							<p className="mt-4 text-sm leading-6 text-gray-400">
								{project.summary}
							</p>

							<div className="mt-5 rounded-2xl bg-black/20 p-4 text-sm text-gray-300">
								{project.results}
							</div>

							<div className="mt-5 flex flex-wrap gap-2">
								{project.stack.map((item) => (
									<span
										key={item}
										className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-gray-300"
									>
										{item}
									</span>
								))}
							</div>

							<div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
								<Link
									href={project.liveUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="text-sm font-medium text-white transition group-hover:text-amber-400"
								>
									View Project
								</Link>
								<span className="text-xs text-gray-500">Open in new tab</span>
							</div>
						</article>
					))}
				</div>
			</section>




			<ClientsShowcase />
		</main>
	);
}
