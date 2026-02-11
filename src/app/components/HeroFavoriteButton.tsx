"use client"

import clsx from "clsx"
import { useSyncExternalStore } from "react"
import { FaHeart } from "react-icons/fa6"
import { toast } from "react-toastify"
import { EFavoritoType, useFavoritosStore } from "../stores/favoritos.store"

export default function HeroFavoriteButton({ id, type }: { id: number; type: EFavoritoType }) {
	const store = useFavoritosStore
	const toggleFavorito = store((state) => state.toggleFavorito)

	const isFav = useSyncExternalStore(
		store.subscribe,
		() => store.getState().isFavorito(id, type),
		() => false,
	)

	const handleClick = () => {
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
			onClick={handleClick}
			className={clsx("btn flex items-center gap-2 cursor-pointer", {
				"btn--danger": isFav,
				"btn--white": !isFav,
			})}
		>
			<FaHeart className={clsx({ "text-white": isFav, "text-primary-dark": !isFav })} />
			{isFav ? "Guardado" : "Guardar"}
		</button>
	)
}
