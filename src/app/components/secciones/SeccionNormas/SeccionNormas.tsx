import Link from "next/link"
import { asset } from "../../../helpers"
import dayjs from "dayjs"
import "dayjs/locale/es"

dayjs.locale("es")

type DocumentoLegal = {
	tipo: string
	imagen: string
	nombre: string
	fecha: string
	descripcion: string
	href: string
}

const DOCUMENTOS: DocumentoLegal[] = [
	{
		tipo: "Resolución",
		imagen: "//blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEio1qA9riAVh_4-x2xFDqu5I9BQWTNKtDtRLz8F-6MSTZQb7uX7e-KgIK11cFfCN8SS05QQVIjucrcEkHndUBOVCsZVG8wEKT4Dtab4N0KRF8QaDijQJcFmg6ZNfC4MHJscJSU307l82T-6sazfqpXmfkrlxR2H6aIdjydIDbNKq5YduzXPdG2cTj98Vqw/w851-h444-c/336315-rm-037-2026-minedu-aprueban-padrones-instituciones-educativas-publicas-docentes.jpg",
		nombre: "Resolución Ministerial N.° 037-2026-MINEDU",
		fecha: "2026-01-12",
		descripcion: "Aprueban Padrones de Instituciones Educativas Públicas y de Docentes Bilingües, para la percepción de las asignaciones temporales y bonificaciones correspondientes a los profesores y auxiliares de educación nombrados y contratados",
		href: "https://cdn.www.gob.pe/uploads/document/file/9340497/7658605-rm-n037-2026-minedu.pdf?v=1769433329",
		
	},
	{
		tipo: "Resolución",
		imagen: "/assets/images/noticias/noticia-5.jpg",
		nombre: "Decreto Supremo N.º 022-2025-MINEDU",
		fecha: "2026-02-01",
		descripcion: "Decreto Supremo que aprueba la Norma que regula el procedimiento, requisitos y condiciones para la contratación y la renovación de profesores en el servicio docente en educación básica y técnico-productiva, en el marco de la Ley N° 30328, Ley que establece medidas en materia educativa y dicta otras disposiciones.",
		href: "https://www.minedu.gob.pe/reforma-magisterial/pdf/contrato/2026/ds_022_2025_minedu_contratacion_docente_2026.pdf",
	},
	{
		tipo: "Oficio Múltiple",
		imagen: "/assets/images/noticias/noticia-6.jpg",
		nombre: "Oficio Múltiple N.º 00105-2025-MINEDU/VMGP-DIGEDD",
		fecha: "2025-10-07",
		descripcion: "Precisiones para la implementación del proceso de encargatura 2026\.",
		href: "#",
	},
	/* {
		tipo: "Decreto Supremo",
		imagen: "/assets/images/noticias/noticia-4.jpg",
		nombre: "Decreto Supremo N.° 015-2025-MINEDU",
		fecha: "2025-09-15",
		descripcion: "Modificación del Reglamento de la Ley de Institutos y Escuelas de Educación Superior y la carrera pública de sus docentes.",
		href: "#",
	},
	{
		tipo: "Directiva",
		imagen: "/assets/images/noticias/noticia-1.jpg",
		nombre: "Directiva N.° 003-2025-MINEDU/VMGP-DIGEDD",
		fecha: "2025-08-20",
		descripcion: "Orientaciones para la implementación del Currículo Nacional de Formación Inicial Docente en las EESP e IESP públicas y privadas a nivel nacional.",
		href: "#",
	},
	{
		tipo: "Resolución",
		imagen: "/assets/images/noticias/noticia-2.jpg",
		nombre: "Resolución Ministerial N.° 245-2025-MINEDU",
		fecha: "2025-07-10",
		descripcion: "Aprobación de los lineamientos para la gestión de la calidad del servicio educativo en Instituciones de Educación Superior Pedagógica.",
		href: "#",
	}, */
]

function DocumentoCard({ documento }: { documento: DocumentoLegal }) {
	const fecha = dayjs(documento.fecha)

	return (
		<div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
			<div className="relative h-48 overflow-hidden">
				<img
					src={asset(documento.imagen)}
					alt={documento.nombre}
					className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
				/>
				<span className="absolute top-3 left-3 text-xs font-bold uppercase bg-secondary text-white px-3 py-1 rounded-sm">
					{documento.tipo}
				</span>
			</div>
			<div className="p-5 flex flex-col flex-1">
				<h3 className="font-heading font-bold text-base leading-snug text-foreground group-hover:text-primary transition-colors line-clamp-2">
					{documento.nombre}
				</h3>
				<p className="text-sm text-primary font-medium mt-2">
					{fecha.format("D [de] MMMM [del] YYYY")}
				</p>
				<p className="text-sm text-gray-500 mt-2 leading-relaxed line-clamp-4 flex-1">
					{documento.descripcion}
				</p>
				<div className="mt-4">
					<Link
						href={documento.href}
						className="inline-flex items-center justify-center px-6 py-2 bg-primary text-white text-sm font-semibold rounded hover:bg-primary-dark transition-colors duration-300"
					>
						Descargar
					</Link>
				</div>
			</div>
		</div>
	)
}

export default function SeccionNormas() {
	return (
		<section className="seccion bg-white">
			<div className="container">
				<div className="mb-10">
					<h2 className="seccion__title">NORMAS Y DOCUMENTOS LEGALES</h2>
					<p className="seccion__subtitle italic">
						Revisa la normativa emitidas por el MINEDU.
					</p>
					<div className="w-10 h-1 bg-primary mt-4 rounded-full" />
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{DOCUMENTOS.map((doc, i) => (
						<DocumentoCard key={i} documento={doc} />
					))}
				</div>
			</div>
		</section>
	)
}
