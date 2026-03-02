export type TDocumentoNormativo = {
	numero: string
	nombre: string
	tipo: string
	fecha: string
	archivoUrl: string | { label: string; url: string }[]
	badge?: { label: string; color: string }
}

export const DOCUMENTOS_NORMATIVOS: TDocumentoNormativo[] = [
	
	{
		numero: "05",
		nombre: "Comunicado N°04, Link Inscripción - Contratación Docente 2026 II.EE DEL MODELO DE SERVICIO EDUCATIVO DE SECUNDARIA EN ALTERNANCIA (CRFA)",
		tipo: "Comunicado",
		fecha: "2026-03-02",
		archivoUrl: "/assets/files/2026/contratacion-docente-crfa/05.COMUNICADO-N04-F-02032026.pdf",
	},
	{
		numero: "04",
		nombre: "Resultado de Entrevista Docente de la PN 2026 II.EE DEL MODELO DE SERVICIO EDUCATIVO DE SECUNDARIA EN ALTERNANCIA (CRFA)",
		tipo: "Comunicado",
		fecha: "2026-02-16",
		archivoUrl: "/assets/files/2026/contratacion-docente-crfa/04.COMUNICADO.N03-RESULTADO-ENTREVISTA-PN-F-16022026.pdf",
	},
	{
		numero: "03",
		nombre: "Comunicado N°02, Entrevista a Docentes de la PN CRFA 2026 II.EE DEL MODELO DE SERVICIO EDUCATIVO DE SECUNDARIA EN ALTERNANCIA (CRFA)",
		tipo: "Comunicado",
		fecha: "2026-02-10",
		archivoUrl: "/assets/files/2026/contratacion-docente-crfa/03.COMUNICADO-ENTREVISTA-DOCENTE-CRFA-2026-F-10022026.pdf",
	},
	{
		numero: "02",
		nombre: "Comunicado N°01, Link Inscripción - Contratación Docente 2026 II.EE DEL MODELO DE SERVICIO EDUCATIVO DE SECUNDARIA EN ALTERNANCIA (CRFA)",
		tipo: "Comunicado",
		fecha: "2026-02-03",
		archivoUrl: "/assets/files/2026/contratacion-docente-crfa/02.COMUNICADO.N1-ENTREVISTA-DOCENTE-CRFA-F-03022026.pdf",
	},
	{
		numero: "01",
		nombre: "Resolución Ministerial N° 518-2021-MINEDU, que crea el Modelo de Servicio Educativo Secundaria en Alternancia. - Crea el nuevo Modelo de Servicio Educativo Secundaria en Alternancia",
		tipo: "Resolución",
		fecha: "2026-02-03",
		archivoUrl: "https://cdn.www.gob.pe/uploads/document/file/1910264/RM%20N%C2%B0%20204-2021-MINEDU.pdf.pdf?v=1621961965",
	},
]