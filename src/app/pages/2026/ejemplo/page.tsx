import MainLayout from "../../../components/MainLayout"
import PageHero from "../../../components/PageHero"
import TablaDocumentos from "./TablaDocumentos"

export default function Ejemplo1Page() {
	return (
		<MainLayout>
				<section className="container py-12">Documentos oficiales, comunicados.
				<TablaDocumentos />
			</section>
		</MainLayout>
	)
}
