import { EMPRESA } from "../../constants/constants"
import InstitucionalLayout from "../InstitucionalLayout"

export default function VisionMisionPage() {
	return (
		<InstitucionalLayout title="Visión y Misión" subtitle={`Propósito institucional de ${EMPRESA.nombre}`}>
			<div className="space-y-6">
				{/* Misión */}
				<div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
					<div className="flex items-center gap-3 mb-4">
						<span className="w-10 h-10 rounded-xl bg-primary/10 flex-center text-primary text-lg font-bold">M</span>
						<h2 className="text-xl font-heading font-semibold text-gray-900">Misión</h2>
					</div>
					<p className="text-gray-700 leading-relaxed">{EMPRESA.mision}</p>
				</div>

				{/* Visión */}
				<div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
					<div className="flex items-center gap-3 mb-4">
						<span className="w-10 h-10 rounded-xl bg-primary/10 flex-center text-primary text-lg font-bold">V</span>
						<h2 className="text-xl font-heading font-semibold text-gray-900">Visión</h2>
					</div>
					<p className="text-gray-700 leading-relaxed">{EMPRESA.vision}</p>
				</div>
			</div>
		</InstitucionalLayout>
	)
}
