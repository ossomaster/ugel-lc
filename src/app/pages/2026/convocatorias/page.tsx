import { EMPRESA } from "../../../constants/constants"
import InstitucionalLayout from "../../InstitucionalLayout"

// Puedes mover estos datos a constants.ts si prefieres centralizarlos
const accesosDirectos = [
  {
    title: "D.L 276",
    icon: "💼",
    description: "Contratación de Personal N°276 - 2026",
    href: "../../../pages/2026/contratacion-276",
    color: "text-emerald-600",
  },
  {
    title: "D.L 1057",
    icon: "🤝",
    description: "Contratación de Personal CAS - 2026",
    href: "../../../pages/2026/cas",
    color: "text-amber-600",
  },
  {
    title: "Contratación Docente",
    icon: "👨🏻‍🏫",
    description: "Contratación del Servicio Docente 2026",
    href: "../../../pages/2026/contratacion-docente",
    color: "text-purple-600",
  },
  {
    title: "Contratación de Auxiliares",
    icon: "👩🏻‍🏫",
    description: "Contratación de Auxiliares de Educación 2026",
    href: "../../../pages/2026/contratacion-auxiliares",
    color: "text-rose-600",
  },
  {
    title: "Contratación Docente CRFA",
    icon: "👨🏻‍💼",
    description: "Contratación del Servicio Docente CRFA 2026",
    href: "../../../pages/2026/contratacion-docente-crfa",
    color: "text-rose-600",
  },
  {
    title: "Encargaturas 2026",
    icon: "👨‍💻",
    description: "Proceso de Encargaturas 2026",
    href: "../../../pages/2026/encargaturas",
    color: "text-purple-600",
  },
  /* {
    title: "Plataforma de Denuncia del Ciudadano",
    icon: "⚠️",
    description: "Reporta irregularidades de forma segura",
    href: "/plataforma-denuncia",
    color: "text-red-600",
  }, */
]

export default function ServiciosDigitalesPage() {
  return (
    <InstitucionalLayout
      title="Convocatorias"
      subtitle={`Listado de Convocatorias de Personal - ${EMPRESA.nombre}`}
    >
      <div className="bg-gray-50/50 py-12 md:py-16">
        <div className="container mx-auto px-5 md:px-8 max-w-6xl">
          {/* Introducción breve */}
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Accesos Directos a Convocatorias RR.HH
            </h2>
            <p className="text-lg text-gray-600">
              Listado de Procesos, Convocatorias de Personal UGEL La Convención
            </p>
          </div>

          {/* Grid de tarjetas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {accesosDirectos.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 hover:-translate-y-1 flex flex-col items-center p-8 text-center"
              >
                <div className={`text-6xl mb-6 transition-transform duration-300 group-hover:scale-110 ${item.color}`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  {item.description}
                </p>
              </a>
            ))}
          </div>

          {/* Sección adicional opcional */}
          <div className="mt-16 text-center">
            <p className="text-gray-500 text-sm">
              ¿Necesitas ayuda? Contáctanos al {EMPRESA.correo} o visita nuestra{" "}
              <a href="/contacto" className="text-primary hover:underline">
                sección de contacto
              </a>
            </p>
          </div>
        </div>
      </div>
    </InstitucionalLayout>
  )
}