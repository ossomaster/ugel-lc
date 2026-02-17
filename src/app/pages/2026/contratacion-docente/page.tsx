import MainLayout from "../../../components/MainLayout"
import PageHero from "../../../components/PageHero"
import TablaDocumentos from "./TablaDocumentos"

export default function Ejemplo1Page() {
	return (
		<MainLayout>
			<PageHero title="Documentos Normativos" subtitle="Listado de documentos normativos con opciones de búsqueda, exportación y descarga" />
			<section className="container py-12">
				<TablaDocumentos />
			</section>
		</MainLayout>
	)
}
