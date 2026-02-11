import clsx from "clsx"
import Link from "next/link"
import { ERutas } from "../constants/constants"
import { getRoute } from "../helpers"
import { TDestination } from "../types"
import CardFavoriteButton from "./CardFavoriteButton"
import { EFavoritoType } from "../stores/favoritos.store"

export default function DestinationCard({ destination, variant = "default" }: { destination: TDestination; variant?: "default" | "small" }) {
	const isSmall = variant === "small"
	const locationsName =
		destination.locations
			?.map((loc) => loc.location?.title)
			.filter(Boolean)
			.join(", ") || ""

	return (
		<Link href={getRoute(ERutas.DESTINOS_SHOW, { slug: destination.slug })} className="group block text-center">
			<div
				className={clsx("relative overflow-hidden aspect-square rounded-full mx-auto mb-4 shadow-lg", {
					"size-56": !isSmall,
					"size-32 md:size-36": isSmall,
				})}
			>
				<img
					src={destination.coverThumbUrl!}
					alt={`Quillabamba Travel - ${destination.title}`}
					className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
				/>
				<CardFavoriteButton id={destination.id} type={EFavoritoType.DESTINATION} className="!top-[15%] !right-[15%]" />
			</div>

			<div className="px-2">
				<h3
					className={clsx("font-heading font-extrabold uppercase text-inherit", {
						"text-lg mb-1": !isSmall,
						"text-sm mb-0": isSmall,
					})}
				>
					{destination.title}
				</h3>
				{locationsName && (
					<p
						className={clsx("font-medium opacity-70 line-clamp-1", {
							"text-base": !isSmall,
							"text-[12px]": isSmall,
						})}
					>
						{locationsName}
					</p>
				)}
			</div>
		</Link>
	)
}
