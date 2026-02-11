"use client"

import DestinationCard from "../../components/DestinationCard"
import { TDestination } from "../../types"

export default function ExperienceDestinations({ destinations }: { destinations: TDestination[] }) {
	if (destinations.length === 0) return null

	return (
		<section className="py-16 bg-primary-dark text-white relative overflow-hidden">
			<div
				className="absolute inset-0 opacity-10 pointer-events-none"
				style={{
					backgroundImage: "url(/assets/patterns/bg-pattern.png)",
					backgroundSize: "400px",
				}}
			/>
			<div className="container relative z-10">
				<div className="text-center mb-12">
					<h2 className="font-heading font-extrabold text-3xl mb-4">
						DESTINOS <span className="text-secondary">INCLUIDOS</span>
					</h2>
					<p className="text-white/80 max-w-2xl mx-auto">Destinos que visitarás en esta experiencia.</p>
				</div>

				<div className="flex flex-wrap justify-center gap-6">
					{destinations.map((destination) => (
						<div key={destination.id} className="w-full sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-4.5rem)/4)]">
							<DestinationCard destination={destination} />
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
