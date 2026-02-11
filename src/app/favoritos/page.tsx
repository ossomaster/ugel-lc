import MainLayout from "../components/MainLayout"
import PageHero from "../components/PageHero"
import FavoritosContent from "./FavoritosContent"

export default function FavoritosPage() {
	return (
		<MainLayout navbarProps={{ sticky: true }}>
			<PageHero title="Mis Favoritos" />
			<div className="container py-12 md:py-24 min-h-[50vh]">
				<FavoritosContent />
			</div>
		</MainLayout>
	)
}
