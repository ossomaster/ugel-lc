import type { Metadata } from "next"
import { Google_Sans, Urbanist } from "next/font/google"
import "./globals.css"

const fontHeading = Urbanist({
	variable: "--font-heading",
	weight: ["400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
})

const fontBody = Google_Sans({
	variable: "--font-body",
	adjustFontFallback: false,
	fallback: ["sans-serif"],
})

export const metadata: Metadata = {
	title: "UGEL LC | Unidad de Gestión Educativa Local de La Convención",
	description: "Unidad de Gestión Educativa Local de La Convención - Cusco, Perú. Garantizamos, aseguramos y promovemos el servicio educativo de calidad.",
    verification: {
    google: "ndwAWkh6xRBObeZhKBQN6sQvlddojOhbAwsuVZGjJJ4",
  },
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="es">
			<body className={`${fontHeading.variable} ${fontBody.variable} antialiased`}>
				{children}
			</body>
		</html>
	)
}
