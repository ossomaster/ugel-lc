"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Modal from "./Modal"

interface InicioModalProps {
	src: string
	alt?: string
	href?: string
}

export default function InicioModal({
	src,
	alt = "Aviso",
	href,
}: InicioModalProps) {
	const [isOpen, setIsOpen] = useState(true)

	const handleClose = () => {
		setIsOpen(false)
	}

	const imageContent = (
		<div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
			<Image
				src={src}
				alt={alt}
				width={1200}
				height={900}
				className="max-w-[calc(100vw-2rem)] max-h-[85vh] w-auto h-auto"
				priority
			/>
		</div>
	)

	return (
		<Modal isOpen={isOpen} onClose={handleClose}>
			{href ? (
				<Link
					href={href}
					target="_blank"
					rel="noopener noreferrer"
					onClick={handleClose}
					className="group"
				>
					<div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-[1.01]">
						<Image
							src={src}
							alt={alt}
							width={1200}
							height={900}
							className="max-w-[calc(100vw-2rem)] max-h-[85vh] w-auto h-auto"
							priority
						/>
						<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
					</div>
					<p className="text-center text-white/60 text-sm mt-3 group-hover:text-white/90 transition-colors">
						Ver más información →
					</p>
				</Link>
			) : (
				imageContent
			)}
		</Modal>
	)
}
