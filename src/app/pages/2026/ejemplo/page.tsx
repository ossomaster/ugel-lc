import MainLayout from "../../../components/MainLayout"
import PageHero from "../../../components/PageHero"
import TablaDocumentos from "./TablaDocumentos"

export default function Pages2026EjemploPage() {
	return (
		<MainLayout>
			<PageHero title="Documentos oficiales, comunicados." subtitle="Aquí encontrarás los documentos oficiales, comunicados y circulares emitidos por la UGEL." />
			<section className="container py-12">
				<TablaDocumentos />
			</section>
		</MainLayout>
	)
}
