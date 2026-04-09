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
			<InicioModal
				src="https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/668711497_937004042384367_4572974055960939663_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=13d280&_nc_ohc=revmUgGLYU4Q7kNvwFrmQhX&_nc_oc=AdoRvqptMA1niA28fjdn-v0jNeBddFXEFHfsGGEb1JCnPHV-wfi8no92AgXbDvnpG-4&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=Yxvx8wl9UpU6dU2IlpaMLA&_nc_ss=7a3a8&oh=00_Af3hyL_K_rqc694EsTUtVub_ifHzy0IbDVjWxYWOrZhQgQ&oe=69DDDCC6"
				alt=""
                // Definir href para redirigir a otra dirección, sino dejar sin href para mostrar solo la imagen sin enlace
				href="https://www.ugellaconvencion.gob.pe/assets/files/2026/publicaciones/35.MM-N247-2026-GR-CUSCO-GEREDU-F-09042026.pdf"
			/>
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
