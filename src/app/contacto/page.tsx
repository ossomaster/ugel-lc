import { Metadata } from "next"
import MainLayout from "../components/MainLayout"
import PageHero from "../components/PageHero"
import SeccionContacto from "../components/secciones/SeccionContacto"

export const metadata: Metadata = {
	title: "Contacto | Quillabamba Travel",
	description: "Contáctanos y comienza a planificar tu próxima aventura. Estamos listos para ayudarte a crear experiencias inolvidables.",
}

export default function ContactoPage() {
	return (
		<MainLayout navbarProps={{ sticky: true }}>
			<PageHero title="Contáctanos" />
			<SeccionContacto />
		</MainLayout>
	)
}
