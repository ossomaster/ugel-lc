"use client"

import { useState, useMemo } from "react"
import { FaFilePdf, FaCalendarAlt, FaTag, FaSearch, FaFilter, FaFire, FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { DOCUMENTOS_NORMATIVOS, type TDocumentoNormativo } from "./constants"

const ITEMS_PER_PAGE = 5;

// Componente para la lista principal (Estilo MINEDU)
const CardDocumento = ({ doc }: { doc: TDocumentoNormativo }) => (
	<div className="flex flex-col sm:flex-row gap-4 p-5 bg-white border-b border-gray-100 hover:bg-slate-50 transition-colors group">
		<div className="shrink-0 flex items-center justify-center w-full sm:w-28 h-36 bg-red-50 border border-red-100 rounded shadow-sm group-hover:shadow-md transition-shadow">
			<FaFilePdf className="text-4xl text-red-500" />
		</div>
		<div className="flex-grow space-y-2">
			<div className="flex flex-wrap gap-2 items-center">
				{doc.badge && (
					<span className="px-2 py-0.5 text-[10px] font-bold uppercase rounded-md" style={{ backgroundColor: `${doc.badge.color}15`, color: doc.badge.color }}>
						{doc.badge.label}
					</span>
				)}
				<span className="text-[11px] font-medium text-gray-500 flex items-center gap-1">
					<FaTag className="text-gray-300" /> {doc.tipo}
				</span>
			</div>
			<h3 className="text-md font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">
				{doc.nombre}
			</h3>
			<p className="text-xs text-gray-500 flex items-center gap-1">
				<FaCalendarAlt /> Publicado el: {doc.fecha}
			</p>
			<div className="pt-2">
				<a href={doc.archivoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-600 text-white rounded text-xs font-bold hover:bg-red-700 transition-all">
					<FaFilePdf /> DESCARGAR PDF
				</a>
			</div>
		</div>
	</div>
)

const SidebarCard = ({ doc }: { doc: TDocumentoNormativo }) => (
	<a href={doc.archivoUrl} target="_blank" rel="noopener noreferrer" className="flex gap-3 group border-b border-gray-100 pb-3 last:border-0">
		<div className="shrink-0 w-12 h-16 bg-gray-100 rounded flex items-center justify-center border border-gray-200 group-hover:border-red-200 transition-colors">
			<FaFilePdf className="text-red-400 text-xl" />
		</div>
		<div className="space-y-1">
			<h4 className="text-[13px] font-semibold text-gray-800 leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">
				{doc.nombre}
			</h4>
			<span className="text-[10px] text-gray-400 block">{doc.fecha}</span>
		</div>
	</a>
)

const TablaDocumentos = () => {
	const [busqueda, setBusqueda] = useState("")
	const [categoria, setCategoria] = useState("")
	const [currentPage, setCurrentPage] = useState(1)

	const categorias = useMemo(() => Array.from(new Set(DOCUMENTOS_NORMATIVOS.map((d) => d.tipo))), [])
	const recientes = useMemo(() => [...DOCUMENTOS_NORMATIVOS].sort((a, b) => b.fecha.localeCompare(a.fecha)).slice(0, 4), [])

	// Lógica de filtrado
	const documentosFiltrados = useMemo(() => {
		return DOCUMENTOS_NORMATIVOS.filter((doc) => {
			const coincideBusqueda = doc.nombre.toLowerCase().includes(busqueda.toLowerCase()) || doc.numero.toLowerCase().includes(busqueda.toLowerCase())
			const coincideCategoria = categoria === "" || doc.tipo === categoria
			return coincideBusqueda && coincideCategoria
		})
	}, [busqueda, categoria])

	// Lógica de paginación
	const totalPages = Math.ceil(documentosFiltrados.length / ITEMS_PER_PAGE)
	const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
	const currentDocs = documentosFiltrados.slice(startIndex, startIndex + ITEMS_PER_PAGE)

	const handlePageChange = (page: number) => {
		setCurrentPage(page)
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	return (
		<div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
			<div className="lg:col-span-3 space-y-6">
				{/* Filtros */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
					<div className="md:col-span-2 relative">
						<FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
						<input
							type="text"
							placeholder="Palabra clave o número..."
							className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none text-sm"
							value={busqueda}
							onChange={(e) => { setBusqueda(e.target.value); setCurrentPage(1); }}
						/>
					</div>
					<div className="relative">
						<FaFilter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
						<select
							className="w-full pl-9 pr-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none bg-white text-sm appearance-none"
							value={categoria}
							onChange={(e) => { setCategoria(e.target.value); setCurrentPage(1); }}
						>
							<option value="">Todas las categorías</option>
							{categorias.map((cat) => (<option key={cat} value={cat}>{cat}</option>))}
						</select>
					</div>
				</div>

				{/* Lista con Paginación */}
				<div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
					<div className="divide-y divide-gray-100">
						{currentDocs.length > 0 ? (
							currentDocs.map((doc) => <CardDocumento key={doc.numero} doc={doc} />)
						) : (
							<div className="p-10 text-center text-gray-400 italic">No se encontraron resultados.</div>
						)}
					</div>
					
					{/* Controles de Paginación */}
					{totalPages > 1 && (
						<div className="p-4 bg-slate-50 border-t border-gray-100 flex items-center justify-center gap-2">
							<button 
								onClick={() => handlePageChange(currentPage - 1)}
								disabled={currentPage === 1}
								className="p-2 rounded hover:bg-white border border-transparent hover:border-gray-200 disabled:opacity-30 transition-all"
							>
								<FaChevronLeft className="text-xs" />
							</button>
							
							{Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
								<button
									key={page}
									onClick={() => handlePageChange(page)}
									className={`px-3 py-1 rounded text-sm font-bold transition-all ${
										currentPage === page 
										? "bg-blue-900 text-white" 
										: "hover:bg-white border border-transparent hover:border-gray-200 text-gray-600"
									}`}
								>
									{page}
								</button>
							))}

							<button 
								onClick={() => handlePageChange(currentPage + 1)}
								disabled={currentPage === totalPages}
								className="p-2 rounded hover:bg-white border border-transparent hover:border-gray-200 disabled:opacity-30 transition-all"
							>
								<FaChevronRight className="text-xs" />
							</button>
						</div>
					)}
				</div>
			</div>

			{/* Sidebar */}
			<aside className="space-y-6">
				<div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
					<div className="bg-blue-900 px-4 py-3 flex items-center gap-2">
						<FaFire className="text-orange-400" />
						<h2 className="text-white font-bold text-sm uppercase tracking-wider">Recientes</h2>
					</div>
					<div className="p-4 flex flex-col gap-4">
						{recientes.map((doc) => (
							<SidebarCard key={`side-${doc.numero}`} doc={doc} />
						))}
					</div>
				</div>
			</aside>
		</div>
	)
}

export default TablaDocumentos