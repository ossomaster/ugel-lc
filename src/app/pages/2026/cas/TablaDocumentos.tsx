// GridDocumentos.tsx
"use client"

import { FaFilePdf, FaCalendarAlt, FaCheckCircle, FaTimesCircle, FaClock, FaDownload } from "react-icons/fa"
import { type TDocumentoNormativo } from "./constants"

interface GridProps {
  datos: TDocumentoNormativo[]
}

export default function GridDocumentos({ datos }: GridProps) {
  if (datos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 bg-gray-50/50 rounded-2xl border-2 border-dashed border-gray-200 text-gray-400">
        <FaFilePdf className="text-4xl mb-4 opacity-20" />
        <p className="font-medium text-lg">No se encontraron documentos en esta categoría.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
      {datos.map((doc, index) => (
        <CardDocumento key={`${doc.numero}-${index}`} doc={doc} />
      ))}
    </div>
  )
}

function CardDocumento({ doc }: { doc: TDocumentoNormativo }) {
  const configEstado = {
    vigente: { color: "bg-emerald-100 text-emerald-700", label: "Vigente", icon: <FaCheckCircle /> },
    concluida: { color: "bg-blue-100 text-blue-700", label: "Concluido", icon: <FaClock /> },
    cancelada: { color: "bg-rose-100 text-rose-700", label: "Cancelado", icon: <FaTimesCircle /> },
  }

  const estadoActual = doc.estado || "vigente"
  const { color, icon, label } = configEstado[estadoActual]

  return (
    <div className="group relative flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      {/* Línea de acento superior */}
      <div className={`h-1.5 w-full ${estadoActual === 'vigente' ? 'bg-emerald-500' : 'bg-gray-300'}`} />
      
      <div className="p-6 flex flex-col h-full">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex flex-col">
            <span className="text-[11px] font-bold text-blue-600 tracking-wider uppercase mb-1">
              PROCESO {doc.numero}
            </span>
            <div className="flex flex-col gap-1.5 text-gray-400 text-[11px] mt-2">
              {/* Fecha de Inicio */}
              <div className="flex items-center gap-1.5">
                <FaCalendarAlt className="text-emerald-500/70" />
                <span><strong className="text-gray-500">Inicio:</strong> {doc.fechainicio}</span>
              </div>

              {/* Fecha de Fin */}
              <div className="flex items-center gap-1.5">
                <FaCalendarAlt className="text-rose-500/70" />
                <span><strong className="text-gray-500">Fin:</strong> {doc.fechafin}</span>
              </div>
            </div>
          </div>
          <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${color}`}>
            {icon} {label}
          </div>
        </div>

        {/* Títulos */}
        <div className="space-y-2 mb-6">
          <h3 className="font-extrabold text-gray-800 text-lg leading-tight group-hover:text-blue-700 transition-colors line-clamp-2">
            {doc.convocatoria}
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
            {doc.descripcion}
          </p>
        </div>

        {/* Botones de Acción */}
        <div className="mt-auto grid grid-cols-1 gap-2">
          <div className="grid grid-cols-2 gap-2">
            <BotonDescarga href={doc.bases} label="Bases"/>
            <BotonDescarga href={doc.preliminar} label="Resultado Preliminar" />
            <BotonDescarga href={doc.entrevista} label="Aptos Entrevista" />
            <BotonDescarga href={doc.final} label="Resultado Final" />
          </div>
          <BotonDescarga href={doc.comunicados} label="Comunicados" fullWidth />
        </div>
      </div>

      {/* Badge Flotante (Opcional) */}
      {doc.badge && (
        <div 
          className="absolute top-16 -right-8 rotate-0 w-32 text-center py-1 text-[9px] font-bold text-white shadow-sm"
          style={{ backgroundColor: doc.badge.color }}
        >
          {doc.badge.label}
        </div>
      )}
    </div>
  )
}

function BotonDescarga({ href, label, fullWidth = false }: { href: string; label: string; fullWidth?: boolean }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        flex items-center justify-left gap-1 px-2 py-2.5 rounded-lg border border-red-200 
        bg-gray-50/50 text-gray-600 text-[9.6px] font-bold uppercase tracking-tight
        hover:bg-red-50 hover:border-red-100 hover:text-red-600 transition-all
        ${fullWidth ? 'col-span-0' : ''}
      `}
    >
      <FaFilePdf className="text-sm text-red-600 opacity-90 group-hover/btn:scale-110 transition-transform" />
      <span className="truncate">{label}</span>
    </a>
  )
}