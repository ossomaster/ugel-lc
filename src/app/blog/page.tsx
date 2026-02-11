import { Metadata } from "next"
import ArticleCard from "../components/ArticleCard"
import MainLayout from "../components/MainLayout"
import PageHero from "../components/PageHero"
import Pagination from "../components/Pagination"
import { getArticles } from "./blog.service"
import { Suspense } from "react"

export const metadata: Metadata = {
	title: "Blog | Quillabamba Travel",
	description: "Descubre las últimas noticias, consejos de viaje y relatos emocionantes de nuestras aventuras en la Selva Cusqueña.",
}

const PER_PAGE = 12

interface Props {
	searchParams: Promise<{ page?: string }>
}

export default async function BlogPage(props: Props) {
	return (
		<MainLayout navbarProps={{ sticky: true }}>
			<PageHero title="Nuestro Blog" />
			<div className="container py-12 md:py-24">
				<Suspense fallback={<div>Cargando artículos...</div>}>
					<BlogList {...props} />
				</Suspense>
			</div>
		</MainLayout>
	)
}

const BlogList = async ({ searchParams }: Props) => {
	const { page } = await searchParams
	const currentPage = Number(page) || 1
	const { data: articles, total } = await getArticles(currentPage, PER_PAGE)
	const totalPages = Math.ceil(total / PER_PAGE)
	return (
		<>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{articles.map((article) => (
					<ArticleCard key={article.id} article={article} />
				))}
			</div>
			<Pagination totalPages={totalPages} currentPage={currentPage} />
		</>
	)
}
