import { GoogleSearch } from "./GoogleSearch"

export const TopBar = () => {
  return (
    <div className="top-line">
      <div className="tools">
        <GoogleSearch />
      </div>
      <style jsx>{`
        .top-line {
          height: 33px;
          background-color: #f42a90;
          text-align: right;
        }
        .top-line .tools {
          box-sizing: border-box;
          max-width: 960px;
          margin: 0 auto;
          padding-right: 50px;
        }
      `}</style>
    </div>
  )
}
