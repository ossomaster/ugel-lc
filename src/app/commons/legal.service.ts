import { cacheLife, cacheTag } from "next/cache"
import { httpClient } from "../helpers/httpClient"

type TLegalResponse = {
	content: {
		terminosYCondiciones: string | null
		politicasDePrivacidad: string | null
	}
}

export const getLegalData = async () => {
	"use cache"
	cacheLife("minutes")
	cacheTag("legal")
	console.log("Fetching legal data...")

	const res = await httpClient.get<TLegalResponse>("/website/general/legal")
	return res.data.content
}
