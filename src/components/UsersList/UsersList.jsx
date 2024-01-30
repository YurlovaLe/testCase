import { UserCard } from "../UserCard/UserCard";
import { ControlButton } from "../ControlButton/ControlButton";
import { ArrowDownIcon } from "../Icons/ArrowDown";
import { ArrowUpIcon } from "../Icons/ArrowUp";

import * as S from "./UsersList.styles";

export function UsersList({ usersData, sortType, onSortClick }) {
  const {
    total_count,
    items,
  } = usersData;

  return (
    <>
      <S.SearchResultHeader>
        Всего: {total_count}
        <ControlButton
          type="button"
          onClick={() => onSortClick(-sortType)}
        >
          {sortType > 0 ? <ArrowDownIcon width={16} /> : <ArrowUpIcon width={16} />}Репозитории
        </ControlButton>
      </S.SearchResultHeader>
      {
        items.map(({id, login, url, avatar_url}) => (
          <UserCard key={id} username={login} infoUrl={url} avatar={avatar_url} />
        ))
      }
    </>
  )
}