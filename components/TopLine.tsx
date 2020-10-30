import React from "react"
import { GoogleSearch } from "./GoogleSearch"

export const TopLine: React.FC = (props) => {
  return (
    <div className="topline">
      <div className="content">
        <GoogleSearch />
      </div>
      <style jsx>{`
        .topline {
          height: 33px;
          background-color: #f42a90;
          text-align: right;
        }
        .content {
          box-sizing: border-box;
          max-width: 1170px;
          margin: 0 auto;
          padding-right: 50px;
        }
      `}</style>
    </div>
  )
}
