import React from "react"
import { ArticleTags } from "./article"

export const Navigation: React.FC<{ tags: string[] }> = (props) => {
  return (
    <div>
      <div>Navigation!!!!!</div>
      <ArticleTags tags={props.tags} />
    </div>
  )
}
