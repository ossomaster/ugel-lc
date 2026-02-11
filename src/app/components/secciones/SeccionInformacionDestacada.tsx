import Link from "next/link"
import { FaBullhorn, FaFileAlt, FaChalkboardTeacher, FaChartBar } from "react-icons/fa"

const CARDS = [
	{
		title: "NOTICIAS",
		description: "Noticias de interés relacionado a las IESP-EESP",
		icon: FaBullhorn,
		href: "#",
		bg: "bg-[#c8102e]",
	},
	{
		title: "PUBLICACIONES",
		description: "Documentos oficiales, diseños curriculares y material publicado",
		icon: FaFileAlt,
		href: "#",
		bg: "bg-[#00a99d]",
	},
	{
		title: "CURSOS",
		description: "Diseñados en función a las necesidades de los docentes",
		icon: FaChalkboardTeacher,
		href: "#",
		bg: "bg-[#1a3a6b]",
	},
	{
		title: "DIFOID al día",
		description: "Estado de entregables de cada IESP/EESP",
		icon: FaChartBar,
		href: "#",
		bg: "bg-[#e8912d]",
	},
]

export default function SeccionInformacionDestacada() {
	return (
		<section className="relative z-10 -mt-16">
			<div className="container">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
					{CARDS.map((card) => (
						<Link
							key={card.title}
							href={card.href}
							className={`${card.bg} text-white p-6 flex items-start gap-4 transition-transform duration-300 hover:-translate-y-2`}
						>
							<div className="flex-1">
								<h3 className="font-heading font-extrabold text-lg">{card.title}</h3>
								<p className="text-sm mt-2 text-white/85 leading-relaxed">{card.description}</p>
							</div>
							<card.icon className="text-3xl shrink-0 opacity-80 mt-1" />
						</Link>
					))}
				</div>
			</div>
		</section>
	)
}
