"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const HASHTAGS = [
	"#Quillabamba",
	"#Cusco",
	"#SelvaCusqueña",
	"#Turismo",
	"#Aventura",
	"#Naturaleza",
	"#Viajes",
	"#Perú",
	"#Cataratas",
	"#Café",
	"#Cacao",
	"#EternoVerano",
	"#AmazoníaAndina",
	"#Trekking",
	"#CulturaViva",
]

export default function SeccionMarquee() {
	const containerRef = useRef<HTMLElement>(null)
	const textRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const el = containerRef.current
		const textEl = textRef.current

		if (!el || !textEl) return

		gsap.to(textEl, {
			xPercent: -20,
			ease: "none",
			scrollTrigger: {
				trigger: el,
				start: "top bottom",
				end: "bottom top",
				scrub: 1,
			},
		})
	}, [])

	return (
		<section ref={containerRef} className="py-4 lg:py-6 overflow-hidden bg-primary">
			<div ref={textRef} className="flex whitespace-nowrap -translate-x-[10%]">
				{[...HASHTAGS, ...HASHTAGS, ...HASHTAGS, ...HASHTAGS, ...HASHTAGS].map((tag, i) => (
					<span key={i} className="mx-4 lg:mx-6 text-xl md:text-3xl font-heading font-extrabold text-white/80 tracking-wider">
						{tag}
					</span>
				))}
			</div>
		</section>
	)
}

