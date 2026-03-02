"use client"

import dynamic from "next/dynamic"
import { type ComponentType } from "react"
import { type TableColumn } from "react-data-table-component"
import { FaFilePdf, FaLink } from "react-icons/fa6" // Agregamos icono de enlace
import type { default as DataTableComponent } from "../../../commons/components/DataTable"
import { DOCUMENTOS_NORMATIVOS, type TDocumentoNormativo } from "./constants"

const DataTable = dynamic(() => import("../../../commons/components/DataTable"), { ssr: false }) as ComponentType<Parameters<typeof DataTableComponent<TDocumentoNormativo>>[0]>

const columns: TableColumn<TDocumentoNormativo>[] = [
    {
        id: "numero",
        name: "N.°",
        selector: (row) => row.numero,
        sortable: true,
        width: "85px",
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
                    <div className="relative flex items-center">
                        <span
                            className="inline-flex items-center shrink-0 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-md border"
                            style={{ 
                                backgroundColor: `${row.badge.color}15`, 
                                color: row.badge.color,
                                borderColor: `${row.badge.color}30` 
                            }}
                        >
                            <span className="relative flex h-2 w-2 mr-1.5">
                                <span 
                                    className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                                    style={{ backgroundColor: row.badge.color }}
                                ></span>
                                <span 
                                    className="relative inline-flex rounded-full h-2 w-2"
                                    style={{ backgroundColor: row.badge.color }}
                                ></span>
                            </span>
                            {row.badge.label}
                        </span>
                    </div>
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
        width: "240px", 
        cell: (row) => {
            // Renderizador de botones PDF
            const renderPdfButton = (url: string, label: string = "VER PDF") => (
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={url}
                    className="group inline-flex items-center gap-1.5 px-2 py-1 rounded border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 shadow-sm"
                    title={`Descargar ${label}`}
                >
                    <FaFilePdf className="text-red-600 text-[12px] group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] font-bold uppercase whitespace-nowrap text-slate-700">
                        {label}
                    </span>
                </a>
            );

            // Renderizador de botón de Enlace/Inscripción
            const renderLinkButton = (url: string) => (
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-1.5 px-2 py-1 rounded border border-purple-200 bg-purple-50 text-purple-700 hover:bg-purple-100 transition-all duration-200 shadow-sm"
                >
                    {/* Efecto Ping para resaltar el enlace activo */}
                    <span className="absolute -top-1 -right-1 flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                    </span>
                    
                    <FaLink className="text-[10px] group-hover:rotate-12 transition-transform" />
                    <span className="text-[10px] font-bold uppercase whitespace-nowrap">
                        Inscribirse
                    </span>
                </a>
            );

            return (
                <div className="flex flex-wrap gap-2 py-3 justify-left">
                    {/* Renderizar PDFs */}
                    {Array.isArray(row.archivoUrl) 
                        ? row.archivoUrl.map((doc) => renderPdfButton(doc.url, doc.label))
                        : row.archivoUrl && renderPdfButton(row.archivoUrl as string)
                    }

                    {/* Renderizar Enlace si existe */}
                    {row.enlace && renderLinkButton(row.enlace)}
                </div>
            )
        },
    },
]

const TablaDocumentos = () => {
    return <DataTable columns={columns} data={DOCUMENTOS_NORMATIVOS} title="Documentos Normativos - UGEL La Convención" defaultSortFieldId="numero" defaultSortAsc={false} />
}

export default TablaDocumentos;