"use client"

import { TExperience } from "@/app/types"
import clsx from "clsx"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { FaCheck, FaChevronRight, FaCircleCheck, FaCircleInfo, FaLightbulb, FaLocationDot, FaRoute, FaSuitcaseRolling, FaXmark } from "react-icons/fa6"
import WhyTravelWithUs from "./WhyTravelWithUs"

type Props = {
	experience: TExperience
}

const TABS = [
	{ id: "itinerario", label: "Itinerario", icon: FaRoute },
	{ id: "inclusiones", label: "Inclusiones", icon: FaCircleCheck },
	{ id: "equipaje", label: "Lista de Equipaje", icon: FaSuitcaseRolling },
	{ id: "ubicacion", label: "Ubicación", icon: FaLocationDot },
	{ id: "antes-viajar", label: "Antes de Viajar", icon: FaCircleInfo },
]

const ExperienceTabs = ({ experience }: Props) => {
	const [activeTab, setActiveTab] = useState("itinerario")
	const [showScrollIndicator, setShowScrollIndicator] = useState(true)
	const tabsContainerRef = useRef<HTMLDivElement>(null)
	const contentRef = useRef<HTMLDivElement>(null)

	const handleTabClick = (tabId: string) => {
		setActiveTab(tabId)

		const container = tabsContainerRef.current
		const button = container?.querySelector(`[data-tab-id="${tabId}"]`) as HTMLButtonElement
		if (container && button) {
			const containerRect = container.getBoundingClientRect()
			const buttonRect = button.getBoundingClientRect()
			const scrollLeft = button.offsetLeft - containerRect.width / 2 + buttonRect.width / 2
			container.scrollTo({ left: scrollLeft, behavior: "smooth" })
		}

		setTimeout(() => {
			contentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
		}, 50)
	}

	const checkScrollEnd = () => {
		const container = tabsContainerRef.current
		if (container) {
			const isAtEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - 10
			setShowScrollIndicator(!isAtEnd)
		}
	}

	useEffect(() => {
		const container = tabsContainerRef.current
		if (container) {
			container.addEventListener("scroll", checkScrollEnd)
			checkScrollEnd()
			return () => container.removeEventListener("scroll", checkScrollEnd)
		}
	}, [])

	return (
		<section className="pb-12 lg:pb-24 bg-white border-t border-gray-100" id="detalles-experiencia">
			{/* Navegación de Tabs */}
			<div className="bg-gray-50 sticky top-18 z-40 shadow-sm">
				<div className="container">
					<div className="relative">
						<div ref={tabsContainerRef} className="flex gap-1 overflow-x-auto scrollbar-hide py-2 lg:py-0 lg:flex-wrap lg:justify-center lg:overflow-visible">
							{TABS.map((tab) => {
								const isActive = activeTab === tab.id
								const Icon = tab.icon
								return (
									<button
										key={tab.id}
										data-tab-id={tab.id}
										onClick={() => handleTabClick(tab.id)}
										className={clsx(
											"flex flex-col items-center gap-2 px-3 lg:px-6 py-2 lg:py-3 font-heading font-bold text-sm rounded-lg md:text-base transition-all duration-300 cursor-pointer whitespace-nowrap shrink-0",
											{
												"bg-primary text-white shadow-lg shadow-primary/25": isActive,
												"bg-gray-50 hover:bg-gray-200": !isActive,
											},
										)}
									>
										<Icon className={clsx("text-lg", { "text-white": isActive, "text-primary": !isActive })} />
										{tab.label}
									</button>
								)
							})}
						</div>
						{showScrollIndicator && (
							<div className="absolute right-0 top-0 bottom-0 flex items-center pointer-events-none lg:hidden">
								<div className="w-12 h-full bg-linear-to-l from-gray-50 via-gray-50/80 to-transparent" />
								<div className="absolute right-2 bg-primary text-white rounded-full p-1.5 animate-pulse shadow-lg">
									<FaChevronRight className="text-xs" />
								</div>
							</div>
						)}
					</div>
				</div>
			</div>

			<div ref={contentRef} className="container pt-12 scroll-mt-40">
				<div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
					{/* Columna Principal (2/3) */}
					<div className="lg:col-span-2">
						<div className="bg-white min-h-100">
							<div key={activeTab} className="animate-fade-in">
								{/* TAB: ITINERARIO */}
								{activeTab === "itinerario" && (
									<div className="space-y-6">
										<div>
											<h3 className="font-heading font-bold text-2xl text-primary-dark mb-3">Itinerario</h3>
											<p className="text-gray-600 mb-8">Descubre cada momento de tu aventura. Este es el recorrido completo que vivirás durante la experiencia.</p>
										</div>
										<div className="space-y-0">
											{experience.itinerary && experience.itinerary.length > 0 ? (
												experience.itinerary.map((item, index) => (
													<div key={index} className="flex gap-4 md:gap-6 group">
														<div className="flex flex-col items-center">
															<div className="w-5 h-5 mt-1.5 rounded-full bg-primary border-[3px] border-white shadow-[0_0_0_1px_rgba(0,0,0,0.1)] z-10 shrink-0"></div>
															{index !== (experience.itinerary?.length || 0) - 1 && <div className="w-0.5 flex-1 bg-gray-200 -mt-2 mb-2"></div>}
														</div>
														<div className={index >= (experience.itinerary?.length || 0) - 1 ? "" : "pb-8"}>
															<h3 className="font-heading font-extrabold text-primary">{item.day}</h3>
															<p className="text-lg font-heading font-bold">{item.title}</p>
															<div>{item.description}</div>
														</div>
													</div>
												))
											) : (
												<p className="text-gray-500 italic">No hay información del itinerario disponible.</p>
											)}
										</div>
										<WhyTravelWithUs />
									</div>
								)}

								{/* TAB: INCLUSIONES */}
								{activeTab === "inclusiones" && (
									<div className="space-y-12">
										<div>
											<p className="text-gray-600 mb-8">Conoce todo lo que está incluido y lo que no en esta experiencia para que puedas planificar mejor tu viaje.</p>
										</div>
										<div>
											<h3 className="ffont-heading font-bold text-2xl text-primary-dark mb-6">Lo que incluye</h3>
											<ul className="space-y-4">
												{experience.includes?.map((item, index) => (
													<li key={index} className="flex items-start gap-3">
														<div className="mt-1 p-1 rounded-full bg-green-50 text-green-600 shrink-0">
															<FaCheck className="text-xs" />
														</div>
														<div>
															<span className="font-bold text-gray-800 block">{item.title}</span>
															{item.description && <span className="text-sm text-gray-500">{item.description}</span>}
														</div>
													</li>
												))}
												{(!experience.includes || experience.includes.length === 0) && <li className="text-gray-400 italic">No especificado</li>}
											</ul>
										</div>
										<div>
											<h3 className="ffont-heading font-bold text-2xl text-primary-dark mb-6">No incluye</h3>
											<ul className="space-y-4">
												{experience.excludes?.map((item, index) => (
													<li key={index} className="flex items-start gap-3">
														<div className="mt-1 p-1 rounded-full bg-red-50 text-red-500 shrink-0">
															<FaXmark className="text-xs" />
														</div>
														<div>
															<span className="font-bold text-gray-800 block">{item.title}</span>
															{item.description && <span className="text-sm text-gray-500">{item.description}</span>}
														</div>
													</li>
												))}
												{(!experience.excludes || experience.excludes.length === 0) && <li className="text-gray-400 italic">No especificado</li>}
											</ul>
										</div>
									</div>
								)}

								{/* TAB: EQUIPAJE */}
								{activeTab === "equipaje" && (
									<div>
										<h3 className="font-heading font-bold text-2xl text-primary-dark mb-6">Lista de equipaje recomendada</h3>
										<p className="text-gray-600 mb-8">Para disfrutar al máximo de esta experiencia, te recomendamos llevar lo siguiente:</p>

										<div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
											{experience.recommendations &&
												experience.recommendations.map((item, index) => (
													<div key={index} className="flex flex-col gap-2">
														<div className="flex items-center gap-3 text-secondary">
															<FaSuitcaseRolling />
															<h4 className="font-bold text-gray-800">{item.name}</h4>
														</div>
														<p className="text-sm text-gray-600 pl-7">{item.description}</p>
													</div>
												))}

											{(!experience.recommendations || experience.recommendations.length === 0) && (
												<>
													<div>
														<h4 className="font-bold mb-2 text-primary">Indispensable</h4>
														<ul className="text-sm text-gray-600 space-y-2 list-disc pl-4">
															<li>Pasaporte o DNI original</li>
															<li>Mochila pequeña para el día</li>
															<li>Dinero en efectivo (Soles)</li>
														</ul>
													</div>
													<div>
														<h4 className="font-bold mb-2 text-primary">Indumentaria</h4>
														<ul className="text-sm text-gray-600 space-y-2 list-disc pl-4">
															<li>Ropa ligera y de secado rápido</li>
															<li>Camisas de manga larga</li>
															<li>Impermeable o poncho para lluvia</li>
															<li>Zapatos de trekking cómodos</li>
															<li>Ropa de baño</li>
														</ul>
													</div>
												</>
											)}
										</div>
									</div>
								)}

								{/* TAB: UBICACIÓN */}
								{activeTab === "ubicacion" && (
									<div>
										<h3 className="font-heading font-bold text-2xl text-primary-dark mb-6">Ubicación de la Experiencia</h3>
										<p className="text-gray-600 mb-8">Visualiza la ubicación donde se desarrolla esta experiencia y planifica tu llegada.</p>
										{experience.googleMapsIframe ? (
											<div
												className="rounded-2xl overflow-hidden shadow-lg h-100 lg:h-125 border border-gray-200 *:size-full"
												dangerouslySetInnerHTML={{ __html: experience.googleMapsIframe }}
											/>
										) : (
											<p className="text-gray-500 italic">No hay información de ubicación disponible.</p>
										)}
									</div>
								)}

								{/* TAB: ANTES DE VIAJAR */}
								{activeTab === "antes-viajar" && (
									<div>
										<h3 className="font-heading font-bold text-2xl text-primary-dark mb-6">Información Importante antes de viajar</h3>
										<p className="text-gray-600 mb-8">Lee atentamente las políticas, recomendaciones y aspectos importantes antes de confirmar tu reserva.</p>

										{/* Sin fondo gris, texto limpio */}
										<div className="space-y-6 text-gray-600">
											<div>
												<h4 className="font-bold text-gray-800 mb-2">Políticas de Reserva y Cancelación</h4>
												<p className="text-sm leading-relaxed mb-2">
													Para confirmar tu reserva se requiere un depósito inicial. Las cancelaciones están sujetas a penalidades dependiendo de la antelación con la que se
													realicen.
												</p>
												<Link href="/terminos-y-condiciones" className="text-primary font-bold text-sm hover:underline">
													Leer términos y condiciones completos &rarr;
												</Link>
											</div>

											<div>
												<h4 className="font-bold text-gray-800 mb-2">Seguridad y Privacidad</h4>
												<p className="text-sm leading-relaxed mb-2">
													Tu seguridad y la de tus datos personales son nuestra prioridad. Toda la información proporcionada será tratada con estricta confidencialidad.
												</p>
												<Link href="/politica-de-privacidad" className="text-primary font-bold text-sm hover:underline">
													Leer política de privacidad &rarr;
												</Link>
											</div>

											<div>
												<h4 className="font-bold text-gray-800 mb-2">Recomendaciones de Salud</h4>
												<p className="text-sm leading-relaxed">
													Se recomienda contar con un seguro de viaje y estar vacunado contra la fiebre amarilla si visitas zonas de selva baja.
												</p>
											</div>
										</div>
									</div>
								)}
							</div>
						</div>
					</div>

					{/* Aside (1/3) */}
					<aside className="lg:col-span-1">
						<div className="bg-primary p-4 lg:p-6 rounded-2xl text-white sticky top-24">
							<div className="flex items-center gap-4 mb-4 border-b border-white/20 pb-4">
								<FaLightbulb className="text-base lg:text-xl shrink-0" />
								<h3 className="font-heading text-sm lg:text-base font-bold uppercase tracking-wide">Importante</h3>
							</div>
							<div className="space-y-4 text-xs lg:text-sm leading-relaxed font-medium text-white/95">
								<p>
									Para nuevas reservas, en caso de que alguna actividad o itinerario específico no esté disponible para tu fecha de viaje, aseguraremos la
									<strong>mejor alternativa disponible</strong>.
								</p>
								<p>Gestionaremos opciones que ofrezcan una experiencia similar en duración y calidad.</p>
								<p>
									Todas las opciones están siempre sujetas a <strong>disponibilidad al momento de la compra</strong>, y haremos todo lo posible por brindarte la mejor experiencia
									durante tu visita.
								</p>
							</div>
						</div>
					</aside>
				</div>
			</div>
		</section>
	)
}

export default ExperienceTabs
