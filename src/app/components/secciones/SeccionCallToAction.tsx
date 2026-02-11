"use client"

import CountUp from "react-countup"
import { FaCalendar } from "react-icons/fa6"
import { EMPRESA } from "../../constants/constants"

export default function SeccionCallToAction() {
	const whatsappNumber = EMPRESA.whatsapp.replace(/\s/g, "")
	const message = "Hola Quillabamba Travel, deseo reservar una aventura con ustedes."
	const whatsappLink = `https://wa.me/51${whatsappNumber}?text=${encodeURIComponent(message)}`

	return (
		<section
			className="pt-24 pb-12 lg:pt-48 lg:pb-24 text-white text-center bg-cover bg-center"
			style={{
				backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.6)), url("https://growby-pry1082-portal-files-prod.s3.amazonaws.com/attachment/4202410091750540147763.jpg")',
			}}
		>
			<div className="container">
				<div className="max-w-prose mx-auto">
					<h2 className="font-heading font-extrabold text-3xl lg:text-4xl tracking-wide mb-4">¡Prepárate para tu próxima aventura en la Selva Cusqueña!</h2>
					<p className="text-base lg:text-lg font-semibold">
						Reserva ahora y descubre destinos increíbles, experiencias inolvidables y la magia de viajar con nosotros. Tu aventura te espera.
					</p>
					<div className="text-center mt-8 mb-12 lg:mb-24">
						<a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
							Reservar Ahora <FaCalendar className="inline ml-2" />
						</a>
					</div>
				</div>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
					{[
						{
							value: 1500,
							label: "Viajes",
						},
						{
							value: 10,
							label: "Destinos",
						},
						{
							value: 5,
							label: "Años de experiencia",
						},
						{
							value: 5000,
							label: "Clientes satisfechos",
						},
					].map((stat, index) => (
						<div key={index} className="text-center">
							<h3 className="font-heading font-extrabold text-4xl lg:text-5xl">
								<CountUp end={stat.value} duration={2.5} enableScrollSpy scrollSpyOnce />+
							</h3>
							<p className="mt-2 text-sm lg:text-base">{stat.label}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
