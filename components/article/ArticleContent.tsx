import React from "react"
import { GithubMarkdownStyles } from "../../css/GithubMarkdownStyles"
import { HighlightDefaultStyles } from "../../css/HighlightDefaultStyles"
import { resetStyles } from "../../css/reset"

export const ArticleContent: React.FC<{
  content: string
}> = (props) => {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: props.content }}></div>
      <style jsx global>{`
        .amp-img-container {
          position: relative;
          width: 100%;
          display: flex;
        }
        img {
          object-fit: contain;
        }
      `}</style>
      <style jsx global>
        {resetStyles}
      </style>
      <style jsx global>
        {GithubMarkdownStyles}
      </style>
      <style jsx global>
        {HighlightDefaultStyles}
      </style>
    </div>
  )
}
