import MainLayout from "@/app/components/MainLayout"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import { Suspense } from "react"
import SeccionBlog from "../../components/secciones/SeccionBlog/SeccionBlog"
import SeccionCallToAction from "../../components/secciones/SeccionCallToAction"
import SeccionColaboradores from "../../components/secciones/SeccionColaboradores"
import SeccionContacto from "../../components/secciones/SeccionContacto"
import SeccionMarquee from "../../components/secciones/SeccionMarquee"
import { getDestinationBySlug } from "../destinos.service"
import DestinationGallery from "./DestinationGallery"
import DestinationHero from "./DestinationHero"
import DestinationInfo from "./DestinationInfo"
import DestinationLocation from "./DestinationLocation"
import DestinationRecommendations from "./DestinationRecommendations"

interface Props {
	params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = await params

	try {
		const { destination } = await getDestinationBySlug(slug)
		return {
			title: `${destination.title} | Quillabamba Travel`,
			description: destination.shortDescription,
			openGraph: {
				title: destination.title,
				description: destination.shortDescription,
				images: destination.coverUrl ? [destination.coverUrl] : [],
				type: "website",
			},
		}
	} catch {
		return { title: "Destino no encontrado" }
	}
}

export default async function DestinoPage({ params }: Props) {
	return (
		<MainLayout>
			<Suspense fallback={<div>Cargando...</div>}>
				<Page params={params} />
			</Suspense>
		</MainLayout>
	)
}

const Page = async ({ params }: Props) => {
	const { slug } = await params

	let destination

	try {
		const data = await getDestinationBySlug(slug)
		destination = data.destination
	} catch {
		notFound()
	}

	return (
		<>
			<DestinationHero destination={destination} />
			<DestinationInfo destination={destination} />
			<DestinationRecommendations destination={destination} />
			<DestinationGallery destination={destination} />
			<DestinationLocation destination={destination} />
			<SeccionCallToAction />
			<SeccionBlog />
			<SeccionMarquee />
			<SeccionContacto />
			<SeccionColaboradores />
		</>
	)
}
