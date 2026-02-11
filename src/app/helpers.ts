import { ERutas } from "./constants/constants"

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH
	? `/${process.env.NEXT_PUBLIC_BASE_PATH}`
	: ""

export const asset = (path: string) => {
	const cleanPath = path.startsWith("/") ? path.slice(1) : path
	return `${BASE_PATH}/${cleanPath}`
}

export const getRoute = (route: ERutas, params?: { [key: string]: string | number }) => {
	let path = route as string
	if (params) {
		Object.entries(params).forEach(([key, value]) => {
			path = path.replace(`:${key}`, String(value))
		})
	}
	return path
}
