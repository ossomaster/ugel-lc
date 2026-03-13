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
				src="https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/649178729_1350955123742613_9160067495324182264_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=13d280&_nc_ohc=MYTMYh-noIwQ7kNvwGzqCz0&_nc_oc=AdmF26kmTXHHHfeJBg1Q5PIi2RKCSmByQ-koqAieAPUmbKACb-ReBFesmFs4-j_bw5I&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=OUj10GM7BurflItfkXok3Q&_nc_ss=8&oh=00_AfwRS12H2o22SlVw49L1hLSJERO_UijTk02FVABiXAy_vA&oe=69B9E9C7"
				alt="Comunicado EIB 2026"
                // Definir href para redirigir a otra dirección, sino dejar sin href para mostrar solo la imagen sin enlace
				href="https://www.facebook.com/photo?fbid=1352368063601319&set=a.477091804462287"
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
