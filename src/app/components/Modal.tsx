"use client"

import { useEffect } from "react"
import { FaXmark } from "react-icons/fa6"
interface ModalProps {
	isOpen: boolean
	onClose: () => void
	children: React.ReactNode
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden"
		} else {
			document.body.style.overflow = "unset"
		}
		return () => {
			document.body.style.overflow = "unset"
		}
	}, [isOpen])

	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === "Escape") onClose()
		}
		if (isOpen) {
			window.addEventListener("keydown", handleEscape)
		}
		return () => window.removeEventListener("keydown", handleEscape)
	}, [isOpen, onClose])

	if (!isOpen) return null

	return (
		<div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 animate-fade-in" onClick={onClose}>
			<div className="absolute inset-0 bg-black/90 transition-opacity" />
			<button 
				onClick={onClose} 
				className="fixed top-6 right-6 z-[1010] text-white/60 hover:text-white transition-colors cursor-pointer" 
				aria-label="Cerrar modal"
			>
				<FaXmark className="size-6" />
			</button>
			<div 
				className="relative w-full container max-h-[90vh] flex items-center justify-center" 
				onClick={(e) => e.stopPropagation()}
			>
				{children}
			</div>
		</div>
	)
}
