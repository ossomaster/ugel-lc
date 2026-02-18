import MainLayout from "../../../components/MainLayout"
import PageHero from "../../../components/PageHero"
import TablaDocumentos from "./TablaDocumentos"

export default function Ejemplo1Page() {
	return (
		<MainLayout>
			<PageHero title="NOTICIAS" subtitle="Oficios Multiples, Comunicados, Memorandum" />
			<section className="container py-12">
				<TablaDocumentos />
			</section>
		</MainLayout>
	)
}
