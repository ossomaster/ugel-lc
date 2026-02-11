import { getLatestArticles } from "@/app/blog/blog.service"
import ArticleCard from "../../ArticleCard"

const SeccionBlogList = async () => {
	const articles = await getLatestArticles()
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			{articles.slice(0, 3).map((article) => (
				<ArticleCard key={article.id} article={article} />
			))}
		</div>
	)
}

export default SeccionBlogList
