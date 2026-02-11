import { Metadata } from "next"
import MainLayout from "../components/MainLayout"
import PageHero from "../components/PageHero"
import { getLegalData } from "../commons/legal.service"

export const metadata: Metadata = {
	title: "Términos y Condiciones | Quillabamba Travel",
	description: "Lee nuestros términos y condiciones para conocer las políticas de reserva, cancelación y responsabilidades al viajar con Quillabamba Travel.",
}

export default async function TerminosYCondiciones() {
	const { terminosYCondiciones } = await getLegalData()
	return (
		<MainLayout navbarProps={{ sticky: true }}>
			<PageHero title="Términos y Condiciones" />
			<div className="container py-12 md:py-24">
				{terminosYCondiciones ? <div className="html-content" dangerouslySetInnerHTML={{ __html: terminosYCondiciones }} /> : <p>No se han definido los términos y condiciones.</p>}
			</div>
		</MainLayout>
	)
}
