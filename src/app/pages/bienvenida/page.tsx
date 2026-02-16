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
                src="/assets/images/fondo-cifras-ugellc.jpg" 
                alt="Director" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Title */}
            <h1 className="text-2xl font-semibold text-gray-900 mb-6">Estimada comunidad educativa:</h1>

            {/* Content */}
            <p className="text-gray-700 leading-relaxed mb-4">
              Es para mi un honor dirigirme a ustedes al inicio de este nuevo periodo como Director de nuestra institución. Asumo este reto con el firme compromiso de trabajar con transparencia, responsabilidad y vocación de servicio, siempre pensando en el bienestar de nuestros estudiantes y en el fortalecimiento de la educación en nuestra jurisdicción.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Confío plenamente en la capacidad, experiencia y entrega de cada uno de ustedes. Juntos, conformamos un gran equipo humano que tiene en sus manos la tarea más noble: garantizar una educación de calidad, inclusiva y con equidad. Estoy convencida de que, con unidad y colaboración, lograremos superar los desafíos que se nos presenten y alcanzar los objetivos que nos trazamos.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Mi gestión estará orientada al diálogo, a la escucha activa y a la participación conjunta de todos los actores involucrados en el proceso educativo.
            </p>
          </div>
        </main>
      </div>
    </MainLayout>
  )
}