"use client"

import { asset } from "@/app/helpers"
import Link from "next/link"
import CountUp from "react-countup"
import { FaAward, FaUsers, FaChalkboardTeacher, FaPlusCircle, FaSchool } from "react-icons/fa"
import { FaPersonArrowDownToLine, FaSchoolFlag } from "react-icons/fa6"

export default function SeccionCifras() {
	return (
		<section
			className="relative bg-cover bg-center bg-no-repeat py-20"
			style={{ backgroundImage: `url("${asset("assets/images/fondo-cifras-ugellc.jpg")}")` }}

		>
			<div className="absolute inset-0 bg-black/60" />

			<div className="container relative z-10">
				<div className="mb-12">
					<h2 className="font-heading font-extrabold text-3xl text-white uppercase">
						Comunidad Educativa de la UGEL La Convención
					</h2>
					<p className="text-white/80 mt-2 italic">
						Información de Docentes y Instituciones Educativas
					</p>
					<div className="w-10 h-1 bg-amber-400 mt-4 rounded-full" />
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center text-white">
					{/* Columna 1 */}
					<div className="flex flex-col items-center gap-3">
						<FaChalkboardTeacher className="text-5xl text-amber-400" />
						<CountUp end={2818} duration={2.5} separator="," enableScrollSpy scrollSpyOnce className="text-5xl font-heading font-extrabold text-amber-400" />
						<h3 className="font-heading font-extrabold text-sm uppercase leading-tight">
							Docentes
						</h3>
						<p className="text-sm text-white/75 leading-relaxed">
							2507 públicas<br />311 privadas
						</p>
						<Link href="https://escale.minedu.gob.pe/magnitudes" className="inline-flex items-center gap-2 mt-2 bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold uppercase px-5 py-2 rounded-full transition-colors">
							<FaPlusCircle />
							Más información
						</Link>
					</div>

					{/* Columna 2 */}
					<div className="flex flex-col items-center gap-3">
						<FaSchoolFlag className="text-5xl text-amber-400" />
						<CountUp end={749} duration={2.5} separator="," enableScrollSpy scrollSpyOnce className="text-5xl font-heading font-extrabold text-amber-400" />
						<h3 className="font-heading font-extrabold text-sm uppercase leading-tight">
							NÚMERO DE SERVICIOS EDUCATIVOS Y PROGRAMAS DEL SISTEMA EDUCATIVO
						</h3>
						<p className="text-sm text-white/75 leading-relaxed">
							687 públicas<br />62 privadas
						</p>
						<Link href="https://escale.minedu.gob.pe/magnitudes" className="inline-flex items-center gap-2 mt-2 bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold uppercase px-5 py-2 rounded-full transition-colors">
							<FaPlusCircle />
							Más información
						</Link>
					</div>

					{/* Columna 3 */}
					<div className="flex flex-col items-center gap-3">
						<FaUsers className="text-5xl text-amber-400" />
						<CountUp end={33780} duration={2.5} separator="," enableScrollSpy scrollSpyOnce className="text-5xl font-heading font-extrabold text-amber-400" />
						<h3 className="font-heading font-extrabold text-sm uppercase leading-tight">
							Estudiantes 2025
						</h3>
						<p className="text-sm text-white/75 leading-relaxed">
							30018 en públicos<br />3762 en privados
						</p>
						<Link href="https://escale.minedu.gob.pe/magnitudes" className="inline-flex items-center gap-2 mt-2 bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold uppercase px-5 py-2 rounded-full transition-colors">
							<FaPlusCircle />
							Más información
						</Link>
					</div>

					{/* Columna 4 */}
					{/* <div className="flex flex-col items-center gap-3">
						<FaChalkboardTeacher className="text-5xl text-amber-400" />
						<CountUp end={3425} duration={2.5} separator="," enableScrollSpy scrollSpyOnce className="text-5xl font-heading font-extrabold text-amber-400" />
						<h3 className="font-heading font-extrabold text-sm uppercase leading-tight">
							Docentes Formadores
						</h3>
						<p className="text-sm text-white/75 leading-relaxed">
							2 284 en públicos<br />1 141 en privados
						</p>
					</div> */}
				</div>
			</div>
		</section>
	)
}
