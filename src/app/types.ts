export const EArticleStatus = {
	ACTIVE: "ACTIVE",
	DRAFT: "DRAFT",
	INACTIVE: "INACTIVE",
} as const

export type EArticleStatus = (typeof EArticleStatus)[keyof typeof EArticleStatus]

export type TArticleExperience = {
	id: number
	articleId: number
	experienceId: number
	experience: TExperience
}

export type TArticleDestination = {
	id: number
	articleId: number
	destinationId: number
	destination: TDestination
}

export type TArticle = {
	id: number
	slug: string
	title: string
	cover: string
	coverUrl: string
	coverThumbUrl: string
	shortDescription: string
	content: string
	tags: string[] | null
	status: EArticleStatus
	statusStr: string
	createdAt: string
	updatedAt: string
	deletedAt?: string | null
	experiences?: TArticleExperience[]
	destinations?: TArticleDestination[]
}

export const EDestinationDifficulty = {
	EASY: "EASY",
	EASY_MODERATE: "EASY_MODERATE",
	MODERATE: "MODERATE",
	MODERATE_CHALLENGING: "MODERATE_CHALLENGING",
	CHALLENGING: "CHALLENGING",
	DIFFICULT: "DIFFICULT",
	VERY_DIFFICULT: "VERY_DIFFICULT",
} as const

export type EDestinationDifficulty = (typeof EDestinationDifficulty)[keyof typeof EDestinationDifficulty]

export const EDestinationStatus = {
	ACTIVE: "ACTIVE",
	DRAFT: "DRAFT",
	INACTIVE: "INACTIVE",
} as const

export type EDestinationStatus = (typeof EDestinationStatus)[keyof typeof EDestinationStatus]

export type TRecommendationItem = {
	icon: string
	name: string
	description: string
}

export type TLocation = {
	id: number
	title: string
	createdAt: string
	updatedAt: string
	deletedAt?: string | null
	destinations?: TDestinationLocation[]
}

export type TDestinationLocation = {
	id: number
	destinationId: number
	locationId: number
	location?: TLocation
	destination?: TDestination
}

export type TDestination = {
	id: number
	slug: string
	title: string
	cover: string
	coverUrl: string | null
	coverThumbUrl: string | null
	shortDescription: string
	altitude: string
	duration: string
	difficulty: EDestinationDifficulty
	difficultyStr: string
	content: string
	recommendations: TRecommendationItem[] | null
	gallery: string[] | null
	galleryUrls: string[] | null
	googleMapsIframe: string | null
	status: EDestinationStatus
	statusStr: string
	createdAt: string
	updatedAt: string
	deletedAt?: string | null
	locations: TDestinationLocation[]
}

export const EExperienceDifficulty = {
	EASY: "EASY",
	EASY_MODERATE: "EASY_MODERATE",
	MODERATE: "MODERATE",
	MODERATE_CHALLENGING: "MODERATE_CHALLENGING",
	CHALLENGING: "CHALLENGING",
	DIFFICULT: "DIFFICULT",
	VERY_DIFFICULT: "VERY_DIFFICULT",
} as const

export type EExperienceDifficulty = (typeof EExperienceDifficulty)[keyof typeof EExperienceDifficulty]

export const EExperienceStatus = {
	ACTIVE: "ACTIVE",
	DRAFT: "DRAFT",
	INACTIVE: "INACTIVE",
} as const

export type EExperienceStatus = (typeof EExperienceStatus)[keyof typeof EExperienceStatus]

export type TItineraryItem = {
	day: string
	title: string
	description: string
}

export type TIncludeItem = {
	title: string
	description: string
}

export type TExcludeItem = {
	title: string
	description: string
}

export type TExperienceType = {
	id: number
	title: string
	createdAt: string
	updatedAt: string
	deletedAt?: string | null
	experiences?: TExperienceExperienceType[]
}

export type TExperienceLocation = {
	id: number
	experienceId: number
	locationId: number
	location: TLocation
}

export type TExperienceDestination = {
	id: number
	experienceId: number
	destinationId: number
	destination: TDestination
}

export type TExperienceExperienceType = {
	id: number
	experienceId: number
	experienceTypeId: number
	experienceType?: TExperienceType
	experience?: TExperience
}

export type TExperience = {
	id: number
	slug: string
	title: string
	cover: string
	coverUrl: string | null
	coverThumbUrl: string | null
	coverVideo: string | null
	shortDescription: string
	altitude: string
	duration: string
	groupSize: string
	pricePerPerson: number
	difficulty: EExperienceDifficulty
	difficultyStr: string
	content: string
	recommendations: TRecommendationItem[] | null
	itinerary: TItineraryItem[] | null
	includes: TIncludeItem[] | null
	excludes: TExcludeItem[] | null
	gallery: string[] | null
	galleryUrls: string[] | null
	brochure: string | null
	brochureUrl: string | null
	touristMap: string | null
	touristMapUrl: string | null
	googleMapsIframe: string | null
    isPopular: boolean
	status: EExperienceStatus
	statusStr: string
	createdAt: string
	updatedAt: string
	deletedAt?: string | null
	locations: TExperienceLocation[]
	destinations: TExperienceDestination[]
	experienceTypes: TExperienceExperienceType[]
}

export const ECoverItemType = {
	EXPERIENCE: "EXPERIENCE",
	DESTINATION: "DESTINATION",
} as const

export type ECoverItemType = (typeof ECoverItemType)[keyof typeof ECoverItemType]

export type TCoverItem = {
	id: number
	type: ECoverItemType
	experienceId: number | null
	destinationId: number | null
	customButtonUrl: string | null
	customButtonText: string | null
	order: number
	createdAt: string
	updatedAt: string
	experience: TExperience | null
	destination: TDestination | null
}
