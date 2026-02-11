"use client"

import { useMemo, useState } from "react"
import { PREGUNTAS_FRECUENTES } from "../constants/preguntas-frecuentes.constant"
import { PreguntaItem } from "../components/secciones/SeccionPreguntasFrecuentes"

export default function PreguntasList() {
	const [openIndex, setOpenIndex] = useState<number | null>(null)

	const togglePregunta = (index: number) => {
		setOpenIndex(openIndex === index ? null : index)
	}

	const leftQuestions = useMemo(() => PREGUNTAS_FRECUENTES.slice(0, Math.ceil(PREGUNTAS_FRECUENTES.length / 2)), [])
	const rightQuestions = useMemo(() => PREGUNTAS_FRECUENTES.slice(Math.ceil(PREGUNTAS_FRECUENTES.length / 2)), [])

	return (
		<div className="container">
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
		</div>
	)
}
