import React from "react"
import styled from "styled-components"
import { PageHeader } from "./PageHeader"
import { Navigation } from "./Navigation"
import { TopLine } from "./TopLine"
import { GlobalStyles } from "./GlobalStyles"

const Root = styled.div`
  margin-bottom: 40px;
`

const Body = styled.div`
  margin: 0 auto;
  padding: 0 13px;
  min-width: 320px;
  max-width: 1200px;
`

const MidBox = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 960px) {
    flex-direction: row;
  }
`
const NavigationWrap = styled.div`
  min-width: 300px;
  width: 300px;
  margin: 0 0 0 40px;
`
const Content = styled.div`
  flex: 1;
`

export const Layout: React.FC<{ tags: string[] }> = (props) => {
  return (
    <Root>
      <GlobalStyles />
      <TopLine />
      <Body>
        <PageHeader />
        <MidBox>
          <Content>{props.children}</Content>
          <NavigationWrap>
            <Navigation tags={props.tags} />
          </NavigationWrap>
        </MidBox>
      </Body>
    </Root>
  )
}
