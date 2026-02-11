"use client"

import clsx from "clsx"
import { useState } from "react"
import { FaLocationDot } from "react-icons/fa6"
import HeroFavoriteButton from "../../components/HeroFavoriteButton"
import { TDestination } from "../../types"
import { EFavoritoType } from "@/app/stores/favoritos.store"

export default function DestinationHero({ destination }: { destination: TDestination }) {
	const [activeSlide, setActiveSlide] = useState(0)
	const slides = [destination.coverUrl, ...(destination.galleryUrls?.slice(0, 2) || [])].filter(Boolean) as string[]
	const locationsName =
		destination.locations
			?.map((loc) => loc.location?.title)
			.filter(Boolean)
			.join(", ") || ""

	return (
		<section className="relative py-24 lg:py-36 min-h-[500px] lg:min-h-[650px] flex items-center text-white bg-black">
			{slides.map((slide, index) => (
				<div
					key={index}
					className={clsx("absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-in-out", index === activeSlide ? "opacity-100" : "opacity-0")}
					style={{
						backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url("${slide}")`,
					}}
				/>
			))}

			<div className="container relative">
				<div className="relative lg:w-1/2">
					{locationsName && (
						<strong className="inline-flex bg-primary/70 px-3 py-1 text-sm rounded-lg font-semibold gap-2 items-center">
							<FaLocationDot className="text-secondary" /> {locationsName}
						</strong>
					)}

					<h1 className="text-3xl lg:text-5xl font-heading font-black uppercase leading-tight mt-2 line-clamp-3">{destination.title}</h1>
					<p className="text-base lg:text-lg mt-4 max-w-prose line-clamp-3">{destination.shortDescription}</p>

					<div className="flex flex-wrap gap-4 mt-4">
						<HeroFavoriteButton id={destination.id} type={EFavoritoType.DESTINATION} />
					</div>
				</div>
			</div>

			{slides.length > 1 && (
				<div className="absolute bottom-0 left-0 right-0 translate-y-1/2">
					<div className="container">
						<ul className="grid grid-cols-3 gap-2 lg:gap-4 ml-auto w-full lg:w-1/2 max-w-[70%] lg:max-w-[50%]">
							{slides.map((slide, index) => (
								<li key={index} onClick={() => setActiveSlide(index)} className="cursor-pointer group">
									<img
										src={slide}
										alt={`Slide ${index}`}
										className={clsx("block aspect-square object-cover rounded-lg [box-shadow:0_0_1rem_rgb(0_0_0_/_0.5)] transition-all duration-300", {
											"brightness-100 scale-105 ring-2 ring-primary": index === activeSlide,
											"brightness-75 hover:brightness-90": index !== activeSlide,
										})}
									/>
								</li>
							))}
						</ul>
					</div>
				</div>
			)}
		</section>
	)
}
