import Link from "next/link"
import { FaBullhorn, FaFileAlt, FaChalkboardTeacher, FaChartBar, FaUsers } from "react-icons/fa"

const CARDS = [
	{
		title: "NOTICIAS",
		description: "Noticias de interés",
		icon: FaBullhorn,
		href: "/pages/2026/noticias",
		bg: "bg-[#c8102e]",
	},
	{
		title: "PUBLICACIONES",
		description: "Documentos Oficiales",
		icon: FaFileAlt,
		href: "/pages/2026/publicaciones",
		bg: "bg-[#00a99d]",
	},
	{
		title: "CONVOCATORIAS",
		description: "Publicaciones de RR.HH",
		icon: FaUsers,
		href: "#",
		bg: "bg-[#1a3a6b]",
	},
	{
		title: "ATENCIÓN AL CIUDADANO",
		//description: "",
		icon: FaChartBar,
		href: "#",
		bg: "bg-[#e8912d]",
	},
	{
		title: "ABASTECIMIENTOS",
		description: "Noticias de interés",
		icon: FaBullhorn,
		href: "#",
		bg: "bg-[#1a3a6b]",
	},
	{
		title: "CONTRATACIÓN DOCENTE 2026",
		description: "Publicaciones",
		icon: FaBullhorn,
		href: "#",
		bg: "bg-[#FF8C00]",
	},
	{
		title: "CONTRATACIÓN DE AUXILIARES 2026",
		description: "Publicaciones",
		icon: FaFileAlt,
		href: "#",
		bg: "bg-[#556B2F]",
	},
	{
		title: "CONVOCATORIAS CAS",
		description: "Publicaciones",
		icon: FaFileAlt,
		href: "/pages/2026/cas/",
		bg: "bg-[#5f9ea0]",
	},
]

export default function SeccionInformacionDestacada() {
	return (
		<section className="relative z-10 -mt-16">
			<div className="container">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
					{CARDS.map((card) => (
						<Link key={card.title} href={card.href} className={`${card.bg} text-white p-6 flex items-start gap-4 transition-transform duration-300 hover:-translate-y-2`}>
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
