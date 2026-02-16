"use client"

import { useState, useMemo, useCallback } from "react"
import RDTDataTable, { type TableColumn } from "react-data-table-component"
import { FaFilePdf, FaFileExcel, FaPrint, FaMagnifyingGlass } from "react-icons/fa6"
import { saveAs } from "file-saver"
import * as XLSX from "xlsx"

type DataTableProps<T> = {
	columns: TableColumn<T>[]
	data: T[]
	title?: string
	defaultSortFieldId?: string | number
	defaultSortAsc?: boolean
	paginationPerPage?: number
	noDataMessage?: string
}

const customStyles = {
	headRow: {
		style: {
			backgroundColor: "#c7194a",
			borderBottomWidth: "2px",
			borderBottomColor: "#e2e8f0",
			minHeight: "48px",
		},
	},
	headCells: {
		style: {
			color: "#ffffff",
			fontWeight: "600",
			fontSize: "0.75rem",
			textTransform: "uppercase" as const,
			letterSpacing: "0.05em",
			paddingLeft: "16px",
			paddingRight: "16px",
		},
	},
	rows: {
		style: {
			fontSize: "0.875rem",
			minHeight: "52px",
			color: "#334155",
			"&:not(:last-of-type)": {
				borderBottomStyle: "solid" as const,
				borderBottomWidth: "1px",
				borderBottomColor: "#e46b8b",
			},
		},
		highlightOnHoverStyle: {
			backgroundColor: "#afb3b9",
			outline: "none",
		},
	},
	cells: {
		style: {
			paddingLeft: "16px",
			paddingRight: "16px",
		},
	},
	pagination: {
		style: {
			fontSize: "0.8rem",
			borderTopStyle: "solid" as const,
			borderTopWidth: "1px",
			borderTopColor: "#e2e8f0",
			minHeight: "52px",
			color: "#c7194a",
		},
	},
}

const DataTable = <T,>({
	columns,
	data,
	title = "Datos",
	defaultSortFieldId,
	defaultSortAsc = false,
	paginationPerPage = 10,
	noDataMessage = "No se encontraron registros",
}: DataTableProps<T>) => {
	const [filterText, setFilterText] = useState("")

	const exportableColumns = useMemo(() => columns.filter((col) => col.selector), [columns])

	const getHeaders = useCallback(
		() => exportableColumns.map((col) => (typeof col.name === "string" ? col.name : String(col.id || ""))),
		[exportableColumns]
	)

	const getExportRows = useCallback(
		(rows: T[]) =>
			rows.map((row) => {
				const obj: Record<string, string> = {}
				exportableColumns.forEach((col) => {
					const header = typeof col.name === "string" ? col.name : String(col.id || "")
					obj[header] = String(col.selector!(row, 0))
				})
				return obj
			}),
		[exportableColumns]
	)

	const filteredData = useMemo(() => {
		if (!filterText) return data
		const lower = filterText.toLowerCase()
		return data.filter((row) => exportableColumns.some((col) => String(col.selector!(row, 0)).toLowerCase().includes(lower)))
	}, [filterText, data, exportableColumns])

	const exportToExcel = () => {
		const ws = XLSX.utils.json_to_sheet(getExportRows(filteredData))
		const wb = XLSX.utils.book_new()
		XLSX.utils.book_append_sheet(wb, ws, title.slice(0, 31))
		const buf = XLSX.write(wb, { bookType: "xlsx", type: "array" })
		saveAs(new Blob([buf], { type: "application/octet-stream" }), `${title.toLowerCase().replace(/\s+/g, "-")}.xlsx`)
	}

	const handlePrint = () => {
		const headers = getHeaders()
		const rows = getExportRows(filteredData)
		const html = `
			<html><head><title>${title}</title>
			<style>body{font-family:sans-serif;padding:20px}h2{margin-bottom:16px}table{width:100%;border-collapse:collapse}th,td{border:1px solid #ccc;padding:8px;text-align:left;font-size:13px}th{background:#1a1a2e;color:#fff}</style>
			</head><body><h2>${title}</h2>
			<table><thead><tr>${headers.map((h) => `<th>${h}</th>`).join("")}</tr></thead><tbody>
			${rows.map((r) => `<tr>${headers.map((h) => `<td>${r[h]}</td>`).join("")}</tr>`).join("")}
			</tbody></table></body></html>`
		const w = window.open("", "_blank")
		if (w) {
			w.document.write(html)
			w.document.close()
			w.print()
		}
	}

	const exportToPdf = async () => {
		// @ts-expect-error pdfmake sin tipos
		const pdfMake = (await import("pdfmake/build/pdfmake")).default
		// @ts-expect-error pdfmake vfs sin tipos
		const pdfFonts = (await import("pdfmake/build/vfs_fonts")).default
		pdfMake.vfs = pdfFonts.pdfMake ? pdfFonts.pdfMake.vfs : pdfFonts

		const headers = getHeaders()
		const rows = getExportRows(filteredData)
		const widths = exportableColumns.map((col) => (col.grow && col.grow > 1 ? "*" : "auto"))

		const docDefinition = {
			pageOrientation: "landscape" as const,
			content: [
				{ text: title, style: "header" },
				{
					table: {
						headerRows: 1,
						widths,
						body: [headers, ...rows.map((r) => headers.map((h) => r[h]))],
					},
					layout: "lightHorizontalLines",
				},
			],
			styles: {
				header: { fontSize: 16, bold: true, margin: [0, 0, 0, 12] },
			},
		}
		pdfMake.createPdf(docDefinition).download(`${title.toLowerCase().replace(/\s+/g, "-")}.pdf`)
	}

	const subHeaderComponent = useMemo(
		() => (
			<div className="flex flex-wrap items-center gap-3 w-full justify-between py-3 px-1">
				<div className="flex gap-2">
					<button onClick={exportToExcel} className="btn btn--sm btn--success gap-1.5" title="Exportar a Excel">
						<FaFileExcel />
						Excel
					</button>
					<button onClick={exportToPdf} className="btn btn--sm btn--danger gap-1.5" title="Exportar a PDF">
						<FaFilePdf />
						PDF
					</button>
					<button onClick={handlePrint} className="btn btn--sm btn--info gap-1.5" title="Imprimir">
						<FaPrint />
						Imprimir
					</button>
				</div>
				<div className="relative">
					<FaMagnifyingGlass className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
					<input
						type="text"
						placeholder="Buscar..."
						value={filterText}
						onChange={(e) => setFilterText(e.target.value)}
						className="pl-10 pr-4 py-2.5 text-sm border border-gray-200 rounded-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all w-64"
					/>
				</div>
			</div>
		),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[filterText, filteredData]
	)

	return (
		<div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
			<RDTDataTable
				columns={columns}
				data={filteredData}
				pagination
				paginationPerPage={paginationPerPage}
				paginationRowsPerPageOptions={[10, 15, 25, 50]}
				paginationComponentOptions={{
					rowsPerPageText: "Filas por página:",
					rangeSeparatorText: "de",
				}}
				highlightOnHover
				responsive
				subHeader
				subHeaderComponent={subHeaderComponent}
				noDataComponent={<div className="py-8 text-gray-500">{noDataMessage}</div>}
				defaultSortFieldId={defaultSortFieldId}
				defaultSortAsc={defaultSortAsc}
				customStyles={customStyles}
			/>
		</div>
	)
}

export default DataTable
