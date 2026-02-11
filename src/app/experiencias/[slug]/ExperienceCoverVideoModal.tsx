"use client"

import Modal from "../../components/Modal"

interface ExperienceCoverVideoModalProps {
	isOpen: boolean
	onClose: () => void
	videoUrl: string
	title: string
}

export default function ExperienceCoverVideoModal({ isOpen, onClose, videoUrl, title }: ExperienceCoverVideoModalProps) {
	const getYouTubeEmbedUrl = (url: string) => {
		const videoId = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/)?.[1]
		return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1` : url
	}

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<div className="aspect-video w-full bg-black">
				<iframe
					src={getYouTubeEmbedUrl(videoUrl)}
					title={title}
					className="w-full h-full"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				/>
			</div>
		</Modal>
	)
}
