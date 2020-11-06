import React from "react"
import styled from "styled-components"
const Root = styled.div`
  display: inline-block;
  color: #777;
  text-align: center;
`
const Day = styled.div`
  font-size: 24px;
  line-height: 25px;
`
const MonthYear = styled.div`
  white-space: nowrap;
  font-size: 10px;
  line-height: 11px;
`
export const ArticleDate: React.FC<{
  year: string
  month: string
  day: string
}> = (props) => {
  return (
    <Root>
      <Day>{props.day}</Day>
      <MonthYear>
        {props.month}月 {props.year}
      </MonthYear>
    </Root>
  )
}
