// constants.ts
export type LinkConFecha = string | { url: string; fecha?: string }

export type TDocumentoNormativo = {
  numero: string
  descripcion: string
  convocatoria: string
  fechapublicacion: string
  fechainicio: string
  fechafin: string
  bases?: LinkConFecha
  linkinscripcion?: LinkConFecha
  preliminar?: LinkConFecha
  preliminar2?: LinkConFecha
  entrevista?: LinkConFecha
  final?: LinkConFecha
  comunicado1?: LinkConFecha
  comunicado2?: LinkConFecha
  comunicado3?: LinkConFecha
  badge?: { label: string; color: string }
  estado?: 'vigente' | 'concluida' | 'cancelada'
}

export const DOCUMENTOS_NORMATIVOS: TDocumentoNormativo[] = [
  {
    numero: "003-2026",
    descripcion: "Contratación de Personal Administrativo",
    convocatoria: "I.E ROSA DE AMERICA",
    fechapublicacion: "26/02/2026",
    fechainicio: "14/01/2026",
    fechafin: "09/03/2026",
    bases: { 
      url: "/assets/files/2026/contratacion-276/16.CONVOCATORIA-N03-D.L-276-F-26022026.pdf", 
      fecha: "26/02/2026" 
    },
    linkinscripcion: "",
    preliminar: { 
      url: "/assets/files/2026/contratacion-276/03.RESULTADOS-PRELIMINARES-D.L.N03-ROSA-AMERICA-F-04032026.pdf", 
      fecha: "04/03/2026" 
    },
    entrevista: "",
    final: "",
    comunicado1: "",
    comunicado2: "",
    comunicado3: "",
    badge: { label: "PUBLICADO", color: "#00c758" },
    estado: "vigente",
  },
  {
    numero: "002-2026",
    descripcion: "Contratación de Personal Administrativo",
    convocatoria: "SEDE UGEL - LC",
    fechapublicacion: "29/01/2026",
    fechainicio: "14/01/2026",
    fechafin: "02/03/2026",
    bases: { 
      url: "/assets/files/2026/contratacion-276/10.CONVOCATORIA.N2.PERSONAL.D.L.276-F-29012026.pdf", 
      fecha: "29/01/2026" 
    },
    linkinscripcion: { 
      url: "https://www.ugellaconvencion.gob.pe/inscripcion/276-02-2026/", 
      fecha: "29/01/2026" 
    },
    preliminar: { 
      url: "/assets/files/2026/contratacion-276/18.RESULTADOS.FINALES.CONVO.N2.D.L.276-F-27022026.pdf", 
      fecha: "27/02/2026" 
    },
    preliminar2: { 
      url: "/assets/files/2026/contratacion-276/02.RESULTADOS..ESP.PERSONAL.DL.276-F-03032026.pdf", 
      fecha: "03/03/2026" 
    },
    entrevista: { 
      url: "/assets/files/2026/contratacion-276/02.APTOS-ENTREVISTA-CONVOCATORIA.N2.D.L.276-F-09032026.pdf", 
      fecha: "25/02/2026" 
    },
    final: { 
      url: "/assets/files/2026/contratacion-276/18.RESULTADOS.FINALES.CONVO.N2.D.L.276-F-27022026.pdf", 
      fecha: "27/02/2026" 
    },
    comunicado1: { 
      url: "/assets/files/2026/contratacion-276/12.COMUNICADO-N1-F-19022026.PDF", 
      fecha: "19/02/2026" 
    },
    comunicado2: { 
      url: "/assets/files/2026/contratacion-276/14.COMUNICADO-F-24022026.pdf", 
      fecha: "24/02/2026" 
    },
    comunicado3: { 
      url: "/assets/files/2026/contratacion-276/17.COMUNICADO-N°03-DL-276-F-26022026.pdf", 
      fecha: "26/02/2026" 
    },
    badge: { label: "PUBLICADO", color: "#00c758" },
    estado: "vigente",
  },
  {
    numero: "001-2026",
    descripcion: "Contratación de Personal Administrativo",
    convocatoria: "SEDE UGEL-LC",
    fechapublicacion: "17/01/2026",
    fechainicio: "03/12/2025",
    fechafin: "02/02/2026",
    bases: { 
      url: "/assets/files/2026/contratacion-276/01.CONVOCATORIA.D.L.N276-001-2026-F-17012026.pdf", 
      fecha: "17/01/2026" 
    },
    linkinscripcion: "",
    preliminar: { 
      url: "/assets/files/2026/contratacion-276/08.RESULTADOS-PRELIMINARES-F-22012026.pdf", 
      fecha: "22/01/2026" 
    },
    entrevista: { 
      url: "/assets/files/2026/contratacion-276/09.COMUNICADO-CONVOCATORIA.DL.276-F-26012026.pdf", 
      fecha: "26/01/2026" 
    },
    final: "",
    comunicado1: { 
      url: "/assets/files/2026/contratacion-276/07.FE-ERRATAS-F-19012026.pdf", 
      fecha: "19/01/2026" 
    },
    comunicado2: "",
    comunicado3: "",
    badge: { label: "PUBLICADO", color: "#00c758" },
    estado: "cancelada",
  },
]