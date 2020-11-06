import Link from "next/link"
import React from "react"
import styled from "styled-components"

const BaseElementBox = styled.div`
  display: inline-block;
  box-sizing: border-box;
  font-size: 12px;
  border: solid 2px #eee;
  width: 32px;
  line-height: 28px;
  text-align: center;
  font-weight: 700;
  margin: 8px;
`

const OpendPageNumber = styled(BaseElementBox)`
  color: #333;
  background: rgba(0, 0, 0, 0.05);
  border-color: rgba(0, 0, 0, 0.05);
`

const Abridgement = styled(BaseElementBox)`
  border-color: rgba(0, 0, 0, 0.05);
`

const PageLinkAnker = styled(BaseElementBox)`
  color: #f42a90;
  &:hover {
    border-color: #f42a90;
    background: rgba(0, 0, 0, 0.05);
    color: #2a6496;
    cursor: pointer;
  }
`

type PageNumberProps = {
  link: string
  children: string
}

const PageNumber: React.FC<PageNumberProps> = (props) => {
  return (
    <Link href={props.link} passHref>
      <PageLinkAnker as="a">{props.children}</PageLinkAnker>
    </Link>
  )
}

const CenteredDiv = styled.div`
  text-align: center;
`
export const PageLink: React.FC<{
  pageNumber: string
  lastPage: string
}> = (props) => {
  const prev = String(Number(props.pageNumber) - 1)
  const next = String(Number(props.pageNumber) + 1)
  const displayPages: string[] = []
  for (
    let i = Number(props.pageNumber) - 3;
    i < Number(props.pageNumber) + 4;
    i++
  ) {
    if (0 < i && i < Number(props.lastPage) + 1) {
      displayPages.push(String(i))
    }
  }
  return (
    <CenteredDiv>
      {props.pageNumber !== "1" && (
        <PageNumber link={"/pages/" + prev}>«</PageNumber>
      )}
      {"2" === displayPages[0] && <PageNumber link="/pages/1">1</PageNumber>}
      {"2" < displayPages[0] && (
        <>
          <PageNumber link="/pages/1">1</PageNumber>
          <Abridgement>...</Abridgement>
        </>
      )}
      {displayPages.map((number) => {
        return props.pageNumber === number ? (
          <OpendPageNumber key={number}>{number}</OpendPageNumber>
        ) : (
          <PageNumber key={number} link={"/pages/" + number}>
            {number}
          </PageNumber>
        )
      })}
      {displayPages[displayPages.length - 1] <
        String(Number(props.lastPage) - 1) && (
        <>
          <Abridgement>...</Abridgement>
          <PageNumber link={"/pages/" + props.lastPage}>
            {props.lastPage}
          </PageNumber>
        </>
      )}
      {displayPages[displayPages.length - 1] ===
        String(Number(props.lastPage) - 1) && (
        <PageNumber link={"/pages/" + props.lastPage}>
          {props.lastPage}
        </PageNumber>
      )}
      {props.pageNumber !== props.lastPage && (
        <PageNumber link={"/pages/" + next}>»</PageNumber>
      )}
    </CenteredDiv>
  )
}
