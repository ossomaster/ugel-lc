"use client"

import { FaWhatsapp } from "react-icons/fa6"
import { EMPRESA } from "../constants/constants"

export default function WhatsappBotonFlotante() {
	const mensaje = "Hola, me gustaría obtener más información sobre sus servicios."
	const numeroWhatsapp = `51${EMPRESA.whatsapp.replace(/\s/g, "")}`
	const urlWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensaje)}`

	return (
		<a
			href={urlWhatsapp}
			target="_blank"
			rel="noopener noreferrer"
			className="fixed bottom-6 right-6 z-50 size-12 bg-[#25D366] text-white rounded-full flex items-center justify-center [box-shadow:0_0_1rem_rgb(0_0_0_/_0.3)] hover:scale-110 transition-transform duration-300"
			aria-label="Contactar por WhatsApp"
		>
			<FaWhatsapp className="text-3xl" />
		</a>
	)
}
