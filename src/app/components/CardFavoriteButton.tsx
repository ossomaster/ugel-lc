"use client"

import clsx from "clsx"
import { useSyncExternalStore } from "react"
import { FaHeart } from "react-icons/fa6"
import { toast } from "react-toastify"
import { EFavoritoType, useFavoritosStore } from "../stores/favoritos.store"

export default function CardFavoriteButton({ id, type, className }: { id: number; type: EFavoritoType; className?: string }) {
	const store = useFavoritosStore
	const toggleFavorito = store((state) => state.toggleFavorito)

	const isFav = useSyncExternalStore(
		store.subscribe,
		() => store.getState().isFavorito(id, type),
		() => false,
	)

	const handleClick = (e: React.MouseEvent) => {
		e.preventDefault()
		e.stopPropagation()
		const wasIsFav = store.getState().isFavorito(id, type)
		toggleFavorito(id, type)
		if (wasIsFav) {
			toast.info("Eliminado de favoritos")
		} else {
			toast.success("Agregado a favoritos")
		}
	}

	return (
		<button
			className={clsx(
				"absolute top-2 right-2 z-20 p-2 rounded-full backdrop-blur-sm transition-colors text-white cursor-pointer",
				{
					"bg-red-500 hover:bg-red-600": isFav,
					"bg-black/20 hover:bg-black/40": !isFav,
				},
				className,
			)}
			onClick={handleClick}
			aria-label={isFav ? "Quitar de favoritos" : "Agregar a favoritos"}
		>
			<FaHeart className="text-lg transition-colors text-white" />
		</button>
	)
}
