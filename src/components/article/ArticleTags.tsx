import React from "react"
import Link from "next/link"
import { AmpImage } from "../image/AmpImage"

export const ArticleTags: React.FC<{
  tags: string[]
  margin?: string
}> = React.memo((props) => {
  return (
    <div className="article-tags">
      <AmpImage
        src="/images/icon-tag.svg"
        alt="icon-tag"
        height="15px"
        width="15px"
      />
      <label>tags:</label>
      {props.tags.map((tag, index) => (
        <React.Fragment key={index}>
          <Link href={`/tag?tag=${tag}`} passHref>
            <a>{tag}</a>
          </Link>
          {index === props.tags.length - 1 || <span className="comma">,</span>}
        </React.Fragment>
      ))}
      <style jsx>
        {`
          .article-tags {
            font-size: 11px;
            color: #777;
            display: flex;
            align-items: center;
            margin: ${props.margin || "0"};
          }
          label {
            margin: 0px 5px 0px 2px;
          }
          a {
            background-color: #4999a1;
            color: #ffffff;
            padding: 3px 2px;
            vertical-align: bottom;
            white-space: nowrap;
            text-decoration-color: #4999a1;
          }
          .comma {
            margin-right: 2px;
          }
        `}
      </style>
    </div>
  )
})
