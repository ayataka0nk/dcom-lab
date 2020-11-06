import React from "react"
import { Abridgement } from "./Abridgement"
import { OpendPageNumber } from "./OpenedPageNumber"
import { PageNumber } from "./PageNumber"

export const PagingLink: React.FC<{
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
    <div className="paging-link">
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
      <style jsx>{`
        .paging-link {
          text-align: center;
        }
      `}</style>
    </div>
  )
}
