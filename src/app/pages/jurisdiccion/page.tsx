import { EMPRESA } from "../../constants/constants"
import InstitucionalLayout from "../InstitucionalLayout"

const DISTRITOS = [
	{ nombre: "Santa Ana (Quillabamba)", tipo: "Capital de Provincia" },
	{ nombre: "Echarati", tipo: "Distrito" },
	{ nombre: "Huayopata", tipo: "Distrito" },
	{ nombre: "Maranura", tipo: "Distrito" },
	{ nombre: "Ocobamba", tipo: "Distrito" },
	{ nombre: "Quellouno", tipo: "Distrito" },
	{ nombre: "Santa Teresa", tipo: "Distrito" },
	{ nombre: "Vilcabamba", tipo: "Distrito" },
	{ nombre: "Inkawasi", tipo: "Distrito" },
	{ nombre: "Villa Virgen", tipo: "Distrito" },
	{ nombre: "Villa Kintiarina", tipo: "Distrito" },
	{ nombre: "Megantoni", tipo: "Distrito" },
	{ nombre: "Kumpirushiato", tipo: "Distrito" },
	{ nombre: "Pichari", tipo: "Distrito" },
	{ nombre: "Kepashiato", tipo: "Distrito" },
]

export default function JurisdiccionPage() {
	return (
		<InstitucionalLayout title="Jurisdicción" subtitle={`Ámbito territorial de ${EMPRESA.nombre}`}>
			<div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
				<h2 className="text-xl font-heading font-semibold text-gray-900 mb-4">Ámbito Jurisdiccional</h2>
				<p className="text-gray-600 mb-6">
					La {EMPRESA.nombreCompleto} comprende los siguientes distritos de la provincia de La Convención, Cusco.
				</p>

				<div className="grid sm:grid-cols-2 gap-3">
					{DISTRITOS.map((d) => (
						<div key={d.nombre} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50 border border-gray-100">
							<span className="w-2 h-2 rounded-full bg-primary shrink-0" />
							<div>
								<p className="text-sm font-medium text-gray-800">{d.nombre}</p>
								<p className="text-xs text-gray-500">{d.tipo}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</InstitucionalLayout>
	)
}
