"use client"

import { useState, useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import { Swiper as SwiperType } from "swiper"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import DestinationCard from "../../DestinationCard"
import { TDestination } from "@/app/types"

import "swiper/css"
import "swiper/css/navigation"

interface Props {
	destinations: TDestination[]
}

export default function SeccionDestinosListCarousel({ destinations }: Props) {
	const [currentSlide, setCurrentSlide] = useState(1)
	const swiperRef = useRef<SwiperType | null>(null)

	return (
		<>
			<Swiper
				modules={[Navigation]}
				spaceBetween={24}
				slidesPerView={1}
				breakpoints={{
					640: { slidesPerView: 2 },
					768: { slidesPerView: 3 },
					1024: { slidesPerView: 4 },
				}}
				onSwiper={(swiper) => (swiperRef.current = swiper)}
				onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex + 1)}
				className="mb-8 pb-4!"
			>
				{destinations.map((destination) => (
					<SwiperSlide key={destination.id} className="h-auto">
						<DestinationCard destination={destination} />
					</SwiperSlide>
				))}
			</Swiper>

			<div className="flex justify-between items-center border-t border-white/20 pt-6">
				<div className="text-lg font-heading font-extrabold tracking-wider">
					<span className="text-secondary text-2xl">{currentSlide.toString().padStart(2, "0")}</span>
					<span className="mx-2 text-white/50">———</span>
					<span className="text-white/50 text-2xl">{destinations.length.toString().padStart(2, "0")}</span>
				</div>
				<div className="flex gap-4">
					<button
						onClick={() => swiperRef.current?.slidePrev()}
						className="size-12 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:border-secondary hover:text-secondary transition-all duration-300 cursor-pointer"
						aria-label="Anterior"
					>
						<FiChevronLeft size={24} />
					</button>
					<button
						onClick={() => swiperRef.current?.slideNext()}
						className="size-12 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:border-secondary hover:text-secondary transition-all duration-300 cursor-pointer"
						aria-label="Siguiente"
					>
						<FiChevronRight size={24} />
					</button>
				</div>
			</div>
		</>
	)
}
