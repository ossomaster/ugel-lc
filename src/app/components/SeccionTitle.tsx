import { ReactNode } from "react"

interface SeccionTitleProps {
	children: ReactNode
	subtitle?: string
	variant?: "iconografia" | "icono"
	icon?: ReactNode
}

export default function SeccionTitle({ children, subtitle, variant = "iconografia", icon }: SeccionTitleProps) {
	if (variant === "icono") {
		return (
			<div className="flex flex-col gap-y-4 items-center justify-center text-center mb-12">
				{icon && <div className="text-primary text-5xl mb-2">{icon}</div>}
				<div className="w-16 h-1 bg-primary rounded-full mb-2"></div>
				<div className="max-w-2xl">
					<h2 className="seccion__title mb-4">{children}</h2>
					{subtitle && <p className="seccion__subtitle">{subtitle}</p>}
				</div>
			</div>
		)
	}

	return (
		<div className="flex flex-col lg:flex-row gap-y-6 justify-between items-center mb-12">
			<img src="/assets/patterns/lines-pattern-green.png" alt="" className="h-6" />
			<div className="max-w-md text-center">
				<h2 className="seccion__title">{children}</h2>
				{subtitle && <p className="seccion__subtitle">{subtitle}</p>}
			</div>
			<img src="/assets/patterns/lines-pattern-green.png" alt="" className="h-6" />
		</div>
	)
}
