import Link from "next/link"
import { FaHome, FaEnvelope } from "react-icons/fa"
import { asset } from "../helpers"

const ENLACES_SUPERIORES = [
	{ label: "INICIO", href: "/", icon: FaHome },
	{ label: "CONTACTO", href: "/contacto", icon: FaEnvelope },
]

const BarraIzquierda = () => {
	return (
		<div className="flex min-h-screen bg-white">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-200 border-r border-gray-200 p-4">
          <ul className="space-y-1">
            <li className="text-sm font-medium text-gray-600 px-3 py-2 rounded-md hover:bg-gray-50">Bienvenida</li>
            <li className="text-sm font-medium text-white-900 px-3 py-2 rounded-md bg-cyan-500">Organigrama</li>
            <li className="text-sm font-medium text-gray-600 px-3 py-2 rounded-md hover:bg-gray-50">Directorio</li>
            <li className="text-sm font-medium text-gray-600 px-3 py-2 rounded-md hover:bg-gray-50">Jurisdicción</li>
            <li className="text-sm font-medium text-gray-600 px-3 py-2 rounded-md hover:bg-gray-50">Instituciones Educativas</li>
            <li className="text-sm font-medium text-gray-600 px-3 py-2 rounded-md hover:bg-gray-50">Visión Misión</li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 bg-white">
          <div className="max-w-3xl mx-auto">
            {/* Image Placeholder - Minimalist: Use simple border instead of full image for minimalism */}
            <div className="relative mb-8 border border-gray-200 rounded-lg overflow-hidden aspect-video bg-gray-50">
              {/* Placeholder for photo + flag; in production, replace with actual image src */}
              <img 
                src="../assets/images/.jpg" 
                alt="Organigrama" 
                className="w-full h-full object-cover"
              />
            </div>
            
          </div>
        </main>
      </div>
	)
}

export default BarraIzquierda
