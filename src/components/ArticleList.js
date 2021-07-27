import Article from "./Article"

function ArticleList({articleArray}) {

    let x = articleArray.map(article => {
        return (<Article 
            key={article.id} 
            title={article.title}
            date={article.date}
            preview={article.preview}
            readTime={article.minutes}
        />)
    })
   
    return(
        <>
        <main>
            {x}
        </main>
        </>
    )
}

export default ArticleList