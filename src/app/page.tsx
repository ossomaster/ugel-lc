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
				src="https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/658162888_931327466285358_1504002055197489080_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=13d280&_nc_ohc=Xxnz5jfSzO0Q7kNvwEoWRl3&_nc_oc=AdpdF9cW6i1OCpuSAWcYQgKU__RH--lHUyFCMUMwLZonaEQ0S4sS-T0qkf433ezM6hc&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=pSqlrWdfW-iRQH2EQ16pzQ&_nc_ss=7a3a8&oh=00_Af3PLXfsu58Iss2KjK7aNn_b3A1q-GAlxvWxHM3pxHkVzA&oe=69D45353"
				alt=""
                // Definir href para redirigir a otra dirección, sino dejar sin href para mostrar solo la imagen sin enlace
				href=""
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
