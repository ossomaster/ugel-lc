export type TDocumentoNormativo = {
	numero: string
	nombre: string
	tipo: string
	fecha: string
	archivoUrl: string
	badge?: { label: string; color: string }
}

export const DOCUMENTOS_NORMATIVOS: TDocumentoNormativo[] = [
	{
		numero: "001-2026",
		nombre: "Resolución Viceministerial N.° 001-2026-MINEDU",
		tipo: "Resolución Viceministerial",
		fecha: "2026-01-05",
		archivoUrl: "/assets/documentos/rv-001-2026.pdf",
		badge: { label: "Nuevo", color: "#10b981" },
	},
	{
		numero: "002-2026",
		nombre: "Oficio Múltiple N.° 002-2026-MINEDU/VMGP-DIGEDD",
		tipo: "Oficio Múltiple",
		fecha: "2026-01-12",
		archivoUrl: "/assets/documentos/om-002-2026.pdf",
		badge: { label: "Nuevo", color: "#10b981" },
	},
	{
		numero: "003-2026",
		nombre: "Decreto Supremo N.° 003-2026-MINEDU",
		tipo: "Decreto Supremo",
		fecha: "2026-01-18",
		archivoUrl: "/assets/documentos/ds-003-2026.pdf",
	},
	{
		numero: "004-2026",
		nombre: "Resolución Ministerial N.° 004-2026-MINEDU",
		tipo: "Resolución Ministerial",
		fecha: "2026-01-25",
		archivoUrl: "/assets/documentos/rm-004-2026.pdf",
	},
	{
		numero: "005-2026",
		nombre: "Directiva N.° 005-2026-MINEDU/VMGP",
		tipo: "Directiva",
		fecha: "2026-02-01",
		archivoUrl: "/assets/documentos/dir-005-2026.pdf",
		badge: { label: "Nuevo", color: "#10b981" },
	},
	{
		numero: "006-2025",
		nombre: "Resolución Viceministerial N.° 168-2025-MINEDU",
		tipo: "Resolución Viceministerial",
		fecha: "2025-12-31",
		archivoUrl: "/assets/documentos/rv-168-2025.pdf",
		badge: { label: "Actualizado", color: "#3b82f6" },
	},
	{
		numero: "007-2025",
		nombre: "Resolución Viceministerial N.° 100-2025-MINEDU",
		tipo: "Resolución Viceministerial",
		fecha: "2025-10-07",
		archivoUrl: "/assets/documentos/rv-100-2025.pdf",
		badge: { label: "Reciente", color: "#f59e0b" },
	},
	{
		numero: "008-2025",
		nombre: "Decreto Supremo N.° 015-2025-MINEDU",
		tipo: "Decreto Supremo",
		fecha: "2025-09-15",
		archivoUrl: "/assets/documentos/ds-015-2025.pdf",
	},
	{
		numero: "009-2025",
		nombre: "Resolución Ministerial N.° 245-2025-MINEDU",
		tipo: "Resolución Ministerial",
		fecha: "2025-08-20",
		archivoUrl: "/assets/documentos/rm-245-2025.pdf",
	},
	{
		numero: "010-2025",
		nombre: "Oficio Múltiple N.° 045-2025-MINEDU/VMGP-DIGEDD",
		tipo: "Oficio Múltiple",
		fecha: "2025-07-14",
		archivoUrl: "/assets/documentos/om-045-2025.pdf",
	},
	{
		numero: "011-2025",
		nombre: "Resolución Jefatural N.° 032-2025-MINEDU",
		tipo: "Resolución Jefatural",
		fecha: "2025-06-10",
		archivoUrl: "/assets/documentos/rj-032-2025.pdf",
	},
	{
		numero: "012-2025",
		nombre: "Resolución Directoral N.° 078-2025-MINEDU",
		tipo: "Resolución Directoral",
		fecha: "2025-05-22",
		archivoUrl: "/assets/documentos/rd-078-2025.pdf",
	},
	{
		numero: "013-2025",
		nombre: "Directiva N.° 012-2025-MINEDU/VMGP",
		tipo: "Directiva",
		fecha: "2025-04-30",
		archivoUrl: "/assets/documentos/dir-012-2025.pdf",
	},
	{
		numero: "014-2025",
		nombre: "Ley N.° 31935 - Ley de Fortalecimiento de la Formación Docente",
		tipo: "Ley",
		fecha: "2025-03-15",
		archivoUrl: "/assets/documentos/ley-31935-2025.pdf",
	},
	{
		numero: "015-2025",
		nombre: "Resolución Viceministerial N.° 055-2025-MINEDU",
		tipo: "Resolución Viceministerial",
		fecha: "2025-02-28",
		archivoUrl: "/assets/documentos/rv-055-2025.pdf",
	},
]
