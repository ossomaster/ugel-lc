import { EMPRESA } from "../../constants/constants"
import MainLayout from "../../components/MainLayout"
import PageHero from "../../components/PageHero"

import Link from "next/link"

export default function EnConstruccionPage() {
  return (
    <MainLayout>
      <div className="min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-gray-50 to-white py-16 px-5">
        <div className="text-center max-w-4xl mx-auto">
          {/* Imagen o ilustración principal */}
          <div className="mb-10 relative">
            <div className="inline-block relative">
              {/* Puedes reemplazar esta área con una imagen real */}
              <div className="w-64 h-64 md:w-80 md:h-80 mx-auto bg-yellow-100 rounded-full flex items-center justify-center border-8 border-yellow-400/30 shadow-2xl">
                <span className="text-8xl md:text-9xl">🚧</span>
              </div>
              
              {/* Cinta decorativa simulada */}
              <div className="absolute -top-6 -left-12 md:-left-20 rotate-[-12deg] bg-gradient-to-r from-yellow-500 to-black text-white font-bold px-12 py-3 text-xl shadow-lg rounded-md border-4 border-yellow-600">
                EN CONSTRUCCIÓN
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-gray-900 mb-6 tracking-tight">
            Estamos trabajando en esta sección
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Muy pronto tendrás disponible toda la información y servicios aquí. 
            Gracias por tu paciencia y comprensión.
          </p>

          {/* Mensaje institucional */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 md:p-10 mb-12 max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 mb-6">
              En la <strong>{EMPRESA.nombre}</strong> nos esforzamos por mejorar continuamente nuestros servicios digitales 
              para ofrecerte una mejor experiencia.
            </p>
            <p className="text-gray-500 italic">
              "Comprometidos con la mejora de los aprendizajes en La Convención"
            </p>
          </div>

          {/* Acciones rápidas */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/"
              className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-xl shadow-md hover:shadow-lg hover:bg-primary-dark transition-all duration-300 text-lg"
            >
              Volver al Inicio
            </Link>
            
            <Link
              href="/contacto"
              className="inline-flex items-center px-8 py-4 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary/5 transition-all duration-300 text-lg"
            >
              Contáctanos
            </Link>
          </div>

          {/* Fecha aproximada (opcional) */}
          <p className="mt-12 text-gray-500 text-sm">
            Última actualización: Febrero 2026 • Estamos avanzando...
          </p>
        </div>
      </div>
    </MainLayout>
  )
}