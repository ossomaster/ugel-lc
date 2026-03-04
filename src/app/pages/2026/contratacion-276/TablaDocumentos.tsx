// TablaDocumentos.tsx  (o GridDocumentos.tsx)
"use client"

import { FaFilePdf, FaCalendarAlt, FaCheckCircle, FaTimesCircle, FaClock, FaLink } from "react-icons/fa"
import { type TDocumentoNormativo, type LinkConFecha } from "./constants"

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

  // Helper para obtener URL y fecha manual por botón
  const getLinkData = (link?: LinkConFecha) => {
    if (!link) return null
    if (typeof link === "string") {
      return { url: link, fecha: doc.fechapublicacion }
    }
    return { url: link.url, fecha: link.fecha || doc.fechapublicacion }
  }

  return (
    <div className="group relative flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      <div className={`h-1.5 w-full ${estadoActual === 'vigente' ? 'bg-emerald-500' : 'bg-gray-300'}`} />
      
      <div className="p-6 flex flex-col h-full">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex flex-col">
            <span className="text-[11px] font-bold text-blue-600 tracking-wider uppercase mb-1">
              PROCESO {doc.numero}
            </span>
            <div className="flex flex-col gap-1.5 text-gray-400 text-[11px] mt-2">
              <div className="flex items-center gap-1.5"><FaCalendarAlt className="text-blue-500/70" /><span><strong className="text-gray-500">Publicación:</strong> {doc.fechapublicacion}</span></div>
              <div className="flex items-center gap-1.5"><FaCalendarAlt className="text-emerald-500/70" /><span><strong className="text-gray-500">Inicio:</strong> {doc.fechainicio}</span></div>
              <div className="flex items-center gap-1.5"><FaCalendarAlt className="text-rose-500/70" /><span><strong className="text-gray-500">Fin:</strong> {doc.fechafin}</span></div>
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

        {/* Botones arriba con fecha MANUAL por botón */}
        <div className="grid grid-cols-2 gap-2 mb-6">
          {doc.bases && (() => { const d = getLinkData(doc.bases); return d && <BotonDescarga href={d.url} label="Bases" fecha={d.fecha} /> })()}
          {doc.linkinscripcion && (() => { const d = getLinkData(doc.linkinscripcion); return d && <BotonLinkInscripcion href={d.url} label="Pre-Inscripción" fecha={d.fecha} /> })()}
          {doc.preliminar && (() => { const d = getLinkData(doc.preliminar); return d && <BotonDescarga href={d.url} label="Resultado Preliminar" fecha={d.fecha} /> })()}
          {doc.preliminar2 && (() => { const d = getLinkData(doc.preliminar2); return d && <BotonDescarga href={d.url} label="Result Prelimi 03.03.2026" fecha={d.fecha} /> })()}
          {doc.entrevista && (() => { const d = getLinkData(doc.entrevista); return d && <BotonDescarga href={d.url} label="Aptos Entrevista" fecha={d.fecha} /> })()}
          {doc.final && (() => { const d = getLinkData(doc.final); return d && <BotonDescarga href={d.url} label="Resultado Final" fecha={d.fecha} /> })()}
          {doc.comunicado1 && (() => { const d = getLinkData(doc.comunicado1); return d && <BotonDescarga href={d.url} label="Comunicado N°01" fecha={d.fecha} fullWidth /> })()}
          {doc.comunicado2 && (() => { const d = getLinkData(doc.comunicado2); return d && <BotonDescarga href={d.url} label="Comunicado N°02" fecha={d.fecha} fullWidth /> })()}
          {doc.comunicado3 && (() => { const d = getLinkData(doc.comunicado3); return d && <BotonDescarga href={d.url} label="Comunicado N°03" fecha={d.fecha} fullWidth /> })()}
        </div>
      </div>

      {doc.badge && (
        <div className="absolute top-16 -right-8 w-32 text-center py-1 text-[9px] font-bold text-white shadow-sm" style={{ backgroundColor: doc.badge.color }}>
          {doc.badge.label}
        </div>
      )}
    </div>
  )
}

/* ====================== BOTÓN PEQUEÑO + FECHA MANUAL ====================== */
function BotonDescarga({ href, label, fecha, fullWidth = false }: { href: string; label: string; fecha?: string; fullWidth?: boolean }) {
  return (
    <div className={fullWidth ? "col-span-2" : ""}>
      <a href={href} target="_blank" rel="noopener noreferrer"
        className="flex items-center justify-start gap-1 px-2 py-2.5 rounded-lg border border-red-200 bg-gray-50/50 text-gray-600 text-[9.6px] font-bold uppercase tracking-tight hover:bg-red-50 hover:border-red-100 hover:text-red-600 transition-all">
        <FaFilePdf className="text-sm text-red-600" />
        <span className="truncate">{label}</span>
      </a>
      {fecha && <p className="text-[9px] text-slate-400 font-medium mt-1 pl-1">Publicado: {fecha}</p>}
    </div>
  )
}

function BotonLinkInscripcion({ href, label, fecha, fullWidth = false }: { href: string; label: string; fecha?: string; fullWidth?: boolean }) {
  return (
    <div className={fullWidth ? "col-span-2" : ""}>
      <a href={href} target="_blank" rel="noopener noreferrer"
        className="flex items-center justify-start gap-1 px-2 py-2.5 rounded-lg border border-purple-200 bg-purple-50 text-purple-700 text-[9.6px] font-bold uppercase tracking-tight hover:bg-purple-100 hover:border-purple-300 hover:text-purple-700 transition-all">
        <FaLink className="text-sm text-purple-600" />
        <span className="truncate">{label}</span>
      </a>
      {fecha && <p className="text-[9px] text-slate-400 font-medium mt-1 pl-1">Publicado: {fecha}</p>}
    </div>
  )
}