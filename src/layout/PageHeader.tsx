import { AmpImage } from "../components/image/AmpImage"
import { GoogleSearch } from "./GoogleSearch"

export const PageHeader = () => {
  return (
    <header>
      <div className="header-logo">
        <a href="/pages/1">
          <AmpImage src="/images/logo.png" width="360px" height="117px" />
        </a>
      </div>

      <style jsx>{`
        .header-logo {
          padding: 20px 0;
        }
      `}</style>
    </header>
  )
}
