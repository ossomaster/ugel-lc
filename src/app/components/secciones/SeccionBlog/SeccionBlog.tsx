import Link from "next/link"
import { FaChevronRight } from "react-icons/fa6"
import SeccionTitle from "../../SeccionTitle"
import SeccionBlogList from "./SeccionBlogList"
import { Suspense } from "react"

export default function SeccionBlog() {
	return (
		<section id="blog" className="seccion">
			<div className="container">
				<div>
					<SeccionTitle subtitle="Mantente informado con las últimas noticias, consejos de viaje y relatos emocionantes de nuestras aventuras en la Selva Cusqueña y más allá.">
						CONOCE MÁS SOBRE LA <span className="text-primary">SELVA CUSQUEÑA</span>
					</SeccionTitle>
				</div>
				<Suspense fallback={<div className="text-center text-sm text-gray-300">Cargando artículos...</div>}>
					<SeccionBlogList />
				</Suspense>
				<div className="text-center">
					<Link href="/blog" className="btn btn--outline mt-12">
						Ver Más Artículos
						<FaChevronRight className="inline ml-2" />
					</Link>
				</div>
			</div>
		</section>
	)
}
