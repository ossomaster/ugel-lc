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
		imagen: "/assets/images/noticias/noticia-13.jpg",
		fecha: "2026-03-13",
		tipo: "Reciente",
		titulo: "",
		descripcion: "Con pancartas coloridas, bandas de música y muchísima alegría, se realizó el gran pasacalle por las principales arterias de la ciudad, marcando el inicio de esta nueva aventura educativa, para el Buen Inicio del año escolar 2026",
		href: "https://www.facebook.com/share/p/1GY4MvKrFR/",
	},
	
	{
		imagen: "/assets/images/noticias/noticia-7.jpeg",
		fecha: "2026-02-23",
		tipo: "Reciente",
		titulo: "",
		descripcion: "La UGEL La Convención viene preparandose para el Buen Inicio del año escolar 2026",
		href: "https://www.ugellaconvencion.gob.pe/lc/doc_2026/MM-N008-2026-GORE-C-DRE-C-DUGE-LC-SEC-F-11022026.pdf",
	},
	{
		imagen: "/assets/images/noticias/noticia-8.jpg",
		fecha: "2026-02-27",
		tipo: "Noticia",
		titulo: "",
		descripcion: "UGEL La Convención ganadores de 11 proyectos de Innovación Educativa FONDEP 2026",
		href: "https://fondep.gob.pe/red2/cnpie2026",
	},
	{
		imagen: "/assets/images/noticias/noticia-9.jpg",
		fecha: "2026-02-20",
		tipo: "Noticia",
		titulo: "Reunión Multisectorial por el Buen Inicio del Año Escolar 2026",
		descripcion: "Evento realizado en conjunto con las distintas autoridades de la Provincia",
		href: "https://www.facebook.com/share/p/1bxKf9GkxN/",
	},
	{
		imagen: "/assets/images/noticias/noticia-10.jpg",
		fecha: "2026-02-20",
		tipo: "Noticia",
		titulo: "¡Adjudicación Docente PN: Compromiso con la Educación Intercultural!  ",
		descripcion: "Este proceso se desarrolló en estricto cumplimiento de la normativa actual vigente, garantizando la transparencia, la meritocracia y, sobre todo, la pertinencia cultural que nuestra provincia merece.",
		href: "https://www.facebook.com/share/p/1D5Hsd8kPr/",
	},
	{
		imagen: "/assets/images/noticias/noticia-11.jpg",
		fecha: "2026-02-17",
		tipo: "Noticia",
		titulo: "",
		descripcion: "Videoconferencias en la Semana de la Innovación, espacio orientado a fortalecer la cultura innovadora, compartir experiencias y brindar orientaciones para la implementación de acciones innovadoras en sus instituciones educativas.",
		href: "https://www.facebook.com/photo?fbid=896688886415883&set=a.139842318767214",
	},
	{
		imagen: "/assets/images/noticias/noticia-12.jpg",
		fecha: "202-02-23",
		tipo: "Noticia",
		titulo: "Evaluación de dominio de la lengua indígena u originaria",
		descripcion: "El Ministerio de Educación, a través de la Dirección de Educación Intercultural Bilingüe, abre las inscripciones para la Evaluación de Dominio de la Lengua Indígena u Originaria de Docentes (EDLO) 2026.",
		href: "https://www.gob.pe/34880-evaluacion-de-dominio-de-la-lengua-indigena-u-originaria-inscripcion-a-la-edlo-2026",
	},
]

const ENLACES_INTERES: EnlaceInteres[] = [
	{
		imagen: "/assets/images/enlaces/enlace-siamep.png",
		href: "https://siamep.ugellaconvencion.gob.pe/",
		alt: "SIAMEP",
	},
	{
		imagen: "/assets/images/enlaces/enlace-prevaed.png",
		href: "https://sites.google.com/view/prevaed-ugellaconvencion/inicio",
		alt: "PREVAED",
	},
	{
		imagen: "/assets/images/enlaces/enlace-ayni.png",
		href: "https://forms.gle/NTXpA5zA6n26Aur96",
		alt: "ayni",
	},
	{
		imagen: "/assets/images/enlaces/enlace-mimantenimiento.png",
		href: "https://mimantenimiento.pronied.gob.pe/sismantex/#/login",
		alt: "mi-mantenimiento",
	},
	{
		imagen: "/assets/images/enlaces/enlace-reclamaciones-digital.png",
		href: "https://www.ugellaconvencion.gob.pe/reclamaciones/",
		alt: "reclamaciones-digital",
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
