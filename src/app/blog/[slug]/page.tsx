import MainLayout from "@/app/components/MainLayout"
import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { FaArrowRight, FaCalendar, FaChevronLeft, FaTag } from "react-icons/fa6"
import { getArticleBySlug } from "../blog.service"
import ArticleMiniCard from "./ArticleMiniCard"
import CompartirBar from "./CompartirBar"
import { Suspense } from "react"
import { getRoute } from "@/app/helpers"
import { ERutas } from "@/app/constants/constants"
import ExperienceCard from "@/app/components/ExperienceCard"
import DestinationCard from "@/app/components/DestinationCard"
import SeccionTitle from "@/app/components/SeccionTitle"

interface Props {
	params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = await params

	try {
		const { article } = await getArticleBySlug(slug)
		return {
			title: `${article.title} | Quillabamba Travel`,
			description: article.shortDescription,
			openGraph: {
				title: article.title,
				description: article.shortDescription,
				images: [article.coverUrl],
				type: "article",
				publishedTime: article.createdAt,
				tags: article.tags || [],
			},
		}
	} catch {
		return { title: "Artículo no encontrado" }
	}
}

export default async function BlogArticlePage({ params }: Props) {
	return (
		<MainLayout navbarProps={{ sticky: true }}>
			<Suspense fallback={<div>Cargando artículo...</div>}>
				<Page params={params} />
			</Suspense>
		</MainLayout>
	)
}

const Page = async ({ params }: Props) => {
	const { slug } = await params
	let article, relatedArticles

	try {
		const data = await getArticleBySlug(slug)
		article = data.article
		relatedArticles = data.relatedArticles
	} catch {
		notFound()
	}
	return (
		<article className="seccion">
			<div className="container">
				<div className="mb-8">
					<Link href="/blog" className="inline-flex items-center text-sm text-gray-500 hover:text-primary transition-colors mb-6 group">
						<FaChevronLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
						Volver al Blog
					</Link>

					{article.tags && article.tags.length > 0 && (
						<div className="flex flex-wrap gap-2 mb-4">
							{article.tags.map((tag, index) => (
								<span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary-dark">
									<FaTag className="mr-1.5 text-xs" />
									{tag}
								</span>
							))}
						</div>
					)}

					<h1 className="font-heading font-extrabold text-3xl md:text-5xl text-primary-dark leading-tight mb-2">{article.title}</h1>

					<div className="flex items-center text-sm text-gray-500">
						<div className="flex items-center mr-6">
							<FaCalendar className="mr-2 text-primary" />
							<time dateTime={article.createdAt}>
								{new Date(article.createdAt).toLocaleDateString("es-PE", {
									year: "numeric",
									month: "long",
									day: "numeric",
								})}
							</time>
						</div>
					</div>
				</div>

				<figure className="relative -mx-4 md:mx-0 mb-6 transform hover:scale-[1.01] transition-transform duration-500">
					<img src={article.coverUrl} alt={article.title} className="aspect-video md:rounded-2xl shadow-xl w-full object-cover" />
				</figure>

				<div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
					<aside className="lg:w-20 shrink-0 order-2 lg:order-1 lg:mb-0">
						<div className="sticky top-32 lg:h-full">
							<CompartirBar title={article.title} />
						</div>
					</aside>

					<div className="flex-1 min-w-0 order-1 lg:order-2 lg:mb-0">
						<div className="html-content" dangerouslySetInnerHTML={{ __html: article.content }} />
					</div>

					<aside className="lg:w-80 xl:w-96 shrink-0 order-3 lg:order-3">
						<div className="sticky top-32 space-y-8">
							<div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
								<h3 className="font-heading font-bold text-xl text-primary-dark mb-6 ">Más Artículos</h3>

								<div className="flex flex-col gap-4">
									{relatedArticles.map((relArticle) => (
										<div key={relArticle.id}>
											<ArticleMiniCard article={relArticle} />
										</div>
									))}
								</div>

								<div className="mt-6 pt-4 border-t border-gray-100 text-center">
									<Link href={getRoute(ERutas.BLOG)} className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary-dark transition-colors">
										Ver todos los artículos
										<FaArrowRight className="ml-2 text-xs" />
									</Link>
								</div>
							</div>

							<div className="bg-primary-dark p-6 rounded-2xl text-white text-center relative overflow-hidden group">
								<div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
								<div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/20 rounded-full -ml-12 -mb-12"></div>

								<h4 className="font-heading font-bold text-xl mb-3 relative z-10">¿Planeando tu viaje?</h4>
								<p className="text-white/80 text-sm mb-6 relative z-10">Descubre nuestros paquetes turísticos personalizados en Quillabamba y la selva cusqueña.</p>
								<Link
									href="/contacto"
									className="inline-block bg-white text-primary-dark px-6 py-2.5 rounded-full text-sm font-bold hover:bg-gray-100 transition-colors shadow-lg relative z-10"
								>
									Contáctanos Ahora
								</Link>
							</div>
						</div>
					</aside>
				</div>

				{article.experiences && article.experiences.length > 0 && (
					<section className="seccion pb-0!">
						<SeccionTitle subtitle="Descubre las aventuras únicas mencionadas en este artículo. Tours diseñados para brindarte momentos inolvidables en Quillabamba.">
							EXPERIENCIAS <span className="text-primary">RELACIONADAS</span>
						</SeccionTitle>
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
							{article.experiences.map((articleExp) => (
								<ExperienceCard key={articleExp.id} experience={articleExp.experience} />
							))}
						</div>
					</section>
				)}

				{article.destinations && article.destinations.length > 0 && (
					<section className="seccion pb-0!">
						<SeccionTitle subtitle="Explora los lugares mágicos que hemos mencionado. Cada destino ofrece paisajes únicos y experiencias auténticas en la selva cusqueña.">
							DESTINOS <span className="text-primary">IMPERDIBLES</span>
						</SeccionTitle>
						<div className="flex flex-wrap justify-center gap-8">
							{article.destinations.map((articleDest) => (
								<DestinationCard key={articleDest.id} destination={articleDest.destination} />
							))}
						</div>
					</section>
				)}
			</div>
		</article>
	)
}
