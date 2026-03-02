// constants.ts  (modificar el bases y los documentos)

export type TDocumentoNormativo = {
  numero: string
  descripcion: string
  convocatoria: string
  fechapublicacion: string
  fechainicio: string
  fechafin: string
  bases: string
  linkinscripcion:string
  preliminar: string
  entrevista: string
  final?:string
  comunicado1: string
  comunicado2: string
  comunicado3: string
  badge?: { label: string; color: string }
  estado?: 'vigente' | 'concluida' | 'cancelada'
}

export const DOCUMENTOS_NORMATIVOS: TDocumentoNormativo[] = [
  {
    numero: "002-2026",
    descripcion: "Sede Administrativa UGEL La Convención",
    convocatoria: "CAS N°02 - 2026",
    fechapublicacion:"25/02/2026",
    fechainicio: "14/01/2026",
    fechafin: "09/03/2026",
    bases: "/assets/files/2026/contratacion-cas/02.BASES-PERFILES-CONVOCATORIA-ANEXOS-CAS-N°02-2026-SEDE-F-25022026.pdf",
    linkinscripcion:"https://www.ugellaconvencion.gob.pe/inscripcion/cas02-2026/",
    preliminar: "",
    entrevista: "",
    final: "",
    comunicado1: "",
    comunicado2: "",
    comunicado3: "",
    badge: { label: "PUBLICADO", color: "#00c758" },
    estado: "vigente",  
  },
   {
    numero: "001-2026",
    descripcion: "Sede Administrativa UGEL La Convención",
    convocatoria: "CAS N°-01 - 2026",
    fechapublicacion:"/02/2026",
    fechainicio: "09/02/2026",
    fechafin: "30/02/2026",
    bases: "/assets/files/2026/contratacion-cas/01.BASES-PERFILES-CONVOCATORIA-ANEXOS-CAS-N°01-2026-SEDE-F-09022026.pdf",
    linkinscripcion:"",
    preliminar: "",
    entrevista: "",
    final: "",
    comunicado1: "/assets/01.COMUNICADO.N°01-12022026.pdf",
    comunicado2: "",
    comunicado3: "",
    badge: { label: "PUBLICADO", color: "#00c758" },
    estado: "cancelada",
  },
 
]