import React from "react"

export const Header: React.FC = (props) => {
  return (
    <div className="root">
      <amp-img src="/images/logo.png" width="307px" height="100px" />
      <style jsx>{`
        .root {
          box-sizing: border-box;
          padding: 20px 0;
        }
      `}</style>
    </div>
  )
}
