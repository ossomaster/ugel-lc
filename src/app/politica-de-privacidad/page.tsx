import { Metadata } from "next"
import MainLayout from "../components/MainLayout"
import PageHero from "../components/PageHero"
import { getLegalData } from "../commons/legal.service"

export const metadata: Metadata = {
	title: "Política de Privacidad | Quillabamba Travel",
	description: "Conoce cómo protegemos tus datos personales y nuestra política de privacidad en Quillabamba Travel.",
}

export default async function PoliticaDePrivacidad() {
	const { politicasDePrivacidad } = await getLegalData()
	return (
		<MainLayout navbarProps={{ sticky: true }}>
			<PageHero title="Política de privacidad" />
			<div className="container py-12 md:py-24 ">
				{politicasDePrivacidad ? <div className="html-content" dangerouslySetInnerHTML={{ __html: politicasDePrivacidad }} /> : <p>No se ha definido la política de privacidad.</p>}
			</div>
		</MainLayout>
	)
}
