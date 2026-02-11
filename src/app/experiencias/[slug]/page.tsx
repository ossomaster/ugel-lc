import MainLayout from "@/app/components/MainLayout"
import { EMPRESA } from "@/app/constants/constants"
import { ModalProvider } from "@/app/contexts/ModalContext"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import { Suspense } from "react"
import SeccionBlog from "../../components/secciones/SeccionBlog/SeccionBlog"
import SeccionCallToAction from "../../components/secciones/SeccionCallToAction"
import SeccionColaboradores from "../../components/secciones/SeccionColaboradores"
import SeccionContacto from "../../components/secciones/SeccionContacto"
import SeccionMarquee from "../../components/secciones/SeccionMarquee"
import { getExperienceBySlug } from "../experiencias.service"
import ExperienceDestinations from "./ExperienceDestinations"
import ExperienceFeatures from "./ExperienceFeatures"
import ExperienceGallery from "./ExperienceGallery"
import ExperienceHero from "./ExperienceHero"
import ExperienceInfo from "./ExperienceInfo"
import ExperienceModals from "./ExperienceModals"
import ExperienceMultimedia from "./ExperienceMultimedia"
import ExperienceTabs from "./ExperienceTabs/ExperienceTabs"

interface Props {
	params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = await params

	try {
		const { experience } = await getExperienceBySlug(slug)
		return {
			title: `${experience.title} | Quillabamba Travel`,
			description: experience.shortDescription,
			openGraph: {
				title: experience.title,
				description: experience.shortDescription,
				images: experience.coverUrl ? [experience.coverUrl] : [],
				type: "website",
			},
		}
	} catch {
		return { title: "Experiencia no encontrada" }
	}
}

export default async function ExperienciaPage({ params }: Props) {
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

	let experience

	try {
		const data = await getExperienceBySlug(slug)
		experience = data.experience
	} catch {
		notFound()
	}

	const includedDestinations = experience.destinations?.map((d) => d.destination) || []
	const whatsappLink = `https://wa.me/${EMPRESA.whatsapp.replace(/\s/g, "")}?text=${encodeURIComponent(`Hola, estoy interesado en la experiencia: ${experience.title}`)}`

	return (
		<ModalProvider>
			<ExperienceHero experience={experience} whatsappLink={whatsappLink} />
			<ExperienceFeatures experience={experience} />
			<ExperienceInfo experience={experience} />
			<ExperienceMultimedia experience={experience} />
			<ExperienceTabs experience={experience} />
			<ExperienceDestinations destinations={includedDestinations} />
			<ExperienceGallery experience={experience} />
			<SeccionCallToAction />
			<SeccionBlog />
			<SeccionMarquee />
			<SeccionContacto />
			<SeccionColaboradores />
			<ExperienceModals experience={experience} />
		</ModalProvider>
	)
}
