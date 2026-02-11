"use client"

import Modal from "../../components/Modal"

interface ExperienceTouristMapModalProps {
	isOpen: boolean
	onClose: () => void
	mapUrl: string
	title: string
}

export default function ExperienceTouristMapModal({ isOpen, onClose, mapUrl, title }: ExperienceTouristMapModalProps) {
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<div className="flex justify-center w-full">
				<img src={mapUrl} alt={`Mapa turístico - ${title}`} className="max-h-[85vh] max-w-full object-contain rounded-lg" />
			</div>
		</Modal>
	)
}
