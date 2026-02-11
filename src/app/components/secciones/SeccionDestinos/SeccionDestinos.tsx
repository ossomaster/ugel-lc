import Link from "next/link"
import { FaChevronRight } from "react-icons/fa6"
import SeccionDestinosList from "./SeccionDestinosList"
import { Suspense } from "react"

export default function SeccionDestinos() {
	return (
		<section className="seccion relative bg-primary-dark text-white overflow-hidden">
			<div className="absolute inset-0 opacity-10 bg-[url('/assets/patterns/bg-pattern.png')] bg-repeat bg-[length:400px]"></div>
			<div className="container relative z-10">
				<div className="mb-12">
					<div className="max-w-3xl">
						<h2 className="seccion__title">
							INCREÍBLES <span className="text-secondary">DESTINOS</span>
						</h2>
						<img src="/assets/patterns/lines-pattern-yellow.png" alt="" className="h-3 my-4" />
						<p className="text-gray-300">
							Quillabamba Travel ofrece una fusión de destinos cautivadores: desde la exuberante selva alta y sus impresionantes cataratas, hasta pintorescos pueblos y paisajes andinos,
							cada destino promete una aventura única.
						</p>
					</div>
				</div>

				<Suspense fallback={<div className="text-center text-sm text-gray-300">Cargando destinos...</div>}>
					<SeccionDestinosList />
				</Suspense>

				<div className="text-center">
					<Link href="/destinos" className="btn btn--primary mt-12">
						Ver Más Destinos
						<FaChevronRight className="inline ml-2" />
					</Link>
				</div>
			</div>
		</section>
	)
}
