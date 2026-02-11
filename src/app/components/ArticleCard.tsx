import Link from "next/link"
import { TArticle } from "../types"
import { getRoute } from "../helpers"
import { ERutas } from "../constants/constants"

export default function ArticleCard({ article }: { article: TArticle }) {
	return (
		<Link href={getRoute(ERutas.BLOG_SHOW, { slug: article.slug })} className="rounded-lg border border-gray-200 flex flex-col h-full hover:shadow-lg transition-shadow">
			<img src={article.coverThumbUrl!} alt={article.title} className="w-full aspect-video object-cover rounded-t-lg" />
			<div className="p-4 bg-white text-center rounded-b-lg grow flex flex-col">
				<div className="text-sm text-gray-500 mb-2">
					{new Date(article.createdAt).toLocaleDateString("es-PE", {
						year: "numeric",
						month: "short",
						day: "numeric",
					})}
				</div>
				<h3 className="font-heading font-extrabold tracking-wide mb-2 text-xl line-clamp-2">{article.title}</h3>
				<p className="text-sm line-clamp-3 text-gray-600">{article.shortDescription}</p>
			</div>
		</Link>
	)
}
