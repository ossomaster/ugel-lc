"use client"

import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react"
import SeccionTitle from "../components/SeccionTitle"
import DestinationCard from "../components/DestinationCard"
import ExperienceCard from "../components/ExperienceCard"
import { IFavorito, useFavoritosStore } from "../stores/favoritos.store"
import { TDestination, TExperience } from "../types"
import { getFavoritos } from "./favoritos.service"

const emptyFavoritos: IFavorito[] = []

export default function FavoritosContent() {
	const store = useFavoritosStore
	const syncFavoritos = store((state) => state.syncFavoritos)

	const favoritos = useSyncExternalStore(
		store.subscribe,
		() => store.getState().favoritos,
		() => emptyFavoritos,
	)

	const [destinations, setDestinations] = useState<TDestination[]>([])
	const [experiences, setExperiences] = useState<TExperience[]>([])
	const [loading, setLoading] = useState(true)

	const favoritosKey = useMemo(() => JSON.stringify(favoritos.map((f) => `${f.type}-${f.id}`).sort()), [favoritos])
	const lastFetchedKey = useRef<string | null>(null)

	useEffect(() => {
		if (lastFetchedKey.current === favoritosKey) return

		const loadFavoritos = async () => {
			setLoading(true)

			if (favoritos.length === 0) {
				setDestinations([])
				setExperiences([])
				setLoading(false)
				lastFetchedKey.current = favoritosKey
				return
			}

			try {
				const result = await getFavoritos(favoritos)
				setDestinations(result.destinations)
				setExperiences(result.experiences)
				syncFavoritos(result.validFavoritos)
			} catch (error) {
				console.error("Error cargando favoritos:", error)
			} finally {
				setLoading(false)
				lastFetchedKey.current = favoritosKey
			}
		}

		loadFavoritos()
	}, [favoritosKey, favoritos, syncFavoritos])

	const hasDestinations = destinations.length > 0
	const hasExperiences = experiences.length > 0
	const hasNoFavoritos = !hasDestinations && !hasExperiences && !loading

	return (
		<>
			{loading && (
				<div className="text-center py-12">
					<p className="text-xl text-gray-500">Cargando favoritos...</p>
				</div>
			)}

			{hasDestinations && (
				<div className="mb-12">
					<SeccionTitle subtitle="Tus destinos guardados">
						DESTINOS <span className="text-primary">FAVORITOS</span>
					</SeccionTitle>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
						{destinations.map((destination) => (
							<DestinationCard key={destination.id} destination={destination} />
						))}
					</div>
				</div>
			)}

			{hasExperiences && (
				<div className="mb-12">
					<SeccionTitle subtitle="Tus experiencias guardadas">
						EXPERIENCIAS <span className="text-primary">FAVORITAS</span>
					</SeccionTitle>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{experiences.map((experience) => (
							<ExperienceCard key={experience.id} experience={experience} />
						))}
					</div>
				</div>
			)}

			{hasNoFavoritos && (
				<div className="text-center py-12">
					<p className="text-xl text-gray-500">No tienes favoritos guardados aún.</p>
				</div>
			)}
		</>
	)
}
