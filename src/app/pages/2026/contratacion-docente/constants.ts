export type TDocumentoNormativo = {
  numero: string;
  nombre: string;
  tipo: string;
  fecha: string;
  archivoUrl:
    | string
    | { label: string; url: string; fecha?: string; badge?: string }[];
  enlace?: string;
  badge?: { label: string; color: string };
};

export const DOCUMENTOS_NORMATIVOS: TDocumentoNormativo[] = [
  {
    numero: "31",
    nombre: "Resultado Preliminar con baja de Perfil Evaluación de Expedientes",
    tipo: "Resultados",
    fecha: "2026-03-17",
    badge: { label: "Nuevo", color: "#10b981" },
    archivoUrl: [
      {
        label: "EBE INICIAL",
        url: "/assets/files/2026/contrata-docente/31.RESULTADO.PRELIMINAR.EBE.INICIAL-F-17032026.pdf",
        fecha: "2026-03-17",
      },
      {
        label: "EBE PRITE (BAJA DE PERFIL)",
        url: "/assets/files/2026/contrata-docente/31.RESULTADO.PRELIMINAR.EBE.PRITE-BAJA.PERFIL-F-17032026.pdf",
        fecha: "2026-03-16",
      },
       {
        label: "EBR.PRIMARIA EIB (BAJA DE PERFIL)",
        url: "/assets/files/2026/contrata-docente/31.RESULTADO.PRELIMINAR.PRIMARIA.EIB-BAJA-PERFIL-F-17032026.pdf",
        fecha: "2026-03-16",
      },
    ],
  },
  
  {
    numero: "30",
    nombre: "Comunicado Adjudicación Docente (Martes 17 de Marzo), Especialidad Educación Física",
    tipo: "Plazas",
    fecha: "2026-03-13",
    badge: { label: "Nuevo", color: "#10b981" },
    archivoUrl: [
      {
        label: "Comunicado",
        url: "/assets/files/2026/contrata-docente/30.COMUNICADO-DE-ADJUDICACION-ED.FISICA-F-16032026.pdf",
        fecha: "2026-03-16",
      },
      {
        label: "Plazas ED.FISICA",
        url: "/assets/files/2026/contrata-docente/30.PLAZAS-VACANTES-16032026.pdf",
        fecha: "2026-03-16",
      },
    ],
  },
  
  {
    numero: "29",
    nombre: "Precisiones para Propuesta del Director",
    tipo: "Precisiones",
    fecha: "2026-03-13",
    badge: { label: "Nuevo", color: "#10b981" },
    archivoUrl: [
      {
        label: "Precisiones",
        url: "/assets/files/2026/contrata-docente/29.PRECISIONES-PARA-PROPUESTA-DEL-DIRECTOR-F-13032026.pdf",
        fecha: "2026-03-13",
      },
      {
        label: "Plazas EBA.AVANZADO",
        url: "/assets/files/2026/contrata-docente/29.PLAZAS-EBA-AVANZADO-F13032026.pdf",
        fecha: "2026-03-13",
      },
      {
        label: "Plazas BOLSA.HORAS",
        url: "/assets/files/2026/contrata-docente/29.PLAZAS-BOLSA-DE-HORAS-F-13032026.pdf",
        fecha: "2026-03-13",
      },
      {
        label: "Plazas.EBR.SECUNDARIA",
        url: "/assets/files/2026/contrata-docente/29.PLAZAS-SECUNDARIA-F-13032026.pdf",
        fecha: "2026-03-13",
      },
    ],
  },
  
  {
    numero: "28",
    nombre: "Precisiones Etapa Adicional",
    tipo: "Precisiones",
    fecha: "2026-03-13",
    badge: { label: "Nuevo", color: "#10b981" },
    archivoUrl: [
      {
        label: "Precisiones",
        url: "/assets/files/2026/contrata-docente/28.PRECISIONES-ETAPA-ADICIONAL-CONTRATACION-DOCENTE-F-13032026.pdf",
        fecha: "2026-03-13",
      },
    ],
  },

  {
    numero: "27",
    nombre: "Convocatoria a presentación de expedientes (Perfiles Adicionales)",
    tipo: "Plazas",
    fecha: "2026-03-12",
    badge: { label: "Nuevo", color: "#10b981" },
    archivoUrl: [
      {
        label: "CONVOCATORIA",
        url: "/assets/files/2026/contrata-docente/27.CONVOCATORIA-ADICIONAL-F-12032026.pdf",
        fecha: "2026-03-12",
      },
      {
        label: "PERFILES ADICIONALES",
        url: "/assets/files/2026/contrata-docente/27.PERFILES-ADICIONALES-F-12032026.pdf",
        fecha: "2026-03-12",
      },
      {
        label: "EBR.INICIAL EIB",
        url: "/assets/files/2026/contrata-docente/27.PLAZAS-INICIAL-EIB-F-12032026.pdf",
        fecha: "2026-03-12",
      },
      {
        label: "EBR.PRIMARIA EIB",
        url: "/assets/files/2026/contrata-docente/27.PLAZAS.PRIMARIA-EIB-F-12032026.pdf",
        fecha: "2026-03-12",
      },
      {
        label: "PRITE ",
        url: "/assets/files/2026/contrata-docente/27.PLAZAS-PRITE-F-12032026.pdf",
        fecha: "2026-03-12",
      },
      {
        label: "EBA INICIAL INTERMEDIO",
        url: "/assets/files/2026/contrata-docente/27.PLAZAS-EBA-INICIAL-INTERMEDIO-F-12032026.pdf",
        fecha: "2026-03-12",
      },
      {
        label: "EBE INICIAL",
        url: "/assets/files/2026/contrata-docente/27.PLAZAS.EBE.INICIAL-F-12032026.pdf",
        fecha: "2026-03-12",
      },
    ],
  },

  {
    numero: "26",
    nombre: "Comunicado Adjudicación Contratación Docente Tercera Etapa",
    tipo: "Plazas",
    fecha: "2026-03-09",
    badge: { label: "Nuevo", color: "#10b981" },
    archivoUrl: [
      {
        label: "COMUNICADO",
        url: "/assets/files/2026/contrata-docente/26.PRECISIONES-PARA-ADJUDICACION-DE-LA-TERCERA-ETAPA-F-09032026.pdf",
        fecha: "2026-03-09",
      },
    ],
  },

  {
    numero: "25",
    nombre:
      "Comunicado Modalidad Básica Alternativa - Ciclo Inicial Intermedio",
    tipo: "Comunicado",
    fecha: "2026-03-09",
    badge: { label: "Nuevo", color: "#10b981" },
    archivoUrl: [
      {
        label: "COMUNICADO",
        url: "/assets/files/2026/contrata-docente/25.COMUNICADO-PARA-RETIRO-DE-EXPEDIENTES-F-09032026.pdf",
        fecha: "2026-03-09",
      },
    ],
  },

  {
    numero: "24",
    nombre: "Comunicado Contratación a propuesta del director de la I.E",
    tipo: "Comunicado",
    fecha: "2026-03-09",
    badge: { label: "Nuevo", color: "#10b981" },
    archivoUrl: [
      {
        label: "COMUNICADO",
        url: "/assets/files/2026/contrata-docente/24.COMUNICADO-PARA-PROPUESTA-DOCENTE-F-09032026.pdf",
        fecha: "2026-03-09",
      },
      {
        label: "PLAZAS",
        url: "/assets/files/2026/contrata-docente/24.PLAZAS-A-PROPUESTA-DEL-DIRECTOR-F-09032026.pdf",
        fecha: "2026-03-09",
      },
    ],
  },
  {
    numero: "23",
    nombre:
      "Resultados Finales Contratación Docente 2026 Tercera Etapa Evaluación por Expedientes",
    tipo: "Resultados",
    fecha: "2026-03-07",
    badge: { label: "Nuevo", color: "#10b981" },
    archivoUrl: [
      {
        label: "EBR INICIAL",
        url: "/assets/files/2026/contrata-docente/23.RESULTADO-FINAL-CONTRATACION-POR-EXP.2026.INICIAL-F-07032026.pdf",
        fecha: "2026-03-07",
      },
      {
        label: "EBR PRIMARIA",
        url: "/assets/files/2026/contrata-docente/23.RESULTADO-FINAL-CONTRATACION-POR-EXP.2026.EBR.PRIMARIA-F-10032026.pdf",
        fecha: "2026-03-10",
      },
      {
        label: "EBR SEC.MATEMÁTICA ",
        url: "/assets/files/2026/contrata-docente/23.RESULTADO-FINAL-CONTRATACION-POR-EXP.2026.MATEMATICA-F-07032026.pdf",
        fecha: "2026-03-07",
      },
      {
        label: "FE ERRATAS EBR SEC.MATEMÁTICA ",
        url: "/assets/files/2026/contrata-docente/23.FE-ERRATAS-RESULTADO-FINAL-CONTRATACION-POR-EXP.2026.MATEMATICA-F-10032026.pdf",
        fecha: "2026-03-10",
      },
      {
        label: "EBR IP",
        url: "/assets/files/2026/contrata-docente/23.RESULTADO-FINAL-CONTRATACION-POR-EXP.2026.SEC.IP-F-07032026.pdf",
        fecha: "2026-03-07",
      },
      {
        label: "FE ERRATAS EBR IP (ACTUALIZADO)",
        url: "/assets/files/2026/contrata-docente/23.FE-ERRATAS-RESULTADO-FINAL-CONTRATACION-POR-EXP.2026.SEC.IP-F-10032026.pdf",
        fecha: "2026-03-10",
      },
      {
        label: "ER. SEC. INGLES",
        url: "/assets/files/2026/contrata-docente/23.RESULTADO-FINAL-CONTRATACION-POR-EXP.2026.INGLES-F-07032026.pdf",
      },
      {
        label: "EBA AVANZADO",
        url: "/assets/files/2026/contrata-docente/23.RESULTADO-FINAL-CONTRATACION-POR-EXP.2026.ED.EBA.AVANZADO-F-09032026.pdf",
        fecha: "2026-03-09",
      },
      {
        label: "EBA AVANZADO FE.ERRATAS(ACTUALIZADO)",
        url: "/assets/files/2026/contrata-docente/23.RESULTADO-FINAL-CONTRATACION-POR-EXP.2026.ED.EBA.AVANZADO-F-10032026.pdf",
        fecha: "2026-03-10",
      },
      {
        label: "ETP",
        url: "/assets/files/2026/contrata-docente/23.RESULTADO-FINAL-CONTRATACION-POR-EXP.2026.ED.TEC.PRODUCTIVO-F-07032026.pdf",
        fecha: "2026-03-07",
      },
      {
        label: "EBR.SEC.RELIGIÓN",
        url: "/assets/files/2026/contrata-docente/23.RESULTADO-FINAL-CONTRATACION-POR-EXP.2026.ED.RELIGIOSA-F-07032026.pdf",
        fecha: "2026-03-07",
      },
      {
        label: "EBR.SEC.ED.FISICA",
        url: "/assets/files/2026/contrata-docente/23.RESULTADO-FINAL-CONTRATACION-POR-EXP.2026.ED.FISICA-F-07032026.pdf",
        fecha: "2026-03-07",
      },
      {
        label: "EBR.SEC.CYT (ACTUALIZADO)",
        url: "/assets/files/2026/contrata-docente/23.FE-ERRATAS-RESULTADO-FINAL-CONTRATACION-POR-EXP.2026.CYT-F-11032026.pdf",
        fecha: "2026-03-11",
      },
      {
        label: "EBR.SEC.COMUNICACION",
        url: "/assets/files/2026/contrata-docente/23.RESULTADO-FINAL-CONTRATACION-POR-EXP.2026.COMUNICACION-F-07032026.pdf",
        fecha: "2026-03-07",
      },
      {
        label: "FE.ERRATAS EBR.COMUNICACION(ACTUALIZADO)",
        url: "/assets/files/2026/contrata-docente/23.FE-ERRATAS-RESULTADO-FINAL-CONTRATACION-POR-EXP.2026.COMUNICACION-F-07032026.pdf",
        fecha: "2026-03-09",
      },
      {
        label: "EBR.SEC.CIENCIAS SOCIALES",
        url: "/assets/files/2026/contrata-docente/23.RESULTADO-FINAL-CONTRATACION-POR-EXP.2026.CC.SS-F-07032026.pdf",
        fecha: "2026-03-07",
      },
      {
        label: "FE ERRATAS EBR.SEC.CIENCIAS SOCIALES",
        url: "/assets/files/2026/contrata-docente/23.FE-ERRATAS-RESULTADO-FINAL-CONTRATACION-POR-EXP.2026.CC.SS-F-11032026.pdf",
        fecha: "2026-03-11",
      },
      {
        label: "EBR.SEC.ARTE",
        url: "/assets/files/2026/contrata-docente/23.RESULTADO-FINAL-CONTRATACION-POR-EXP.2026.ARTE-F-07032026.pdf",
        fecha: "2026-03-07",
      },
      {
        label: "EBR.SEC.EPT",
        url: "/assets/files/2026/contrata-docente/23.RESULTADO-FINAL-CONTRATACION-POR-EXP.2026.EPT-F-07032026.pdf",
        fecha: "2026-03-07",
      },
      {
        label: "FE ERRATAS EBR.SEC.EPT (ACTUALIZADO)",
        url: "/assets/files/2026/contrata-docente/23.FE-ERRATAS-RESULTADO-FINAL-CONTRATACION-POR-EXP.2026.EPT-F-10032026.pdf",
        fecha: "2026-03-10",
      },
      {
        label: "EBR.SEC.ED.DPCC (ACTUALIZADO)",
        url: "/assets/files/2026/contrata-docente/23.FE-ERRATAS-RESULTADO-FINAL-CONTRATACION-POR-EXP.2026.DPCC-F-10032026.pdf",
        fecha: "2026-03-10",
      },
      {
        label: "EBE PRIMARIA",
        url: "/assets/files/2026/contrata-docente/23.RESULTADO-FINAL-CONTRATACION-POR-EXP.2026.EBE-PRIMARIA-10032026.pdf",
        fecha: "2026-03-10",
      },
    ],
  },
  {
    numero: "22",
    nombre:
      "Comunicado Adjudicación Viernes 06 de Marzo de 2026, Plazas - Adjudicación Contratación Docente 2026 Segunda Etapa PN",
    tipo: "Plazas",
    fecha: "2026-03-04",
    badge: { label: "Nuevo", color: "#10b981" },
    archivoUrl: [
      {
        label: "COMUNICADO",
        url: "/assets/files/2026/contrata-docente/22.COMUNICADO-ADJUDICACION-04032026.pdf",
        fecha: "2026-03-04",
      },
      {
        label: "EBR. SECUNDARIA",
        url: "/assets/files/2026/contrata-docente/22.PLAZAS.SECUNDARIA-F-04032026.pdf",
        fecha: "2026-03-04",
      },
      {
        label: "COORD.PRONOEI",
        url: "/assets/files/2026/contrata-docente/22.COOR.PRONOEI-F-04032026.pdf",
        fecha: "2026-03-04",
      },
      {
        label: "EBA INICIAL.INTERMEDIO",
        url: "/assets/files/2026/contrata-docente/22.EBA.INICIAL.INTERMEDIO-F-04032026.pdf",
        fecha: "2026-03-04",
      },
      {
        label: "EBR. PRIMARIA",
        url: "/assets/files/2026/contrata-docente/22.PLAZAS.PRIMARIA-F-04032026.pdf",
        fecha: "2026-03-04",
      },
      {
        label: "EBR. INICIAL",
        url: "/assets/files/2026/contrata-docente/22.PLAZAS.INICIAL.04032026.pdf",
        fecha: "2026-03-04",
      },
    ],
  },

  {
    numero: "21",
    nombre:
      "Resultados Preliminares Contratación Docente 2026 Tercera Etapa Evaluación por Expedientes",
    tipo: "Resultados",
    fecha: "2026-03-02",
    badge: { label: "Nuevo", color: "#10b981" },
    archivoUrl: [
      {
        label: "EBR INICIAL",
        url: "/assets/files/2026/contrata-docente/21.RESULTADOS.PRELIMINARES.EVA.EXP.EBR.INICIAL-F-03032026.pdf",
        fecha: "2026-03-02",
      },
      {
        label: "EBR PRIMARIA",
        url: "/assets/files/2026/contrata-docente/21.RESULTADOS.PRELIMINARES.EVA.EXP.EBR.PRIMARIA-F-02032026.pdf",
        fecha: "2026-03-02",
      },
      {
        label: "EBR SEC.MATEMÁTICA ",
        url: "/assets/files/2026/contrata-docente/21.RESULTADOS.PRELIMINARES.EVA.EXP.EBR.SEC.MATEMATICA-F-03032026.pdf",
        fecha: "2026-03-03",
      },
      {
        label: "EBR SEC.IP",
        url: "/assets/files/2026/contrata-docente/21.RESULTADOS.PRELIMINARES.EVA.EXP.EBR.SEC.IP-F-03032026.pdf",
        fecha: "2026-03-03",
      },
      {
        label: "FE ERRATAS EBR SEC.IP",
        url: "/assets/files/2026/contrata-docente/21.FE-ERRATAS-RESULTADOS.PRELIMINARES.EVA.EXP.EBR.SEC.IP-F-05032026.pdf",
        fecha: "2026-03-05",
      },
      {
        label: "ER. SEC. INGLES",
        url: "/assets/files/2026/contrata-docente/21.RESULTADOS.PRELIMINARES.EVA.EXP.EBR.SEC.INGLES-F-03032026.pdf",
      },
      {
        label: "EBA AVANZADO",
        url: "/assets/files/2026/contrata-docente/21.RESULTADOS.PRELIMINARES.EVA.EXP.EBR.SEC.EVA.AVANZADO-F-03032026.pdf",
        fecha: "2026-03-03",
      },
      {
        label: "ETP",
        url: "/assets/files/2026/contrata-docente/21.RESULTADOS.PRELIMINARES.EVA.EXP.EBR.SEC.ETP-F-03032026.pdf",
        fecha: "2026-03-03",
      },
      {
        label: "EBR.SEC.RELIGIÓN",
        url: "/assets/files/2026/contrata-docente/21.RESULTADOS.PRELIMINARES.EVA.EXP.EBR.SEC.ED.RELIGIOSA-F-03032026.pdf",
        fecha: "2026-03-03",
      },
      {
        label: "EBR.SEC.ED.FISICA",
        url: "/assets/files/2026/contrata-docente/21.RESULTADOS.PRELIMINARES.EVA.EXP.EBR.SEC.ED.FISICA-F-03032026.pdf",
        fecha: "2026-03-03",
      },
      {
        label: "EBR.SEC.ED.DPCC",
        url: "/assets/files/2026/contrata-docente/21.RESULTADOS.PRELIMINARES.EVA.EXP.EBR.SEC.DPCC-F-03032026.pdf",
        fecha: "2026-03-03",
      },
      {
        label: "EBR.SEC.CYT",
        url: "/assets/files/2026/contrata-docente/21.RESULTADOS.PRELIMINARES.EVA.EXP.EBR.SEC.CYT-F-03032026.pdf",
        fecha: "2026-03-03",
      },
      {
        label: "EBR.SEC.COMUNICACION",
        url: "/assets/files/2026/contrata-docente/21.RESULTADOS.PRELIMINARES.EVA.EXP.EBR.SEC.COMUNICACION-F-03032026.pdf",
        fecha: "2026-03-03",
      },
      {
        label: "EBR.SEC.CIENCIAS SOCIALES",
        url: "/assets/files/2026/contrata-docente/21.RESULTADOS.PRELIMINARES.EVA.EXP.EBR.SEC.CC.SS-F-03032026.pdf",
        fecha: "2026-03-03",
      },
      {
        label: "EBR.SEC.ARTE",
        url: "/assets/files/2026/contrata-docente/21.RESULTADOS.PRELIMINARES.EVA.EXP.EBR.SEC.ARTE-F-03032026.pdf",
        fecha: "2026-03-03",
      },
      {
        label: "EBR.SEC.EPT",
        url: "/assets/files/2026/contrata-docente/21.RESULTADOS.PRELIMINARES.EVA.EXP.EBR.SEC.EPT-F-03032026.pdf",
        fecha: "2026-03-03",
      },
      {
        label: "EBE PRIMARIA",
        url: "/assets/files/2026/contrata-docente/21.RESULTADOS.PRELIMINARES.EVA.EXP.EBE.PRIMARIA-F-03032026.pdf",
        fecha: "2026-03-03",
      },
      {
        label: "FE ERRATAS EBE PRIMARIA",
        url: "/assets/files/2026/contrata-docente/21.RESULTADOS.PRELIMINARES.EVA.EXP.EBE.PRIMARIA-F-05032026.pdf",
        fecha: "2026-03-05",
      },
    ],
  },

  {
    numero: "20",
    nombre:
      "Plazas Vacantes Contratación Docente 2026 Tercera Etapa Evaluación por Expedientes",
    tipo: "Plazas",
    fecha: "2026-02-24",
    badge: { label: "Nuevo", color: "#10b981" },
    archivoUrl: [
      {
        label: "EBR INICIAL",
        url: "/assets/files/2026/contrata-docente/20.PLAZAS-TERCERA-ETAPA-EBR.INICIAL-F-24022026.pdf",
      },
      {
        label: "EBR PRIMARIA",
        url: "/assets/files/2026/contrata-docente/20.PLAZAS-TERCERA-ETAPA-EBR.PRIMARIA-F-24022026.pdf",
      },
      {
        label: "EBR SECUNDARIA",
        url: "/assets/files/2026/contrata-docente/20.PLAZAS-TERCERA-ETAPA-EBR.SECUNDARIA-F-24022026.pdf",
      },
      {
        label: "CEBA",
        url: "/assets/files/2026/contrata-docente/20.PLAZAS-TERCERA-ETAPA-CEBA-F-24022026.pdf",
      },
      {
        label: "ER. SEC BOLSA HORAS",
        url: "/assets/files/2026/contrata-docente/20.PLAZAS-TERCERA-ETAPA-BOLSA.HORAS-F-24022026.pdf",
      },
      {
        label: "EBE.PRIMARIA",
        url: "/assets/files/2026/contrata-docente/20.PLAZAS-TERCERA-ETAPA-EBE.PRIMARIA-F-24022026.pdf",
      },
      {
        label: "EBR.IP",
        url: "/assets/files/2026/contrata-docente/20.PLAZAS-TERCERA-ETAPA-EBR.IP-F-24022026.pdf",
      },
      {
        label: "PRITE",
        url: "/assets/files/2026/contrata-docente/20.PLAZAS-TERCERA-ETAPA-PRITE-F-24022026.pdf",
      },
      {
        label: "TEC.PRODUCTIVO",
        url: "/assets/files/2026/contrata-docente/20.PLAZAS-TERCERA-ETAPA-TEC.PRODUCTIVO-F-24022026.pdf",
      },
    ],
  },

  {
    numero: "19",
    nombre:
      "PRECISIONES: Tercera Etapa Contratación Docente 2026 Evaluación por Expediente",
    tipo: "Resultados",
    fecha: "2026-02-24",
    badge: { label: "Nuevo", color: "#10b981" },
    archivoUrl: [
      {
        label: "Instructivo",
        url: "/assets/files/2026/contrata-docente/19.INSTRUCTIVO-PARA-POSTULAR-TERCERA-ETAPA-F-24022026.pdf",
      },
    ],
    enlace: "https://www.ugellaconvencion.gob.pe/inscripcion/contrata-docente/",
  },
  {
    numero: "18",
    nombre: "Resultados Finales Segunda Etapa Contratación Docente 2026 PN",
    tipo: "Resultados",
    fecha: "2026-02-20",
    archivoUrl: [
      {
        label: "EBA",
        url: "/assets/files/2026/contrata-docente/18.RESULTADO-FINAL-EBA-F-19022026.pdf",
      },
      {
        label: "EBR INICIAL",
        url: "/assets/files/2026/contrata-docente/18.RESULTADO-FINAL-ER.INICIAL-F-20022026.pdf",
      },
      {
        label: "FE ERRATAS INICIAL",
        url: "/assets/files/2026/contrata-docente/18.FE-ERRATAS-RESULTADO-FINAL-ER.INICIAL-F-20022026.pdf.pdf",
      },
      {
        label: "EBR PRIMARIA",
        url: "/assets/files/2026/contrata-docente/18.RESULTADO-FINAL-ER.PRIMARIA-F-20022026.pdf",
      },
      {
        label: "FE ERRATAS PRIMARIA",
        url: "/assets/files/2026/contrata-docente/18.FE-ERRATAS-RESULTADO-FINAL-ER.INICIAL-F-20022026.pdf",
      },
      {
        label: "MATEMATICA",
        url: "/assets/files/2026/contrata-docente/18.RESULTADO-FINAL-MATEMATICA-F-19022026.pdf",
      },
      {
        label: "INGLES",
        url: "/assets/files/2026/contrata-docente/18.RESULTADO-FINAL-INGLES-F-19022026.pdf",
      },
      {
        label: "RELIGION",
        url: "/assets/files/2026/contrata-docente/18.RESULTADO-FINAL-RELIGION-F-19022026.pdf",
      },
      {
        label: "EPT",
        url: "/assets/files/2026/contrata-docente/18.RESULTADO-FINAL-EPT-F-19022026.pdf",
      },
      {
        label: "CYT",
        url: "/assets/files/2026/contrata-docente/18.RESULTADO-FINAL-CYT-F-19022026.pdf",
      },
      {
        label: "ARTE",
        url: "/assets/files/2026/contrata-docente/18.RESULTADO-FINAL-ARTE-F-19022026.pdf",
      },
      {
        label: "DPCC",
        url: "/assets/files/2026/contrata-docente/18.RESULTADO-FINAL-DPCC-F-19022026.pdf",
      },
      {
        label: "CC.SS",
        url: "/assets/files/2026/contrata-docente/18.RESULTADO-FINAL-CC.SS-F-19022026.pdf",
      },
      {
        label: "COMUNICACIÓN",
        url: "/assets/files/2026/contrata-docente/18.RESULTADO-FINAL-COMUNICACION-F-19022026.pdf",
      },
      {
        label: "ED. FISICA",
        url: "/assets/files/2026/contrata-docente/18.RESULTADO-FINAL-ED.FISICA-F-19022026.pdf",
      },
    ],
  },
  {
    numero: "17",
    nombre:
      "Resultados Preliminares Segunda Etapa Contratación Docente 2026 PN",
    tipo: "Resultados",
    fecha: "2026-02-19",
    archivoUrl: [
      {
        label: "EBA",
        url: "/assets/files/2026/contrata-docente/17.RESULTADO-PRELIMINAR-EBA-F-19022026.pdf",
      },
      {
        label: "INICIAL",
        url: "/assets/files/2026/contrata-docente/17.RESULTADO-PRELIMINAR-EBR.INICIAL-F-19022026.pdf",
      },
      {
        label: "PRIMARIA",
        url: "/assets/files/2026/contrata-docente/17.RESULTADO-PRELIMINAR-EBR.PRIMARIA-F-19022026.pdf",
      },
      {
        label: "MATEMATICA",
        url: "/assets/files/2026/contrata-docente/17.RESULTADO-PRELIMINAR-EBR.MATEMATICA-F-18022026.pdf",
      },
      {
        label: "INGLES",
        url: "/assets/files/2026/contrata-docente/17.RESULTADO-PRELIMINAR-EBR.INGLES-F-18022026.pdf",
      },
      {
        label: "RELIGION",
        url: "/assets/files/2026/contrata-docente/17.RESULTADO-PRELIMINAR-EBR.RELIGION-F-18022026.pdf",
      },
      {
        label: "EPT",
        url: "/assets/files/2026/contrata-docente/17.RESULTADO-PRELIMINAR-EBR.EPT-F-18022026.pdf",
      },
      {
        label: "CYT",
        url: "/assets/files/2026/contrata-docente/17.RESULTADO-PRELIMINAR-EBR.CYT-F-18022026.pdf",
      },
      {
        label: "ARTE",
        url: "/assets/files/2026/contrata-docente/17.RESULTADO-PRELIMINAR.EBR.ARTE-F-18022026.pdf",
      },
      {
        label: "DPCC",
        url: "/assets/files/2026/contrata-docente/17.RESULTADO-PRELIMINAR-EBR.DPCC-F-18022026.pdf",
      },
      {
        label: "CC.SS",
        url: "/assets/files/2026/contrata-docente/17.RESULTADO-PRELIMINAR.EBR.CC.SS-F-18022026.pdf",
      },
      {
        label: "COMUNICACIÓN",
        url: "/assets/files/2026/contrata-docente/17.RSULTADO-PRELIMINAR.EBR.EBR.COMUNICACION-F-18022026.pdf",
      },
      {
        label: "ED. FISICA",
        url: "/assets/files/2026/contrata-docente/17.RESULTADO-PRELIMINAR-EBR.ED.FISICA-F-18022026.pdf",
      },
    ],
  },
  {
    numero: "16",
    nombre:
      "Comunicado Adjudicacion Segunda Etapa PN Contratación Docente 2026",
    tipo: "Comunicado",
    fecha: "2026-02-18",
    archivoUrl:
      "/assets/files/2026/contrata-docente/16.COMUNICADO-ADJUDICACION-2DA-ETAPA-F-18022026.pdf",
  },
  {
    numero: "15",
    nombre:
      "Comunicado sobre la publicación del cuadro de meritos segunda etapa PN Contratación Docente 2026",
    tipo: "Comunicado",
    fecha: "2026-02-18",
    archivoUrl:
      "/assets/files/2026/contrata-docente/15.COMUNICADO-PUBLICACION-CUADRO-MERITOS-F-18022026.pdf",
  },
  {
    numero: "14",
    nombre: "Plazas Vacantes Contratación Docente 2026 PN",
    tipo: "Plazas",
    fecha: "2026-02-17",
    archivoUrl: [
      {
        label: "INICIAL",
        url: "/assets/files/2026/contrata-docente/14.PLAZAS-VACANTES-EBR.INICIAL-F-17022026.pdf",
      },
      {
        label: "PRIMARIA",
        url: "/assets/files/2026/contrata-docente/14.PLAZAS-VACANTES-EBR.PRIMARIA--F-17022026.pdf",
      },
      {
        label: "SECUNDARIA",
        url: "/assets/files/2026/contrata-docente/14.PLAZAS-VACANTES-EBR.SECUNDARIA-F-17022026.pdf",
      },
      {
        label: "CEBA",
        url: "/assets/files/2026/contrata-docente/14.PLAZAS-VACANTES-CEBA-F-17022026.pdf",
      },
      {
        label: "COOR. PRONOEI",
        url: "/assets/files/2026/contrata-docente/14.PLAZAS-PROFESOR-COORDINADOR-F-17022026.pdf",
      },
      {
        label: "BOLSA HORAS",
        url: "/assets/files/2026/contrata-docente/14.BOLSA-DE-HORAS-F-17022026.pdf",
      },
      {
        label: "EBE PRIMARIA",
        url: "/assets/files/2026/contrata-docente/14.PLAZAS-EBE-PRIMARIA-F-17022026.pdf",
      },
      {
        label: "IP",
        url: "/assets/files/2026/contrata-docente/14.PLAZAS-IP-F-17022026.pdf",
      },
      {
        label: "PRITE",
        url: "/assets/files/2026/contrata-docente/14.PLAZAS-PRITE-F-17022026.pdf",
      },
      {
        label: "TEC. PRODUCTIVO",
        url: "/assets/files/2026/contrata-docente/14.PLAZAS-TECNICO-PRODUCTIVA-F-17022026.pdf",
      },
    ],
  },
  {
    numero: "13",
    nombre: "Comunicado N°02 Contratación Docente 2026",
    tipo: "Comunicado",
    fecha: "2026-02-13",
    archivoUrl:
      "/assets/files/2026/contrata-docente/13.COMUNICADO-N02-F-13022026.pdf",
  },
  {
    numero: "12",
    nombre: "Resultados preliminares de postulantes habilitados y observados",
    tipo: "Resultados",
    fecha: "2026-02-12",
    archivoUrl:
      "/assets/files/2026/contrata-docente/12.Resultados-preliminares-de-postulantes-habilitados-para-la-contratación-F-12022026.pdf",
  },
  {
    numero: "11",
    nombre: "Relación Final de Renovación de Contratación Docente 2026",
    tipo: "Relación",
    fecha: "2026-02-10",
    archivoUrl:
      "/assets/files/2026/contrata-docente/11.RELACION-FINAL-DE-RENOVACION-DE-CONTRATO-DOCENTE-2026-F-10022026.pdf",
  },
  {
    numero: "10",
    nombre: "Procedimiento para la Renovación - Contratación Docente 2026",
    tipo: "Procedimiento",
    fecha: "2026-02-03",
    archivoUrl:
      "/assets/files/2026/contrata-docente/10.PROCEDIMIENTO-PARA-LA-RENOVACION-DE-CONTRATO-DOCENTE-2026-F-03022026.pdf",
  },
  {
    numero: "09",
    nombre: "Aptos para Renovación - Contratación Docente 2026",
    tipo: "Lista",
    fecha: "2026-02-03",
    archivoUrl:
      "/assets/files/2026/contrata-docente/09.APTOS-PARA-RENOVACION-DE-CONTRATO-DOCENTE-2026-F-03022026.pdf",
  },
  {
    numero: "08",
    nombre: "Profesores con Evaluación de desempeño desfavorable",
    tipo: "Evaluación",
    fecha: "2026-02-03",
    archivoUrl:
      "/assets/files/2026/contrata-docente/08.PROFESORES-CON-EVALUACION-DE-DESEMPEÑO-DESFAVORABLE-F-03022026.pdf",
  },
  {
    numero: "07",
    nombre: "Plazas No Disponibles de Contratación Docente 2026",
    tipo: "Plazas",
    fecha: "2026-02-03",
    archivoUrl:
      "/assets/files/2026/contrata-docente/07.PLAZAS-NO-DISPONIBLES-PARA-LA-RENOVACION-DE-CONTRATO-DOCENTE-2026-F-03022026.pdf",
  },
  {
    numero: "06",
    nombre: "Modificación del cronograma de contratación docente 2026",
    tipo: "Oficio Múltiple",
    fecha: "2026-01-30",
    archivoUrl:
      "/assets/files/2026/contrata-docente/06.OFICIO-MULTIPLE-00030-2026-MINEDU-VMGP-DIGEDD[R]-F30012026.pdf",
  },
  {
    numero: "05",
    nombre: "Precisiones para la Contratación Docente 2026 (PN)",
    tipo: "Norma",
    fecha: "2026-01-30",
    archivoUrl:
      "/assets/files/2026/contrata-docente/05.PRECISIONES-CONTRATACION-DOCENTE-2026-SEGUNDA-ETAPA-CONTRATACION-POR-RESULTADOS-DE-LA-PN-F-30012026.pdf",
  },
  {
    numero: "04",
    nombre: "Comunicado N°01 Precisiones para la Renovación 2026",
    tipo: "Comunicado",
    fecha: "2026-01-13",
    archivoUrl:
      "/assets/files/2026/contrata-docente/04.COMUNICADO-N°01-2025-PRECISIONES-PARA-LA-RENOVACION-DE-CONTRATO-DOCENTE-F-13012026.pdf",
  },
  {
    numero: "03",
    nombre: "Preguntas Frecuentes",
    tipo: "Documento",
    fecha: "2026-01-13",
    archivoUrl:
      "/assets/files/2026/contrata-docente/03.preguntas_frecuentes_renovacion_contrato_docente2026-F-13012026.pdf",
  },
  {
    numero: "02",
    nombre:
      "Decreto Supremo - Norma que regula el procedimiento y requisitos de contratación docente",
    tipo: "Decreto Supremo",
    fecha: "2026-01-13",
    archivoUrl:
      "/assets/files/2026/contrata-docente/02.ds_022_2025_minedu_contratacion_docente_2026-F-13012026.pdf",
  },
  {
    numero: "01",
    nombre: "RGR N°004-2026-GR CUSCO/GEREDU, Cronograma Regional",
    tipo: "Resolución",
    fecha: "2026-01-09",
    archivoUrl:
      "/assets/files/2026/contrata-docente/01.RGR004-2026-GR-GEREDU-F-09012026.pdf",
  },
];
