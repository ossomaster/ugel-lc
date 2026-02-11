import { Metadata } from "next"
import { Suspense } from "react"
import ExperienceCard from "../components/ExperienceCard"
import MainLayout from "../components/MainLayout"
import PageHero from "../components/PageHero"
import Pagination from "../components/Pagination"
import { getExperiences } from "./experiencias.service"

export const metadata: Metadata = {
	title: "Experiencias | Quillabamba Travel",
	description: "Explora nuestras experiencias turísticas únicas en Quillabamba y la selva cusqueña.",
}

const PER_PAGE = 12

interface Props {
	searchParams: Promise<{ page?: string }>
}

export default async function ExperienciasPage({ searchParams }: Props) {
	return (
		<MainLayout navbarProps={{ sticky: true }}>
			<Suspense fallback={<div>Cargando...</div>}>
				<Page searchParams={searchParams} />
			</Suspense>
		</MainLayout>
	)
}
const Page = async ({ searchParams }: Props) => {
	const { page } = await searchParams
	const currentPage = Number(page) || 1
	const { data: experiences, total } = await getExperiences(currentPage, PER_PAGE)
	const totalPages = Math.ceil(total / PER_PAGE)

	return (
		<>
			<PageHero title="Nuestras Experiencias" />
			<div className="container py-12 md:py-24">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{experiences.map((experience) => (
						<ExperienceCard key={experience.id} experience={experience} />
					))}
				</div>
				<Pagination totalPages={totalPages} currentPage={currentPage} />
			</div>
		</>
	)
}
