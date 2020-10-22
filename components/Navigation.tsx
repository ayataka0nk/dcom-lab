import React from "react"
import { ArticleTags } from "./article"
import { useAmp } from "next/amp"

export const Navigation: React.FC<{ tags: string[] }> = (props) => {
  const isAmp = useAmp()
  return (
    <div>
      <div className="dcomlink-wrap">
        <a href="http://www.dcom-web.co.jp/">
          {isAmp ? (
            <amp-img src="/images/dcomlink.png" width="234px" height="129px" />
          ) : (
            <img src="/images/dcomlink.png" width="234px" height="129px" />
          )}
        </a>
      </div>

      <ArticleTags tags={props.tags} />
      <style jsx>{`
        .dcomlink-wrap {
          text-align: center;
          margin-bottom: 20px;
        }
      `}</style>
    </div>
  )
}
