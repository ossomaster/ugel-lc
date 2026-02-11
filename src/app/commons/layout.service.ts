import { cacheLife, cacheTag } from "next/cache"
import { httpClient } from "../helpers/httpClient"
import { TCoverItem, TExperience, TExperienceType, TLocation } from "../types"

type TLayoutResponse = {
	content: {
		experiences: TExperience[]
		experienceTypes: TExperienceType[]
		locations: TLocation[]
		coverItems: TCoverItem[]
	}
}

export const getLayout = async () => {
	"use cache"
	cacheLife("minutes")
	cacheTag("layout")
	console.log("Fetching layout data...")
	const res = await httpClient.get<TLayoutResponse>("/website/layout")
	return res.data.content
}
