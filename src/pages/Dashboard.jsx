import { useEffect, useState } from "react"
import { fetchNews } from "../api/newsApi"
import NewsList from "../components/NewsList"

export default function Dashboard() {
  const [articles, setArticles] = useState([])
  const [category, setCategory] = useState("technology")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadNews()
  }, [category])

  const loadNews = async () => {
    setLoading(true)
    const data = await fetchNews(category)
    setArticles(data)
    setLoading(false)
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>📰 News Dashboard</h1>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="technology">Technology</option>
        <option value="business">Business</option>
        <option value="sports">Sports</option>
        <option value="health">Health</option>
      </select>

      {loading ? (
        <p>Loading news...</p>
      ) : (
        <NewsList articles={articles} />
      )}
    </div>
  )
}