import Link from "next/link"
import { FaHome, FaEnvelope } from "react-icons/fa"

const ENLACES_SUPERIORES = [
	{ label: "INICIO", href: "/", icon: FaHome },
	{ label: "CONTACTO", href: "/contacto", icon: FaEnvelope },
]

const BarraSuperior = () => {
	return (
		<div className="bg-white border-b border-gray-200">
			<div className="container py-3 flex items-center justify-between">
				<div className="flex flex-col items-start gap-y-2">
					<div className="flex items-center gap-8">
						<img src="/logo-ministerio.png" alt="Ministerio de Educación" className="h-12 object-contain" />
						<img src="/gore-logo.png" alt="Gobierno Regional de Cusco" className="h-12 object-contain" />
						<img src="/logo-ugel.png" alt="UGEL La Convención" className="h-12 object-contain" />
					</div>
					<img src="/letra-ugel-lc.png" alt="UGEL La Convención" className="h-3 object-contain mt-1" />
				</div>
				<div className="hidden md:flex items-center gap-6">
					{ENLACES_SUPERIORES.map((enlace) => (
						<Link
							key={enlace.label}
							href={enlace.href}
							className="flex items-center gap-2 text-sky-500 hover:text-sky-600 transition-colors font-semibold text-sm"
						>
							<enlace.icon className="text-lg" />
							{enlace.label}
						</Link>
					))}
					<Link href="https://www.transparencia.gob.pe" target="_blank" rel="noopener noreferrer">
						<img src="/transparencia.png" alt="Portal de Transparencia" className="h-10 object-contain" />
					</Link>
				</div>
			</div>
		</div>
	)
}

export default BarraSuperior
