"use client"
import { useEffect, useRef, useMemo } from "react"
import lightGallery from "lightgallery"
import type { LightGallery as LightGalleryType } from "lightgallery/lightgallery"
import type { GalleryItem } from "lightgallery/lg-utils"

import "lightgallery/css/lightgallery.css"

import SeccionTitle from "../../components/SeccionTitle"
import { TDestination } from "../../types"

export default function DestinationGallery({ destination }: { destination: TDestination }) {
	const lightGalleryRef = useRef<LightGalleryType | null>(null)
	const galleryUrls = useMemo(() => [destination.coverUrl!, ...(destination.galleryUrls || [])], [destination.coverUrl, destination.galleryUrls])

	useEffect(() => {
		const galleryContainer = document.getElementById("destination-gallery")
		if (galleryContainer && !lightGalleryRef.current && galleryUrls.length > 0) {
			const dynamicElements = galleryUrls.map((item) => ({
				src: item,
				thumb: item,
			}))

			lightGalleryRef.current = lightGallery(galleryContainer, {
				dynamic: true,
				dynamicEl: dynamicElements as GalleryItem[],
				download: false,
				zoom: true,
				thumbnail: false,
				closable: true,
				closeOnTap: true,
				showMaximizeIcon: false,
				showCloseIcon: true,
				counter: true,
			})
		}

		return () => {
			if (lightGalleryRef.current) {
				lightGalleryRef.current.destroy()
				lightGalleryRef.current = null
			}
		}
	}, [galleryUrls])

	const handleOpenGallery = (index: number) => {
		if (lightGalleryRef.current) {
			lightGalleryRef.current.openGallery(index)
		}
	}

	if (galleryUrls.length === 0) return null

	return (
		<section className="py-16 lg:py-24">
			<div className="container">
				<SeccionTitle subtitle="Explora los paisajes que te esperan en esta aventura única.">
					GALERÍA DE <span className="text-primary">FOTOS</span>
				</SeccionTitle>
				<div id="destination-gallery" className="grid grid-cols-2 md:grid-cols-3 gap-4">
					{galleryUrls.map((img, index) => (
						<div
							key={index}
							onClick={() => handleOpenGallery(index)}
							className={`rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer ${index === 0 ? "col-span-2 row-span-2" : ""}`}
						>
							<img src={img} alt={`Galería ${index + 1}`} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
