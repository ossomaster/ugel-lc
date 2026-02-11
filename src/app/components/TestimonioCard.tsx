import Link from "next/link"
import { FaStar } from "react-icons/fa6"
import { FcGoogle } from "react-icons/fc"

export type TestimonioProps = {
	nombre: string
	stars: number
	date: string
	testimonio: string
	imagen?: string
	enlace: string
}

export default function TestimonioCard({ testimonio }: { testimonio: TestimonioProps }) {
	return (
		<div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
			<div className="flex items-start justify-between mb-4">
				<div className="flex items-center gap-2">
					{testimonio.imagen ? (
						<img
							src={testimonio.imagen}
							alt={testimonio.nombre}
							className="size-10 rounded-full object-cover shrink-0"
						/>
					) : (
						<div className="size-10 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
							{testimonio.nombre.charAt(0)}
						</div>
					)}
					<div>
						<h4 className="font-bold text-gray-900 text-sm">{testimonio.nombre}</h4>
						<p className="text-xs text-gray-500">{testimonio.date}</p>
					</div>
				</div>
				<span className="shrink-0">
                    <FcGoogle className="text-xl" />
                </span>
			</div>

			<div className="flex mb-3 text-yellow-500 text-xs">
				{[...Array(5)].map((_, i) => (
					<FaStar key={i} className={i < testimonio.stars ? "text-yellow-400" : "text-gray-300"} />
				))}
			</div>

			<p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-6 grow">
				{testimonio.testimonio}
			</p>

            <div className="mt-auto pt-4 border-t border-gray-100">
                <Link 
                    href={testimonio.enlace} 
                    target="_blank" 
                    className="text-primary text-xs font-semibold hover:underline flex items-center gap-1"
                >
                    Ver en Google Maps
                </Link>
            </div>
		</div>
	)
}
