import { EMPRESA } from "../../constants/constants"
import InstitucionalLayout from "../InstitucionalLayout"

// Componente auxiliar para las tarjetas de acción
const ActionCard = ({ 
  icon, 
  title, 
  description, 
  buttonText, 
  href, 
  colorClass, 
  iconSymbol 
}: any) => (
  <div className="group flex flex-col md:flex-row gap-6 p-6 transition-all duration-300 rounded-2xl hover:bg-gray-50 border border-transparent hover:border-gray-100">
    <div className={`flex-shrink-0 w-16 h-16 rounded-2xl ${colorClass} flex items-center justify-center text-3xl shadow-inner transition-transform group-hover:scale-110`}>
      {icon}
    </div>
    <div className="flex-1">
      <h4 className="text-xl font-bold text-gray-900 mb-2">{title}</h4>
      <p className="text-gray-600 mb-5 leading-relaxed">{description}</p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center gap-2 w-full md:w-auto px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-sm hover:shadow-md ${colorClass} text-white hover:brightness-110`}
      >
        {buttonText}
        <span className="text-xl">{iconSymbol}</span>
      </a>
    </div>
  </div>
);

export default function ReporteAsistenciaDocentePage() {
  return (
    <InstitucionalLayout
      title="Reporte de Asistencia Docente"
      subtitle={`Atención al ciudadano - ${EMPRESA.nombre}`}
    >
      <div className="bg-white py-12 md:py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          
          {/* Header Section */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-emerald-600 uppercase bg-emerald-50 rounded-full">
              Trámite Obligatorio 2026
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
              Reporte de Asistencia Docente y Administrativo
            </h2>
            <div className="w-24 h-1.5 bg-emerald-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Info & Image */}
            <div className="lg:col-span-5 space-y-8">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-amber-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white">
                  <img
                    src="https://evaluaciondocente.perueduca.pe/media/11550845328port2-N2019.jpg"
                    alt="Personal docente"
                    className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-2xl">
                <h5 className="text-amber-800 font-bold mb-2 flex items-center gap-2">
                  <span>📌</span> Base Normativa
                </h5>
                <p className="text-amber-900/80 text-sm leading-relaxed">
                  Según <strong>R.S.G. N° 326-2017-MINEDU</strong>, el reporte debe ser presentado por el director en los 
                  <span className="font-bold underline ml-1">03 primeros días hábiles del mes siguiente</span>.
                </p>
              </div>
            </div>

            {/* Right Column: Actions */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50 p-2 md:p-8">
              <div className="space-y-4">
                <ActionCard 
                  icon="📝"
                  title="Sistema de Control de Asistencia de II.EE"
                  description="Complete el reporte oficial en línea de manera simplificada y reciba una constancia en su correo."
                  buttonText="Ingresas al Sistema de Reporte de Asistencia"
                  href="#"
                  colorClass="bg-emerald-600"
                  iconSymbol="↗"
                />

                <div className="h-px bg-gray-100 mx-8" />

                <ActionCard 
                  icon="📊"
                  title="Formatos Excel 2026"
                  description="Descargue los formatos N°1 y N°2 unificados para el control interno de su Institución Educativa."
                  buttonText="Descargar Excel"
                  href="/assets/files/reporte-asistencia/FORMATO-ASISTENCIA-DOCENTE-UNIFICADO-MINEDU-2026.xlsx"
                  colorClass="bg-amber-500"
                  iconSymbol="↓"
                />
              </div>
            </div>

          </div>

          {/* Footer Help */}
          <div className="mt-20 pt-8 border-t border-gray-100 text-center">
            <p className="text-gray-400 font-medium">
              ¿Dudas con el proceso? Escríbenos a{" "}
              <a href={`mailto:${EMPRESA.correo}`} className="text-emerald-600 hover:text-emerald-700 transition-colors font-bold">
                {EMPRESA.correo}
              </a>
            </p>
          </div>
        </div>
      </div>
    </InstitucionalLayout>
  )
}