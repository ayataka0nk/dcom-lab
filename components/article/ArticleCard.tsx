import Link from "next/link"
import React from "react"
import { ArticleDate } from "./ArticleDate"
import { ArticleTags } from "./ArticleTags"

export const ArticleCard: React.FC<{
  title: string
  published: string
  tags: string[]
  summaryText: string
  path: string
}> = (props) => {
  const [year, month, day] = props.published.split("/")
  return (
    <div className="root">
      <div className="published">
        <ArticleDate year={year} month={month} day={day} />
      </div>

      <header>
        <Link href={props.path}>
          <a className="title-link">{props.title}</a>
        </Link>
      </header>
      <ArticleTags tags={props.tags} />
      <div className="text">
        {props.summaryText}...
        <Link href={props.path}>
          <a className="continue">Continued</a>
        </Link>
      </div>
      <style jsx>{`
        .root {
          box-sizing: border-box;
          padding: 20px 20px 10px 20px;
          border: 1px solid #eee;
        }
        .published {
          text-align: right;
        }
        .text {
          box-sizing: border-box;
          line-height: 20px;
          font-size: 14px;
          padding: 15px 0px;
          overflow-wrap: break-word;
        }
        header {
          box-sizing: border-box;
          padding: 10px 0px 15px 0px;
        }
        .title-link {
          line-height: 40px;
          font-size: 32px;
          color: #4999a1;
          text-decoration: underline;
        }
        .title-link:hover {
          cursor: pointer;
        }
        .continue {
          color: #f42a90;
          overflow-wrap: normal;
        }
        .continue:hover {
          cursor: pointer;
          color: #2a6496;
        }
        .icon-tag {
          height: 10px;
          width: 10px;
        }
      `}</style>
    </div>
  )
}
