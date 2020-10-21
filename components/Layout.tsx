import React from "react"
import { Header } from "./Header"
import { Navigation } from "./Navigation"
import { TopLine } from "./TopLine"
import { resetStyles } from "../css/reset"

export const Layout: React.FC = (props) => {
  return (
    <div className="root">
      <TopLine />
      <div className="body">
        <Header />
        <div className="content-wrap">
          <div className="content">{props.children}</div>
          <div className="navigation">
            <Navigation />
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .root {
          }
          .body {
            margin: 0 auto;
            max-width: 1170px;
          }
          .content-wrap {
            display: flex;
          }
          .navigation {
            width: 300px;
          }
          .content {
            flex: 1;
            padding: 0px 20px;
          }
        `}
      </style>
      <style jsx global>
        {resetStyles}
      </style>
    </div>
  )
}
