"use client"

import clsx from "clsx"
import Link from "next/link"
import { useCallback, useEffect, useState } from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { SLIDES } from "../../../constants/constants"
import { asset } from "../../../helpers"

export default function MainHero() {
	const [activeSlide, setActiveSlide] = useState(0)
	const totalSlides = SLIDES.length

	const nextSlide = useCallback(() => {
		setActiveSlide((prev) => (prev + 1) % totalSlides)
	}, [totalSlides])

	const prevSlide = () => {
		setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
	}

	useEffect(() => {
		const interval = setInterval(nextSlide, 5000)
		return () => clearInterval(interval)
	}, [nextSlide])

	return (
		<section className="relative h-125 lg:h-160 overflow-hidden bg-black">
			{SLIDES.map((slide, index) => (
				<div
					key={index}
					className={clsx("absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-in-out", index === activeSlide ? "opacity-100" : "opacity-0")}
					style={{
						backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url("${asset(slide.image)}")`,
					}}
				/>
			))}

			<div className="absolute inset-0 flex items-center">
				<div className="container">
					<div className="max-w-2xl text-white">
						<h1 className="text-3xl lg:text-5xl font-heading font-black leading-tight">{SLIDES[activeSlide].title}</h1>
						<p className="text-base lg:text-lg mt-4 leading-relaxed opacity-90">{SLIDES[activeSlide].description}</p>
						<div className="mt-6">
							{/* <Link href={SLIDES[activeSlide].buttonUrl} className="btn btn--primary">
								{SLIDES[activeSlide].buttonText}
							</Link> */}
						</div>
					</div>
				</div>
			</div>

			<button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-16 flex-center bg-black/30 hover:bg-black/50 text-white rounded-sm transition-colors cursor-pointer">
				<FaChevronLeft className="text-lg" />
			</button>
			<button
				onClick={nextSlide}
				className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-16 flex-center bg-black/30 hover:bg-black/50 text-white rounded-sm transition-colors cursor-pointer"
			>
				<FaChevronRight className="text-lg" />
			</button>
		</section>
	)
}
