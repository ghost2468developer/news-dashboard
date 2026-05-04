export default function NewsCard({ article }) {
  return (
    <div style={styles.card}>
      {article.urlToImage && (
        <img src={article.urlToImage} alt="" style={styles.image} />
      )}
      <h3>{article.title}</h3>
      <p>{article.description}</p>
      <a href={article.url} target="_blank" rel="noreferrer">
        Read more
      </a>
    </div>
  )
}

const styles = {
  card: {
    border: "1px solid #ddd",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    background: "#fff"
  },
  image: {
    width: "100%",
    height: 180,
    objectFit: "cover",
    borderRadius: 8
  }
}