import Link from "next/link"
import { TArticle } from "../../types"
import { FaCalendar } from "react-icons/fa6"

export default function ArticleMiniCard({ article }: { article: TArticle }) {
	return (
		<Link href={`/blog/${article.slug}`} className="group flex gap-4 h-full hover:bg-gray-50 p-2 rounded-lg transition-colors">
			<div className="shrink-0 w-32 h-full aspect-video overflow-hidden rounded-lg">
				<img src={article.coverThumbUrl!} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
			</div>
			<div className="flex flex-col justify-center">
				<h4 className="font-heading font-bold text-sm text-gray-800 line-clamp-2 leading-tight mb-2 group-hover:text-primary transition-colors">{article.title}</h4>
				<p className="text-xs text-gray-500 line-clamp-2 mb-2">{article.shortDescription}</p>
				<div className="flex items-center text-xs text-gray-500">
					<FaCalendar className="mr-1.5 text-primary/70" />
					<time dateTime={article.createdAt}>
						{new Date(article.createdAt).toLocaleDateString("es-PE", {
							year: "numeric",
							month: "short",
							day: "numeric",
						})}
					</time>
				</div>
			</div>
		</Link>
	)
}
