// page.tsx  (o DocumentosNormativosPage.tsx)
"use client"

import { useState } from "react"
import MainLayout from "../../components/MainLayout"
import PageHero from "../../components/PageHero"
import TablaDocumentos from "./TablaDocumentos"
import { DOCUMENTOS_NORMATIVOS, type TDocumentoNormativo } from "./constants"

type EstadoConvocatoria = "vigente" | "concluida" | "cancelada" | "todas"

const estados: { value: EstadoConvocatoria; label: string }[] = [
  { value: "todas",    label: "TODAS" },
  { value: "vigente",   label: "CONVOCATORIAS VIGENTES" },
  { value: "concluida", label: "CONVOCATORIAS CONCLUIDAS" },
  { value: "cancelada", label: "CONVOCATORIAS CANCELADAS" },
]

export default function DocumentosNormativosPage() {
  const [activeEstado, setActiveEstado] = useState<EstadoConvocatoria>("vigente")

  const datosFiltrados = 
    activeEstado === "todas"
      ? DOCUMENTOS_NORMATIVOS
      : DOCUMENTOS_NORMATIVOS.filter(doc => doc.estado === activeEstado)

  return (
    <MainLayout>
      <PageHero
        title="Documentos Normativos"
        subtitle="Listado de documentos normativos con opciones de búsqueda, exportación y descarga"
      />

      <section className="container py-12">
        {/* Pestañas */}
        <div className="mb-8 border-b border-gray-200">
          <nav className="-mb-px flex flex-wrap gap-2 sm:gap-6" aria-label="Tabs">
            {estados.map(({ value, label }) => {
              const count = 
                value === "todas"
                  ? DOCUMENTOS_NORMATIVOS.length
                  : DOCUMENTOS_NORMATIVOS.filter(d => d.estado === value).length

              const isActive = activeEstado === value

              return (
                <button
                  key={value}
                  onClick={() => setActiveEstado(value)}
                  className={`
                    whitespace-nowrap border-b-2 px-4 py-3 text-sm font-medium transition-colors md:px-6
                    ${
                      isActive
                        ? "border-red-600 text-red-600"
                        : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    }
                  `}
                >
                  {label} <span className="ml-1.5 text-xs opacity-75">({count})</span>
                </button>
              )
            })}
          </nav>
        </div>

        {/* Tabla */}
        <TablaDocumentos datos={datosFiltrados} />
      </section>
    </MainLayout>
  )
}