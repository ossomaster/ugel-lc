"use client"

import ReactPaginate from "react-paginate"
import { useRouter, useSearchParams } from "next/navigation"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6"

interface Props {
	totalPages: number
	currentPage: number
}

export default function Pagination({ totalPages, currentPage }: Props) {
	const router = useRouter()
	const searchParams = useSearchParams()

	const handlePageChange = (selectedItem: { selected: number }) => {
		const params = new URLSearchParams(searchParams.toString())
		params.set("page", String(selectedItem.selected + 1))
		router.push(`?${params.toString()}`)
	}

	if (totalPages <= 1) return null

	return (
		<ReactPaginate
			pageCount={totalPages}
			pageRangeDisplayed={3}
			marginPagesDisplayed={1}
			onPageChange={handlePageChange}
			forcePage={currentPage - 1}
			containerClassName="flex items-center justify-center gap-2 mt-8"
			pageClassName=""
			pageLinkClassName="flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 text-gray-600 hover:bg-primary hover:text-white hover:border-primary transition-colors"
			activeClassName=""
			activeLinkClassName="!bg-primary !text-white !border-primary"
			previousClassName=""
			previousLinkClassName="flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-100 transition-colors disabled:opacity-50"
			nextClassName=""
			nextLinkClassName="flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-100 transition-colors disabled:opacity-50"
			disabledClassName="opacity-50 pointer-events-none"
			breakClassName=""
			breakLinkClassName="flex items-center justify-center w-10 h-10 text-gray-400"
			previousLabel={<FaChevronLeft className="text-sm" />}
			nextLabel={<FaChevronRight className="text-sm" />}
			breakLabel="..."
		/>
	)
}
