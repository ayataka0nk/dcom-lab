import React from "react"
import styled from "styled-components"
import { AmpImage } from "./AmpImage"

const Header = styled.header`
  box-sizing: border-box;
  padding: 20px 0;
`

export const PageHeader: React.FC = (props) => {
  return (
    <Header>
      <a href="/pages/1">
        <AmpImage src="/images/logo.png" width="360px" height="117px" />
      </a>
    </Header>
  )
}
