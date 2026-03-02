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
    numero: "003-2026",
    descripcion: "Contratación de Personal Administrativo",
    convocatoria: "I.E ROSA DE AMERICA",
    fechapublicacion:"26/02/2026",
    fechainicio: "14/01/2026",
    fechafin: "09/03/2026",
    bases: "/assets/files/2026/contratacion-276/16.CONVOCATORIA-N03-D.L-276-F-26022026.pdf",
    linkinscripcion:"",
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
    numero: "002-2026",
    descripcion: "Contratación de Personal Administrativo",
    convocatoria: "SEDE UGEL - LC",
    fechapublicacion:"29/01/2026",
    fechainicio: "14/01/2026",
    fechafin: "02/03/2026",
    bases: "/assets/files/2026/contratacion-276/10.CONVOCATORIA.N2.PERSONAL.D.L.276-F-29012026.pdf",
    linkinscripcion:"https://www.ugellaconvencion.gob.pe/inscripcion/276-02-2026/",
    preliminar: "/assets/files/2026/contratacion-276/18.RESULTADOS.FINALES.CONVO.N2.D.L.276-F-27022026.pdf",
    entrevista: "/assets/files/2026/contratacion-276/15.APTOS-ENTREVISTA-CONVOCATORIA.N2.D.L.276-F-25022026.pdf",
    final: "/assets/files/2026/contratacion-276/18.RESULTADOS.FINALES.CONVO.N2.D.L.276-F-27022026.pdf",
    comunicado1: "/assets/files/2026/contratacion-276/12.COMUNICADO-N1-F-19022026.PDF",
    comunicado2: "/assets/files/2026/contratacion-276/14.COMUNICADO-F-24022026.pdf",
    comunicado3: "/assets/files/2026/contratacion-276/17.COMUNICADO-N°03-DL-276-F-26022026.pdf",
    badge: { label: "PUBLICADO", color: "#00c758" },
    estado: "vigente",  
  },
   {
    numero: "001-2026",
    descripcion: "Contratación de Personal Administrativo",
    convocatoria: "SEDE UGEL-LC",
    fechapublicacion:"17/01/2026",
    fechainicio: "03/12/2025",
    fechafin: "02/02/2026",
    bases: "/assets/files/2026/contratacion-276/01.CONVOCATORIA.D.L.N276-001-2026-F-17012026.pdf",
    linkinscripcion:"",
    preliminar: "/assets/files/2026/contratacion-276/08.RESULTADOS-PRELIMINARES-F-22012026.pdf",
    entrevista: "/assets/files/2026/contratacion-276/09.COMUNICADO-CONVOCATORIA.DL.276-F-26012026.pdf",
    final: "",
    comunicado1: "/assets/files/2026/contratacion-276/07.FE-ERRATAS-F-19012026.pdf",
    comunicado2: "",
    comunicado3: "",
    badge: { label: "PUBLICADO", color: "#00c758" },
    estado: "cancelada",
  },
 
]