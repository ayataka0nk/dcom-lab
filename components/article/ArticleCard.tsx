import Link from "next/link"
import React from "react"

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
        <div className="published-block">
          <div className="day">{day}</div>
          <div className="month-year">
            {month}月 {year}
          </div>
        </div>
      </div>

      <header>
        <Link href={props.path}>
          <a className="title-link">{props.title}</a>
        </Link>
      </header>
      <div className="tags">
        <amp-img src="/images/icon-tag.svg" height="15px" width="15px" />

        <div className="tag-header">tags:</div>
        {props.tags.map((tag, index) => (
          <React.Fragment key={index}>
            <div className="tag">{tag}</div>
            {index === props.tags.length - 1 || <div>, </div>}
          </React.Fragment>
        ))}
      </div>
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
        .published-block {
          display: inline-block;
          color: #777;
          text-align: center;
        }
        .day {
          font-size: 24px;
          line-height: 25px;
        }
        .month-year {
          font-size: 10px;
          line-height: 11px;
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
        .tag-header {
          margin: 0px 5px 0px 2px;
        }
        .tags {
          font-size: 11px;
          color: #777;
          display: flex;
          align-items: center;
        }
        .tag {
          background-color: #4999a1;
          color: #ffffff;
          padding: 0px 3px;
        }
      `}</style>
    </div>
  )
}
