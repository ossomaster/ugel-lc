import { Metadata } from "next"
import MainLayout from "../components/MainLayout"
import PageHero from "../components/PageHero"
import PreguntasList from "./PreguntasList"

export const metadata: Metadata = {
	title: "Preguntas Frecuentes | Quillabamba Travel",
	description: "Resuelve tus dudas sobre nuestros tours, reservas y servicios en Quillabamba.",
}

export default function PreguntasFrecuentesPage() {
	return (
		<MainLayout navbarProps={{ sticky: true }}>
			<PageHero title="Preguntas Frecuentes" />
			<section className="seccion bg-gray-50">
				<PreguntasList />
			</section>
		</MainLayout>
	)
}
