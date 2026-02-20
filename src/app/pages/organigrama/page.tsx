import { EMPRESA } from "../../constants/constants"
import InstitucionalLayout from "../InstitucionalLayout"

export default function OrganigramaPage() {
	return (
		<InstitucionalLayout title="Organigrama" subtitle={`Estructura orgánica de ${EMPRESA.nombre}`}>
			<div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
				<h2 className="text-xl font-heading font-semibold text-gray-900 mb-4">Organigrama Institucional</h2>
				<p className="text-gray-600 mb-6">Estructura organizativa de la Unidad de Gestión Educativa Local de La Convención.</p>

				<div className="rounded-xl overflow-hidden border border-gray-200 bg-gray-50 aspect-[4/3] flex-center">
					<p className="text-gray-400 text-sm">Imagen del organigrama</p>
				</div>
			</div>
		</InstitucionalLayout>
	)
}
