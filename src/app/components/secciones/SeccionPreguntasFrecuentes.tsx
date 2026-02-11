"use client"

import { useMemo, useState } from "react"
import { FaChevronDown, FaQuestion, FaChevronRight } from "react-icons/fa6"
import SeccionTitle from "../SeccionTitle"
import { PREGUNTAS_FRECUENTES } from "@/app/constants/preguntas-frecuentes.constant"
import Link from "next/link"

export default function SeccionPreguntasFrecuentes() {
	const [openIndex, setOpenIndex] = useState<number | null>(null)

	const togglePregunta = (index: number) => {
		setOpenIndex(openIndex === index ? null : index)
	}

	const visibleQuestions = useMemo(() => PREGUNTAS_FRECUENTES.slice(0, 20), [])
	const leftQuestions = useMemo(() => visibleQuestions.slice(0, Math.ceil(visibleQuestions.length / 2)), [visibleQuestions])
	const rightQuestions = useMemo(() => visibleQuestions.slice(Math.ceil(visibleQuestions.length / 2)), [visibleQuestions])

	return (
		<section className="seccion bg-white">
			<div className="container">
				<div>
					<SeccionTitle variant="icono" icon={<FaQuestion />} subtitle="Resolvemos tus dudas principales para que tu viaje sea perfecto">
						PREGUNTAS <span className="text-primary">FRECUENTES</span>
					</SeccionTitle>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto items-start">
					<div className="flex flex-col gap-3">
						{leftQuestions.map((item, index) => {
							const realIndex = index
							return <PreguntaItem key={realIndex} item={item} isOpen={openIndex === realIndex} onClick={() => togglePregunta(realIndex)} />
						})}
					</div>
					<div className="flex flex-col gap-3">
						{rightQuestions.map((item, index) => {
							const realIndex = index + leftQuestions.length
							return <PreguntaItem key={realIndex} item={item} isOpen={openIndex === realIndex} onClick={() => togglePregunta(realIndex)} />
						})}
					</div>
				</div>

				<div className="text-center">
					<Link href="/preguntas-frecuentes" className="btn btn--outline mt-12">
						Ver Todas las Preguntas
						<FaChevronRight className="inline ml-2" />
					</Link>
				</div>
			</div>
		</section>
	)
}

export function PreguntaItem({ item, isOpen, onClick }: { item: { pregunta: string; respuesta: string }; isOpen: boolean; onClick: () => void }) {
	return (
		<div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
			<button
				onClick={onClick}
				className={`w-full text-left p-3 flex items-center justify-between gap-3 transition-colors duration-300 ${
					isOpen ? "bg-primary text-white" : "bg-white hover:bg-gray-50 text-gray-800"
				}`}
			>
				<span className="font-bold text-xs md:text-sm leading-tight pr-2">{item.pregunta}</span>
				<FaChevronDown className={`shrink-0 text-sm transition-transform duration-300 ${isOpen ? "rotate-180 text-white" : "text-primary"}`} />
			</button>
			<div className={`transition-all duration-300 ease-in-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
				<div className="p-3 pt-2 text-gray-600 text-xs md:text-sm leading-relaxed whitespace-pre-line border-t border-transparent">{item.respuesta}</div>
			</div>
		</div>
	)
}
