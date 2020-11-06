import Link from "next/link"
import styled from "styled-components"
import React from "react"
import { ArticleDate } from "./ArticleDate"
import { ArticleTags } from "./ArticleTags"

const Root = styled.div<{ margin?: string }>`
  box-sizing: border-box;
  padding: 20px 20px 10px 20px;
  border: 1px solid #eee;
  margin: ${(props) => props.margin || "0"};
`

const Published = styled.div`
  text-align: right;
`

const SummaryText = styled.div`
  box-sizing: border-box;
  line-height: 20px;
  font-size: 14px;
  padding: 15px 0px;
  overflow-wrap: break-word;
`

const Header = styled.header`
  box-sizing: border-box;
  padding: 10px 0px 15px 0px;
`

const TitleAnker = styled.a`
  line-height: 40px;
  font-size: 32px;
  color: #4999a1;
  text-decoration: underline;
  &:hover {
    cursor: pointer;
  }
`

const LinkArticleAnker = styled.a`
  color: #f42a90;
  overflow-wrap: normal;
  &:hover {
    cursor: pointer;
    color: #2a6496;
  }
`

export const ArticleCard: React.FC<{
  title: string
  published: string
  tags: string[]
  summaryText: string
  path: string
  margin?: string
}> = (props) => {
  const [year, month, day] = props.published.split("/")
  return (
    <Root margin={props.margin}>
      <Published>
        <ArticleDate year={year} month={month} day={day} />
      </Published>
      <Header>
        <Link href={props.path} passHref>
          <TitleAnker className="title-link">{props.title}</TitleAnker>
        </Link>
      </Header>
      <ArticleTags tags={props.tags} />
      <SummaryText>
        {props.summaryText}...
        <Link href={props.path} passHref>
          <LinkArticleAnker className="continue">Continued</LinkArticleAnker>
        </Link>
      </SummaryText>
    </Root>
  )
}
