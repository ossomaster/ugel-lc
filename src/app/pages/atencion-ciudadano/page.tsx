import { EMPRESA } from "../../constants/constants"
import InstitucionalLayout from "../InstitucionalLayout"

// Puedes mover estos datos a constants.ts si prefieres centralizarlos
const accesosDirectos = [
  {
    title: "Mesa de partes virtual",
    icon: "📄",
    description: "Presenta documentos de forma virtual",
    href: "/mesa-de-partes-virtual",
    color: "text-emerald-600",
  },
  {
    title: "Pagos web",
    icon: "📄",
    description: "Realiza el pago de tu estado de cuenta",
    href: "/pagos-web",
    color: "text-blue-600",
  },
  {
    title: "Acceso a la información",
    icon: "🔍",
    description: "Consulta información pública",
    href: "/acceso-informacion",
    color: "text-amber-600",
  },
  {
    title: "Libro de reclamaciones DIGITAL",
    icon: "📘",
    description: "Registra tu reclamo de forma digital",
    href: "/libro-reclamaciones",
    color: "text-purple-600",
  },
  {
    title: "Normas",
    icon: "📋",
    description: "Consulta normativa vigente",
    href: "/normas",
    color: "text-rose-600",
  },
  {
    title: "Plataforma de Denuncia del Ciudadano",
    icon: "⚠️",
    description: "Reporta irregularidades de forma segura",
    href: "/plataforma-denuncia",
    color: "text-red-600",
  },
]

export default function ServiciosDigitalesPage() {
  return (
    <InstitucionalLayout
      title="Servicios Digitales"
      subtitle={`Atención al ciudadano - ${EMPRESA.nombre}`}
    >
      <div className="bg-gray-50/50 py-12 md:py-16">
        <div className="container mx-auto px-5 md:px-8 max-w-6xl">
          {/* Introducción breve */}
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Accesos Directos a Servicios Digitales
            </h2>
            <p className="text-lg text-gray-600">
              Realiza tus trámites de manera rápida, segura y sin filas desde cualquier lugar.
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