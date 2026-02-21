import MainLayout from "../../../components/MainLayout"
import PageHero from "../../../components/PageHero"
import TablaDocumentos from "./TablaDocumentos"

export default function Ejemplo1Page() {
	return (
		<MainLayout>
			<PageHero title="Contratación del Servicio Docente - 2026" subtitle="Listado de publicaciones" />
			<section className="container py-12">
				<TablaDocumentos />
			</section>
		</MainLayout>
	)
}
