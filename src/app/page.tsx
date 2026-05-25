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
                    src="https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/703450710_970597702358334_4492101376319040712_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGpH5WzF_PaqF4v-8HAxZ0TSGVwqeoCGVlIZXCp6gIZWWYFB9x0CYoeM99YUeHcgn5YN543uRld_xTUdMD2UZIK&_nc_ohc=eEh9_FtlNw4Q7kNvwGjNudZ&_nc_oc=AdoIwIAnu2Z51wvO--qt4kEFoVdxLRwvoCKK9Ng1KY2v_Puj-cIyiepWWhQJr-RTUpw&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=tvmurv8DeJhswXpAZLHqQQ&_nc_ss=7b2a8&oh=00_Af6Em5iFOsLm1Qzp3Fx8PQye7Tl8M3bEkk7WS1WyRjKaXQ&oe=6A151DA8"
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
