import { Metadata } from "next"
import MainLayout from "../components/MainLayout"
import PageHero from "../components/PageHero"

export const metadata: Metadata = {
	title: "ESNNA | Quillabamba Travel",
	description: "Código de Conducta contra la Explotación Sexual de Niñas, Niños y Adolescentes (ESNNA).",
}

export default function EsnnaPage() {
	return (
		<MainLayout navbarProps={{ sticky: true }}>
			<PageHero title="ESNNA" />
			<div className="container py-12 md:py-24 html-content">
				<div>
					<h2>Código de Conducta contra la Explotación Sexual de Niñas, Niños y Adolescentes (ESNNA)</h2>

					<h3>PREÁMBULO</h3>
					<p>
						En Quillabamba Travel, nos comprometemos a promover y desarrollar el turismo de manera ética y sostenible, en conformidad con la normativa vigente en Perú, especialmente la Ley
						N° 29408 – Ley General de Turismo y la Ley N° 30802, que establece condiciones para garantizar la protección de niñas, niños y adolescentes. A través de este Código de
						Conducta, reafirmamos nuestra responsabilidad en la prevención de la Explotación Sexual de Niñas, Niños y Adolescentes (ESNNA) en el ámbito del turismo, siguiendo las
						directrices del Ministerio de Comercio Exterior y Turismo (MINCETUR).
					</p>

					<h3>I. OBJETIVO</h3>
					<p>
						Este Código de Conducta tiene como propósito establecer lineamientos claros y precisos que guíen a Quillabamba Travel y a todos sus colaboradores en la lucha contra la ESNNA.
						Nuestro compromiso es garantizar un ambiente turístico seguro, velando por los derechos de niñas, niños y adolescentes y previniendo cualquier forma de explotación sexual.
					</p>

					<h3>II. ALCANCE</h3>
					<p>
						Este Código es aplicable a todos los colaboradores, proveedores y contratistas de Quillabamba Travel, así como a cualquier prestador de servicios vinculado directa o
						indirectamente con nuestra empresa. También se extiende a todos los turistas que interactúen con nosotros.
					</p>

					<h3>III. PRINCIPIOS</h3>
					<ul>
						<li>
							<strong>Interés superior de las niñas, niños y adolescentes:</strong> En Quillabamba Travel, reconocemos que las niñas, niños y adolescentes son sujetos plenos de derechos
							que deben ser respetados y protegidos. Nos comprometemos a priorizar su bienestar en todas nuestras actividades.
						</li>
						<li>
							<strong>Niñas, niños y adolescentes como sujetos de derechos:</strong> Entendemos que las niñas, niños y adolescentes tienen derechos civiles, políticos, económicos,
							sociales y culturales que deben ser respetados. En ningún momento serán considerados objetos de explotación o discriminación.
						</li>
						<li>
							<strong>Desarrollo sostenible del turismo:</strong> Nos comprometemos a fomentar un turismo que no solo sea económicamente viable, sino que también respete los derechos
							humanos y proteja la integridad de las comunidades locales, especialmente la de niñas, niños y adolescentes.
						</li>
					</ul>

					<h3>IV. DEBERES</h3>
					<ul>
						<li>
							Mantener una política de tolerancia cero frente a la ESNNA, asegurando que ningún colaborador, turista o proveedor fomente o permita actos de explotación sexual de menores.
						</li>
						<li>No permitir el ingreso de niñas, niños o adolescentes a las habitaciones de hospedaje sin la compañía de un adulto responsable legalmente acreditado.</li>
						<li>Denunciar de inmediato cualquier acto o sospecha de explotación sexual de menores a las autoridades competentes.</li>
						<li>Capacitar de forma regular a todos los colaboradores sobre las normativas vigentes en la prevención de la ESNNA.</li>
						<li>Abstenerse de ofrecer en los programas turísticos o actividades cualquier tipo de contenido que promueva, directa o indirectamente, la ESNNA.</li>
						<li>Colocar en un lugar visible en nuestras instalaciones material informativo relacionado con la prevención de la ESNNA.</li>
					</ul>

					<h3>V. DIFUSIÓN Y MONITOREO</h3>
					<ul>
						<li>
							<strong>Difusión interna:</strong> Quillabamba Travel se compromete a difundir este Código de Conducta entre sus colaboradores, proveedores y clientes, asegurando que todos
							estén informados y actúen en conformidad con nuestras políticas.
						</li>
						<li>
							<strong>Monitoreo:</strong> El cumplimiento de este Código será monitoreado regularmente por la gerencia de Quillabamba Travel. Cualquier incumplimiento será sancionado de
							acuerdo con las normativas internas y legales aplicables.
						</li>
					</ul>

					<h3>VI. INCUMPLIMIENTO</h3>
					<p>
						El incumplimiento de este Código de Conducta por parte de cualquier colaborador o proveedor de Quillabamba Travel resultará en medidas disciplinarias, que pueden incluir la
						terminación del contrato o la relación laboral, sin perjuicio de las acciones legales correspondientes.
					</p>
				</div>
			</div>
		</MainLayout>
	)
}
