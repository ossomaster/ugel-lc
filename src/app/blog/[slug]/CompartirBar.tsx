"use client"

import { useSyncExternalStore } from "react"
import { FaFacebookF, FaLink, FaWhatsapp, FaXTwitter } from "react-icons/fa6"

interface Props {
	title: string
}

const subscribe = () => () => {}

export default function CompartirBar({ title }: Props) {
	const url = useSyncExternalStore(
		subscribe,
		() => window.location.href,
		() => null // Snapshot del servidor (siempre false en SSR)
	)

	if (!url) return null

	const copyToClipboard = () => {
		navigator.clipboard.writeText(url)
		// Opcional: Mostrar notificación de copiado
	}

	const btnClass = "flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 text-gray-500 hover:text-white hover:border-transparent transition-all duration-300 shadow-sm"

	// Encode URL and title for sharing
	const encodedUrl = encodeURIComponent(url)
	const encodedTitle = encodeURIComponent(title)

	return (
		<div className="flex flex-row lg:flex-col gap-3 items-center lg:sticky lg:top-32 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 w-full lg:w-auto justify-center lg:justify-start">
			<span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest lg:[writing-mode:vertical-rl] lg:rotate-180 lg:mb-2 mr-2 lg:mr-0">Compartir</span>
			<a
				href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
				target="_blank"
				rel="noopener noreferrer"
				className={`${btnClass} hover:bg-[#1877F2] hover:scale-110 transition-transform`}
				aria-label="Compartir en Facebook"
			>
				<FaFacebookF />
			</a>

			<a
				href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
				target="_blank"
				rel="noopener noreferrer"
				className={`${btnClass} hover:bg-[#000000] hover:scale-110 transition-transform`}
				aria-label="Compartir en X (Twitter)"
			>
				<FaXTwitter />
			</a>

			<a
				href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`}
				target="_blank"
				rel="noopener noreferrer"
				className={`${btnClass} hover:bg-[#25D366] hover:scale-110 transition-transform`}
				aria-label="Compartir en WhatsApp"
			>
				<FaWhatsapp />
			</a>

			<button onClick={copyToClipboard} className={`${btnClass} hover:bg-gray-600 hover:scale-110 transition-transform`} title="Copiar enlace" aria-label="Copiar enlace">
				<FaLink />
			</button>
		</div>
	)
}
