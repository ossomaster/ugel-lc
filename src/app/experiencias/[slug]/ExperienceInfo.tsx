import { FaWhatsapp } from "react-icons/fa6"
import { TExperience } from "../../types"
import { EMPRESA } from "../../constants/constants"

export default function ExperienceInfo({ experience }: { experience: TExperience }) {
	const textBase = `Hola Quillabamba Travel, deseo información sobre la experiencia: ${experience.title}`
	const whatsappUrl = `https://wa.me/51${EMPRESA.whatsapp.replace(/\s/g, "")}?text=${encodeURIComponent(textBase)}`
	const bookingUrl = `https://wa.me/51${EMPRESA.whatsapp.replace(/\s/g, "")}?text=${encodeURIComponent(textBase + ". Quisiera reservar.")}`
	const genericContactUrl = `https://wa.me/51${EMPRESA.whatsapp.replace(/\s/g, "")}?text=${encodeURIComponent("Hola Quillabamba Travel, tengo algunas dudas y quisiera contactar con un asesor.")}`

	return (
		<section id="info" className="py-12 lg:py-24">
			<div className="container">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
					<div className="lg:col-span-2">
						<h2 className="font-heading font-bold text-3xl text-primary-dark mb-6">Acerca de la experiencia: {experience.title}</h2>
						<div className="html-content" dangerouslySetInnerHTML={{ __html: experience.content }} />
					</div>

					<div className="lg:col-span-1">
						<div className="sticky top-24">
							<div className="p-8 rounded-2xl bg-white shadow-xl border border-gray-100 relative overflow-hidden">
								{experience.pricePerPerson > 0 && (
									<div className="text-center mb-8 border-b border-gray-100 pb-6">
										<span className="text-gray-500 text-sm font-bold uppercase tracking-wider block mb-2">A partir de</span>
										<div className="text-5xl font-heading font-bold text-primary mb-2">S/ {experience.pricePerPerson}</div>
										<span className="text-gray-400 text-sm">por persona</span>
									</div>
								)}

								<ul className="space-y-4 mb-8">
									{experience.experienceTypes && experience.experienceTypes.length > 0 && (
										<li className="flex items-start gap-4">
											<div className="mt-1 size-2 rounded-full bg-primary shrink-0" />
											<div>
												<span className="block text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">Tipo</span>
												<p className="font-medium text-sm leading-tight">
													{experience.experienceTypes
														.map((t) => t.experienceType?.title)
														.filter(Boolean)
														.join(", ")}
												</p>
											</div>
										</li>
									)}

									{experience.locations && experience.locations.length > 0 && (
										<li className="flex items-start gap-4">
											<div className="mt-1 size-2 rounded-full bg-primary shrink-0" />
											<div>
												<span className="block text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">Ubicación</span>
												<p className="font-medium text-sm leading-tight">{experience.locations.map((l) => l.location.title).join(", ")}</p>
											</div>
										</li>
									)}

									{experience.destinations && experience.destinations.length > 0 && (
										<li className="flex items-start gap-4">
											<div className="mt-1 size-2 rounded-full bg-primary shrink-0" />
											<div>
												<span className="block text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">Destinos Incluidos</span>
												<p className="font-medium text-sm leading-tight">{experience.destinations.map((d) => d.destination.title).join(", ")}</p>
											</div>
										</li>
									)}
								</ul>

								<div className="space-y-4">
									<a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary w-full justify-center">
										Reservar en línea
									</a>
									<a
										href={whatsappUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="btn btn--outline w-full justify-center border-gray-300 hover:border-primary hover:text-primary hover:bg-white"
									>
										Consulte ahora
									</a>
								</div>

								<div className="mt-8 text-center">
									<p className="text-sm text-gray-500 mb-3 leading-relaxed">¿Tienes dudas sobre el itinerario, precios o disponibilidad? Contáctanos directamente:</p>
									<a
										href={genericContactUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-2 font-heading font-bold text-xl text-primary hover:text-primary-dark transition-colors"
									>
										<FaWhatsapp className="size-5" />
										{EMPRESA.whatsapp}
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
