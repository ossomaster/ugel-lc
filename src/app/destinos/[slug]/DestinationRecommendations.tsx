import { DynamicIcon } from "@/app/commons/components/DynamicIcon"
import { TDestination } from "../../types"

export default function DestinationRecommendations({ destination }: { destination: TDestination }) {
	const recommendations = destination.recommendations || []

	if (recommendations.length === 0) return null

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
					<h2 className="font-heading font-extrabold text-3xl mb-4">Recomendaciones de Viaje</h2>
					<p className="text-white/80 max-w-2xl mx-auto">Para que disfrutes al máximo tu experiencia, te recomendamos llevar lo siguiente:</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{recommendations.map((item, index) => (
						<div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/20 transition-colors relative overflow-hidden group">
							<span className="absolute -bottom-7 -right-2 text-9xl font-bold text-black/20 group-hover:text-black/30 transition-colors select-none pointer-events-none">
								{index + 1}
							</span>
							<div className="relative z-10 flex items-start gap-4">
								<div className="size-12 shrink-0 bg-secondary rounded-full flex items-center justify-center text-xl text-white shadow-lg">
									<DynamicIcon name={item.icon} />
								</div>
								<div>
									<h3 className="font-bold text-lg mb-1 text-secondary-light">{item.name}</h3>
									<p className="text-sm text-white/90 leading-relaxed">{item.description}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
