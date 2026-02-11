import { create } from "zustand"
import { persist } from "zustand/middleware"

export enum EFavoritoType {
	DESTINATION = "DESTINATION",
	EXPERIENCE = "EXPERIENCE",
}

export interface IFavorito {
	id: number
	type: EFavoritoType
}

interface FavoritosState {
	favoritos: IFavorito[]
	addFavorito: (id: number, type: EFavoritoType) => void
	removeFavorito: (id: number, type: EFavoritoType) => void
	toggleFavorito: (id: number, type: EFavoritoType) => void
	isFavorito: (id: number, type: EFavoritoType) => boolean
	syncFavoritos: (validFavoritos: IFavorito[]) => void
}

export const useFavoritosStore = create<FavoritosState>()(
	persist(
		(set, get) => ({
			favoritos: [],
			addFavorito: (id, type) => set((state) => ({ favoritos: [...state.favoritos, { id, type }] })),
			removeFavorito: (id, type) => set((state) => ({ favoritos: state.favoritos.filter((f) => !(f.id === id && f.type === type)) })),
			toggleFavorito: (id, type) => {
				const { isFavorito, addFavorito, removeFavorito } = get()
				if (isFavorito(id, type)) {
					removeFavorito(id, type)
				} else {
					addFavorito(id, type)
				}
			},
			isFavorito: (id, type) => get().favoritos.some((f) => f.id === id && f.type === type),
			syncFavoritos: (validFavoritos) => set({ favoritos: validFavoritos }),
		}),
		{
			name: "favoritos-storage",
		},
	),
)
