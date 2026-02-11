import { ERutas } from "./constants/constants"

export const getRoute = (route: ERutas, params?: { [key: string]: string | number }) => {
	let path = route as string
	if (params) {
		Object.entries(params).forEach(([key, value]) => {
			path = path.replace(`:${key}`, String(value))
		})
	}
	return path
}
