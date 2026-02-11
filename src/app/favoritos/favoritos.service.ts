import { httpClient } from "../helpers/httpClient"
import { TDestination, TExperience } from "../types"
import { EFavoritoType, IFavorito } from "../stores/favoritos.store"

type TFavoritosResponse = {
	content: {
		destinations: TDestination[]
		experiences: TExperience[]
		validFavoritos: IFavorito[]
	}
}

export const getFavoritos = async (favoritos: IFavorito[]) => {
	if (favoritos.length === 0) {
		return {
			destinations: [],
			experiences: [],
			validFavoritos: [],
		}
	}

	const res = await httpClient.post<TFavoritosResponse>("/website/favorites", {
		favoritos: favoritos.map((f) => ({
			id: f.id,
			type: f.type === EFavoritoType.DESTINATION ? "DESTINATION" : "EXPERIENCE",
		})),
	})
	return res.data.content
}
