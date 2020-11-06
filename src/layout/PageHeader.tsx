import { AmpImage } from "../components/image/AmpImage"
import { GoogleSearch } from "./GoogleSearch"

export const PageHeader = () => {
  return (
    <header>
      <div className="top-line">
        <div className="tools">
          <GoogleSearch />
        </div>
      </div>
      <div className="header-logo">
        <a href="/pages/1">
          <AmpImage src="/images/logo.png" width="360px" height="117px" />
        </a>
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
        .header-logo {
          padding: 20px 0;
        }
      `}</style>
    </header>
  )
}
