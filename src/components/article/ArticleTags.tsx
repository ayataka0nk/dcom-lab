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
        height="17px"
        width="17px"
      />
      {props.tags.map((tag, index) => (
        <Link key={index} href={`/tag?tag=${tag}`} passHref>
          <a>
            <div className="link-box">{tag} </div>
          </a>
        </Link>
      ))}
      <style jsx>
        {`
          .article-tags {
            color: #777;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            margin: ${props.margin || "0"};
          }
          label {
            margin: 0px 5px 0px 2px;
          }
          .link-box {
            background-color: #4999a1;
            margin: 3px;
            padding: 4px 4px 3px 4px;
            font-size: 13px;
            line-height: 13px;
            color: #ffffff;
          }
          a {
            display: inline-block;

            text-decoration-color: #4999a1;
          }
        `}
      </style>
    </div>
  )
})
