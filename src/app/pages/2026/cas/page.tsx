// page.tsx
"use client"

import { useState } from "react"
import MainLayout from "../../../components/MainLayout"
import PageHero from "../../../components/PageHero"
import GridDocumentos from "./TablaDocumentos" // Nombre actualizado
import { DOCUMENTOS_NORMATIVOS } from "./constants"

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
        title="Contratación D.L N°1057"
        subtitle="Listado de convocatorias CAS 2026 - UGEL La Convención"
      />

      <section className="container py-12">
        {/* Pestañas de Navegación */}
        <div className="mb-6 border-b border-gray-200">
          <nav className="-mb-px flex flex-wrap gap-2 sm:gap-6">
            {estados.map(({ value, label }) => {
              const count = value === "todas" 
                ? DOCUMENTOS_NORMATIVOS.length 
                : DOCUMENTOS_NORMATIVOS.filter(d => d.estado === value).length

              return (
                <button
                  key={value}
                  onClick={() => setActiveEstado(value)}
                  className={`border-b-2 px-4 py-3 text-sm font-medium transition-colors ${
                    activeEstado === value ? "border-red-600 text-red-600" : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {label} <span className="ml-1 text-xs opacity-60">({count})</span>
                </button>
              )
            })}
          </nav>
        </div>

        {/* Reemplazo de Tabla por Grid */}
        <GridDocumentos datos={datosFiltrados} />
      </section>
    </MainLayout>
  )
}