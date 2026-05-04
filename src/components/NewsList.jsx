import NewsCard from "./NewsCard"

export default function NewsList({ articles }) {
  return (
    <div>
      {articles.map((article, index) => (
        <NewsCard key={index} article={article} />
      ))}
    </div>
  )
}