import React from "react"
import styled from "styled-components"
import { ArticleTags } from "../components/article"
import { ImageLink } from "../components/ImageLink"

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Navigation: React.FC<{ tags: string[] }> = (props) => {
  return (
    <Nav>
      {/* <ImageLink
        imageSrc="/images/dcomlink.png"
        imageWidth="234px"
        imageHeight="129px"
        href="http://www.dcom-web.co.jp/"
        margin="0 0 20px 0"
      /> */}
      <ArticleTags tags={props.tags} />
    </Nav>
  )
}
