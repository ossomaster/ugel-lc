import Link from "next/link"
import { FaEnvelope, FaFacebook, FaLocationDot, FaYoutube } from "react-icons/fa6"
import { EMPRESA, ERutas, NAV_MENU } from "../../constants/constants"
import { asset, getRoute } from "../../helpers"

export default function Footer() {
	return (
		<footer className="pt-12 lg:pt-24 bg-black text-white text-sm">
			<div className="container">
				<div className="max-w-prose">
					<h2 className="font-heading font-extrabold text-2xl lg:text-3xl">
						{EMPRESA.nombreCompleto}
					</h2>
					<p className="mt-2 text-white/70">{EMPRESA.mision}</p>
				</div>
				<hr className="my-8 lg:my-12 border-secondary/30" />
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
					<div>
						<img src={asset("logo-ugel.png")} alt="UGEL La Convención" className="h-16 object-contain mb-4" />
						<ul className="space-y-2">
							<li>{EMPRESA.nombre}</li>
							<li className="flex">
								<span className="inline-block size-6 shrink-0 text-secondary">
									<FaLocationDot className="inline" />
								</span>
								{EMPRESA.direccion}
							</li>
							<li className="flex">
								<span className="inline-block size-6 shrink-0 text-secondary">
									<FaEnvelope className="inline" />
								</span>
								<a href={`mailto:${EMPRESA.correo}`} className="hover:underline">
									{EMPRESA.correo}
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="font-heading font-bold text-xl mb-4">Institucional</h3>
						<ul className="space-y-4">
							<li>
								<Link href={getRoute(ERutas.NOSOTROS)} className="hover:underline">
									Nosotros
								</Link>
							</li>
							<li>
								<Link href={getRoute(ERutas.CONTACTO)} className="hover:underline">
									Contáctanos
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="font-heading font-bold text-xl mb-4">Secciones</h3>
						<ul className="space-y-4">
							{NAV_MENU.map((item, index) => (
								<li key={index}>
									<Link href={item.href || "#"} className="hover:underline">
										{item.label}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div>
						<h3 className="font-heading font-bold text-xl mb-4">Síguenos</h3>
						<ul className="flex gap-2">
							{[
								{ icon: <FaFacebook />, url: EMPRESA.redesSociales.facebook },
								{ icon: <FaYoutube />, url: EMPRESA.redesSociales.youtube },
							].map((item, index) => (
								<li key={index}>
									<a
										href={item.url}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center justify-center size-10 text-xl rounded-full border border-secondary text-secondary hover:bg-secondary hover:text-white transition-colors duration-300"
									>
										{item.icon}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
			<section className="bg-black text-white mt-12 py-6 border-t border-white/20">
				<div className="container text-center">
					<p>&copy; 2026 {EMPRESA.nombre}. Todos los derechos reservados.</p>
					<p className="text font-bold text-secondary">Oficina de Informática</p>
				</div>
			</section>
		</footer>
	)
}
