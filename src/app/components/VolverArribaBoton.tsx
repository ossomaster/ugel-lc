"use client"

import { useState, useEffect } from "react"
import { FaChevronUp } from "react-icons/fa6"

export default function VolverArribaBoton() {
	const [visible, setVisible] = useState(false)

	useEffect(() => {
		const toggleVisible = () => {
			setVisible(window.scrollY > 300)
		}

		window.addEventListener("scroll", toggleVisible)

		return () => {
			window.removeEventListener("scroll", toggleVisible)
		}
	}, [])

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		})
	}

	if (!visible) return null

	return (
		<button
			onClick={scrollToTop}
			className="fixed bottom-22 right-6 z-50 size-12 bg-primary text-white rounded-full flex items-center justify-center [box-shadow:0_0_1rem_rgb(0_0_0/0.3)] hover:scale-110 transition-transform duration-300"
			aria-label="Volver arriba"
		>
			<FaChevronUp className="text-2xl" />
		</button>
	)
}
