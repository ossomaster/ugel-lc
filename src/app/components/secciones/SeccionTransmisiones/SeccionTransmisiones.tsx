import Link from "next/link"
import { asset } from "../../../helpers"
import { FaPlayCircle } from "react-icons/fa"

type Transmision = {
	imagen: string
	nombre: string
	estado: string
	href: string
}

const TRANSMISIONES: Transmision[] = [
	{
		imagen: "//repositorio.minedu.gob.pe/bitstream/handle/20.500.12799/11356/recomendacionesbiae2025.png?sequence=3&isAllowed=y",
		nombre: "Asistencia Técnica sobre el Buen Inicio del Año Escolar",
		estado: "Disponible",
		href: "#",
	},
	{
		imagen: "/assets/images/transmisiones/webinar-ponente.png",
		nombre: "Violencia de género contra la mujer",
		estado: "Disponible",
		href: "#",
	},
	{
		imagen: "//repositorio.minedu.gob.pe/bitstream/handle/20.500.12799/11356/recomendacionesbiae2025.png?sequence=3&isAllowed=y",
		nombre: "Disposiciones que regulan el proceso de contratación y renovación de docentes regulares en IESP/EESP públicas",
		estado: "Disponible",
		href: "#",
	},
	{
		imagen: "/assets/images/transmisiones/webinar-ponente.png",
		nombre: "Promover los auxilios psicológicos",
		estado: "Disponible",
		href: "#",
	},
]

function TransmisionCard({ transmision }: { transmision: Transmision }) {
	return (
		<div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
			<div className="relative aspect-3/4 overflow-hidden">
				<img
					src={asset(transmision.imagen)}
					alt={transmision.nombre}
					className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
				/>
				<span className="absolute top-3 left-3 text-xs font-bold uppercase bg-green-600 text-white px-3 py-1 rounded-sm z-10">
					{transmision.estado}
				</span>
			</div>
			<div className="p-5 flex flex-col flex-1">
				<h3 className="font-heading font-bold text-base leading-snug text-foreground group-hover:text-primary transition-colors line-clamp-3 flex-1">
					{transmision.nombre}
				</h3>
				<div className="mt-4">
					<Link
						href={transmision.href}
						className="inline-flex items-center justify-center px-6 py-2 bg-primary text-white text-sm font-semibold rounded hover:bg-primary-dark transition-colors duration-300 uppercase tracking-wide"
					>
						Ver
					</Link>
				</div>
			</div>
		</div>
	)
}

export default function SeccionTransmisiones() {
	return (
		<section className="seccion bg-amber-400">
			<div className="container">
				<div className="mb-10">
					<h2 className="seccion__title">TRANSMISIÓN EN DIRECTO</h2>
					<p className="font-heading text-4xl font-extrabold text-foreground flex items-center gap-3">
						Streaming <FaPlayCircle className="text-white" />
					</p>
					<p className="seccion__subtitle italic mt-2">
						Videoconferencias, Webinars, videos realizados por los especialistas de la UGEL-LC, sobre temas relacionados a la Formación Docente.
					</p>
					<div className="w-10 h-1 bg-white mt-4 rounded-full" />
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{TRANSMISIONES.map((transmision, i) => (
						<TransmisionCard key={i} transmision={transmision} />
					))}
				</div>
			</div>
		</section>
	)
}
