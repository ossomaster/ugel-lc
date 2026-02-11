"use client"

import { useModal } from "@/app/contexts/ModalContext"
import { TExperience } from "@/app/types"
import { FaClock, FaMountain, FaPeopleGroup, FaPersonHiking, FaRegCirclePlay } from "react-icons/fa6"

type Props = {
	experience: TExperience
}

const ExperienceFeatures = ({ experience }: Props) => {
	const { openVideoModal } = useModal()

	return (
		<section className="-mt-12 px-4 sm:px-0 z-20 relative">
			<div className="container p-0! bg-white rounded-xl flex flex-col sm:flex-row shadow-xl">
				{experience.coverVideo && (
					<button className="h-14 sm:size-20 bg-primary text-white text-3xl sm:text-5xl flex-center cursor-pointer rounded-xl sm:rounded-l-xl" onClick={openVideoModal}>
						<FaRegCirclePlay />
					</button>
				)}
				<ul className="flex flex-wrap lg:flex-nowrap justify-around gap-y-4 gap-x-6 py-4 px-6 grow">
					{experience.altitude && (
						<li className="flex items-center gap-4">
							<span className="text-3xl text-primary">
								<FaMountain />
							</span>
							<div>
								<p className="text-sm font-bold">{experience.altitude}</p>
								<h3 className="text-xs text-gray-400 tracking-widest">ALTITUD</h3>
							</div>
						</li>
					)}
					{experience.duration && (
						<li className="flex items-center gap-4">
							<span className="text-3xl text-primary">
								<FaClock />
							</span>
							<div>
								<p className="text-sm font-bold">{experience.duration}</p>
								<h3 className="text-xs text-gray-400 tracking-widest">DURACIÓN</h3>
							</div>
						</li>
					)}
					{experience.difficultyStr && (
						<li className="flex items-center gap-4">
							<span className="text-3xl text-primary">
								<FaPersonHiking />
							</span>
							<div>
								<p className="text-sm font-bold">{experience.difficultyStr}</p>
								<h3 className="text-xs text-gray-400 tracking-widest">DIFICULTAD</h3>
							</div>
						</li>
					)}
					{experience.groupSize && (
						<li className="flex items-center gap-4">
							<span className="text-3xl text-primary">
								<FaPeopleGroup />
							</span>
							<div>
								<p className="text-sm font-bold">{experience.groupSize}</p>
								<h3 className="text-xs text-gray-400 tracking-widest">TAMAÑO DEL GRUPO</h3>
							</div>
						</li>
					)}
				</ul>
				{experience.brochureUrl && (
					<div className="w-full sm:w-32 px-4 py-2 bg-gray-100 flex-center rounded-xl sm:rounded-r-xl">
						<a href={experience.brochureUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--sm h-auto! p-2! rounded-lg! text-center">
							Descargar Brochure
						</a>
					</div>
				)}
			</div>
		</section>
	)
}

export default ExperienceFeatures
