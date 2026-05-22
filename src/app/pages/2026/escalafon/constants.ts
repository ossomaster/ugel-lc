export type TDocumentoNormativo = {
	numero: string
	nombre: string
	tipo: string
	fecha: string
	descripcion?: string
	archivoUrl: string
	thumbnailUrl?: string
	enlace?: string
	badge?: { label: string; color: string }
}

export const DOCUMENTOS_NORMATIVOS: TDocumentoNormativo[] = [
	
	
	{
		numero: "01",
		nombre: "Comunicado Escalafón",
		tipo: "Comunicado",
		fecha: "2026-05-22",
		thumbnailUrl: "/assets/images/publicaciones/comunicado.png",
		archivoUrl: "/assets/files/2026/escalafon/01.PRESENTACION-DE-LEGAJO-PERSONAL-NOMBRADOS-2026-ESCALAFON-F-22052026.pdf",
	},
	
]
