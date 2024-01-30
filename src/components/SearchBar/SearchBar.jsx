import { useState } from 'react';
import { useNavigate } from 'react-router';

import * as S from "./SearchBar.styles";

export const SearchBar = ({ initialValue = '' }) => {
  const [searchValue, setSearchValue] = useState(initialValue);
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    navigate(`/search/${searchValue}`);
  }

  return(
    <S.SearchForm onSubmit={onSubmit}>
      <S.SearchLogoLink href={process.env.PUBLIC_URL}>
        <S.SearchLogoImg src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="logo" />
      </S.SearchLogoLink>
      <S.SearchText
        type="search"
        placeholder="Начните поиск по имени пользователя"
        name="search"
        value={searchValue}
        onChange={({ target }) => setSearchValue(target.value)}
      />
      <S.ButtonSearch type="submit">Найти</S.ButtonSearch>
    </S.SearchForm>
  )
}
