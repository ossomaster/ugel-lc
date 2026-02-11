import { Metadata } from "next"
import DestinationCard from "../components/DestinationCard"
import MainLayout from "../components/MainLayout"
import PageHero from "../components/PageHero"
import Pagination from "../components/Pagination"
import { getDestinations } from "./destinos.service"
import { Suspense } from "react"

export const metadata: Metadata = {
	title: "Destinos | Quillabamba Travel",
	description: "Descubre los destinos más impresionantes de Quillabamba y La Convención.",
}

const PER_PAGE = 12

interface Props {
	searchParams: Promise<{ page?: string }>
}

export default async function DestinosPage({ searchParams }: Props) {
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
	const { data: destinations, total } = await getDestinations(currentPage, PER_PAGE)
	const totalPages = Math.ceil(total / PER_PAGE)

	return (
		<>
			<PageHero title="Nuestros Destinos" />
			<div className="container py-12 md:py-24">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
					{destinations.map((destination) => (
						<DestinationCard key={destination.id} destination={destination} />
					))}
				</div>
				<Pagination totalPages={totalPages} currentPage={currentPage} />
			</div>
		</>
	)
}
