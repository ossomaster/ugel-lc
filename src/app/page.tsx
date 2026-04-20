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
				src="https://scontent-lim1-1.xx.fbcdn.net/v/t39.99422-6/675459771_966773029227646_4901614353268562091_n.png?stp=dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=13d280&_nc_ohc=IGwNzOCYUOQQ7kNvwEo42Mu&_nc_oc=AdpeBuhr79v744NsRDpJ8dsj8T8CQBkW90sK-5LmTGc5kYeNTxj7Maq_2hPM9yDHerE&_nc_zt=14&_nc_ht=scontent-lim1-1.xx&_nc_gid=sqAjWoh6ITaozV-ykhwHnA&_nc_ss=7a3a8&oh=00_Af1rNpDC51Mj_xZ9j4V_KGjhIyxaG8JojuJT3ut4TAsTpg&oe=69EC1438"
				alt=""
                // Definir href para redirigir a otra dirección, sino dejar sin href para mostrar solo la imagen sin enlace
				href="https://us06web.zoom.us/j/81106177356?pwd=eUOhNkaLBqE3MmK8yP86O0JoGEWzrN.1"
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
