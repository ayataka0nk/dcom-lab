import { PageHeader } from "./PageHeader"
import { Navigation } from "./Navigation"
import { GlobalStyles } from "./GlobalStyles"
import { TopBar } from "./TopBar"

export const Layout: React.FC<{ tags: string[] }> = (props) => {
  return (
    <div className="root">
      <TopBar />
      <div className="body">
        <PageHeader />
        <div className="midbox">
          <div className="content">{props.children}</div>
          <Navigation tags={props.tags} width="300px" margin="0 0 0 40px" />
        </div>
      </div>
      <style jsx global>
        {GlobalStyles}
      </style>
      <style jsx>{`
        .root {
          margin-bottom: 40px;
        }
        .body {
          margin: 0 auto;
          padding: 0 13px;
          min-width: 320px;
          max-width: 1200px;
        }
        .midbox {
          display: flex;
          flex-direction: column;
        }
        .content {
          flex: 1;
        }
        @media screen and (min-width: 960px) {
          .midbox {
            flex-direction: row;
          }
        }
      `}</style>
    </div>
  )
}
