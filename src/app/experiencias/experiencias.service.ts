import { cache } from "react"
import { httpClient } from "../helpers/httpClient"
import { TExperience } from "../types"
import { cacheLife } from "next/cache"
import { cacheTag } from "next/cache"

type TExperiencesResponse = {
	content: {
		experiences: {
			data: TExperience[]
			total: number
		}
	}
}

type TExperienceResponse = {
	content: {
		experience: TExperience
		relatedExperiences: TExperience[]
	}
}

type TLatestExperiencesResponse = {
	content: {
		experiences: TExperience[]
	}
}

export const getExperiences = async (page: number = 1, perPage: number = 20) => {
	"use cache"
	cacheLife("minutes")
	cacheTag("experiences")
	console.log("Fetching experiences list...")

	const res = await httpClient.get<TExperiencesResponse>("/website/experiences", {
		params: { page, per_page: perPage },
	})
	return res.data.content.experiences
}

export const getLatestExperiences = async () => {
	"use cache"
	cacheLife("minutes")
	cacheTag("experiences/latest")
	console.log("Fetching latest experiences...")

	const res = await httpClient.get<TLatestExperiencesResponse>("/website/experiences/latest")
	return res.data.content.experiences
}

export const getExperienceBySlug = async (slug: string) => {
	"use cache"
	cacheLife("minutes")
	cacheTag("experiences/" + slug)
	console.log("Fetching experience by slug:", slug)

	const res = await httpClient.get<TExperienceResponse>(`/website/experiences/${slug}`)
	return res.data.content
}
