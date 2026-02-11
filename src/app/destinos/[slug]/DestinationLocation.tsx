import SeccionTitle from "../../components/SeccionTitle"
import { TDestination } from "../../types"

export default function DestinationLocation({ destination }: { destination: TDestination }) {
	if (!destination.googleMapsIframe) return null

	return (
		<section className="py-16">
			<div className="container">
				<SeccionTitle subtitle="Ubicación del destino y punto de encuentro.">
					UBICACIÓN <span className="text-primary">DEL DESTINO</span>
				</SeccionTitle>
				<div className="rounded-2xl overflow-hidden shadow-lg h-[400px] lg:h-[500px] border border-gray-200 *:size-full" dangerouslySetInnerHTML={{ __html: destination.googleMapsIframe }} />
			</div>
		</section>
	)
}
