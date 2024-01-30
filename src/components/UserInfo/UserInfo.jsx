import * as S from "./UserInfo.styles";

export function UserInfo({userInfo}) {
  const {
    name,
    location,
    created_at,
    followers,
    following,
    html_url
  } = userInfo;

  return (
    <S.UserInfo>
      <S.PersonalInfo>
        <S.Name>{name || 'Аноним'}{location ? ` из ${location}` : ''}</S.Name>
        <S.Following>{followers} подписчиков / {following} подписок</S.Following>
      </S.PersonalInfo>
      <S.GithubInfo>
        <div>в Github с {created_at.split('T')[0]}</div>
        <div><S.GithubLink href={html_url} target="_blank">посмотреть профиль</S.GithubLink></div>
      </S.GithubInfo>
    </S.UserInfo>
  )
}
