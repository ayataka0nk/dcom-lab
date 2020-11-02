import React from "react"
import styled from "styled-components"
import { GoogleSearch } from "./GoogleSearch"

const Root = styled.div`
  height: 33px;
  background-color: #f42a90;
  text-align: right;
`

const Content = styled.div`
  box-sizing: border-box;
  max-width: 960px;
  margin: 0 auto;
  padding-right: 50px;
`

export const TopLine: React.FC = (props) => {
  return (
    <Root>
      <Content>
        <GoogleSearch />
      </Content>
    </Root>
  )
}
