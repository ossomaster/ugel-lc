import Link from "next/link"
import dayjs from "dayjs"
import "dayjs/locale/es"
import { FaChevronRight } from "react-icons/fa6"
import { asset } from "../../../helpers"

dayjs.locale("es")

type Noticia = {
	imagen: string
	fecha: string
	tipo: string
	titulo: string
	descripcion: string
	href: string
}

type EnlaceInteres = {
	imagen: string
	href: string
	alt: string
}

const NOTICIAS: Noticia[] = [
	{
		imagen: "/assets/images/noticias/noticia-1.jpg",
		fecha: "2026-01-30",
		tipo: "Alerta",
		titulo: "Nota de prensa N° 005-2026",
		descripcion: "DIFOID: Once años fortaleciendo la Formación Inicial Docente al servicio del país",
		href: "#",
	},
	{
		imagen: "/assets/images/noticias/noticia-2.jpg",
		fecha: "2026-01-21",
		tipo: "Alerta",
		titulo: "Nota de prensa N° 004-2026",
		descripcion: "DIFOID obtiene certificaciones ISO que fortalecen la integridad y la transparencia en la gestión pública",
		href: "#",
	},
	{
		imagen: "/assets/images/noticias/noticia-3.jpg",
		fecha: "2026-01-15",
		tipo: "Nota de prensa",
		titulo: "Capacitación en GRD a alcaldes provinciales y otras autoridades",
		descripcion: "Fortalecimiento de capacidades para la gestión del riesgo de desastres en la región",
		href: "#",
	},
	{
		imagen: "/assets/images/noticias/noticia-4.jpg",
		fecha: "2026-01-10",
		tipo: "Comunicado",
		titulo: "Inauguración de infraestructura educativa en San José",
		descripcion: "Nuevas instalaciones para el fortalecimiento de la formación pedagógica inicial",
		href: "#",
	},
	{
		imagen: "/assets/images/noticias/noticia-1.jpg",
		fecha: "2025-12-20",
		tipo: "Nota de prensa",
		titulo: "Balance anual de la gestión educativa 2025",
		descripcion: "Resultados y logros alcanzados durante el año en materia de educación superior pedagógica",
		href: "#",
	},
	{
		imagen: "/assets/images/noticias/noticia-2.jpg",
		fecha: "2025-12-15",
		tipo: "Alerta",
		titulo: "Convocatoria para programas de formación docente 2026",
		descripcion: "Inscripciones abiertas para los programas de profesionalización y segunda especialidad",
		href: "#",
	},
]

const ENLACES_INTERES: EnlaceInteres[] = [
	{
		imagen: "/assets/images/enlaces/enlace-siamep.png",
		href: "#",
		alt: "191 Instituciones de Formación Inicial Docente",
	},
	{
		imagen: "/assets/images/enlaces/enlace-convocatorias.png",
		href: "#",
		alt: "53 EESP - Escuelas de Educación Superior",
	},
	{
		imagen: "/assets/images/enlaces/enlace-ayni.png",
		href: "#",
		alt: "Acciones de personal",
	},
	{
		imagen: "/assets/images/enlaces/enlace-mimantenimiento.png",
		href: "#",
		alt: "Registro de Títulos Pedagógicos",
	},
	{
		imagen: "/assets/images/enlaces/enlace-5.png",
		href: "#",
		alt: "Plantillas estandarizadas",
	},
]

function NoticiaCard({ noticia }: { noticia: Noticia }) {
	const fecha = dayjs(noticia.fecha)

	return (
		<Link href={noticia.href} className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
			<div className="relative h-48 overflow-hidden">
				<img
					src={asset(noticia.imagen)}
					alt={noticia.titulo}
					className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
				/>
			</div>
			<div className="p-5">
				<div className="flex items-start gap-4">
					<div className="text-center shrink-0 leading-tight">
						<span className="block text-3xl font-heading font-extrabold text-secondary">{fecha.format("DD")}</span>
						<span className="block text-xs font-bold uppercase text-secondary">{fecha.format("MMM")}</span>
						<span className="inline-block mt-1 text-[10px] font-bold uppercase bg-primary text-white px-2 py-0.5 rounded-sm">
							{noticia.tipo}
						</span>
					</div>
					<div className="flex-1 min-w-0">
						<h3 className="font-heading font-bold text-base leading-snug text-foreground group-hover:text-primary transition-colors line-clamp-2">
							{noticia.titulo}
						</h3>
						<p className="text-sm text-gray-500 mt-2 leading-relaxed line-clamp-3">{noticia.descripcion}</p>
					</div>
				</div>
			</div>
		</Link>
	)
}

export default function SeccionNoticias() {
	return (
		<section className="seccion bg-gray-50">
			<div className="container">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
					<div className="lg:col-span-2">
						<div className="mb-10">
							<h2 className="seccion__title">NOTICIAS</h2>
							<p className="seccion__subtitle italic">Encuentra nuestra última información, notas de prensa, comunicados y más.</p>
							<div className="w-10 h-1 bg-primary mt-4 rounded-full" />
						</div>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
							{NOTICIAS.map((noticia, i) => (
								<NoticiaCard key={i} noticia={noticia} />
							))}
						</div>
						<div className="mt-8 text-center">
							<Link href="#" className="btn btn--primary">
								Ver todas las noticias
								<FaChevronRight className="inline ml-2 text-sm" />
							</Link>
						</div>
					</div>

					<div>
						<div className="mb-10">
							<h2 className="seccion__title text-lg">ENLACES DE INTERÉS</h2>
							<div className="w-10 h-1 bg-primary mt-4 rounded-full" />
						</div>
						<div className="flex flex-col gap-4">
							{ENLACES_INTERES.map((enlace, i) => (
								<Link
									key={i}
									href={enlace.href}
									className="block rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
								>
									<img
										src={asset(enlace.imagen)}
										alt={enlace.alt}
										className="w-full h-auto"
									/>
								</Link>
							))}
						</div>

						<div className="mt-10">
							<h2 className="seccion__title text-lg">SÍGUENOS EN FACEBOOK</h2>
							<div className="w-10 h-1 bg-primary mt-4 mb-6 rounded-full" />
							<div className="rounded-xl overflow-hidden shadow-md">
								<iframe
									src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FOficialUGELLC&tabs=timeline&width=400&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
									className="w-full aspect-3/4 border-none overflow-hidden"
									allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
									allowFullScreen
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
