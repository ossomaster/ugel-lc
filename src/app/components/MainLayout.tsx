import React from "react"
import BarraSuperior from "./BarraSuperior"
import Footer from "./Footer/Footer"
import Navbar from "./Navbar/Navbar"
import VolverArribaBoton from "./VolverArribaBoton"

type Props = {
	children: React.ReactNode
}

const MainLayout = ({ children }: Props) => {
	return (
		<main>
			<BarraSuperior />
			<Navbar />
			{children}
			<Footer />
			<VolverArribaBoton />
		</main>
	)
}

export default MainLayout
