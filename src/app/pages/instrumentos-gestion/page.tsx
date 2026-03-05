import { EMPRESA } from "../../constants/constants";
import InstitucionalLayout from "../InstitucionalLayout";

export default function InstrumentosGestionPage() {
  const pdfButton = (url: string) => (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group/btn inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white text-xs font-medium rounded-xl transition-all duration-200 shadow-sm hover:shadow-md active:scale-95 flex-shrink-0 whitespace-nowrap overflow-hidden"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="w-3 h-3 transition-transform duration-300 group-hover/btn:-translate-x-0.5 group-hover/btn:rotate-12" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor" 
        strokeWidth={3.5}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5 16.477 5 20.268 7.943 21.542 12 20.268 16.057 16.477 19 12 19 7.523 19 3.732 16.057 2.458 12z" />
      </svg>
      Ver PDF
    </a>
  );

  return (
    <InstitucionalLayout 
      title="Instrumentos de Gestión" 
      subtitle={`Documentos técnicos de gestión de ${EMPRESA.nombre}`}
    >
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 md:p-10">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-3xl">
            📋
          </div>
          <div>
            <h2 className="text-3xl font-heading font-semibold text-gray-900">Instrumentos de Gestión</h2>
            <p className="text-gray-500 mt-1">UGEL La Convención</p>
          </div>
        </div>

        {/* Introducción */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-8 mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
            <span className="text-2xl">ℹ️</span>
            ¿Qué son los Instrumentos de Gestión?
          </h3>
          <p className="text-gray-700 leading-relaxed text-[15.5px]">
            Los instrumentos de gestión son documentos técnicos que regulan la administración interna de una institución y han sido formulados sobre la base de los principios modernos de la gestión pública. Proporcionan la estructura, la flexibilidad y el control necesario para que los trabajadores de una entidad puedan alcanzar resultados extraordinarios en un tiempo determinado, mejorando así la calidad educativa.
          </p>
        </div>

        {/* === INSTRUMENTOS DE GESTIÓN === */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
            <h3 className="text-2xl font-semibold text-gray-900 tracking-tight">Instrumentos de Gestión</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
          </div>

          {/* MOPE */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center text-xl">📘</div>
              <h4 className="text-xl font-semibold text-gray-900">Manual de Operaciones (MOPE)</h4>
            </div>
            <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="w-12 px-6 py-4 text-left font-medium text-gray-500">#</th>
                    <th className="px-6 py-4 text-left font-medium text-gray-500">Documento</th>
                    <th className="w-32 px-6 py-4 text-right font-medium text-gray-500">Acción</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="group transition-all duration-300 hover:bg-gray-50 hover:-translate-y-0.5 hover:scale-[1.015] hover:shadow-md border-l-4 border-transparent hover:border-red-500">
                    <td className="px-6 py-5 font-mono text-gray-400 group-hover:text-gray-500 transition-colors">01</td>
                    <td className="px-6 py-5 text-gray-700 group-hover:text-gray-900 transition-colors">MOP 2023 - MANUAL DE OPERACIONES - GEREDU CUSCO (DECRETO REGIONAL N° 003-2023-GR CUSCO/GR.)</td>
                    <td className="px-6 py-5 text-right">{pdfButton("https://drive.google.com/file/d/1mXP5JCRb4Oegh3KYkwzxYubXHLN6pI5w/view?usp=drive_link")}</td>
                  </tr>
                  <tr className="group transition-all duration-300 hover:bg-gray-50 hover:-translate-y-0.5 hover:scale-[1.015] hover:shadow-md border-l-4 border-transparent hover:border-red-500">
                    <td className="px-6 py-5 font-mono text-gray-400 group-hover:text-gray-500 transition-colors">02</td>
                    <td className="px-6 py-5 text-gray-700 group-hover:text-gray-900 transition-colors">MOP 2023 - MANUAL DE OPERACIONES - UGEL LA CONVENCIÓN (DECRETO REGIONAL N° 003-2023-GR CUSCO/GR.)</td>
                    <td className="px-6 py-5 text-right">{pdfButton("https://drive.google.com/file/d/107S-eDhKjJMwFRyS3wActx3qadu0o4Ob/view?usp=drive_link")}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* ORGANIGRAMA */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center text-xl">📊</div>
              <h4 className="text-xl font-semibold text-gray-900">Organigrama</h4>
            </div>
            <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="w-12 px-6 py-4 text-left font-medium text-gray-500">#</th>
                    <th className="px-6 py-4 text-left font-medium text-gray-500">Documento</th>
                    <th className="w-32 px-6 py-4 text-right font-medium text-gray-500">Acción</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="group transition-all duration-300 hover:bg-gray-50 hover:-translate-y-0.5 hover:scale-[1.015] hover:shadow-md border-l-4 border-transparent hover:border-red-500">
                    <td className="px-6 py-5 font-mono text-gray-400 group-hover:text-gray-500 transition-colors">01</td>
                    <td className="px-6 py-5 text-gray-700 group-hover:text-gray-900 transition-colors">ORGANIGRAMA - UNIDAD DE GESTIÓN EDUCATIVA LOCAL LA CONVENCION 2023</td>
                    <td className="px-6 py-5 text-right">{pdfButton("https://drive.google.com/file/d/1Das6aiBDUiNA9C3qX6C9hB6OzEb36Hia/view?usp=drive_link")}</td>
                  </tr>
                  <tr className="group transition-all duration-300 hover:bg-gray-50 hover:-translate-y-0.5 hover:scale-[1.015] hover:shadow-md border-l-4 border-transparent hover:border-red-500">
                    <td className="px-6 py-5 font-mono text-gray-400 group-hover:text-gray-500 transition-colors">02</td>
                    <td className="px-6 py-5 text-gray-700 group-hover:text-gray-900 transition-colors">ORGANIGRAMA - UNIDAD DE GESTIÓN EDUCATIVA LOCAL LA CONVENCION 2022</td>
                    <td className="px-6 py-5 text-right">{pdfButton("https://drive.google.com/file/d/1S_OsPVWuSZ7Y75Ml4DpJEDQLNbvLMVGF/view?usp=drive_link")}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* CLASIFICADOR DE CARGOS */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-violet-100 text-violet-600 rounded-2xl flex items-center justify-center text-xl">👤</div>
              <h4 className="text-xl font-semibold text-gray-900">Clasificador de Cargos</h4>
            </div>
            <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="w-12 px-6 py-4 text-left font-medium text-gray-500">#</th>
                    <th className="px-6 py-4 text-left font-medium text-gray-500">Documento</th>
                    <th className="w-32 px-6 py-4 text-right font-medium text-gray-500">Acción</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="group transition-all duration-300 hover:bg-gray-50 hover:-translate-y-0.5 hover:scale-[1.015] hover:shadow-md border-l-4 border-transparent hover:border-red-500">
                    <td className="px-6 py-5 font-mono text-gray-400 group-hover:text-gray-500 transition-colors">01</td>
                    <td className="px-6 py-5 text-gray-700 group-hover:text-gray-900 transition-colors">CLASIFICADOR DE CARGOS DE LA CARRERA PÚBLICA MAGISTERIAL RV N° 106-2023-MINEDU.</td>
                    <td className="px-6 py-5 text-right">{pdfButton("https://drive.google.com/file/d/1B1CsQhAvM1yUhyxT0A7jeW6x0IYddkEa/view?usp=drive_link")}</td>
                  </tr>
                  <tr className="group transition-all duration-300 hover:bg-gray-50 hover:-translate-y-0.5 hover:scale-[1.015] hover:shadow-md border-l-4 border-transparent hover:border-red-500">
                    <td className="px-6 py-5 font-mono text-gray-400 group-hover:text-gray-500 transition-colors">02</td>
                    <td className="px-6 py-5 text-gray-700 group-hover:text-gray-900 transition-colors">MANUAL DE CLASIFICADOR DE CARGOS - RSG N° 197-2022-MINEDU.</td>
                    <td className="px-6 py-5 text-right">{pdfButton("https://drive.google.com/file/d/15FrMpfcwhowXRtN-fzrkjjPajwvQsTgz/view?usp=drive_link")}</td>
                  </tr>
                  <tr className="group transition-all duration-300 hover:bg-gray-50 hover:-translate-y-0.5 hover:scale-[1.015] hover:shadow-md border-l-4 border-transparent hover:border-red-500">
                    <td className="px-6 py-5 font-mono text-gray-400 group-hover:text-gray-500 transition-colors">03</td>
                    <td className="px-6 py-5 text-gray-700 group-hover:text-gray-900 transition-colors">CLASIFICADOR DE CARGOS DE LA CARRERA PÚBLICA MAGISTERIAL R.V. N° 093-2021-MINEDU.</td>
                    <td className="px-6 py-5 text-right">{pdfButton("https://drive.google.com/file/d/1EBxFm19FeBW2f9bEz_PdioY9nRzEtFbF/view?usp=drive_link")}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* CAP */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-rose-100 text-rose-600 rounded-2xl flex items-center justify-center text-xl">📋</div>
              <h4 className="text-xl font-semibold text-gray-900">Cuadro de Asignación de Personal (CAP)</h4>
            </div>
            <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="w-12 px-6 py-4 text-left font-medium text-gray-500">#</th>
                    <th className="px-6 py-4 text-left font-medium text-gray-500">Documento</th>
                    <th className="w-32 px-6 py-4 text-right font-medium text-gray-500">Acción</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="group transition-all duration-300 hover:bg-gray-50 hover:-translate-y-0.5 hover:scale-[1.015] hover:shadow-md border-l-4 border-transparent hover:border-red-500">
                    <td className="px-6 py-5 font-mono text-gray-400 group-hover:text-gray-500 transition-colors">01</td>
                    <td className="px-6 py-5 text-gray-700 group-hover:text-gray-900 transition-colors">CAP - P. CUADRO DE ASIGNACIÓN DE PERSONAL PROVISIONAL 2017 - DIRECCIÓN REGIONAL DE EDUCACIÓN CUSCO. ORDENANZA REGIONAL N° 123-2017-CG/GRC.CUSCO.</td>
                    <td className="px-6 py-5 text-right">{pdfButton("https://drive.google.com/file/d/1xrqdPlpieQn0C6sBQAmM_MFVefqqNkjA/view?usp=drive_link")}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* MAPRO */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-cyan-100 text-cyan-600 rounded-2xl flex items-center justify-center text-xl">🔄</div>
              <h4 className="text-xl font-semibold text-gray-900">Manual de Procedimientos (MAPRO)</h4>
            </div>
            <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="w-12 px-6 py-4 text-left font-medium text-gray-500">#</th>
                    <th className="px-6 py-4 text-left font-medium text-gray-500">Documento</th>
                    <th className="w-32 px-6 py-4 text-right font-medium text-gray-500">Acción</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="group transition-all duration-300 hover:bg-gray-50 hover:-translate-y-0.5 hover:scale-[1.015] hover:shadow-md border-l-4 border-transparent hover:border-red-500">
                    <td className="px-6 py-5 font-mono text-gray-400 group-hover:text-gray-500 transition-colors">01</td>
                    <td className="px-6 py-5 text-gray-700 group-hover:text-gray-900 transition-colors">MAPRO UGEL LC 2017 - MANUAL DE PROCEDIMIENTOS ADMINISTRATIVOS. RESOLUCIÓN DIRECTORAL N° 001766-2017-UGEL-LC.</td>
                    <td className="px-6 py-5 text-right">{pdfButton("https://drive.google.com/file/d/16cjwCGoN1-SsUT7McUHcR2VOqexlaxGS/view?usp=drive_link")}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* TUPA */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center text-xl">📑</div>
              <h4 className="text-xl font-semibold text-gray-900">Texto Único de Procedimientos Administrativos (TUPA)</h4>
            </div>
            <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="w-12 px-6 py-4 text-left font-medium text-gray-500">#</th>
                    <th className="px-6 py-4 text-left font-medium text-gray-500">Documento</th>
                    <th className="w-32 px-6 py-4 text-right font-medium text-gray-500">Acción</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="group transition-all duration-300 hover:bg-gray-50 hover:-translate-y-0.5 hover:scale-[1.015] hover:shadow-md border-l-4 border-transparent hover:border-red-500">
                    <td className="px-6 py-5 font-mono text-gray-400 group-hover:text-gray-500 transition-colors">01</td>
                    <td className="px-6 py-5 text-gray-700 group-hover:text-gray-900 transition-colors">TUPA - DIRECCIÓN REGIONAL DE EDUCACIÓN CUSCO 2016 - TEXTO ÚNICO DE PROCEDIMIENTOS ADMINISTRATIVOS. ORDENANZA REGIONAL N° 117-2016-CR/GRC.CUSCO.</td>
                    <td className="px-6 py-5 text-right">{pdfButton("https://drive.google.com/file/d/16-ni9mHskCR_vvw4IFtd_09wCnTwwsTN/view?usp=drive_link")}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* RIT */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-lime-100 text-lime-600 rounded-2xl flex items-center justify-center text-xl">⚖️</div>
              <h4 className="text-xl font-semibold text-gray-900">Reglamento Interno de Trabajo (RIT)</h4>
            </div>
            <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="w-12 px-6 py-4 text-left font-medium text-gray-500">#</th>
                    <th className="px-6 py-4 text-left font-medium text-gray-500">Documento</th>
                    <th className="w-32 px-6 py-4 text-right font-medium text-gray-500">Acción</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="group transition-all duration-300 hover:bg-gray-50 hover:-translate-y-0.5 hover:scale-[1.015] hover:shadow-md border-l-4 border-transparent hover:border-red-500">
                    <td className="px-6 py-5 font-mono text-gray-400 group-hover:text-gray-500 transition-colors">01</td>
                    <td className="px-6 py-5 text-gray-700 group-hover:text-gray-900 transition-colors">RIT UGEL LC 2023 - REGLAMENTO INTERNO DE TRABAJO DE LA UNIDAD DE GESTIÓN EDUCATIVA LOCAL LA CONVENCION 2023.</td>
                    <td className="px-6 py-5 text-right">{pdfButton("https://drive.google.com/file/d/1r36GfYV3sG_uTYVJ2c39OJ-opIUAuKDD/view?usp=drive_link")}</td>
                  </tr>
                  <tr className="group transition-all duration-300 hover:bg-gray-50 hover:-translate-y-0.5 hover:scale-[1.015] hover:shadow-md border-l-4 border-transparent hover:border-red-500">
                    <td className="px-6 py-5 font-mono text-gray-400 group-hover:text-gray-500 transition-colors">02</td>
                    <td className="px-6 py-5 text-gray-700 group-hover:text-gray-900 transition-colors">RIT UGEL LC 2022 - REGLAMENTO INTERNO DE TRABAJO DE LA UNIDAD DE GESTIÓN EDUCATIVA LOCAL LA CONVENCION 2022.</td>
                    <td className="px-6 py-5 text-right">{pdfButton("https://drive.google.com/file/d/1SHE1Sa54GAlV7iokxlVXNuMWeCswbVIC/view?usp=drive_link")}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* === PLANES Y POLÍTICAS === */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
            <h3 className="text-2xl font-semibold text-gray-900 tracking-tight">Planes y Políticas</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
          </div>

          {/* POLÍTICAS NACIONALES */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-sky-100 text-sky-600 rounded-2xl flex items-center justify-center text-xl">🇵🇪</div>
              <h4 className="text-xl font-semibold text-gray-900">Políticas Nacionales</h4>
            </div>
            <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="w-12 px-6 py-4 text-left font-medium text-gray-500">#</th>
                    <th className="px-6 py-4 text-left font-medium text-gray-500">Documento</th>
                    <th className="w-32 px-6 py-4 text-right font-medium text-gray-500">Acción</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="group transition-all duration-300 hover:bg-gray-50 hover:-translate-y-0.5 hover:scale-[1.015] hover:shadow-md border-l-4 border-transparent hover:border-red-500">
                    <td className="px-6 py-5 font-mono text-gray-400 group-hover:text-gray-500 transition-colors">01</td>
                    <td className="px-6 py-5 text-gray-700 group-hover:text-gray-900 transition-colors">PLAN ESTRATEGICO DE DESARROLLO NACIONAL AL 2050. DECRETO SUPREMO N° 095-2022-PCM.</td>
                    <td className="px-6 py-5 text-right">{pdfButton("https://drive.google.com/file/d/18l4uwVXaDotNpmpCLDFYQMoqJYXLiZhp/view?usp=drive_link")}</td>
                  </tr>
                  <tr className="group transition-all duration-300 hover:bg-gray-50 hover:-translate-y-0.5 hover:scale-[1.015] hover:shadow-md border-l-4 border-transparent hover:border-red-500">
                    <td className="px-6 py-5 font-mono text-gray-400 group-hover:text-gray-500 transition-colors">02</td>
                    <td className="px-6 py-5 text-gray-700 group-hover:text-gray-900 transition-colors">PEN - PROYECTO EDUCATIVO NACIONAL AL 2036.</td>
                    <td className="px-6 py-5 text-right">{pdfButton("https://drive.google.com/file/d/1Njp4dpxxSKTIrU-bqvadWgwzo1LWPl99/view?usp=drive_link")}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* PESEM */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-teal-100 text-teal-600 rounded-2xl flex items-center justify-center text-xl">📅</div>
              <h4 className="text-xl font-semibold text-gray-900">Plan Estratégico Sectorial Multianual (PESEM)</h4>
            </div>
            <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="w-12 px-6 py-4 text-left font-medium text-gray-500">#</th>
                    <th className="px-6 py-4 text-left font-medium text-gray-500">Documento</th>
                    <th className="w-32 px-6 py-4 text-right font-medium text-gray-500">Acción</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="group transition-all duration-300 hover:bg-gray-50 hover:-translate-y-0.5 hover:scale-[1.015] hover:shadow-md border-l-4 border-transparent hover:border-red-500">
                    <td className="px-6 py-5 font-mono text-gray-400 group-hover:text-gray-500 transition-colors">01</td>
                    <td className="px-6 py-5 text-gray-700 group-hover:text-gray-900 transition-colors">PLAN ESTRATEGICO SECTORIAL MULTIANUAL DE EDUCACION 2016 - 2021.</td>
                    <td className="px-6 py-5 text-right">{pdfButton("https://drive.google.com/file/d/1RNaeTQ2sl6HCj1h269cvw5UsVJ68Xslw/view?usp=drive_link")}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* PEI */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center text-xl">🎯</div>
              <h4 className="text-xl font-semibold text-gray-900">Plan Estratégico Institucional (PEI)</h4>
            </div>
            <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="w-12 px-6 py-4 text-left font-medium text-gray-500">#</th>
                    <th className="px-6 py-4 text-left font-medium text-gray-500">Documento</th>
                    <th className="w-32 px-6 py-4 text-right font-medium text-gray-500">Acción</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="group transition-all duration-300 hover:bg-gray-50 hover:-translate-y-0.5 hover:scale-[1.015] hover:shadow-md border-l-4 border-transparent hover:border-red-500">
                    <td className="px-6 py-5 font-mono text-gray-400 group-hover:text-gray-500 transition-colors">01</td>
                    <td className="px-6 py-5 text-gray-700 group-hover:text-gray-900 transition-colors">PEI 2024 - 2027. PLAN ESTRATEGICO INSTITUCIONAL DEL GOBIERNO REGIONAL CUSCO 2024 - 2027. RESOLUCION EJECUTIVA REGIONAL N° 438-2023-GR CUSCO / GR.</td>
                    <td className="px-6 py-5 text-right">{pdfButton("https://drive.google.com/file/d/1qSbAiYWhof9o-7psv9m0cqwoemYrJouv/view?usp=drive_link")}</td>
                  </tr>
                  <tr className="group transition-all duration-300 hover:bg-gray-50 hover:-translate-y-0.5 hover:scale-[1.015] hover:shadow-md border-l-4 border-transparent hover:border-red-500">
                    <td className="px-6 py-5 font-mono text-gray-400 group-hover:text-gray-500 transition-colors">02</td>
                    <td className="px-6 py-5 text-gray-700 group-hover:text-gray-900 transition-colors">PEI 2021 - 2024. PLAN ESTRATEGICO INSTITUCIONAL DEL GOBIERNO REGIONAL CUSCO 2021 - 2024. RESOLUCION EJECUTIVA REGIONAL N° 438-2023-GR CUSCO / GR.</td>
                    <td className="px-6 py-5 text-right">{pdfButton("https://drive.google.com/file/d/1cuvVzIRoUv2aeOHYR5wDV4Niw3MKoosw/view?usp=drive_link")}</td>
                  </tr>
                  <tr className="group transition-all duration-300 hover:bg-gray-50 hover:-translate-y-0.5 hover:scale-[1.015] hover:shadow-md border-l-4 border-transparent hover:border-red-500">
                    <td className="px-6 py-5 font-mono text-gray-400 group-hover:text-gray-500 transition-colors">03</td>
                    <td className="px-6 py-5 text-gray-700 group-hover:text-gray-900 transition-colors">EVALUACION DEL PEI DEL GORE CUSCO 2021 - 2024.</td>
                    <td className="px-6 py-5 text-right">{pdfButton("https://drive.google.com/file/d/1Mjw3qlTcBRqKxqkqcuXhBIosiNs2BcZ-/view?usp=drive_link")}</td>
                  </tr>
                  <tr className="group transition-all duration-300 hover:bg-gray-50 hover:-translate-y-0.5 hover:scale-[1.015] hover:shadow-md border-l-4 border-transparent hover:border-red-500">
                    <td className="px-6 py-5 font-mono text-gray-400 group-hover:text-gray-500 transition-colors">04</td>
                    <td className="px-6 py-5 text-gray-700 group-hover:text-gray-900 transition-colors">PEI 2020 - 2023. PLAN ESTRATEGICO INSTITUCIONAL DEL GOBIERNO REGIONAL CUSCO 2020 - 2023.</td>
                    <td className="px-6 py-5 text-right">{pdfButton("https://drive.google.com/file/d/1ehmya0lDNKtz48pHRQ1-Nr7a57coqRXl/view?usp=drive_link")}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* POI */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-pink-100 text-pink-600 rounded-2xl flex items-center justify-center text-xl">📈</div>
              <h4 className="text-xl font-semibold text-gray-900">Plan Operativo Institucional (POI)</h4>
            </div>
            <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="w-12 px-6 py-4 text-left font-medium text-gray-500">#</th>
                    <th className="px-6 py-4 text-left font-medium text-gray-500">Documento</th>
                    <th className="w-32 px-6 py-4 text-right font-medium text-gray-500">Acción</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="group transition-all duration-300 hover:bg-gray-50 hover:-translate-y-0.5 hover:scale-[1.015] hover:shadow-md border-l-4 border-transparent hover:border-red-500">
                    <td className="px-6 py-5 font-mono text-gray-400 group-hover:text-gray-500 transition-colors">01</td>
                    <td className="px-6 py-5 text-gray-700 group-hover:text-gray-900 transition-colors">REPORTE DE SEGUIMIENTO SEMESTRAL DEL PLAN OPERATIVO INSTITUCIONAL DE LA UGEL LA CONVENCION - POI 2023.</td>
                    <td className="px-6 py-5 text-right">{pdfButton("https://drive.google.com/file/d/1o0L0c5d39wljLaRbRxOW9_TtdnLvshNS/view?usp=drive_link")}</td>
                  </tr>
                  <tr className="group transition-all duration-300 hover:bg-gray-50 hover:-translate-y-0.5 hover:scale-[1.015] hover:shadow-md border-l-4 border-transparent hover:border-red-500">
                    <td className="px-6 py-5 font-mono text-gray-400 group-hover:text-gray-500 transition-colors">02</td>
                    <td className="px-6 py-5 text-gray-700 group-hover:text-gray-900 transition-colors">REPORTE DE SEGUIMIENTO ANUAL DEL PLAN OPERATIVO INSTITUCIONAL DE LA UGEL LA CONVENCION - POI 2022.</td>
                    <td className="px-6 py-5 text-right">{pdfButton("https://drive.google.com/file/d/17CZk1y3iiinPl457mSdxcE3FAtGw7DqI/view?usp=drive_link")}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </InstitucionalLayout>
  );
}