// constants.ts  (modificar el bases y los documentos)
export type LinkConFecha = string | { url: string; fecha?: string };

export type TDocumentoNormativo = {
  numero: string;
  descripcion: string;
  convocatoria: string;
  fechapublicacion: string;
  fechainicio: string;
  fechafin: string;
  bases: LinkConFecha;
  linkinscripcion: LinkConFecha;
  perfiles?: LinkConFecha;
  preliminar: LinkConFecha;
  entrevista: LinkConFecha;
  final?: LinkConFecha;
  feerratasfinal?: LinkConFecha;
  comunicado1: LinkConFecha;
  comunicado2: LinkConFecha;
  comunicado3: LinkConFecha;
  comunicado4: LinkConFecha;
  badge?: { label: string; color: string };
  estado?: "vigente" | "concluida" | "cancelada";
};

export const DOCUMENTOS_NORMATIVOS: TDocumentoNormativo[] = [
  {
    numero: "004-2026",
    descripcion: "Intervenciones y Acciones Pedagógicas UGEL La Convención",
    convocatoria: "CAS N°04 - 2026",
    fechapublicacion: "25/03/2026",
    fechainicio: "24/03/2026",
    fechafin: "10/04/2026",
    bases: {
      url: "/assets/files/2026/contratacion-cas/04.BASES-PERFILES-CONVOCATORIA-INTERVENCIONES-PEDAGOGICAS-CAS-N04-2026-SEDE-F-25032026.pdf",
      fecha: "25/03/2026",
    },
    linkinscripcion: {
      url: "https://www.ugellaconvencion.gob.pe/inscripcion/cas04-2026/",
      fecha: "26/03/2026",
    },
    perfiles:
      "https://drive.google.com/drive/folders/1wHcSPRhEfkvXtxRNtzQG4ZFnVQ-t9GnI?usp=sharing",
    
    preliminar: {
      url: "/assets/files/2026/contratacion-cas/04.RESULTADOS-PRELIMINARES-CAS-04-F-06042026.pdf",
      fecha: "06/04/2026",
    },
    entrevista:"",
    final: "",
    comunicado1: "",
    comunicado2: "",
    comunicado3: "",
    comunicado4: "",
    badge: { label: "PUBLICADO", color: "#00c758" },
    estado: "vigente",
  },
  
  {
    numero: "003-2026",
    descripcion: "Intervenciones y Acciones Pedagógicas UGEL La Convención",
    convocatoria: "CAS N°03 - 2026",
    fechapublicacion: "02/03/2026",
    fechainicio: "19/02/2026",
    fechafin: "20/03/2026",
    bases: {
      url: "/assets/files/2026/contratacion-cas/03.BASES-PERFILES-CONVOCATORIA-INTERVENCIONES-PEDAGOGICAS-CAS-N03-2026-SEDE-F-02032026.pdf",
      fecha: "02/03/2026",
    },
    linkinscripcion:
      "https://www.ugellaconvencion.gob.pe/inscripcion/cas03-2026/",
    perfiles:
      "https://drive.google.com/drive/folders/1wHcSPRhEfkvXtxRNtzQG4ZFnVQ-t9GnI?usp=sharing",
    preliminar: {
      url: "/assets/files/2026/contratacion-cas/03.RESULTADOS-PRELIMINARES-INTERVENCIONES-PEDAGOGICAS-CAS-N03-2026-F-12032026.pdf",
      fecha: "14/03/2026 (ACTUALIZADO)",
    },
    entrevista: {
      url: "/assets/files/2026/contratacion-cas/03.APTOS-ENTREVISTA-INTERVENCIONES-PEDAGOGICAS-CAS-N03-2026-F-18032026.pdf",
      fecha: "18/03/2026",
    },
    final: {
      url: "/assets/files/2026/contratacion-cas/03.RESULTADO-FINAL-INTERVENCIONES-PEDAGOGICAS-CAS-N03-2026-F-19032026.pdf",
      fecha: "19/03/2026",
    },
    comunicado1: {
      url: "/assets/files/2026/contratacion-cas/03.COMUNICADO-F-18032026.pdf",
      fecha: "18/03/2026",
    },
    comunicado2: "",
    comunicado3: "",
     comunicado4: "",
    badge: { label: "PUBLICADO", color: "#00c758" },
    estado: "concluida",
  },

  
  {
    numero: "002-2026",
    descripcion: "Sede Administrativa UGEL La Convención",
    convocatoria: "CAS N°02 - 2026",
    fechapublicacion: "25/02/2026",
    fechainicio: "14/01/2026",
    fechafin: "09/03/2026",
    bases:
      "/assets/files/2026/contratacion-cas/02.BASES-PERFILES-CONVOCATORIA-ANEXOS-CAS-N°02-2026-SEDE-F-25022026.pdf",
    linkinscripcion:
      "https://www.ugellaconvencion.gob.pe/inscripcion/cas02-2026/",
    preliminar: {
      url: "/assets/files/2026/contratacion-cas/02.RESULTADOS-PRELIMINARES-CAS-N02-SEDE-UGEL-F-19032026.pdf",
      fecha: "19/03/2026",
    },
    entrevista: {
      url: "/assets/files/2026/contratacion-cas/02.APTOS-ENTREVISTA-CAS-N02-SEDE-UGEL-F-20032026.pdf",
      fecha: "23/03/2026 (Actualizado)",
    },
    final: {
      url: "/assets/files/2026/contratacion-cas/02.RESULTADO-FINAL-CAS-N02-SEDE-UGEL-F-24032026.pdf",
      fecha: "24/03/2026",
    },
    feerratasfinal: {
      url: "/assets/files/2026/contratacion-cas/02.FE-ERRATAS-CAS-N°02-2026-F-30.03.2026.pdf",
      fecha: "30/03/2026",
    },
    comunicado1: {
      url: "/assets/files/2026/contratacion-cas/02.COMUNICADO-CAS-N02-SEDE-UGEL-F-24032026.pdf",
      fecha: "24/03/2026",
    },
    comunicado2: {
      url: "/assets/files/2026/contratacion-cas/02.COMUNICADO-CAS-N02-SEDE-UGEL-F-25032026.pdf",
      fecha: "25/03/2026",
    },
    comunicado3: {
      url: "/assets/files/2026/contratacion-cas/02.COMUNICADO-CAS-N2-F-27032026.pdf",
      fecha: "27/03/2026",
    },
    comunicado4: {
      url: "/assets/files/2026/contratacion-cas/02.COMUNICADO-CAS-N°02-2026-F-30.03.2026.pdf",
      fecha: "30/03/2026",
    },
    badge: { label: "PUBLICADO", color: "#00c758" },
    estado: "vigente",
  },

  
  {
    numero: "001-2026",
    descripcion: "Sede Administrativa UGEL La Convención",
    convocatoria: "CAS N°-01 - 2026",
    fechapublicacion: "/02/2026",
    fechainicio: "09/02/2026",
    fechafin: "30/02/2026",
    bases:
      "/assets/files/2026/contratacion-cas/01.BASES-PERFILES-CONVOCATORIA-ANEXOS-CAS-N°01-2026-SEDE-F-09022026.pdf",
    linkinscripcion: "",
    preliminar: "",
    entrevista: "",
    final: "",
    comunicado1: "/assets/01.COMUNICADO.N°01-12022026.pdf",
    comunicado2: "",
    comunicado3: "",
    comunicado4: "",
    badge: { label: "PUBLICADO", color: "#00c758" },
    estado: "cancelada",
  },
];
