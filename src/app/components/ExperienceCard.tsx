import Link from "next/link"
import clsx from "clsx"
import { FaClock, FaMountain, FaUserGroup, FaChartSimple, FaStar } from "react-icons/fa6"
import { TExperience } from "../types"
import { getRoute } from "../helpers"
import { ERutas } from "../constants/constants"
import CardFavoriteButton from "./CardFavoriteButton"
import { EFavoritoType } from "../stores/favoritos.store"

export default function ExperienceCard({ experience, variant = "default" }: { experience: TExperience; variant?: "default" | "small" }) {
	const isSmall = variant === "small"
	const locationName = experience.locations?.[0]?.location?.title || ""

	return (
		<Link
			href={getRoute(ERutas.EXPERIENCIAS_SHOW, { slug: experience.slug })}
			className={clsx("group flex flex-col bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 h-full border-2 hover:shadow-xl", {
				"max-w-md mx-auto": isSmall,
				"border-transparent": !experience.isPopular,
				"border-secondary": experience.isPopular,
			})}
		>
			<figure
				className={clsx("relative overflow-hidden shrink-0", {
					"aspect-video": isSmall,
					"aspect-4/3": !isSmall,
				})}
			>
				<img src={experience.coverThumbUrl!} alt={`Quillabamba Travel - ${experience.title}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
				{experience.isPopular && (
					<span className="absolute top-0 left-0 flex-center gap-2 bg-secondary text-white text-xs font-semibold px-3 py-1 rounded-br-lg">
						<FaStar className="inline-block text-sm" />
						Más popular
					</span>
				)}
				<CardFavoriteButton id={experience.id} type={EFavoritoType.EXPERIENCE} />
			</figure>

			<div className={clsx("flex flex-col grow", { "p-5": !isSmall, "p-4": isSmall, "bg-secondary/5": experience.isPopular })}>
				<div
					className={clsx("flex items-center justify-between text-slate-500 font-medium uppercase tracking-wide", {
						"text-[10px] mb-2": isSmall,
						"text-xs mb-3": !isSmall,
					})}
				>
					<div className="flex items-center gap-1.5">
						<FaClock className="text-primary text-sm" />
						<span>{experience.duration || "Variable"}</span>
					</div>
					<div className="flex items-center gap-1.5">
						<FaChartSimple className="text-slate-400 text-sm" />
						<span>{experience.difficultyStr || "Moderado"}</span>
					</div>
				</div>

				<h3
					className={clsx("font-heading font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-2", {
						"text-xl": !isSmall,
						"text-base": isSmall,
					})}
				>
					{experience.title}
				</h3>

				{locationName && <p className="text-xs font-semibold text-slate-500 mb-4 line-clamp-1 border-b border-gray-100 pb-2">{locationName}</p>}

				{!isSmall && <p className="text-sm text-slate-600 mb-4 line-clamp-3 leading-relaxed grow">{experience.shortDescription}</p>}

				<div
					className={clsx("mt-auto grid grid-cols-2 gap-2 text-slate-600 pt-2", {
						"text-sm": !isSmall,
						"text-xs": isSmall,
					})}
				>
					<div className="space-y-2 flex flex-col justify-end">
						{experience.groupSize && (
							<div className="flex items-center gap-2" title="Tamaño del grupo">
								<FaUserGroup className="text-slate-400 w-4" />
								<span>{experience.groupSize}</span>
							</div>
						)}
						{experience.altitude && (
							<div className="flex items-center gap-2" title="Altitud">
								<FaMountain className="text-slate-400 w-4" />
								<span>{experience.altitude}</span>
							</div>
						)}
					</div>

					<div className="flex flex-col items-end justify-end gap-1">
						{experience.pricePerPerson > 0 && (
							<div className="text-right">
								<span className="text-[10px] text-slate-500 uppercase tracking-wider block">Desde</span>
								<span className="font-bold text-xl text-slate-900">S/ {experience.pricePerPerson}</span>
							</div>
						)}
					</div>
				</div>
				<div className="w-full mt-4">
					<span className="btn btn--primary btn--block">Ver Itinerario</span>
				</div>
			</div>
		</Link>
	)
}
