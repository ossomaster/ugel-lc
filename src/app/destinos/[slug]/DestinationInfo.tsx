import { FaMountain, FaClock, FaPersonHiking, FaLocationDot } from "react-icons/fa6"
import { TDestination } from "../../types"

export default function DestinationInfo({ destination }: { destination: TDestination }) {
	const locationName = destination.locations?.map((l) => l.location?.title).join(", ") || ""

	const features = [
		{ icon: <FaMountain />, label: "Altitud", value: destination.altitude },
		{ icon: <FaClock />, label: "Duración", value: destination.duration },
		{ icon: <FaPersonHiking />, label: "Dificultad", value: destination.difficultyStr },
		{ icon: <FaLocationDot />, label: "Ubicación", value: locationName },
	].filter((f) => f.value)

	return (
		<section id="info" className="py-16 lg:py-24">
			<div className="container max-w-4xl mx-auto">
				<div className="lg:col-span-2">
					{features.length > 0 && (
						<>
							<h2 className="font-heading font-extrabold text-3xl text-primary-dark mb-6">Características</h2>
							<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
								{features.map((feature, index) => (
									<div key={index} className="p-4 rounded-xl bg-gray-50 border border-gray-100 text-center hover:shadow-md transition-shadow">
										<div className="text-3xl text-primary mb-3 flex justify-center">{feature.icon}</div>
										<div className="text-sm text-gray-500 mb-1">{feature.label}</div>
										<div className="text-sm font-bold">{feature.value}</div>
									</div>
								))}
							</div>
						</>
					)}

					<h2 className="font-heading font-extrabold text-3xl text-primary-dark mb-6">Acerca del Destino: {destination.title}</h2>
					<div className="html-content" dangerouslySetInnerHTML={{ __html: destination.content }} />
				</div>
			</div>
		</section>
	)
}
