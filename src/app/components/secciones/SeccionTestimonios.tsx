"use client"

import Link from "next/link"
import { Suspense, useRef, useState } from "react"
import { FaStar, FaStarHalfStroke } from "react-icons/fa6"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import { Swiper as SwiperType } from "swiper"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import SeccionTitle from "../SeccionTitle"
import TestimonioCard, { TestimonioProps } from "../TestimonioCard"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const TESTIMONIOS: TestimonioProps[] = [
	{
		nombre: "KATERINE BOMBILLA QUISPE",
		stars: 5,
		date: "2025-08-07",
		testimonio:
			"Felicitaciones, una gran Experiencia, una bonita aventura el Sr. Jesus es un buen guia que conoce de su trabajo nos dio toda la seguridad y confianza, también agradecer a Gary que nos tuvo mucha paciencia.",
		imagen: "/assets/testimonios/katerine-bombilla-quispe.jpg",
		enlace: "https://maps.app.goo.gl/TBDDqd5cL9NxWtRd9",
	},
	{
		nombre: "Pilar Meca Correa",
		stars: 5,
		date: "2025-11-07",
		testimonio:
			"¡100% recomendado! Quillabamba travel, una empresa seria, confiable y segura. Con ellos tomé el tour a las cataratas de Illapani y el tour al pongo de Mainique. Los guías, en todo momento, atentos, pacientes y siempre pendientes de los turistas. Todo bien organizado para vivir una de las mejores experiencias de nuestras vidas. Éxitos Quillabamba travel.",
		imagen: "/assets/testimonios/pilar-meca-correa.jpg",
		enlace: "https://maps.app.goo.gl/G76NHC4FnvadXXk16",
	},
	{
		nombre: "Jules Savoure",
		stars: 5,
		date: "2025-05-07",
		testimonio: "Excelente servicio, tour con un guía encantador y experto. Lo recomiendo a cualquiera (solo hispanohablantes).",
		imagen: "/assets/testimonios/jules-savoure.jpg",
		enlace: "https://maps.app.goo.gl/5p1ZHfZS7dfSQ3L47",
	},
	{
		nombre: "Viviana Poma Garcia",
		stars: 5,
		date: "2025-01-07",
		testimonio:
			"Fui al tour sola, la verdad con bastante miedo por la lejanía del lugar, y la verdad. O me arrepiento de haber ido, tanto el guía como los otros turistas nos ayudamos para pasarla bien. Volvería a ir",
		imagen: "/assets/testimonios/viviana-poma-garcia.jpg",
		enlace: "https://maps.app.goo.gl/iHZfpaFYb1QuViCT8",
	},
	{
		nombre: "yoni rayme",
		stars: 5,
		date: "2024-01-07",
		testimonio: "Tengo tantas ganas de poder regresar, un lugar tan perfecto y hermoso rodeado de pura Flora y fauna una bonita experiencia 🍀🍃🤗",
		imagen: "/assets/testimonios/yoni-rayme.jpg",
		enlace: "https://maps.app.goo.gl/EJFribHWFuaAtrqY8",
	},
	{
		nombre: "Shirley Sanchez",
		stars: 5,
		date: "2024-01-07",
		testimonio:
			"¡Muchas gracias QUILLABAMBA TRAVEL100% RECOMENDADO! la mejor agencia en quillabamba. 👍😍 Desde nuestra llegada La calidad y calidez de sus servicios muy buenos, buenos tours y los guias divertidos fueron muy increíbles, la amabilidad de su gente el costo de los  paquetes están accesibles eso es muy bueno, los maravillosos recuerdos que quedarán para siempre.🤗 Pronto regresaremos a vivir la experiencia 😎 ¡¡Gracias!! Quillabamba travel",
		imagen: undefined,
		enlace: "https://maps.app.goo.gl/tcGv13k7BPwrzBtm9",
	},
	{
		nombre: "Katherin Chávez",
		stars: 5,
		date: "2024-01-07",
		testimonio: "Excelente servicio, el viaje espectacular, los guías profesionales y amigables, definitivamente volveré por más tours, el Pongo de Maenique fue mágico.",
		imagen: "/assets/testimonios/katherin-chavez.jpg",
		enlace: "https://maps.app.goo.gl/yMo9AdCNSA83N3CS6",
	},
	{
		nombre: "ERIKA LIZETT MENDOZA PALOMINO",
		stars: 5,
		date: "2024-01-07",
		testimonio: "Fue una experiencia única, nunca olvidare gracias por la atención tam personalizada y la amabilidad de todo el equipo, recomendado!! 😃",
		imagen: undefined,
		enlace: "https://maps.app.goo.gl/Wbywaez2yKvUfZ6A7",
	},
	{
		nombre: "Jessika Rozas",
		stars: 5,
		date: "2024-01-07",
		testimonio: "No sólo conoces paradisíacos lugares entras en conexión con la madre naturaleza. Excelente y recomendado servicio",
		imagen: "/assets/testimonios/jessika-rozas.jpg",
		enlace: "https://maps.app.goo.gl/bddEsd91ZCLXHTn6A",
	},
	{
		nombre: "Flor Yamely Ramos",
		stars: 5,
		date: "2024-01-07",
		testimonio:
			"Una experiencia épica e inolvidable. Recomiendo sin dudar la agencia de viajes Quillabamba Travel para aquellos que buscan vivir momentos extraordinarios y experiencias memorables que perdurarán en la memoria para siempre.",
		imagen: "/assets/testimonios/flor-yamely-ramos.jpg",
		enlace: "https://maps.app.goo.gl/s5Q7BXGf9u3A8BqcA",
	},
]

export default function SeccionTestimonios() {
	const swiperRef = useRef<SwiperType | null>(null)
	const [isBeginning, setIsBeginning] = useState(true)
	const [isEnd, setIsEnd] = useState(false)

	return (
		<section className="seccion">
			<div className="container">
				<SeccionTitle variant="iconografia">
					LO QUE DICEN <span className="text-primary">NUESTROS VIAJEROS</span>
				</SeccionTitle>
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
					{/* Left Side: Google Maps Summary */}
					<div className="lg:col-span-4 flex flex-col items-center text-center">
						<div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 max-w-sm w-full mx-auto">
							<div className="mb-6 flex justify-center">
								<img src="/assets/images/google-reviews.png" alt="Google Reviews" className="h-16 object-contain" />
							</div>

							<h3 className="font-heading font-extrabold text-lg leading-tight mb-2">
								Agencia de viajes <br />
								<span className="text-primary text-xl">Quillabamba Travel</span>
							</h3>

							<div className="flex items-center justify-center gap-2 mb-2">
								<span className="text-4xl font-bold text-gray-900">4.5</span>
								<div className="flex text-yellow-500 text-lg">
									<FaStar />
									<FaStar />
									<FaStar />
									<FaStar />
									<FaStarHalfStroke />
								</div>
							</div>

							<p className="text-gray-500 text-sm mb-6">
								Basado en <strong>22 opiniones</strong>
							</p>

							<Link href="https://maps.app.goo.gl/r1eey136u2EWLEHo6" target="_blank" className="btn btn--primary w-full justify-center">
								Ver comentarios
							</Link>
						</div>
					</div>

					{/* Right Side: Slider */}
					<div className="lg:col-span-8 w-full min-w-0">
						<div className="mb-8 flex items-end justify-end px-2">
							{/* Navigation Buttons Desktop */}
							<div className="hidden sm:flex gap-3">
								<button
									onClick={() => swiperRef.current?.slidePrev()}
									disabled={isBeginning}
									className={`size-12 rounded-full border flex items-center justify-center transition-all duration-300 ${
										isBeginning ? "border-gray-200 text-gray-300 cursor-not-allowed" : "border-primary text-primary hover:bg-primary hover:text-white cursor-pointer shadow-md"
									}`}
									aria-label="Anterior"
								>
									<FiChevronLeft size={24} />
								</button>
								<button
									onClick={() => swiperRef.current?.slideNext()}
									disabled={isEnd}
									className={`size-12 rounded-full border flex items-center justify-center transition-all duration-300 ${
										isEnd ? "border-gray-200 text-gray-300 cursor-not-allowed" : "border-primary text-primary hover:bg-primary hover:text-white cursor-pointer shadow-md"
									}`}
									aria-label="Siguiente"
								>
									<FiChevronRight size={24} />
								</button>
							</div>
						</div>

						<Suspense fallback={<div>Cargando testimonios...</div>}>
							<Swiper
								modules={[Navigation, Autoplay, Pagination]}
								spaceBetween={24}
								slidesPerView={1}
								breakpoints={{
									640: { slidesPerView: 2 },
									1024: { slidesPerView: 2 },
									1280: { slidesPerView: 2.5 },
								}}
								autoplay={{
									delay: 5000,
									disableOnInteraction: false,
									pauseOnMouseEnter: true,
								}}
								pagination={{ clickable: true, dynamicBullets: true }}
								onSwiper={(swiper) => {
									swiperRef.current = swiper
									setIsBeginning(swiper.isBeginning)
									setIsEnd(swiper.isEnd)
								}}
								onSlideChange={(swiper) => {
									setIsBeginning(swiper.isBeginning)
									setIsEnd(swiper.isEnd)
								}}
								className="pb-12!"
							>
								{TESTIMONIOS.map((item, index) => (
									<SwiperSlide key={index} className="h-auto">
										<TestimonioCard testimonio={item} />
									</SwiperSlide>
								))}
							</Swiper>
						</Suspense>
					</div>
				</div>
			</div>
		</section>
	)
}
