import { EMPRESA } from "../../constants/constants"
import InstitucionalLayout from "../InstitucionalLayout"

const NIVELES = [
	{ nivel: "Inicial", iiee: 313, docentes: 399, estudiantes: 6092 },
	{ nivel: "Primaria", iiee: 311, docentes: 1155, estudiantes: 14750 },
	{ nivel: "Secundaria", iiee: 91, docentes: 1149, estudiantes: 11282 },
	{ nivel: "CEBA", iiee: 13, docentes: 64, estudiantes: 1025 },
	{ nivel: "EBE", iiee: 3, docentes: 14, estudiantes: 104 },
	{ nivel: "CETPRO", iiee: 18, docentes: 37, estudiantes: 527 },
]

export default function InstitucionesEducativasPage() {
	return (
		<InstitucionalLayout title="Instituciones Educativas" subtitle={`Instituciones educativas en la jurisdicción de ${EMPRESA.nombre}`}>
			<div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
				<h2 className="text-xl font-heading font-semibold text-gray-900 mb-4">Instituciones Educativas</h2>
				<p className="text-gray-600 mb-6">
					Relación de instituciones educativas por nivel y modalidad en la jurisdicción de La UGEL La Convención.
				</p>

				<div className="overflow-x-auto">
					<table className="w-full text-sm">
						<thead>
							<tr className="border-b border-gray-200">
								<th className="text-left py-3 px-4 font-semibold text-gray-700">Nivel / Modalidad</th>
								<th className="text-center py-3 px-4 font-semibold text-gray-700">II.EE.</th>
								<th className="text-center py-3 px-4 font-semibold text-gray-700">Docentes</th>
								<th className="text-center py-3 px-4 font-semibold text-gray-700">Estudiantes</th>
							</tr>
						</thead>
						<tbody>
							{NIVELES.map((n) => (
								<tr key={n.nivel} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
									<td className="py-3 px-4 font-medium text-gray-800">{n.nivel}</td>
									<td className="py-3 px-4 text-center text-gray-600">{n.iiee.toLocaleString()}</td>
									<td className="py-3 px-4 text-center text-gray-600">{n.docentes.toLocaleString()}</td>
									<td className="py-3 px-4 text-center text-gray-600">{n.estudiantes.toLocaleString()}</td>
								</tr>
							))}
						</tbody>
						<tfoot>
							<tr className="bg-gray-50 font-semibold">
								<td className="py-3 px-4 text-gray-800">Total</td>
								<td className="py-3 px-4 text-center text-gray-800">{NIVELES.reduce((s, n) => s + n.iiee, 0).toLocaleString()}</td>
								<td className="py-3 px-4 text-center text-gray-800">{NIVELES.reduce((s, n) => s + n.docentes, 0).toLocaleString()}</td>
								<td className="py-3 px-4 text-center text-gray-800">{NIVELES.reduce((s, n) => s + n.estudiantes, 0).toLocaleString()}</td>
							</tr>
						</tfoot>
					</table>
				</div>
			</div>
		</InstitucionalLayout>
	)
}
