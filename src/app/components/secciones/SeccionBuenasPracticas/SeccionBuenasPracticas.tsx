"use client"

import { useState } from "react"

type BuenaPractica = {
	institucion: string
	ubicacion: string
	youtubeId: string
}

const BUENAS_PRACTICAS: BuenaPractica[] = [
	{
		institucion: "SIAMEP",
		ubicacion: "Provincia de la Convención",
		youtubeId: "SC9lGb4bsts",
	},
	{
		institucion: "Escudos contra la Violencia",
		ubicacion: "Provincia de la Convención",
		youtubeId: "6m88EGkMpe4",
	},
	{
		institucion: "Rutas Inclusivas para un Aprendizaje sin Barreras",
		ubicacion: "Provincia de la Convención",
		youtubeId: "sjq-RuHK150",
	},
]

export default function SeccionBuenasPracticas() {
	const [activeIndex, setActiveIndex] = useState(0)

	return (
		<section className="seccion bg-white">
			<div className="container">
				<div className="mb-10">
					<h2 className="seccion__title text-foreground">
						Buenas Prácticas en Gestión Educativa
					</h2>
					<div className="w-10 h-1 bg-amber-400 mt-4 rounded-full" />
				</div>

				<div className="flex flex-col md:flex-row gap-6">
					<div className="flex md:flex-col gap-2 md:w-64 shrink-0">
						{BUENAS_PRACTICAS.map((practica, i) => (
							<button
								key={i}
								onClick={() => setActiveIndex(i)}
								className={`text-left px-5 py-4 rounded-lg font-heading transition-all duration-300 border-l-4 ${
									activeIndex === i
										? "bg-gray-100 border-l-amber-400 text-foreground shadow-sm"
										: "bg-gray-50 border-l-gray-300 text-gray-500 hover:bg-gray-100 hover:text-foreground"
								}`}
							>
								<span className="block text-xs font-bold uppercase tracking-wide text-amber-500">
									{String(i + 1).padStart(2, "0")}
								</span>
								<span className="block font-bold text-sm leading-snug mt-1">
									{practica.institucion}
								</span>
								<span className="block text-xs text-gray-400 mt-0.5">
									{practica.ubicacion}
								</span>
							</button>
						))}
					</div>

					<div className="flex-1">
						<div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
							<iframe
								key={BUENAS_PRACTICAS[activeIndex].youtubeId}
								width="100%"
								height="100%"
								src={`https://www.youtube.com/embed/${BUENAS_PRACTICAS[activeIndex].youtubeId}`}
								title={BUENAS_PRACTICAS[activeIndex].institucion}
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								referrerPolicy="strict-origin-when-cross-origin"
								allowFullScreen
								className="absolute inset-0 w-full h-full"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
