"use client"

import dayjs from "dayjs"
import customParseFormat from "dayjs/plugin/customParseFormat"
import { useMemo, useState } from "react"
import MainLayout from "../../../components/MainLayout"
import PageHero from "../../../components/PageHero"
import TablaDocumentos from "./TablaDocumentos"
import { DOCUMENTOS_NORMATIVOS, type TDocumentoNormativo } from "./constants"

dayjs.extend(customParseFormat)

const FECHA_FORMAT = "DD.MM.YYYY"

type TabConvocatoria = "vigente" | "concluida" | "cancelada"

const tabs: { value: TabConvocatoria; label: string }[] = [
	{ value: "vigente", label: "CONVOCATORIAS VIGENTES" },
	{ value: "concluida", label: "CONVOCATORIAS CONCLUIDAS" },
	{ value: "cancelada", label: "CONVOCATORIAS CANCELADAS" },
]

function clasificarDocumentos(docs: TDocumentoNormativo[]) {
	const hoy = dayjs().startOf("day")

	const vigentes: TDocumentoNormativo[] = []
	const concluidas: TDocumentoNormativo[] = []
	const canceladas: TDocumentoNormativo[] = []

	for (const doc of docs) {
		if (doc.cancelado) {
			canceladas.push(doc)
			continue
		}

		const fechaInicio = dayjs(doc.inicio, FECHA_FORMAT)
		const fechaFin = dayjs(doc.fin, FECHA_FORMAT)

		if (hoy.isAfter(fechaFin)) {
			concluidas.push(doc)
		} else if ((hoy.isAfter(fechaInicio) || hoy.isSame(fechaInicio)) && (hoy.isBefore(fechaFin) || hoy.isSame(fechaFin))) {
			vigentes.push(doc)
		} else {
			// aún no inicia → se muestra como vigente (próxima)
			vigentes.push(doc)
		}
	}

	return { vigentes, concluidas, canceladas }
}

export default function DocumentosNormativosPage() {
	const [activeTab, setActiveTab] = useState<TabConvocatoria>("vigente")

	const { vigentes, concluidas, canceladas } = useMemo(() => clasificarDocumentos(DOCUMENTOS_NORMATIVOS), [])

	const dataMap: Record<TabConvocatoria, TDocumentoNormativo[]> = {
		vigente: vigentes,
		concluida: concluidas,
		cancelada: canceladas,
	}

	const countMap: Record<TabConvocatoria, number> = {
		vigente: vigentes.length,
		concluida: concluidas.length,
		cancelada: canceladas.length,
	}

	return (
		<MainLayout>
			<PageHero title="Convocatorias / Abastecimientos" subtitle="Listado de publicaciones" />

			{/* ==================== CONTAINER MÁS ANCHO ==================== */}
			<section className="max-w-[1440px] mx-auto px-4 lg:px-8 py-12">
				<div className="mb-8 border-b border-gray-300">
					<nav className="-mb-px flex flex-wrap gap-2 sm:gap-6" aria-label="Tabs">
						{tabs.map(({ value, label }) => {
							const isActive = activeTab === value

							return (
								<button
									key={value}
									onClick={() => setActiveTab(value)}
									className={`
                    whitespace-nowrap border-b-2 px-4 py-3 text-sm font-medium transition-colors md:px-6
                    ${isActive ? "border-red-600 text-red-600" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"}
                  `}
								>
									{label} <span className="ml-1.5 text-xs opacity-75">({countMap[value]})</span>
								</button>
							)
						})}
					</nav>
				</div>

				<TablaDocumentos datos={dataMap[activeTab]} />
			</section>
		</MainLayout>
	)
}
