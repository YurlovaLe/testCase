import styled from "styled-components";

export const SearchForm =styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
`
export const SearchLogoLink = styled.a`
`

export const SearchLogoImg = styled.img`
  width: 70px;
  height: auto;
`

export const SearchText =styled.input`
  width: 100%;
  height: 50px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  padding: 13px 19px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;

  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
`

export const ButtonSearch = styled.button`
  border: 1px solid #FFFFFF;
  border-radius: 6px;
  background-color: #009EE4;
  color: #FFFFFF;
  font-size: 16px;
  padding: 16px 32px;

  &:hover {
    background: #2075da;
  }

  &:active {
    background: #05b1d7;
  }
`
