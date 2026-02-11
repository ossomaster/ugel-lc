"use client"

import SeccionTitle from "../SeccionTitle"
import { FaHiking, FaRegStar, FaLeaf } from "react-icons/fa"

export default function SeccionIntroduccion() {
	return (
		<section className="seccion pt-36!">
			<div className="container">
				<SeccionTitle subtitle="Tu puerta de entrada a la Amazonía de los Incas">
					DESCUBRE LA MAGIA DE LA <span className="text-primary">SELVA CUSQUEÑA</span> Y SUS SECRETOS
				</SeccionTitle>

				<div className="max-w-4xl mx-auto text-center text-gray-600 mb-12">
					<p className="mb-6">
						Prepárate para una aventura inolvidable. Entra en un mundo de maravillas naturales y descubre tu destino perfecto en la exuberante selva cusqueña. En Quillabamba Travel, somos especialistas en revelar los secretos de la provincia de La Convención, el Eterno Verano de Cusco.
					</p>
					<p>
						Brindamos experiencias auténticas que conectan a nuestros viajeros con la esencia de la naturaleza y la cultura local. Desde la misteriosa belleza de nuestros bosques hasta emocionantes actividades al aire libre, garantizamos siempre la máxima calidad, seguridad y sostenibilidad en cada paso del camino.
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
					<div className="flex flex-col items-center text-center bg-white shadow-xl p-6 rounded-lg border border-gray-100">
						<div className="bg-secondary/10 p-4 rounded-full mb-6">
							<FaHiking className="text-4xl text-primary" />
						</div>
						<p className="text-gray-600 text-sm">
							Somos un equipo apasionado por la naturaleza y nuestra tierra. Operamos directamente en Quillabamba y La Convención, compartiendo contigo el amor por nuestra selva, su biodiversidad y su enriquecedora historia.
						</p>
					</div>

					<div className="flex flex-col items-center text-center bg-white shadow-xl p-6 rounded-lg border border-gray-100">
						<div className="bg-secondary/10 p-4 rounded-full mb-6">
							<FaRegStar className="text-4xl text-primary" />
						</div>
						<p className="text-gray-600 text-sm">
							Ofrecemos destinos únicos y experiencias de conexión y aprendizaje en lugares inexplorados. Diseñamos cada itinerario para que descubras la verdadera esencia de la selva cusqueña a tu propio ritmo y preferencia.
						</p>
					</div>

					<div className="flex flex-col items-center text-center bg-white shadow-xl p-6 rounded-lg border border-gray-100">
						<div className="bg-secondary/10 p-4 rounded-full mb-6">
							<FaLeaf className="text-4xl text-primary" />
						</div>
						<p className="text-gray-600 text-sm">
							Viajamos de manera responsable. Nuestra filosofía se centra en respetar el medio ambiente y las culturas locales, promoviendo la conservación y creyendo firmemente que el turismo sostenible es clave para nuestra región.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
