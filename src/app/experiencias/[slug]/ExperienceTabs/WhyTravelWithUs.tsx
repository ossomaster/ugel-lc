import { FaMapLocationDot, FaShieldHeart, FaUsers } from "react-icons/fa6"

const REASONS = [
	{
		icon: FaShieldHeart,
		title: "Tu seguridad es nuestra prioridad",
		description: "Todos nuestros guías están altamente capacitados en primeros auxilios.",
	},
	{
		icon: FaMapLocationDot,
		title: "Nuestros Guías Turísticos",
		description: "Seleccionados por su conocimiento de nuestro país y su dedicación a crear viajes inolvidables.",
	},
	{
		icon: FaUsers,
		title: "Grupos pequeños",
		description: "Viaja en grupos de no más de 16 personas, reuniendo a personas solas, parejas, familias y amigos en auténticas aventuras.",
	},
]

const WhyTravelWithUs = () => {
	return (
		<div className="pt-6 border-t border-gray-200">
			<h3 className="font-heading font-bold text-2xl text-primary-dark mb-6">¿Por qué viajar con Nosotros?</h3>
			<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
				{REASONS.map((reason, index) => {
					const Icon = reason.icon
					return (
						<div key={index} className="text-center">
							<div className="flex justify-center mb-4">
								<div className="size-16 rounded-full bg-linear-to-br from-primary to-primary-dark flex items-center justify-center shadow-lg">
									<Icon className="text-xl text-white" />
								</div>
							</div>
							<h3 className="font-heading font-bold text-primary-dark mb-2">{reason.title}</h3>
							<p className="text-sm leading-relaxed">{reason.description}</p>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default WhyTravelWithUs
