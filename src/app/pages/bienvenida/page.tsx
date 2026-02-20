// app/bienvenida/page.tsx
"use client"

import { asset } from "../../helpers"
import InstitucionalLayout from "../InstitucionalLayout"

export default function BienvenidaPage() {
	return (
		<InstitucionalLayout title="Bienvenida" subtitle="Mensaje del Director de la UGEL La Convención">
			<div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
				{/* Imagen */}
				<div className="relative mb-8 rounded-xl overflow-hidden aspect-video bg-gray-50">
					<img src={asset("/assets/images/fondo-cifras-ugellc.jpg")} alt="Director" className="w-full h-full object-cover" />
				</div>

				{/* Título */}
				<h2 className="text-2xl font-heading font-semibold text-gray-900 mb-6">Estimada comunidad educativa:</h2>

				{/* Contenido */}
				<div className="space-y-4 text-gray-700 leading-relaxed">
					<p>
						Es para mí un honor saludarlos al iniciar este camino como Director de nuestra UGEL. Asumo este compromiso con la convicción de que el servicio público solo tiene
						sentido si nace de la transparencia y el respeto profundo a nuestra identidad.
					</p>
					<p>
						Se reconoce y valora la capacidad y entrega del equipo humano que conforma esta entidad. El objetivo común es garantizar una educación de calidad, inclusiva y con
						equidad, que respete los saberes ancestrales y promueva el desarrollo integral en cada comunidad. A través del diálogo intercultural y la participación conjunta de
						todos los actores educativos, se asume el desafío de alcanzar las metas trazadas en beneficio de nuestra jurisdicción.
					</p>
					<p>
						Rimaykullayki (Los saludo con respeto). Trabajemos en unidad para que la educación sea el motor de cambio en cada rincón de nuestra provincia.
					</p>
				</div>
			</div>
		</InstitucionalLayout>
	)
}