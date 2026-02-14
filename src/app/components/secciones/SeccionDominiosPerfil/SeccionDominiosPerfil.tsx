"use client"

import { useState } from "react"

type Dominio = {
	nombre: string
	youtubeId: string
}

const DOMINIOS: Dominio[] = [
	{
		nombre: "DOMINIO 1",
		youtubeId: "SC9lGb4bsts",
	},
	{
		nombre: "DOMINIO 2",
		youtubeId: "SC9lGb4bsts",
	},
	{
		nombre: "DOMINIO 3",
		youtubeId: "sjq-RuHK150",
	},
	{
		nombre: "DOMINIO 4",
		youtubeId: "bh9iK4iABJc",
	},
]

export default function SeccionDominiosPerfil() {
	const [activeIndex, setActiveIndex] = useState(0)

	return (
		<section className="seccion bg-white">
			<div className="container">
				<div className="mb-10">
					<h2 className="seccion__title text-foreground">
						Perfil de Egreso del estudiante
					</h2>
					<div className="w-10 h-1 bg-amber-400 mt-4 rounded-full" />
				</div>

				<div className="flex flex-col md:flex-row gap-6">
					<div className="flex md:flex-col gap-2 md:w-48 shrink-0">
						{DOMINIOS.map((dominio, i) => (
							<button
								key={i}
								onClick={() => setActiveIndex(i)}
								className={`text-left px-5 py-4 rounded-lg font-heading font-bold text-sm uppercase tracking-wide transition-all duration-300 border-l-4 ${
									activeIndex === i
										? "bg-gray-100 border-l-amber-400 text-foreground shadow-sm"
										: "bg-gray-50 border-l-gray-300 text-gray-500 hover:bg-gray-100 hover:text-foreground"
								}`}
							>
								{dominio.nombre}
							</button>
						))}
					</div>

					<div className="flex-1">
						<div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
							<iframe
								key={DOMINIOS[activeIndex].youtubeId}
								width="100%"
								height="100%"
								src={`https://www.youtube.com/embed/${DOMINIOS[activeIndex].youtubeId}`}
								title={DOMINIOS[activeIndex].nombre}
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
