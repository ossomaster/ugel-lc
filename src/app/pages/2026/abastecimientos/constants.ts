// constants.ts  (modificar el bases y los documentos)

export type TDocumentoNormativo = {
  numero: string  
  numcotizacion: string
  tipo: string
  descripcion: string
  archivoUrl: string
  fechapublicacion: string
  inicio: string
  fin: string
  badge?: { label: string; color: string }
  estado?: 'vigente' | 'concluido' | 'cancelada'   // ← nuevo campo (opcional)
}

export const DOCUMENTOS_NORMATIVOS: TDocumentoNormativo[] = [
  {
    numero: "001",
    tipo: "Servicio",
    numcotizacion:"01-2026",
    descripcion:"PRIMERA CONVOCATORIA SERVICIO DE ATENCIÓN DE REFRIGERIO, ALMUERZO Y CENA PARA LA OFICINA DE ADMINISTRACIÓN DE LA UGEL LA CONVENCION",
    archivoUrl: "/assets/documentos/rv-001-2026.pdf",
    fechapublicacion: "2026-01-05",
    inicio: "2026-01-05",
    fin: "2026-01-05",
    badge: { label: "Nuevo", color: "#10b981" },
    estado: "vigente",
  },
   {
    numero: "002",
    tipo: "Servicio",
    numcotizacion:"01-2026",
    descripcion:"PRIMERA CONVOCATORIA SERVICIO DE ATENCIÓN DE REFRIGERIO, ALMUERZO Y CENA PARA LA OFICINA DE ADMINISTRACIÓN DE LA UGEL LA CONVENCION",
    archivoUrl: "/assets/documentos/rv-001-2026.pdf",
    fechapublicacion: "2026-01-05",
    inicio: "2026-01-05",
    fin: "2026-01-05",
    badge: { label: "Nuevo", color: "#10b981" },
    estado: "concluido",
  },
  
]