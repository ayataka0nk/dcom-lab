import Link from "next/link"
import { ArticleDate } from "./ArticleDate"
import { ArticleTags } from "./ArticleTags"

export const ArticleCard: React.FC<{
  title: string
  published: string
  tags: string[]
  summaryText: string
  path: string
  margin?: string
}> = (props) => {
  const [year, month, day] = props.published.split("/")
  return (
    <dl>
      <dd className="published">
        <ArticleDate year={year} month={month} day={day} />
      </dd>
      <dt>
        <Link href={props.path} passHref>
          <a className="title">{props.title}</a>
        </Link>
      </dt>
      <dd>
        <ArticleTags tags={props.tags} />
      </dd>
      <dd className="summary-text">
        {props.summaryText}...
        <Link href={props.path} passHref>
          <a className="continued">Continued</a>
        </Link>
      </dd>

      <style jsx>{`
        dl {
          padding: 20px 20px 10px 20px;
          border: 1px solid #eee;
          margin: ${props.margin || "0"};
        }
        dd.published {
          text-align: right;
        }
        dd.summary-text {
          line-height: 20px;
          font-size: 14px;
          padding: 15px 0px;
          overflow-wrap: break-word;
        }
        .header {
        }
        dt {
          padding: 10px 0px 15px 0px;
        }
        a.title {
          line-height: 40px;
          font-size: 32px;
          color: #4999a1;
          text-decoration: underline;
        }
        a.title:hover {
          cursor: pointer;
        }
        a.continued {
          color: #f42a90;
          overflow-wrap: normal;
        }
        a.continued:hover {
          cursor: pointer;
          color: #2a6496;
        }
      `}</style>
    </dl>
  )
}
