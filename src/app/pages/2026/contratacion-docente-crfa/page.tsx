import MainLayout from "../../../components/MainLayout"
import PageHero from "../../../components/PageHeroContratacionDocente"
import TablaDocumentos from "./TablaDocumentos"

export default function ContratacionDocenePage() {
	return (
		<MainLayout>
			<PageHero title="Contratación del Servicio Docente CRFA - 2026" subtitle="Listado de publicaciones" />
			<section className="container py-12">
				<TablaDocumentos />
			</section>
		</MainLayout>
	)
}
