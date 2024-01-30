import * as S from "./Pagination.styles";

import { ControlButton } from "../ControlButton/ControlButton";

export function Pagination({
  onClick,
  links,
}) {
  const {
    first,
    prev,
    next,
    last,
  } = links;

  return (
    <S.Pagination>
      <ControlButton disabled={!first} onClick={() => onClick(first[0])}>первая</ControlButton>
      <ControlButton disabled={!prev} onClick={() => onClick(prev[0])}>{'<'}</ControlButton>
      <ControlButton disabled={!next} onClick={() => onClick(next[0])}>{'>'}</ControlButton>
      <ControlButton disabled={!last} onClick={() => onClick(last[0])}>последняя</ControlButton>
    </S.Pagination>
  )
}
