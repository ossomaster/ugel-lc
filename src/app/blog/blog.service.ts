import { cacheLife, cacheTag } from "next/cache"
import { httpClient } from "../helpers/httpClient"
import { TArticle } from "../types"

type TArticlesResponse = {
	content: {
		articles: {
			data: TArticle[]
			total: number
		}
	}
}

type TArticleResponse = {
	content: {
		article: TArticle
		relatedArticles: TArticle[]
	}
}

export const getArticles = async (page: number = 1, perPage: number = 20) => {
	"use cache"
	cacheLife("minutes")
	cacheTag("articles")
	console.log("Fetching articles list...")

	const res = await httpClient.get<TArticlesResponse>("/website/articles", {
		params: { page, per_page: perPage },
	})
	return res.data.content.articles
}

type TLatestArticlesResponse = {
	content: {
		articles: TArticle[]
	}
}

export const getLatestArticles = async () => {
	"use cache"
	cacheLife("minutes")
	cacheTag("articles/latest")
	console.log("Fetching latest articles...")

	const res = await httpClient.get<TLatestArticlesResponse>("/website/articles/latest")
	return res.data.content.articles
}

export const getArticleBySlug = async (slug: string) => {
	"use cache"
	cacheLife("minutes")
	cacheTag("articles/" + slug)
	console.log("Fetching article by slug:", slug)

	const res = await httpClient.get<TArticleResponse>(`/website/articles/${slug}`)
	return res.data.content
}
