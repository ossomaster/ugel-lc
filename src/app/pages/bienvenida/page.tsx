// app/bienvenida/page.tsx
"use client"

import MainLayout from "../../components/MainLayout"


export default function BienvenidaPage() {
  return (
    <MainLayout>
      <div className="flex min-h-screen bg-white">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-200 border-r border-gray-200 p-4">
          <ul className="space-y-1">
            <li className="text-sm font-medium text-white-900 px-3 py-2 rounded-md bg-cyan-500">Bienvenida</li>
            <li className="text-sm font-medium text-gray-600 px-3 py-2 rounded-md hover:bg-gray-50">Organigrama</li>
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
                src="../assets/images/fondo-cifras-ugellc.jpg" 
                alt="Director" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Title */}
            <h1 className="text-2xl font-semibold text-gray-900 mb-6">Estimada comunidad educativa:</h1>

            {/* Content */}
            <p className="text-gray-700 leading-relaxed mb-4">
              Es para mí un honor saludarlos al iniciar este camino como Director de nuestra UGEL. Asumo este compromiso con la convicción de que el servicio público solo tiene sentido si nace de la transparencia y el respeto profundo a nuestra identidad.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Se reconoce y valora la capacidad y entrega del equipo humano que conforma esta entidad. El objetivo común es garantizar una educación de calidad, inclusiva y con equidad, que respete los saberes ancestrales y promueva el desarrollo integral en cada comunidad. A través del diálogo intercultural y la participación conjunta de todos los actores educativos, se asume el desafío de alcanzar las metas trazadas en beneficio de nuestra jurisdicción.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Rimaykullayki (Los saludo con respeto). Trabajemos en unidad para que la educación sea el motor de cambio en cada rincón de nuestra provincia.
            </p>
          </div>
        </main>
      </div>
    </MainLayout>
  )
}