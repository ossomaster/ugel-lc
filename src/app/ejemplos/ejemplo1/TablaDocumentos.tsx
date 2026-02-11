"use client"

import dynamic from "next/dynamic"
import { type ComponentType } from "react"
import { type TableColumn } from "react-data-table-component"
import { FaFilePdf } from "react-icons/fa6"
import type { default as DataTableComponent } from "../../commons/components/DataTable"
import { DOCUMENTOS_NORMATIVOS, type TDocumentoNormativo } from "./constants"

const DataTable = dynamic(() => import("../../commons/components/DataTable"), { ssr: false }) as ComponentType<Parameters<typeof DataTableComponent<TDocumentoNormativo>>[0]>

const columns: TableColumn<TDocumentoNormativo>[] = [
	{
		id: "numero",
		name: "N.°",
		selector: (row) => row.numero,
		sortable: true,
		width: "130px",
	},
	{
		id: "nombre",
		name: "Documento",
		selector: (row) => row.nombre,
		sortable: true,
		grow: 3,
		wrap: true,
		cell: (row) => (
			<div className="flex items-center gap-2 py-1">
				<span>{row.nombre}</span>
				{row.badge && (
					<span
						className="inline-flex items-center shrink-0 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide rounded-full"
						style={{ backgroundColor: `${row.badge.color}15`, color: row.badge.color }}
					>
						{row.badge.label}
					</span>
				)}
			</div>
		),
	},
	{
		id: "tipo",
		name: "Tipo",
		selector: (row) => row.tipo,
		sortable: true,
		grow: 1,
	},
	{
		id: "fecha",
		name: "Fecha",
		selector: (row) => row.fecha,
		sortable: true,
		width: "130px",
	},
	{
		id: "archivo",
		name: "Descargar",
		width: "110px",
		style: { justifyContent: "center" },
		cell: (row) => (
			<a
				href={row.archivoUrl}
				target="_blank"
				rel="noopener noreferrer"
				className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-600 hover:bg-red-100 transition-colors text-sm font-medium"
				title="Descargar PDF"
			>
				<FaFilePdf className="text-sm" />
				PDF
			</a>
		),
	},
]

const TablaDocumentos = () => {
	return <DataTable columns={columns} data={DOCUMENTOS_NORMATIVOS} title="Documentos Normativos - UGEL La Convención" defaultSortFieldId="numero" defaultSortAsc={false} />
}

export default TablaDocumentos
