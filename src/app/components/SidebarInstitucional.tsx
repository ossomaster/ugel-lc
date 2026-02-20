"use client"

import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"
import type { IconType } from "react-icons"
import { FaBookmark, FaEye, FaSchool, FaSitemap, FaStar } from "react-icons/fa6"

type SidebarItem = {
	label: string
	href: string
	icon: IconType
}

const ITEMS: SidebarItem[] = [
	{ label: "Bienvenida", href: "/pages/bienvenida", icon: FaStar },
	{ label: "Organigrama", href: "/pages/organigrama", icon: FaSitemap },
	{ label: "Jurisdicción", href: "/pages/jurisdiccion", icon: FaBookmark },
	{ label: "Instituciones Educativas", href: "/pages/instituciones-educativas", icon: FaSchool },
	{ label: "Visión y Misión", href: "/pages/vision-mision", icon: FaEye },
]

export default function SidebarInstitucional() {
	const pathname = usePathname()

	return (
		<aside className="w-72 shrink-0 hidden lg:block">
			{/* Menu */}
			<div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
				<div className="px-5 pt-5 pb-3">
					<h3 className="text-xs font-bold uppercase tracking-wider text-gray-400">Menú Principal</h3>
				</div>

				<nav className="px-3 pb-4">
					<ul className="space-y-1">
						{ITEMS.map((item) => {
							const isActive = pathname.startsWith(item.href)
							const Icon = item.icon
							return (
								<li key={item.href}>
									<Link
										href={item.href}
										className={clsx(
											"flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
											isActive ? "bg-red-50 text-primary border-l-4 border-primary font-semibold" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
										)}
									>
										<Icon className={clsx("text-lg shrink-0", isActive ? "text-primary" : "text-gray-400")} />
										{item.label}
									</Link>
								</li>
							)
						})}
					</ul>
				</nav>
			</div>

			{/* Horario de Atención */}
			<div className="mt-4 bg-red-50/60 rounded-2xl border border-red-100 px-5 py-4">
				<h4 className="text-sm font-bold text-primary mb-1">Horario de Atención</h4>
				<p className="text-sm text-gray-600">Lun - Vie: 8:00am - 4:00pm</p>
				<p className="text-sm text-gray-600">Mesa de Partes Virtual: 24h</p>
			</div>
		</aside>
	)
}
