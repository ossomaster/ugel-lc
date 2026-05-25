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
                <InicioModal
                    src="https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/706317260_973813165370121_2690312653258245484_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeENQcgBhR6xsVysKW34r4c6cJq961hTLjlwmr3rWFMuOeXkCe3wUsic1VLRMXS9e_5nlYe3BXbKzdpPZ_kmRfqW&_nc_ohc=Yc2_Gzv-2EYQ7kNvwEtoPUl&_nc_oc=AdrQhRdGZ_URxS53bqxrWgBQ3H-R9OP3hN15Jua4V9Dob_9i34WETlSg6zJiOZoBj8M&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=BS0GtUXx2fJ_iYRqT13i2A&_nc_ss=7b2a8&oh=00_Af59OBj2JRlACcejWDF68iloaW6opOiBiGOAx0x7NX_lEg&oe=6A1A6BE7"
                    alt=""
                    href=""
                />
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
