import MainLayout from "../../../components/MainLayout"
import PageHero from "../../../components/PageHeroContratacionAuxiliar"
import TablaDocumentos from "./TablaDocumentos"

export default function ContratacionDocenePage() {
	return (
		<MainLayout>
			<PageHero title="Contratación de Auxiliares de Educación - 2026" subtitle="Listado de publicaciones" />
			<section className="container py-12">
				<TablaDocumentos />
			</section>
		</MainLayout>
	)
}
