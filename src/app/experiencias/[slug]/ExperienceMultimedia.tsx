"use client"

import clsx from "clsx"
import { TExperience } from "../../types"
import { useModal } from "@/app/contexts/ModalContext"

interface ExperienceMultimediaProps {
	experience: TExperience
}

export default function ExperienceMultimedia({ experience }: ExperienceMultimediaProps) {
	const { openMapModal, openVideoModal } = useModal()

	const items = [
		{
			id: "video",
			label: "VER VÍDEO",
			onClick: openVideoModal,
			bg: experience.coverUrl,
			disabled: !experience.coverVideo,
		},
		{
			id: "brochure",
			label: "DESCARGAR BROCHURE",
			url: experience.brochureUrl,
			bg: experience.galleryUrls?.[0] || experience.coverUrl,
			disabled: !experience.brochureUrl,
		},
		{
			id: "map",
			label: "VER MAPA",
			onClick: openMapModal,
			bg: experience.touristMapUrl?.match(/\.(jpeg|jpg|gif|png)$/i) ? experience.touristMapUrl : experience.galleryUrls?.[1] || experience.coverUrl,
			disabled: !experience.touristMapUrl,
		},
	]

	return (
		<section className="bg-white pb-12 lg:pb-24">
			<div className="container">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{items.map((item) => (
						<a
							key={item.id}
							href={item.url || undefined}
							onClick={
								item.onClick
									? (e) => {
											e.preventDefault()
											item.onClick!()
										}
									: undefined
							}
							target="_blank"
							rel="noopener noreferrer"
							className={clsx("group relative overflow-hidden rounded-xl w-full aspect-video flex items-center justify-center shadow-lg cursor-pointer", {
								"pointer-events-none opacity-60": item.disabled,
							})}
						>
							<div className="absolute inset-0 bg-gray-900">
								{item.bg && (
									<img
										src={item.bg}
										alt={item.label}
										className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-50"
									/>
								)}
							</div>

							<div className="relative z-10 flex flex-col items-center justify-center gap-6">
								<span className="rounded-lg border border-white text-white font-heading font-bold uppercase px-6 py-2 tracking-widest leading-tight text-sm hover:bg-white hover:text-primary transition-colors duration-300">
									{item.label}
								</span>
							</div>
						</a>
					))}
				</div>
			</div>
		</section>
	)
}
