import { ArticleContent } from "./ArticleContent"
import { ArticleDate } from "./ArticleDate"
import { ArticleTags } from "./ArticleTags"

type ArticleProps = {
  title: string
  published: string
  tags: string[]
  content: string
}

export const Article: React.FC<ArticleProps> = (props) => {
  const [year, month, day] = props.published.split("/")
  return (
    <article>
      <header>
        <h1>{props.title}</h1>
        <ArticleDate year={year} month={month} day={day} />
      </header>
      <ArticleTags tags={props.tags} margin="0 0 20px 0" />
      <ArticleContent content={props.content} />
      <amp-social-share type="twitter" />
      <style jsx>{`
        header {
          display: flex;
        }
        h1 {
          font-size: 38px;
          line-height: 70px;
          color: #4999a1;
          text-decoration: underline;
          flex: 1;
        }
      `}</style>
    </article>
  )
}
