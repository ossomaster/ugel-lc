import { FaEnvelope, FaLocationDot, FaPhone, FaWhatsapp } from "react-icons/fa6"
import SeccionTitle from "../SeccionTitle"
import { EMPRESA } from "../../constants/constants"

export default function SeccionContacto() {
	return (
		<section className="seccion bg-white">
			<div className="container">
				<div>
					<SeccionTitle subtitle="Contáctanos y comienza a planificar tu próxima aventura. Estamos listos para ayudarte a crear experiencias inolvidables.">
						ESTAMOS <span className="text-primary">AQUÍ PARA TI</span>
					</SeccionTitle>
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					<div>
						<h3 className="font-heading font-bold text-2xl tracking-wide mb-6">Información de Contacto</h3>
						<ul className="space-y-6">
							<li className="flex items-start gap-4">
								<span className="inline-flex items-center justify-center size-10 shrink-0 bg-primary text-white rounded-full text-xl">
									<FaLocationDot />
								</span>
								<div>
									<h4 className="font-semibold">Dirección</h4>
									<p className="text-gray-600">{EMPRESA.direccion}</p>
								</div>
							</li>
							<li className="flex items-start gap-4">
								<span className="inline-flex items-center justify-center size-10 shrink-0 bg-primary text-white rounded-full text-xl">
									<FaPhone />
								</span>
								<div>
									<h4 className="font-semibold">Teléfono</h4>
									{EMPRESA.telefonos.map((telefono, index) => (
										<a key={index} href={`tel:+51${telefono.replace(/\s/g, "")}`} className="text-gray-600 hover:text-primary block">
											+51 {telefono}
										</a>
									))}
								</div>
							</li>
							<li className="flex items-start gap-4">
								<span className="inline-flex items-center justify-center size-10 shrink-0 bg-primary text-white rounded-full text-xl">
									<FaWhatsapp />
								</span>
								<div>
									<h4 className="font-semibold">WhatsApp</h4>
									<a href={`https://wa.me/51${EMPRESA.whatsapp.replace(/\s/g, "")}`} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">
										+51 {EMPRESA.whatsapp}
									</a>
								</div>
							</li>
							<li className="flex items-start gap-4">
								<span className="inline-flex items-center justify-center size-10 shrink-0 bg-primary text-white rounded-full text-xl">
									<FaEnvelope />
								</span>
								<div>
									<h4 className="font-semibold">Correo Electrónico</h4>
									<a href={`mailto:${EMPRESA.correo}`} className="text-gray-600 hover:text-primary">
										{EMPRESA.correo}
									</a>
								</div>
							</li>
						</ul>
						<div className="mt-8">
							<h4 className="font-semibold mb-2">Horario de Atención</h4>
							<p className="text-gray-600">{EMPRESA.horario}</p>
						</div>
					</div>
					<div>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1964.9937542848972!2d-72.69343955683497!3d-12.863643559112242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91727fb26b42747f%3A0xd64111c475dac0d!2sAgencia%20de%20viajes%20%7C%20Quillabamba%20Travel!5e1!3m2!1ses-419!2spe!4v1764300235010!5m2!1ses-419!2spe"
							width="100%"
							height="100%"
							style={{ border: 0 }}
							allowFullScreen
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							className="rounded-lg shadow-lg min-h-[300px] lg:min-h-[500px]"
						></iframe>
					</div>
				</div>
			</div>
		</section>
	)
}
