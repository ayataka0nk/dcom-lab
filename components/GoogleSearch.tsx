import styled from "styled-components"
import { AmpImage } from "./AmpImage"

const Root = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  display: inline-block;
  box-sizing: border-box;
  padding: 4px;
  margin: 4px 0;
`

const Form = styled.form`
  display: flex;
  align-items: center;
  background-color: transparent;
`

const SearchInput = styled.input`
  background-color: transparent;
  border: 0;
  outline: 0;
  color: #fff;
  &::placeholder {
    color: #fff;
  }
`

const SubmitButton = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  outline: 0;
  padding: 0 3px;
`

export const GoogleSearch: React.FC = () => {
  return (
    <Root>
      <Form id="cse-search-box" action="https://google.com/cse" target="_blank">
        <SubmitButton className="submit-button" type="submit" name="sa">
          <AmpImage src="/images/search-solid.svg" width="13px" height="13px" />
        </SubmitButton>
        <input type="hidden" name="cx" value="cd0da1054f762f7ae" />
        <input type="hidden" name="ie" value="UTF-8" />
        <SearchInput
          className="search-input"
          type="text"
          name="q"
          placeholder="Googleカスタム検索"
          autoComplete="off"
        />
      </Form>
    </Root>
  )
}
