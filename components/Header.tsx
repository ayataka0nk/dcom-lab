import React from "react"
import { useAmp } from "next/amp"

export const Header: React.FC = (props) => {
  const isAmp = useAmp()
  return (
    <div className="root">
      {isAmp ? (
        <amp-img src="/images/logo.png" width="307px" height="100px" />
      ) : (
        <img src="/images/logo.png" width="307px" height="100px" />
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
