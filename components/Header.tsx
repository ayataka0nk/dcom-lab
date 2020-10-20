import React from "react"

export const Header: React.FC = (props) => {
  return (
    <div>
      <div className="title">dcomlab</div>
      <style jsx>{`
        .title {
          height: 100px;
        }
      `}</style>
    </div>
  )
}
