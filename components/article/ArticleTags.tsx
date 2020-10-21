import React from "react"

export const ArticleTags: React.FC<{ tags: string[] }> = React.memo((props) => {
  return (
    <div className="tags">
      <amp-img src="/images/icon-tag.svg" height="15px" width="15px" />
      <div className="tag-header">tags:</div>
      {props.tags.map((tag, index) => (
        <React.Fragment key={index}>
          <div className="tag">{tag}</div>
          {index === props.tags.length - 1 || <div>, </div>}
        </React.Fragment>
      ))}
      <style jsx>
        {`
          .tags {
            font-size: 11px;
            color: #777;
            display: flex;
            align-items: center;
          }
          .tag-header {
            margin: 0px 5px 0px 2px;
          }
          .tag {
            background-color: #4999a1;
            color: #ffffff;
            padding: 0px 3px;
          }
        `}
      </style>
    </div>
  )
})
