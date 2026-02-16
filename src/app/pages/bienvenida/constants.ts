// constants.ts  (modificar el bases y los documentos)

export type TDocumentoNormativo = {
  numero: string
  convocatoria: string
  bases: string
  preliminar: string
  archivoUrl: string
  badge?: { label: string; color: string }
  estado?: 'vigente' | 'concluida' | 'cancelada'   // ← nuevo campo (opcional)
}

export const DOCUMENTOS_NORMATIVOS: TDocumentoNormativo[] = [
  {
    numero: "001-2026",
    convocatoria: "CAS-01",
    bases: "/assets/documentos/rv-001-2026.pdf",
    preliminar: "/assets/documentos/rv-001-2026.pdf",
    archivoUrl: "/assets/documentos/rv-001-2026.pdf",
    badge: { label: "Nuevo", color: "#10b981" },
    estado: "vigente",   // ← agregar según corresponda
  },
   {
    numero: "002-2026",
    convocatoria: "Cas02 N.° 001-2026-MINEDU",
    bases: "Resolución Viceministerial",
    preliminar: "2026-01-05",
    archivoUrl: "/assets/documentos/rv-001-2026.pdf",
    badge: { label: "Nuevo", color: "#10b981" },
    estado: "cancelada",   // ← agregar según corresponda
  },
  // ... resto de documentos con su respectivo estado
  // Ejemplo:
  // { ... , estado: "concluida" },
  // { ... , estado: "cancelada" },
]