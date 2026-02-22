import MainLayout from "../components/MainLayout"
import PageHero from "../components/PageHeroOrganigrama"
import SidebarInstitucional from "../components/SidebarInstitucional"

interface Props {
	title: string
	subtitle?: string
	children: React.ReactNode
}

export default function InstitucionalLayout({ title, subtitle, children }: Props) {
	return (
		<MainLayout>
			<PageHero title={title} subtitle={subtitle} />
			<section className="container py-8">
				<div className="flex gap-8">
					<SidebarInstitucional />
					<main className="flex-1 min-w-0">{children}</main>
				</div>
			</section>
		</MainLayout>
	)
}
