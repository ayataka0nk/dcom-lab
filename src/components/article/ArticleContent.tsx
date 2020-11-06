import React from "react"
import { ArticleStyle } from "./ArticleStyle"

export const ArticleContent: React.FC<{
  content: string
}> = (props) => {
  return (
    <div>
      <div
        className="md-body"
        dangerouslySetInnerHTML={{ __html: props.content }}
      ></div>
      <style jsx global>
        {ArticleStyle}
      </style>
    </div>
  )
}
