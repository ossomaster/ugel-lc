import Link from "next/link"
import { FaChevronRight } from "react-icons/fa6"
import SeccionExperienciasList from "./SeccionExperienciasList"
import { Suspense } from "react"
import SeccionTitle from "../../SeccionTitle"

export default function SeccionExperiencias() {
	return (
		<section className="seccion">
			<div className="container">
				<SeccionTitle subtitle="Descubre destinos increíbles y vive aventuras inolvidables con nosotros">
					EXPLORA <span className="text-primary">NUEVAS</span> EXPERIENCIAS
				</SeccionTitle>

				<Suspense fallback={<div className="text-center text-sm text-gray-500">Cargando experiencias...</div>}>
					<SeccionExperienciasList />
				</Suspense>

				<div className="text-center">
					<Link href="/experiencias" className="btn btn--primary mt-12">
						Ver Más Experiencias
						<FaChevronRight className="inline ml-2" />
					</Link>
				</div>
			</div>
		</section>
	)
}
