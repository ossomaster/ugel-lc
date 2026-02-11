import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	basePath: process.env.NEXT_PUBLIC_BASE_PATH
		? `/${process.env.NEXT_PUBLIC_BASE_PATH}`
		: "",
	output: "export",
	// Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
	trailingSlash: true,
	// Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
	skipTrailingSlashRedirect: true,
	images: {
		unoptimized: true,
		remotePatterns: [
			{
				protocol: "https",
				hostname: "minedu.gob.pe",
			},
		],
	},
}

export default nextConfig
