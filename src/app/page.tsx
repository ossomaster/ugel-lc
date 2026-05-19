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
                    src="https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/702470310_969117269173044_4825889958256146595_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=rhAZEq2mMagQ7kNvwGDSkJa&_nc_oc=AdoPS0Zw1xbQgTXg6ZhRd_rB_fUtOYzhjl7hXsWpgXL-mwPlaUAirrKWqF2CldcCKok&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=_rTWsdd9WyRxYMqkr6bhmg&_nc_ss=7b2a8&oh=00_Af5dwgpAw6OTPWx0lcX9_z19sIFX_YSMQHi1Eefb7Sw6hw&oe=6A12B94C"
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
