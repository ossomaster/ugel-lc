import Link from "next/link"
import { asset } from "../../../helpers"

type Curso = {
	imagen: string
	nombre: string
	estado: string
	href: string
}

const CURSOS: Curso[] = [
	{
		imagen: "/assets/images/noticias/noticia-1.jpg",
		nombre: "Experiencia virtual autoformativa Investigación en la Formación Inicial Docente",
		estado: "Cerrado",
		href: "#",
	},
	{
		imagen: "/assets/images/noticias/noticia-2.jpg",
		nombre: "Curso Lengua de Señas peruana (Nivel básico)",
		estado: "Cerrado",
		href: "#",
	},
	{
		imagen: "/assets/images/noticias/noticia-3.jpg",
		nombre: "Curso Academia de profesores Microsoft 365",
		estado: "Cerrado",
		href: "#",
	},
	{
		imagen: "/assets/images/noticias/noticia-4.jpg",
		nombre: "Curso de Entornos de aprendizaje para la semipresencialidad en la FID",
		estado: "Cerrado",
		href: "#",
	},
]

function CursoCard({ curso }: { curso: Curso }) {
	return (
		<div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
			<div className="relative h-52 overflow-hidden">
				<img
					src={asset(curso.imagen)}
					alt={curso.nombre}
					className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
				/>
				<span className="absolute top-3 left-3 text-xs font-bold uppercase bg-secondary text-white px-3 py-1 rounded-sm">
					{curso.estado}
				</span>
			</div>
			<div className="p-5 flex flex-col flex-1">
				<h3 className="font-heading font-bold text-base leading-snug text-foreground group-hover:text-primary transition-colors line-clamp-3 flex-1">
					{curso.nombre}
				</h3>
				<div className="mt-4">
					<Link
						href={curso.href}
						className="inline-flex items-center justify-center px-6 py-2 bg-primary text-white text-sm font-semibold rounded hover:bg-primary-dark transition-colors duration-300 uppercase tracking-wide"
					>
						Ver más
					</Link>
				</div>
			</div>
		</div>
	)
}

export default function SeccionCursos() {
	return (
		<section className="seccion bg-gray-50">
			<div className="container">
				<div className="mb-10">
					<h2 className="seccion__title">FORTALECIMIENTO DOCENTE</h2>
					<p className="seccion__subtitle italic">
						Programas de fortalecimiento docente, cursos virtuales y módulos de asesoramiento para docentes formadores.
					</p>
					<div className="w-10 h-1 bg-primary mt-4 rounded-full" />
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{CURSOS.map((curso, i) => (
						<CursoCard key={i} curso={curso} />
					))}
				</div>
			</div>
		</section>
	)
}
