import { asset } from "../helpers"

const DEFAULT_IMAGE = asset("/assets/images/fondo-iconografia-03.png")
const DEFAULT_COLOR = "var(--color-primary)"

interface PageHeroOrganigramaProps {
	title: string
	subtitle?: string
	image?: string
	color?: string
}

export default function PageHeroOrganigrama({ title, subtitle, image = DEFAULT_IMAGE, color = DEFAULT_COLOR }: PageHeroOrganigramaProps) {
	return (
		<section
			className="relative py-12 text-white overflow-hidden bg-cover bg-center"
			style={{
				backgroundImage: `linear-gradient(to right, color-mix(in srgb, ${color} 70%, transparent), color-mix(in srgb, ${color} 70%, transparent)), url(${image})`,
			}}
		>
			<div className="container relative z-10 text-center">
				<h1 className="text-3xl md:text-4xl font-heading font-extrabold mb-4 text-shadow-lg">{title}</h1>
				{subtitle && <p className="text-lg max-w-2xl mx-auto text-white/90 text-shadow-lg">{subtitle}</p>}
			</div>
		</section>
	)
}

