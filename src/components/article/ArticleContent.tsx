import React from "react"
import { ArticleStyle } from "./ArticleStyle"

export const ArticleContent: React.FC<{
  content: string
}> = (props) => {
  return (
    <ArticleStyle>
      <div dangerouslySetInnerHTML={{ __html: props.content }}></div>
    </ArticleStyle>
  )
}
