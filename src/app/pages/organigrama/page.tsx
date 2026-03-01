import { EMPRESA } from "../../constants/constants"
import InstitucionalLayout from "../InstitucionalLayout"
import { asset } from "../../helpers"

export default function OrganigramaPage() {
	return (
		<InstitucionalLayout title="Organigrama" subtitle={`Estructura orgánica de ${EMPRESA.nombre}`}>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
                <h2 className="text-xl font-heading font-semibold text-gray-900 mb-4">Organigrama Institucional</h2>
                <p className="text-gray-600 mb-6">Estructura organizativa de la Unidad de Gestión Educativa Local de La Convención.</p>

                {/* Contenedor de la imagen */}
                <div className="rounded-xl overflow-hidden border border-gray-200 bg-white">
                    <img 
                        src={asset("/assets/images/organigrama-ugel-lc.png")} 
                        alt={`Organigrama de ${EMPRESA.nombre}`}
                        className="w-full h-auto block"
                    />
                </div>
                
                {/* Botón opcional para ver en pantalla completa */}
                <div className="mt-4 flex justify-end">
                    <a 
                        href={asset("/assets/images/organigrama-ugel-lc.png")} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:underline font-medium"
                    >
                        Ver imagen en tamaño completo →
                    </a>
                </div>
            </div>
        </InstitucionalLayout>
	)
}
