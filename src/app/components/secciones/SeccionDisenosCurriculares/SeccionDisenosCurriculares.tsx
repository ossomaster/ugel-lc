import Image from "next/image"
import Link from "next/link"

type DisenoCurricular = {
	imagen: string
	nombre: string
	href: string
}

const DISENOS_CURRICULARES: DisenoCurricular[] = [
	{
		imagen: "/assets/images/dcbn-inicial-eib.png",
		nombre: "Educación Física",
		href: "#",
	},
	{
		imagen: "/assets/images/dcbn-inicial-eib.png",
		nombre: "Educación Religiosa",
		href: "#",
	},
	{
		imagen: "/assets/images/dcbn-inicial-eib.png",
		nombre: "Educación Secundaria - Comunicación",
		href: "#",
	},
	{
		imagen: "/assets/images/dcbn-inicial-eib.png",
		nombre: "Educación Secundaria - Ciudadanía y Ciencias Sociales",
		href: "#",
	},
]

function DisenoCurricularCard({ diseno }: { diseno: DisenoCurricular }) {
	return (
		<Link
			href={diseno.href}
			className="group block rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
		>
			<div className="relative aspect-3/4 overflow-hidden">
				<Image
					src={diseno.imagen}
					alt={diseno.nombre}
					fill
					className="object-cover group-hover:scale-105 transition-transform duration-500"
				/>
			</div>
		</Link>
	)
}

export default function SeccionDisenosCurriculares() {
	return (
		<section className="seccion bg-gray-600 text-white">
			<div className="container">
				<div className="mb-10">
					<h2 className="seccion__title text-white uppercase">
						Diseños Curriculares Básico Nacionales
					</h2>
					<p className="font-heading text-4xl font-extrabold uppercase">
						De la Formación Inicial Docente
					</p>
					<div className="w-10 h-1 bg-amber-400 mt-4 rounded-full" />
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{DISENOS_CURRICULARES.map((diseno, i) => (
						<DisenoCurricularCard key={i} diseno={diseno} />
					))}
				</div>
			</div>
		</section>
	)
}
