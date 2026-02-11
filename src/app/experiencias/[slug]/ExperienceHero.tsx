"use client"

import clsx from "clsx"
import { useState } from "react"
import { FaChevronLeft, FaChevronRight, FaLocationDot, FaPaperPlane } from "react-icons/fa6"
import HeroFavoriteButton from "../../components/HeroFavoriteButton"
import { TExperience } from "../../types"
import { EFavoritoType } from "@/app/stores/favoritos.store"

export default function ExperienceHero({ experience, whatsappLink }: { experience: TExperience; whatsappLink: string }) {
	const [activeSlide, setActiveSlide] = useState(0)
	const slides = [experience.coverUrl, ...(experience.galleryUrls?.slice(0, 2) || [])].filter(Boolean) as string[]
	const locationName = experience.locations?.[0]?.location?.title || ""

	const prevIndex = (activeSlide - 1 + slides.length) % slides.length
	const nextIndex = (activeSlide + 1) % slides.length

	return (
		<section className="relative py-28 lg:py-48 flex-center text-white bg-black group/hero">
			{slides.map((slide, index) => (
				<div
					key={index}
					className={clsx("absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-in-out", index === activeSlide ? "opacity-100" : "opacity-0")}
					style={{
						backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("${slide}")`,
					}}
				/>
			))}

			{slides.length > 1 && (
				<>
					<button
						onClick={() => setActiveSlide(prevIndex)}
						className="absolute left-0 bottom-0 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 z-20 w-18 lg:w-22 rounded-r-lg aspect-square lg:aspect-3/4 shadow-2xl group/btn cursor-pointer"
					>
						<img
							src={slides[prevIndex]}
							alt="Previous"
							className="absolute inset-0 w-full h-full rounded-r-lg object-cover brightness-75 group-hover/btn:brightness-100 transition-all duration-300"
						/>
						<div className="absolute inset-0 flex items-center justify-center">
							<FaChevronLeft className="text-2xl lg:text-3xl drop-shadow-md group-hover/btn:-translate-x-1 transition-transform duration-300" />
						</div>
					</button>

					<button
						onClick={() => setActiveSlide(nextIndex)}
						className="absolute right-0 bottom-0 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 z-20 w-18 lg:w-22 rounded-l-lg aspect-square lg:aspect-3/4 shadow-2xl group/btn cursor-pointer"
					>
						<img
							src={slides[nextIndex]}
							alt="Next"
							className="absolute inset-0 w-full h-full rounded-l-lg object-cover brightness-75 group-hover/btn:brightness-100 transition-all duration-300"
						/>
						<div className="absolute inset-0 flex items-center justify-center">
							<FaChevronRight className="text-2xl lg:text-3xl drop-shadow-md group-hover/btn:translate-x-1 transition-transform duration-300" />
						</div>
					</button>
				</>
			)}

			<div className="container relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-x-12">
					<div>
						{locationName && (
							<strong className="inline-flex bg-primary/70 px-3 py-1 text-sm rounded-lg font-semibold gap-2 items-center">
								<FaLocationDot className="text-secondary" /> {locationName}
							</strong>
						)}
						<h1 className="text-3xl lg:text-5xl font-heading font-black uppercase leading-tight mt-2">{experience.title}</h1>
						<p className="text-base lg:text-lg mt-4 max-w-prose">{experience.shortDescription}</p>
						<div className="flex flex-wrap gap-4 mt-6">
							<a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
								Reservar Ahora
								<FaPaperPlane className="inline ml-2" />
							</a>
							<HeroFavoriteButton id={experience.id} type={EFavoritoType.EXPERIENCE} />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
