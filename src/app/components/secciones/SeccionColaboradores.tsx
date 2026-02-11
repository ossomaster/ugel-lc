import SeccionTitle from "../SeccionTitle"

const LOGOS = [
	"/assets/images/gercetur.png",
	"/assets/images/mtb-pongo-de-maenique.png",
	"/assets/images/team-la-convencion.png",
]

export default function SeccionColaboradores() {
	return (
		<section className="seccion">
			<div className="container">
				<div>
					<SeccionTitle subtitle="Trabajamos en conjunto por un turismo sostenible en la Provincia de La Convención (Cusco)">
						NUESTROS <span className="text-primary">COLABORADORES</span>
					</SeccionTitle>
				</div>
				<div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
					{LOGOS.map((logo, index) => (
						<div key={index}>
							<img src={logo} alt={`Colaborador ${index + 1}`} className="h-16 lg:h-24 w-auto object-contain" />
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
