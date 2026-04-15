import MainLayout from "./components/MainLayout"
import InicioModal from "./components/InicioModal"
import MainHero from "./components/secciones/MainHero/MainHero"
import SeccionCifras from "./components/secciones/SeccionCifras"
import SeccionCursos from "./components/secciones/SeccionCursos/SeccionCursos"
import SeccionInformacionDestacada from "./components/secciones/SeccionInformacionDestacada"
import SeccionNormas from "./components/secciones/SeccionNormas/SeccionNormas"
import SeccionNoticias from "./components/secciones/SeccionNoticias/SeccionNoticias"
import SeccionTransmisiones from "./components/secciones/SeccionTransmisiones/SeccionTransmisiones"
import SeccionDisenosCurriculares from "./components/secciones/SeccionDisenosCurriculares/SeccionDisenosCurriculares"
import SeccionDominiosPerfil from "./components/secciones/SeccionDominiosPerfil/SeccionDominiosPerfil"
import SeccionBuenasPracticas from "./components/secciones/SeccionBuenasPracticas/SeccionBuenasPracticas"

export default function Home() {
	return (
		<MainLayout>
			{/* <InicioModal
				src="https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/671605593_941374478613990_6062568973323917270_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=13d280&_nc_ohc=w1hrYue4MKQQ7kNvwEsPF2E&_nc_oc=AdrYaPZQion4tj6p6MH6qzayJuhRMCgXdHS7twDx8l4cql2X2eSYUkXYFKgMySEkaCQ&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=od6Td4iaSGouYYMkQKzqxw&_nc_ss=7a3a8&oh=00_Af2iouX6U6X_tzFapErOWkjrOX7fd9wi5cg9UGba-geN8Q&oe=69E58DA9"
				alt=""
                // Definir href para redirigir a otra dirección, sino dejar sin href para mostrar solo la imagen sin enlace
				href="https://www.ugellaconvencion.gob.pe/assets/files/2026/publicaciones/29.MM-00037-2026-GORE-C-DRE-C-DUGE-LC-DAGP-SEC-F-07042026.pdf"
			/> */}
			<MainHero />
			<SeccionInformacionDestacada />
			<SeccionNoticias />
			<SeccionNormas />
			<SeccionCifras />
			<SeccionCursos />
			<SeccionTransmisiones />
			{/* <SeccionDisenosCurriculares /> */}
			{/* <SeccionDominiosPerfil /> */}
			<SeccionBuenasPracticas />
		</MainLayout>
	)
}
