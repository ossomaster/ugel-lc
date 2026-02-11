"use client"

import { TExperience } from "@/app/types"
import { useModal } from "@/app/contexts/ModalContext"
import ExperienceCoverVideoModal from "./ExperienceCoverVideoModal"
import ExperienceTouristMapModal from "./ExperienceTouristMapModal"

interface ExperienceModalsProps {
	experience: TExperience
}

export default function ExperienceModals({ experience }: ExperienceModalsProps) {
	const { showVideoModal, closeVideoModal, showMapModal, closeMapModal } = useModal()

	return (
		<>
			{experience.coverVideo && (
				<ExperienceCoverVideoModal
					isOpen={showVideoModal}
					onClose={closeVideoModal}
					videoUrl={experience.coverVideo}
					title={experience.title}
				/>
			)}

			{experience.touristMapUrl && (
				<ExperienceTouristMapModal
					isOpen={showMapModal}
					onClose={closeMapModal}
					mapUrl={experience.touristMapUrl}
					title={experience.title}
				/>
			)}
		</>
	)
}
