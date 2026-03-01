"use client"

import { FaTools, FaEnvelope, FaArrowLeft } from "react-icons/fa"
import { EMPRESA } from "../../constants/constants"

export default function MaintenancePage() {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="max-w-2xl w-full text-center">
                {/* Icono Animado */}
                <div className="mb-8 flex justify-center">
                    <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-blue-100 animate-ping opacity-75"></div>
                        <div className="relative bg-white p-6 rounded-full shadow-lg border border-gray-100">
                            <FaTools className="text-5xl text-blue-600 animate-bounce" />
                        </div>
                    </div>
                </div>

                {/* Texto Principal */}
                <h1 className="text-4xl md:text-5xl font-heading font-black text-gray-900 mb-4">
                    Estamos mejorando para ti
                </h1>
                
                <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto leading-relaxed">
                    El portal institucional de <span className="font-bold text-blue-600">{EMPRESA.nombre}</span> se encuentra en mantenimiento temporal. Pronto estaremos de vuelta con una mejor experiencia.
                </p>

                {/* Tarjeta de Información */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 mb-8 inline-block text-left">
                    <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">¿Qué está pasando?</h2>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3 text-gray-700">
                            <div className="h-2 w-2 rounded-full bg-blue-500 mt-2 shrink-0" />
                            <span>Actualización de sistemas base.</span>
                        </li>
                        <li className="flex items-start gap-3 text-gray-700">
                            <div className="h-2 w-2 rounded-full bg-blue-500 mt-2 shrink-0" />
                            <span>Mejoras en la seguridad de la plataforma.</span>
                        </li>
                    </ul>
                </div>

                {/* Footer de la página */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                    
                    <button 
                        onClick={() => window.location.reload()} 
                        className="flex items-center gap-2 px-6 py-3 bg-white text-gray-700 border border-gray-200 rounded-xl font-bold hover:bg-gray-50 transition-all"
                    >
                        Nos estamos renovando...
                    </button>
                </div>

                <p className="mt-12 text-gray-400 text-sm">
                    &copy; 2026 {EMPRESA.nombre} - Oficina de Informática
                </p>
            </div>
        </div>
    )
}