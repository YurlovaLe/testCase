import * as S from "./ControlButton.styles";

export function ControlButton({
  onClick,
  children,
  ...props
}) {
  return (
    <S.ControlButton type="button" onClick={onClick} {...props}>
      {children}
    </S.ControlButton>
  )
}
