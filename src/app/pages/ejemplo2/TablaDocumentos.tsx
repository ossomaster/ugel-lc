// TablaDocumentos.tsx
"use client"

import dynamic from "next/dynamic"
import { type ComponentType } from "react"
import { type TableColumn } from "react-data-table-component"
import { FaFilePdf, FaSquareCheck } from "react-icons/fa6"
import type { default as DataTableComponent } from "../../commons/components/DataTable"
import { type TDocumentoNormativo } from "./constants"

const DataTable = dynamic(
  () => import("../../commons/components/DataTable"),
  { ssr: false }
) as ComponentType<Parameters<typeof DataTableComponent<TDocumentoNormativo>>[0]>

const columns: TableColumn<TDocumentoNormativo>[] = [
  {
    id: "numero",
    name: "N.°",
    selector: (row) => row.numero,
    sortable: true,
    width: "130px",
  },
  {
    id: "convocatoria",
    name: "convocatoria",
    selector: (row) => row.convocatoria,
    sortable: true,
    grow: 3,
    wrap: true,
    cell: (row) => (
      <div className="flex items-center gap-2 py-1">
        <span>{row.convocatoria}</span>
        {row.badge && (
          <span
            className="inline-flex items-center shrink-0 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide rounded-full"
            style={{
              backgroundColor: `${row.badge.color}15`,
              color: row.badge.color,
            }}
          >
            {row.badge.label}
          </span>
        )}
      </div>
    ),
  },
    
  {
    id: "bases",
    name: "bases",
    width: "110px",
    style: { justifyContent: "center" },
    cell: (row) => (
      <a
        href={row.archivoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-600 hover:bg-red-100 transition-colors text-sm font-medium"
        title="PRELIMINAR"
      >
        <FaFilePdf className="text-sm" />
        PDF
      </a>
    ),
  },
  {
    id: "preliminar",
    name: "preliminar",
    width: "110px",
    style: { justifyContent: "center" },
    cell: (row) => (
      <a
        href={row.archivoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-600 hover:bg-red-100 transition-colors text-sm font-medium"
        title="PRELIMINAR"
      >
        <FaFilePdf className="text-sm" />
        PDF
      </a>
    ),
  },
  {
    id: "aptos-entrevista",
    name: "aptos-entrevista",
    width: "110px",
    style: { justifyContent: "center" },
    cell: (row) => (
      <a
        href={row.archivoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-600 hover:bg-red-100 transition-colors text-sm font-medium"
        title="APTOS ENTREVISTA"
      >
        <FaFilePdf className="text-sm" />
        PDF
      </a>
    ),
  },
  {
    id: "resultado-final",
    name: "resultado-final",
    width: "150px",
    style: { justifyContent: "center" },
    cell: (row) => (
      <a
        href={row.archivoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-600 hover:bg-red-100 transition-colors text-sm font-medium"
        title="RESULTADO FINAL"
      >
        <FaFilePdf className="text-sm" />
        PDF
      </a>
    ),
  },
  {
    id: "comunicados",
    name: "comunicados",
    width: "150px",
    style: { justifyContent: "left" },
    cell: (row) => (
      <a
        href={row.archivoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-left gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-600 hover:bg-red-100 transition-colors text-sm font-medium"
        title="COMUNICADO"
      >
        <FaFilePdf className="text-sm" />
        PDF
      </a>
    ),
  },
  {
    id: "estado",
    name: "estado",
    width: "160px",
    style: { justifyContent: "left" },
    cell: (row) => (
      <a
        href={row.archivoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-left gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-600 hover:bg-red-100 transition-colors text-sm font-medium"
        title="ESTADO"
      >
        <FaSquareCheck className="text-sm" />
        PUBLICADO
      </a>
    ),
  },
]

interface TablaDocumentosProps {
  datos: TDocumentoNormativo[]
}

export default function TablaDocumentos({ datos }: TablaDocumentosProps) {
  return (
    <DataTable
      columns={columns}
      data={datos}
      title="Documentos Normativos - UGEL La Convención"
      defaultSortFieldId="numero"
      defaultSortAsc={false}
      pagination
      paginationPerPage={10}
      paginationRowsPerPageOptions={[10, 20, 50]}
      // Opcional: si tu DataTable personalizado soporta estas props
      // highlightOnHover
      // pointerOnHover
      // dense
      // theme="default"   ← depende de tu implementación
    />
  )
}