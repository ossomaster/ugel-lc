import { cacheLife } from "next/cache"
import { httpClient } from "../helpers/httpClient"
import { TDestination } from "../types"
import { cacheTag } from "next/cache"

type TDestinationsResponse = {
	content: {
		destinations: {
			data: TDestination[]
			total: number
		}
	}
}

type TDestinationResponse = {
	content: {
		destination: TDestination
		relatedDestinations: TDestination[]
	}
}

type TLatestDestinationsResponse = {
	content: {
		destinations: TDestination[]
	}
}

export const getDestinations = async (page: number = 1, perPage: number = 20) => {
	"use cache"
	cacheLife("minutes")
	cacheTag("destinations")
	console.log("Fetching destinations list...")

	const res = await httpClient.get<TDestinationsResponse>("/website/destinations", {
		params: { page, per_page: perPage },
	})
	return res.data.content.destinations
}

export const getLatestDestinations = async () => {
	"use cache"
	cacheLife("minutes")
	cacheTag("destinations/latest")
	console.log("Fetching latest destinations...")

	const res = await httpClient.get<TLatestDestinationsResponse>("/website/destinations/latest")
	return res.data.content.destinations
}

export const getDestinationBySlug = async (slug: string) => {
	"use cache"
	cacheLife("minutes")
	cacheTag("destinations/" + slug)
	console.log("Fetching destination by slug:", slug)

	const res = await httpClient.get<TDestinationResponse>(`/website/destinations/${slug}`)
	return res.data.content
}
