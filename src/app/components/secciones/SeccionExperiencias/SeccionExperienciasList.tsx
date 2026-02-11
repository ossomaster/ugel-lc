import { getLatestExperiences } from "@/app/experiencias/experiencias.service"
import ExperienceCard from "../../ExperienceCard"

const SeccionExperienciasList = async () => {
	const experiences = await getLatestExperiences()

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
			{experiences.map((experience) => (
				<ExperienceCard key={experience.id} experience={experience} />
			))}
		</div>
	)
}

export default SeccionExperienciasList
