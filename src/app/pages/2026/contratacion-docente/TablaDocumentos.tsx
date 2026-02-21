"use client"

import dynamic from "next/dynamic"
import { type ComponentType } from "react"
import { type TableColumn } from "react-data-table-component"
import { FaFilePdf } from "react-icons/fa6"
import type { default as DataTableComponent } from "../../../commons/components/DataTable"
import { DOCUMENTOS_NORMATIVOS, type TDocumentoNormativo } from "./constants"

const DataTable = dynamic(() => import("../../../commons/components/DataTable"), { ssr: false }) as ComponentType<Parameters<typeof DataTableComponent<TDocumentoNormativo>>[0]>

const columns: TableColumn<TDocumentoNormativo>[] = [
	{
		id: "numero",
		name: "N.°",
		selector: (row) => row.numero,
		sortable: true,
		width: "85px", // Ajustado para ahorrar espacio
	},
	{
		id: "nombre",
		name: "Documento",
		selector: (row) => row.nombre,
		sortable: true,
		grow: 3,
		wrap: true,
		cell: (row) => (
			<div className="flex items-center gap-2 py-2">
				<span className="text-sm leading-tight text-slate-700">{row.nombre}</span>
				{row.badge && (
					<span
						className="inline-flex items-center shrink-0 px-2 py-0.5 text-[10px] font-normal uppercase tracking-wider rounded-md"
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
		width: "140px",
	},
	{
		id: "fecha",
		name: "Fecha",
		selector: (row) => row.fecha,
		sortable: true,
		width: "110px",
	},
	{
    id: "archivo",
    name: "Documentos",
    width: "220px", 
    cell: (row) => {
        const renderButton = (url: string, label: string = "VER PDF") => (
            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                key={url}
                className="group inline-flex items-center gap-1.5 px-2 py-1 rounded border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 shadow-sm"
                title={`Descargar ${label}`}
            >
                {/* Ícono en rojo para mantener la identidad del formato PDF */}
                <FaFilePdf className="text-red-600 text-[12px] group-hover:scale-110 transition-transform" />
                
                {/* Texto en color negro (slate-900) */}
                <span className="text-[10px] font-normal uppercase whitespace-nowrap text-slate-700">
                    {label}
                </span>
            </a>
        )

        return (
            <div className="flex flex-wrap gap-2 py-3 justify-left">
                {Array.isArray(row.archivoUrl) 
                    ? row.archivoUrl.map((doc) => renderButton(doc.url, doc.label))
                    : renderButton(row.archivoUrl as string)
                }
            </div>
        )
    },
},
]

const TablaDocumentos = () => {
	return <DataTable columns={columns} data={DOCUMENTOS_NORMATIVOS} title="Documentos Normativos - UGEL La Convención" defaultSortFieldId="numero" defaultSortAsc={false} />
}

export default TablaDocumentos