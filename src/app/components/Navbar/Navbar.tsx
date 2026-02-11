"use client"

import clsx from "clsx"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { FaBars, FaChevronDown, FaChevronRight, FaTimes } from "react-icons/fa"
import { NAV_MENU, TNavMenuItem, TOP_DROPDOWNS, TTopDropdown } from "../../constants/constants"

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
	const [activeMenu, setActiveMenu] = useState<number | null>(null)
	const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null)
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const [activeTopDropdown, setActiveTopDropdown] = useState<number | null>(null)
	const navRef = useRef<HTMLElement>(null)
	const tabsRef = useRef<HTMLDivElement>(null)

	const handleMenuEnter = (index: number) => {
		setActiveMenu(index)
		setActiveSubmenu(null)
	}

	const handleMenuLeave = () => {
		setActiveMenu(null)
		setActiveSubmenu(null)
	}

	return (
		<>
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
			<div className="bg-primary h-1.5" />
			<header className="bg-white text-foreground relative shadow-sm" ref={navRef}>
				<div className="container">
					<nav className="flex items-center justify-between h-16 lg:h-auto">
						<div className="flex items-center gap-4 py-2">
							<button className="lg:hidden text-xl" onClick={() => setIsMobileMenuOpen(true)}>
								<FaBars />
							</button>
							<Link href="/">
								<img src="/logo-ugel.png" alt="UGEL La Convención" className="h-12 lg:h-16 object-contain" />
							</Link>
						</div>

						<ul className="hidden lg:flex items-stretch">
							{NAV_MENU.map((item, index) => (
								<li key={index} className="relative" onMouseEnter={() => handleMenuEnter(index)} onMouseLeave={handleMenuLeave}>
									<Link
										href={item.href || "#"}
										className={clsx("flex items-center gap-1 px-2 xl:px-3 py-3 text-xs uppercase tracking-wide transition-colors hover:bg-gray-100 hover:text-primary", {
											"bg-gray-100 text-primary": activeMenu === index,
										})}
									>
										{item.label}
										{item.children && <FaChevronDown className="text-[10px] ml-0.5" />}
									</Link>

									{item.children && activeMenu === index && <DropdownMenu items={item.children} activeSubmenu={activeSubmenu} onSubmenuEnter={setActiveSubmenu} />}
								</li>
							))}
						</ul>
					</nav>
				</div>
			</header>

			<div
				className={clsx("fixed inset-0 bg-black/50 z-60 transition-opacity duration-300", {
					"opacity-0 pointer-events-none": !isMobileMenuOpen,
					"opacity-100": isMobileMenuOpen,
				})}
				onClick={() => setIsMobileMenuOpen(false)}
			/>

			<div
				className={clsx("fixed top-0 left-0 h-full w-80 bg-secondary-dark text-white z-70 transition-transform duration-300 shadow-2xl overflow-y-auto", {
					"-translate-x-full": !isMobileMenuOpen,
					"translate-x-0": isMobileMenuOpen,
				})}
			>
				<div className="p-6 flex flex-col min-h-full">
					<div className="flex justify-between items-center mb-6">
						<img src="/logo-ugel.png" alt="UGEL La Convención" className="h-10" />
						<button onClick={() => setIsMobileMenuOpen(false)} className="text-white/80 hover:text-white">
							<FaTimes className="text-lg" />
						</button>
					</div>

					<MobileMenu items={NAV_MENU} onClose={() => setIsMobileMenuOpen(false)} />

					<div className="mt-4 flex flex-col gap-2">
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
										<li key={j}>
											<Link href={item.href} className="block py-1.5 text-sm text-white/85 hover:text-white transition-colors">
												{item.label}
											</Link>
										</li>
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

function DropdownMenu({ items, activeSubmenu, onSubmenuEnter }: { items: TNavMenuItem[]; activeSubmenu: number | null; onSubmenuEnter: (index: number) => void }) {
	const hasSubmenus = items.some((item) => item.children)

	if (!hasSubmenus) {
		return (
			<div className="absolute top-full left-0 w-56 bg-white text-foreground shadow-xl border-t-3 border-primary z-50">
				<ul>
					{items.map((child, i) => (
						<li key={i}>
							<Link href={child.href || "#"} className="block px-5 py-3 text-sm hover:bg-gray-50 hover:text-primary transition-colors">
								{child.label}
							</Link>
						</li>
					))}
				</ul>
			</div>
		)
	}

	return (
		<div className="absolute top-full left-0 flex bg-white text-foreground shadow-xl border-t-3 border-primary z-50">
			<ul className="w-56 border-r border-gray-100">
				{items.map((child, i) => (
					<li key={i} onMouseEnter={() => onSubmenuEnter(i)}>
						{child.children ? (
							<button
								className={clsx(
									"w-full flex items-center justify-between px-5 py-3 text-sm transition-colors",
									activeSubmenu === i ? "bg-gray-50 text-primary" : "hover:bg-gray-50 hover:text-primary",
								)}
							>
								{child.label}
								<FaChevronRight className="text-xs opacity-50" />
							</button>
						) : (
							<Link href={child.href || "#"} className="block px-5 py-3 text-sm hover:bg-gray-50 hover:text-primary transition-colors">
								{child.label}
							</Link>
						)}
					</li>
				))}
			</ul>

			{activeSubmenu !== null && items[activeSubmenu]?.children && (
				<ul className="w-56">
					{items[activeSubmenu].children!.map((sub, j) => (
						<li key={j}>
							<Link href={sub.href || "#"} className="block px-5 py-3 text-sm hover:bg-gray-50 hover:text-primary transition-colors">
								{sub.label}
							</Link>
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

function MobileMenu({ items, onClose }: { items: TNavMenuItem[]; onClose: () => void }) {
	const [openIndex, setOpenIndex] = useState<number | null>(null)
	const [openSubIndex, setOpenSubIndex] = useState<number | null>(null)

	return (
		<ul className="flex flex-col gap-1">
			{items.map((item, index) => (
				<li key={index}>
					<button
						className="w-full flex items-center justify-between py-2.5 text-sm font-medium text-white/90 hover:text-primary transition-colors"
						onClick={() => {
							setOpenIndex(openIndex === index ? null : index)
							setOpenSubIndex(null)
						}}
					>
						{item.label}
						{item.children && <FaChevronDown className={clsx("text-xs transition-transform", { "rotate-180": openIndex === index })} />}
					</button>

					{item.children && openIndex === index && (
						<ul className="pl-4 border-l border-white/10">
							{item.children.map((child, ci) => (
								<li key={ci}>
									{child.children ? (
										<>
											<button
												className="w-full flex items-center justify-between py-2 text-sm text-white/70 hover:text-primary transition-colors"
												onClick={() => setOpenSubIndex(openSubIndex === ci ? null : ci)}
											>
												{child.label}
												<FaChevronDown className={clsx("text-xs transition-transform", { "rotate-180": openSubIndex === ci })} />
											</button>
											{openSubIndex === ci && (
												<ul className="pl-4 border-l border-white/10">
													{child.children.map((sub, si) => (
														<li key={si}>
															<Link href={sub.href || "#"} className="block py-2 text-sm text-white/60 hover:text-primary transition-colors" onClick={onClose}>
																{sub.label}
															</Link>
														</li>
													))}
												</ul>
											)}
										</>
									) : (
										<Link href={child.href || "#"} className="block py-2 text-sm text-white/70 hover:text-primary transition-colors" onClick={onClose}>
											{child.label}
										</Link>
									)}
								</li>
							))}
						</ul>
					)}
				</li>
			))}
		</ul>
	)
}

function MobileTopDropdown({ dropdown, onClose }: { dropdown: TTopDropdown; onClose: () => void }) {
	const [isOpen, setIsOpen] = useState(false)
	const colors = TOP_DROPDOWN_COLORS[dropdown.color]

	const allItems = dropdown.type === "fullwidth" && dropdown.columns
		? dropdown.columns.flatMap((col) => [{ label: col.title, href: "", isTitle: true }, ...col.items.map((i) => ({ ...i, isTitle: false }))])
		: dropdown.items.map((i) => ({ ...i, isTitle: false }))

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
					{allItems.map((item, i) =>
						item.isTitle ? (
							<li key={i} className="py-2 text-xs font-bold text-white/50 uppercase tracking-wider mt-2 first:mt-0">
								{item.label}
							</li>
						) : (
							<li key={i}>
								<Link href={item.href} className="block py-2 text-sm text-white/70 hover:text-primary transition-colors" onClick={onClose}>
									{item.label}
								</Link>
							</li>
						),
					)}
				</ul>
			)}
		</div>
	)
}