import React from "react"
import { useAmp } from "next/amp"

export const Header: React.FC = (props) => {
  const isAmp = useAmp()
  return (
    <div className="root">
      {isAmp ? (
        <a href="/pages/1">
          <amp-img src="/images/logo.png" width="307px" height="100px" />
        </a>
      ) : (
        <a href="/pages/1">
          <img src="/images/logo.png" width="307px" height="100px" />
        </a>
      )}
      <style jsx>{`
        .root {
          box-sizing: border-box;
          padding: 20px 0;
        }
      `}</style>
    </div>
  )
}
