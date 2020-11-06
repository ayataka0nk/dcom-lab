import { ArticleDate } from "./ArticleDate"
import styled from "styled-components"

const Header = styled.div`
  display: flex;
`

const Title = styled.h1`
  font-size: 38px;
  line-height: 70px;
  color: #4999a1;
  text-decoration: underline;
  flex: 1;
`

export const ArticleHeader: React.FC<{ title: string; published: string }> = (
  props
) => {
  const [year, month, day] = props.published.split("/")
  return (
    <Header>
      <Title>{props.title}</Title>
      <ArticleDate year={year} month={month} day={day} />
    </Header>
  )
}
