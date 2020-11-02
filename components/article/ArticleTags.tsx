import Link from "next/link"
import React from "react"
import styled from "styled-components"
import { AmpImage } from "../AmpImage"

const Root = styled.div<{ margin?: string }>`
  box-sizing: border-box;
  font-size: 11px;
  color: #777;
  display: flex;
  align-items: center;
  margin: ${(props) => props.margin || "0"};
`
const TagHeader = styled.div`
  margin: 0px 5px 0px 2px;
`
const TagAnker = styled.a`
  background-color: #4999a1;
  color: #ffffff;
  padding: 3px 2px;
  vertical-align: bottom;
  white-space: nowrap;
  text-decoration-color: #4999a1;
`
const Comma = styled.span`
  margin-right: 2px;
`
export const ArticleTags: React.FC<{
  tags: string[]
  margin?: string
}> = React.memo((props) => {
  return (
    <Root>
      <AmpImage src="/images/icon-tag.svg" height="15px" width="15px" />
      <TagHeader>tags:</TagHeader>
      {props.tags.map((tag, index) => (
        <React.Fragment key={index}>
          <Link href={`/tag?tag=${tag}`} passHref>
            <TagAnker>{tag}</TagAnker>
          </Link>
          {index === props.tags.length - 1 || <Comma>,</Comma>}
        </React.Fragment>
      ))}
    </Root>
  )
})
