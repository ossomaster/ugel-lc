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
            {/* Usamos un Fragment para agrupar los componentes */}
            <>
                {/* <InicioModal
                    src="https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/709092362_977130048371766_4428123261388950335_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=kgFBdniq0oYQ7kNvwEmkh_4&_nc_oc=Adp1xxW1dFR6DpNpeyf6RDXL9-KgrWrsY_S2eD2TnouhiNB1A-vKR9rUBgcMLNFyeP8&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=z7-IB2rmxOsiMZDjyYewDg&_nc_ss=7b2a8&oh=00_Af4pm7UIIhtQ5Y5DQANOedw3nwxRwtvhiVpI-2JQGGCnmA&oe=6A1FADB7"
                    //src="assets/files/2026/modal/simulacro-F-28052026.jpeg"
                    alt=""
                    href=""
                /> */}
                <MainHero />
            </>
            
            <SeccionInformacionDestacada />
            <SeccionNoticias />
            <SeccionNormas />
            <SeccionCifras />
            <SeccionCursos />
            <SeccionTransmisiones />
            <SeccionBuenasPracticas />
        </MainLayout>
    );
}
