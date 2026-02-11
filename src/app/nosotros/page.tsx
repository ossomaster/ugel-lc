import { Metadata } from "next"
import { FaClock, FaGlobeAmericas, FaHeart, FaLeaf, FaMoneyBillWave, FaPlane } from "react-icons/fa"
import MainLayout from "../components/MainLayout"
import PageHero from "../components/PageHero"
import SeccionTitle from "../components/SeccionTitle"

export const metadata: Metadata = {
	title: "Sobre Nosotros | Quillabamba Travel",
	description: "Descubre quiénes somos y nuestra pasión por mostrarte lo mejor de Quillabamba y La Convención. Agencia de viajes comprometida con el turismo sostenible.",
}

export default function Nosotros() {
	return (
		<MainLayout navbarProps={{ sticky: true }}>
			<PageHero title="Sobre Nosotros" subtitle="Descubre quiénes somos y nuestra pasión por mostrarte lo mejor de Quillabamba y La Convención." />

			{/* Acerca de & Objetivo */}
			<section className="seccion container">
				<div className="grid md:grid-cols-2 gap-12 items-center">
					<div className="space-y-6">
						<h2 className="text-3xl font-heading font-bold text-primary-dark">Acerca de Quillabamba Travel</h2>
						<p className="text-gray-600 leading-relaxed">
							Prepárate para una aventura inolvidable. Entra en un mundo de maravillas naturales y descubre tu destino perfecto. Nuestras experiencias de viaje en la exuberante selva
							cusqueña te esperan. Desde la misteriosa belleza de la selva hasta las emocionantes actividades al aire libre, tu viaje de ensueño comienza aquí.
						</p>
					</div>
					<div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-secondary">
						<h3 className="text-2xl font-heading font-bold text-secondary mb-4">Nuestro Objetivo</h3>
						<p className="text-gray-600">
							Brindar experiencias auténticas que conecten a nuestros viajeros con la esencia de la naturaleza y la cultura local, garantizando siempre la máxima calidad, seguridad y
							sostenibilidad en cada aventura.
						</p>
					</div>
				</div>
			</section>

			{/* Features */}
			<section className="seccion container">
				<div className="grid md:grid-cols-3 gap-8">
					<div className="text-center p-6 rounded-xl hover:shadow-xl transition-shadow duration-300 bg-white">
						<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
							<FaGlobeAmericas className="text-3xl" />
						</div>
						<h3 className="text-xl font-heading font-bold mb-3 text-primary">Destinos Únicos</h3>
						<p className="text-gray-600">Contamos con experiencias únicas, aventuras, conexión y aprendizaje en lugares inexplorados.</p>
					</div>
					<div className="text-center p-6 rounded-xl hover:shadow-xl transition-shadow duration-300 bg-white">
						<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 text-secondary mb-6">
							<FaMoneyBillWave className="text-3xl" />
						</div>
						<h3 className="text-xl font-heading font-bold mb-3 text-primary">Nuestros Precios</h3>
						<p className="text-gray-600">Nuestros costos incluyen todos los servicios para hacer de tu experiencia completa y sin preocupaciones.</p>
					</div>
					<div className="text-center p-6 rounded-xl hover:shadow-xl transition-shadow duration-300 bg-white">
						<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-dark/10 text-primary-dark mb-6">
							<FaClock className="text-3xl" />
						</div>
						<h3 className="text-xl font-heading font-bold mb-3 text-primary">Atención 24/7</h3>
						<p className="text-gray-600">Nuestra atención al cliente está a la orden para ayudarte a tomar una mejor decisión de tu viaje en cualquier momento.</p>
					</div>
				</div>
			</section>

			{/* Filosofía */}
			<section className="seccion container">
				<SeccionTitle subtitle="Nuestra esencia y compromiso">Nuestra Filosofía</SeccionTitle>

				<div className="max-w-4xl mx-auto text-center mb-16">
					<p className="text-gray-600 leading-relaxed mb-8">
						Viajar es una experiencia humana valiosa que nos lleva a transitar fuera de lo conocido, fuera de nosotros mismos. Es una forma de estar en el mundo, de estar presente en el
						momento y de comprometernos con el presente. Pero también es importante viajar de manera responsable, cuidando el medio ambiente y respetando las culturas locales. Viajar nos
						permite conectar con otras personas y culturas, y aprender de ellas. Por lo tanto, nuestra filosofía de viajes se basa en vivir y disfrutar de la experiencia de viajar, pero
						también en hacerlo de manera responsable, de conexión y de aprendizaje.
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8">
					{/* Vive */}
					<div className="bg-primary text-white p-8 rounded-2xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
						<div className="absolute top-0 right-0 p-4 opacity-20">
							<FaLeaf className="text-8xl" />
						</div>
						<h3 className="text-2xl font-heading font-bold mb-6 relative z-10">Vive</h3>
						<ul className="space-y-4 relative z-10">
							<li className="flex items-start gap-3">
								<span className="mt-1 bg-white/20 p-1 rounded-full">
									<FaLeaf className="text-xs" />
								</span>
								<span>Sumergirse en la naturaleza y el entorno local</span>
							</li>
							<li className="flex items-start gap-3">
								<span className="mt-1 bg-white/20 p-1 rounded-full">
									<FaLeaf className="text-xs" />
								</span>
								<span>Disfrutar de la libertad y la espontaneidad</span>
							</li>
							<li className="flex items-start gap-3">
								<span className="mt-1 bg-white/20 p-1 rounded-full">
									<FaLeaf className="text-xs" />
								</span>
								<span>Experimentar nuevas experiencias y desafíos</span>
							</li>
						</ul>
					</div>

					{/* Disfruta */}
					<div className="bg-secondary text-white p-8 rounded-2xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
						<div className="absolute top-0 right-0 p-4 opacity-20">
							<FaHeart className="text-8xl" />
						</div>
						<h3 className="text-2xl font-heading font-bold mb-6 relative z-10">Disfruta</h3>
						<ul className="space-y-4 relative z-10">
							<li className="flex items-start gap-3">
								<span className="mt-1 bg-white/20 p-1 rounded-full">
									<FaHeart className="text-xs" />
								</span>
								<span>Apreciar la belleza del mundo y la diversidad cultural</span>
							</li>
							<li className="flex items-start gap-3">
								<span className="mt-1 bg-white/20 p-1 rounded-full">
									<FaHeart className="text-xs" />
								</span>
								<span>Conectar con otras personas y compartir momentos especiales</span>
							</li>
							<li className="flex items-start gap-3">
								<span className="mt-1 bg-white/20 p-1 rounded-full">
									<FaHeart className="text-xs" />
								</span>
								<span>Descubrir nuevas pasiones e intereses</span>
							</li>
						</ul>
					</div>

					{/* Viaja */}
					<div className="bg-primary-dark text-white p-8 rounded-2xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
						<div className="absolute top-0 right-0 p-4 opacity-20">
							<FaPlane className="text-8xl" />
						</div>
						<h3 className="text-2xl font-heading font-bold mb-6 relative z-10">Viaja</h3>
						<ul className="space-y-4 relative z-10">
							<li className="flex items-start gap-3">
								<span className="mt-1 bg-white/20 p-1 rounded-full">
									<FaPlane className="text-xs" />
								</span>
								<span>Explorar lugares desconocidos y aprender sobre diferentes culturas</span>
							</li>
							<li className="flex items-start gap-3">
								<span className="mt-1 bg-white/20 p-1 rounded-full">
									<FaPlane className="text-xs" />
								</span>
								<span>Respetar el medio ambiente y promover la sostenibilidad</span>
							</li>
							<li className="flex items-start gap-3">
								<span className="mt-1 bg-white/20 p-1 rounded-full">
									<FaPlane className="text-xs" />
								</span>
								<span>Inmersión en la realidad local y aprendizaje de nuevas perspectivas</span>
							</li>
						</ul>
					</div>
				</div>

				<div className="mt-12 text-center max-w-3xl mx-auto">
					<p className="text-gray-600 italic">
						&quot;Esta filosofía nos permite abrir nuestras mentes y almas a nuevas experiencias, enriqueciendo nuestras vidas y fortaleciendo nuestro compromiso con el mundo que nos
						rodea.&quot;
					</p>
				</div>
			</section>

			{/* Nuestro Equipo */}
			<section className="seccion container">
				<div className="grid md:grid-cols-2 gap-12 items-center">
					<div className="order-2 md:order-1">
						<h2 className="text-3xl font-heading font-bold text-primary-dark mb-6">Nuestro Equipo</h2>
						<p className="text-gray-600 mb-6 leading-relaxed">
							Somos un equipo de trabajo apasionado por la naturaleza, el turismo y nuestra tierra. Trabajamos en Quillabamba, La Convención, Cusco, y compartimos nuestra pasión por la
							aventura, el conocimiento y la naturaleza.
						</p>
						<p className="text-gray-600 leading-relaxed">
							Estamos comprometidos con la conservación y protección de nuestra naturaleza y cultura, y creemos que el turismo sostenible puede ser una herramienta poderosa para el
							desarrollo de nuestra región.
						</p>
					</div>
					<div className="order-1 md:order-2 flex justify-center">
						<img
							src="/assets/images/equipo.jpg"
							alt="Equipo Quillabamba Travel"
							className="w-full aspect-square object-cover rounded-2xl shadow-lg"
						/>
					</div>
				</div>
			</section>
		</MainLayout>
	)
}
