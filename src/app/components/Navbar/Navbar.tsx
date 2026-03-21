"use client"

import clsx from "clsx"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { FaBars, FaChevronDown, FaChevronRight, FaTimes } from "react-icons/fa"
import { TOP_DROPDOWNS, TTopDropdown, TTopDropdownItem } from "../../constants/constants"
import { asset } from "../../helpers"

const TOP_DROPDOWN_COLORS = {
	red: {
		bg: "bg-primary",
		hover: "hover:bg-primary-dark",
		active: "bg-primary-dark",
		dropdownBg: "bg-primary",
		itemHover: "hover:bg-white/15",
	},
	green: {
		bg: "bg-emerald-600",
		hover: "hover:bg-emerald-700",
		active: "bg-emerald-700",
		dropdownBg: "bg-emerald-600",
		itemHover: "hover:bg-white/15",
	},
	blue: {
		bg: "bg-sky-600",
		hover: "hover:bg-sky-700",
		active: "bg-sky-700",
		dropdownBg: "bg-sky-600",
		itemHover: "hover:bg-white/15",
	},
}

export default function Navbar() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const [activeTopDropdown, setActiveTopDropdown] = useState<number | null>(null)
	const tabsRef = useRef<HTMLDivElement>(null)

	return (
		<>
			{/* Desktop: tabs + dropdowns */}
			<div className="hidden lg:flex justify-end container" ref={tabsRef}>
				<div className="flex items-stretch">
					{TOP_DROPDOWNS.map((dropdown, index) => {
						const colors = TOP_DROPDOWN_COLORS[dropdown.color]
						return (
							<div
								key={index}
								className="relative"
								onMouseEnter={() => setActiveTopDropdown(index)}
								onMouseLeave={() => setActiveTopDropdown(null)}
							>
								<button
									className={clsx(
										"flex items-center gap-1.5 px-5 xl:px-6 py-2 text-xs font-bold uppercase tracking-wide text-white transition-colors cursor-pointer rounded-t-lg",
										colors.bg,
										colors.hover,
										activeTopDropdown === index && colors.active,
									)}
								>
									{dropdown.label}
									<FaChevronDown className={clsx("text-[9px] transition-transform", { "rotate-180": activeTopDropdown === index })} />
								</button>

								{activeTopDropdown === index && (
									<TopDropdownPanel dropdown={dropdown} tabsRef={tabsRef} />
								)}
							</div>
						)
					})}
				</div>
			</div>

			{/* Línea decorativa */}
			<div className="bg-primary h-1.5" />

			{/* Header con hamburguesa en móvil */}
			<header className="bg-white text-foreground relative shadow-sm lg:hidden">
				<div className="container">
					<nav className="flex items-center justify-between h-14">
						<Link href="/">
							<img src={asset("logo-ugel.png")} alt="UGEL La Convención" className="h-10 object-contain" />
						</Link>
						<button
							className="text-xl text-gray-700 hover:text-primary transition-colors p-2"
							onClick={() => setIsMobileMenuOpen(true)}
							aria-label="Abrir menú"
						>
							<FaBars />
						</button>
					</nav>
				</div>
			</header>

			{/* Overlay del menú móvil */}
			<div
				className={clsx("fixed inset-0 bg-black/50 z-60 transition-opacity duration-300", {
					"opacity-0 pointer-events-none": !isMobileMenuOpen,
					"opacity-100": isMobileMenuOpen,
				})}
				onClick={() => setIsMobileMenuOpen(false)}
			/>

			{/* Sidebar menú móvil */}
			<div
				className={clsx("fixed top-0 left-0 h-full w-80 bg-gray-900 text-white z-70 transition-transform duration-300 shadow-2xl overflow-y-auto", {
					"-translate-x-full": !isMobileMenuOpen,
					"translate-x-0": isMobileMenuOpen,
				})}
			>
				<div className="p-6 flex flex-col min-h-full">
					<div className="flex justify-between items-center mb-6">
						<img src={asset("logo-ugel.png")} alt="UGEL La Convención" className="h-10" />
						<button onClick={() => setIsMobileMenuOpen(false)} className="text-white/80 hover:text-white">
							<FaTimes className="text-lg" />
						</button>
					</div>

					<div className="flex flex-col gap-2">
						{TOP_DROPDOWNS.map((dropdown, index) => (
							<MobileTopDropdown key={index} dropdown={dropdown} onClose={() => setIsMobileMenuOpen(false)} />
						))}
					</div>

					<div className="mt-auto pt-6 border-t border-white/10">
						<p className="text-xs text-white/50 text-center">© 2026 UGEL La Convención</p>
					</div>
				</div>
			</div>
		</>
	)
}

/* ───────────────────────────── Desktop: panel superior ───────────────────────────── */

function TopDropdownPanel({ dropdown, tabsRef }: { dropdown: TTopDropdown; tabsRef: React.RefObject<HTMLDivElement | null> }) {
	const colors = TOP_DROPDOWN_COLORS[dropdown.color]
	const [topOffset, setTopOffset] = useState<number>(0)

	useEffect(() => {
		if (tabsRef.current) {
			setTopOffset(tabsRef.current.getBoundingClientRect().bottom)
		}
	}, [tabsRef])

	if (dropdown.type === "fullwidth") {
		return (
			<div
				className={clsx("fixed left-0 right-0 z-50 shadow-xl", colors.dropdownBg)}
				style={{ top: topOffset || "100%" }}
			>
				<div className="container py-6">
					<div className="grid grid-cols-5 gap-6">
						{dropdown.columns?.map((col, i) => (
							<div key={i}>
								<h4 className="text-white font-bold text-sm mb-3 pb-2 border-b border-white/20">{col.title}</h4>
								<ul className="flex flex-col gap-1">
									{col.items.map((item, j) => (
										<FullwidthColumnItem key={j} item={item} />
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</div>
		)
	}

	return (
		<div className={clsx("absolute top-full right-0 w-56 shadow-xl z-50", colors.dropdownBg)}>
			<ul>
				{dropdown.items.map((item, i) => (
					<li key={i}>
						<Link href={item.href} className={clsx("block px-5 py-3 text-sm text-white/90 hover:text-white transition-colors", colors.itemHover)}>
							{item.label}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

/* ── Item de columna fullwidth que soporta sub-dropdown con fondo blanco ── */

function FullwidthColumnItem({ item }: { item: TTopDropdownItem }) {
	const [isOpen, setIsOpen] = useState(false)
	const containerRef = useRef<HTMLLIElement>(null)

	if (!item.children || item.children.length === 0) {
		return (
			<li>
				<Link href={item.href} className="block py-1.5 text-sm text-white/85 hover:text-white transition-colors">
					{item.label}
				</Link>
			</li>
		)
	}

	return (
		<li
			ref={containerRef}
			className="relative"
			onMouseEnter={() => setIsOpen(true)}
			onMouseLeave={() => setIsOpen(false)}
		>
			<button
				className="w-full flex items-center justify-between py-1.5 text-sm text-white/85 hover:text-white transition-colors cursor-pointer"
			>
				{item.label}
				<FaChevronDown className="text-[9px] opacity-60" />
			</button>

			{isOpen && (
				<div className="absolute left-0 top-full pt-1 w-52 z-60">
					<div className="bg-white rounded-lg shadow-xl border border-gray-100 py-1">
						<ul>
							{item.children.map((sub, k) => (
								<li key={k}>
									<Link
										href={sub.href}
										className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-emerald-700 transition-colors"
									>
										{sub.label}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			)}
		</li>
	)
}

/* ───────────────────────────── Móvil: dropdown colapsable ───────────────────────────── */

function MobileTopDropdown({ dropdown, onClose }: { dropdown: TTopDropdown; onClose: () => void }) {
	const [isOpen, setIsOpen] = useState(false)
	const [openSubIndex, setOpenSubIndex] = useState<string | null>(null)
	const colors = TOP_DROPDOWN_COLORS[dropdown.color]

	const toggleSub = (key: string) => {
		setOpenSubIndex(openSubIndex === key ? null : key)
	}

	if (dropdown.type === "fullwidth" && dropdown.columns) {
		return (
			<div>
				<button
					className={clsx("w-full flex items-center justify-between py-2.5 px-3 text-sm font-bold text-white rounded transition-colors", colors.bg, colors.hover)}
					onClick={() => setIsOpen(!isOpen)}
				>
					{dropdown.label}
					<FaChevronDown className={clsx("text-xs transition-transform", { "rotate-180": isOpen })} />
				</button>
				{isOpen && (
					<ul className="pl-4 mt-1 border-l border-white/10">
						{dropdown.columns.map((col, ci) => (
							<li key={ci}>
								<p className="py-2 text-xs font-bold text-white/50 uppercase tracking-wider mt-2 first:mt-0">
									{col.title}
								</p>
								<ul className="pl-2">
									{col.items.map((item, ii) => {
										const subKey = `${ci}-${ii}`
										if (item.children && item.children.length > 0) {
											return (
												<li key={ii}>
													<button
														className="w-full flex items-center justify-between py-2 text-sm text-white/70 hover:text-primary transition-colors"
														onClick={() => toggleSub(subKey)}
													>
														{item.label}
														<FaChevronDown className={clsx("text-xs transition-transform", { "rotate-180": openSubIndex === subKey })} />
													</button>
													{openSubIndex === subKey && (
														<ul className="pl-4 border-l border-white/10">
															{item.children.map((sub, si) => (
																<li key={si}>
																	<Link href={sub.href} className="block py-2 text-sm text-white/60 hover:text-primary transition-colors" onClick={onClose}>
																		{sub.label}
																	</Link>
																</li>
															))}
														</ul>
													)}
												</li>
											)
										}
										return (
											<li key={ii}>
												<Link href={item.href} className="block py-2 text-sm text-white/70 hover:text-primary transition-colors" onClick={onClose}>
													{item.label}
												</Link>
											</li>
										)
									})}
								</ul>
							</li>
						))}
					</ul>
				)}
			</div>
		)
	}

	return (
		<div>
			<button
				className={clsx("w-full flex items-center justify-between py-2.5 px-3 text-sm font-bold text-white rounded transition-colors", colors.bg, colors.hover)}
				onClick={() => setIsOpen(!isOpen)}
			>
				{dropdown.label}
				<FaChevronDown className={clsx("text-xs transition-transform", { "rotate-180": isOpen })} />
			</button>
			{isOpen && (
				<ul className="pl-4 mt-1 border-l border-white/10">
					{dropdown.items.map((item, i) => (
						<li key={i}>
							<Link href={item.href} className="block py-2 text-sm text-white/70 hover:text-primary transition-colors" onClick={onClose}>
								{item.label}
							</Link>
						</li>
					))}
				</ul>
			)}
		</div>
	)
}