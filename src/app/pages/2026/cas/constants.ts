// constants.ts  (modificar el bases y los documentos)

export type TDocumentoNormativo = {
  numero: string
  descripcion: string
  convocatoria: string
  fechainicio: string
  fechafin: string
  bases: string
  preliminar: string
  entrevista: string
  final:string
  comunicados: string
  badge?: { label: string; color: string }
  estado?: 'vigente' | 'concluida' | 'cancelada'
}

export const DOCUMENTOS_NORMATIVOS: TDocumentoNormativo[] = [
  {
    numero: "01-2026",
    descripcion: "Sede Administrativa UGEL La Convención",
    convocatoria: "CAS-01",
    fechainicio: "17/02/2026",
    fechafin: "30/02/2026",
    bases: "/assets/documentos/rv-001-2026.pdf",
    preliminar: "/assets/documentos/rv-001-2026.pdf",
    entrevista: "/assets/documentos/rv-001-2026.pdf",
    final: "/assets/documentos/rv-001-2026.pdf",
    comunicados: "/assets/documentos/rv-001-2026.pdf",
    badge: { label: "PUBLICADO", color: "#00c758" },
    estado: "vigente",  
  },
   {
    numero: "002-2026",
    descripcion: "Intervenciones y Acciones Pedagógicas",
    convocatoria: "Cas02 N.° 001-2026-MINEDU",
    fechainicio: "17/02/2026",
    fechafin: "30/02/2026",
    bases: "Resolución Viceministerial",
    preliminar: "/assets/documentos/rv-001-2026.pdf",
    entrevista: "/assets/documentos/rv-001-2026.pdf",
    final: "/assets/documentos/rv-001-2026.pdf",
    comunicados: "/assets/documentos/rv-001-2026.pdf",
    badge: { label: "PUBLICADO", color: "#00c758" },
    estado: "cancelada",
  },
 
]