import React from "react"

export const ArticleDate: React.FC<{
  year: string
  month: string
  day: string
}> = (props) => {
  return (
    <div className="root">
      <div className="day">{props.day}</div>
      <div className="month-year">
        {props.month}月 {props.year}
      </div>

      <style jsx>{`
        .root {
          display: inline-block;
          color: #777;
          text-align: center;
        }
        .day {
          font-size: 24px;
          line-height: 25px;
        }
        .month-year {
          white-space: nowrap;
          font-size: 10px;
          line-height: 11px;
        }
      `}</style>
    </div>
  )
}
