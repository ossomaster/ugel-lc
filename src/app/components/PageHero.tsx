import React from "react"

interface PageHeroProps {
	title: string
	subtitle?: string
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
	return (
		<section className="relative py-20 bg-primary-dark text-white overflow-hidden">
			<div className="absolute inset-0 opacity-10 bg-[url('/assets/patterns/bg-pattern.png')] bg-repeat bg-[length:400px]"></div>
			<div className="container relative z-10 text-center">
				<h1 className="text-3xl md:text-5xl font-heading font-extrabold mb-4">{title}</h1>
				{subtitle && <p className="text-lg max-w-2xl mx-auto text-white/90">{subtitle}</p>}
			</div>
		</section>
	)
}
