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
		numero: "13",
		nombre: "Comunicado Adjudicación Contratación Auxiliares de Educación",
		tipo: "Comunicado",
		fecha: "2026-02-12",
		archivoUrl: "/assets/files/2026/contratacion-auxiliares/13.COMUNICADO 12.02.2026.jpeg",
		badge: { label: "Nuevo", color: "#D62911" }
	},
	{
		numero: "12",
		nombre: "Resultado Final Contratación Auxiliares de Educación",
		tipo: "Resultados",
		fecha: "2026-02-12",
		archivoUrl: "/assets/files/2026/contratacion-auxiliares/12.RESULTADO.FINAL.AUX-FINAL-F-1202202665.pdf",
		badge: { label: "Actualizado", color: "#D62911" }
	},
	{
		numero: "11",
		nombre: "Comunicado N°01 Auxiliares de Educación",
		tipo: "Comunicado",
		fecha: "2026-02-10",
		archivoUrl: "/assets/files/2026/contratacion-auxiliares/11.COMUNICADO-F-10022026.pdf"
	},
	{
		numero: "10",
		nombre: "Actualizacion del Cuadro de Plazas Vacantes Auxiliares de Educación",
		tipo: "Plazas",
		fecha: "2026-02-05",
		archivoUrl: "/assets/files/2026/contratacion-auxiliares/10.ACTUALIZACION-DE-PLAZAS-DE-AUXILIAR-DE-EDUCACION-F-05022026.pdf"
	},
	{
		numero: "09",
		nombre: "Resultados Preliminares Auxiliares de Educación 2026",
		tipo: "Resultados",
		fecha: "2026-02-03",
		archivoUrl: "/assets/files/2026/contratacion-auxiliares/09.RESULTADOS-PRELIMINARES-AUX.EDUCACION-F-03022026.pdf"
	},
	{
		numero: "08",
		nombre: "Relación de Aptos y No Aptos Final Auxiliares de Educación 2026",
		tipo: "Relación",
		fecha: "2026-01-30",
		archivoUrl: "/assets/files/2026/contratacion-auxiliares/08.RELACION-POSTULANTES-APTOS.NO.APTOS-FINAL-F-30012026.pdf"
	},
	{
		numero: "07",
		nombre: "Modificación del cronograma para implementar el procedimiento de contratación de Auxiliares de Educación 2026",
		tipo: "Normatividad",
		fecha: "2026-01-28",
		archivoUrl: "/assets/files/2026/contratacion-auxiliares/OFICIO MÚLTIPLE N.º 00028-2026-MINEDUVMGP-DIGEDD-F-28012026.pdf"
	},
	{
		numero: "06",
		nombre: "Relación de Aptos y No Aptos Auxiliares de Educación 2026",
		tipo: "Relación",
		fecha: "2026-01-24",
		archivoUrl: "/assets/files/2026/contratacion-auxiliares/06.RELACION-POSTULANTES-APTOS.NO.APTOS-F-24012026.pdf"
	},
	{
		numero: "05",
		nombre: "Cuadro de Plazas Vacantes Auxiliares de Educación",
		tipo: "Plazas",
		fecha: "2026-01-14",
		archivoUrl: "/assets/files/2026/contratacion-auxiliares/05.PLAZAS-VACANTES-F-14012026.pdf"
	},
	{
		numero: "04",
		nombre: "Comunicado N°01-2026 CONSIDERACIONES GENERALES PARA EL CONCURSO DE CONTRATACIÓN DE AUXILIARES DE EDUCACIÓN",
		tipo: "Comunicado",
		fecha: "2026-01-13",
		archivoUrl: "/assets/files/2026/contratacion-auxiliares/04.COMUNICADO-N°01-2026-AUXILIARES-F-13012026.pdf"
	},
	{
		numero: "03",
		nombre: "Ver Anexos Editables",
		tipo: "Anexos",
		fecha: "2026-01-12",
		archivoUrl: "https://www.minedu.gob.pe/reforma-magisterial/auxiliares-educacion.php"
	},
	{
		numero: "02",
		nombre: "Formulario de Pre-Inscripción",
		tipo: "Inscripción",
		fecha: "2026-01-12",
		archivoUrl: "https://www.ugellaconvencion.gob.pe/inscripcion/auxiliares/01/"
	},
	{
		numero: "01",
		nombre: "RESOLUCION GERENCIAL REGIONAL N°001-2026-GR-CUSCO",
		tipo: "Resolución",
		fecha: "2026-01-06",
		archivoUrl: "/assets/files/2026/contratacion-auxiliares/01.RGR-001-2026-CUSCO-GEREDU-F-09012026.pdf"
	}
	
	
]