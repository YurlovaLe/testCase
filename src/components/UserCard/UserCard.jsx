import { useState } from "react";
import { Octokit } from "@octokit/core";

import { ArrowRightIcon } from "../Icons/ArrowRight";
import { ArrowDownIcon } from "../Icons/ArrowDown";
import { SpinnerIcon } from "../Icons/Spinner";
import { UserInfo } from "../UserInfo/UserInfo";

import * as S from "./UserCard.styles";


export const UserCard = ({username, infoUrl, avatar}) => {
  const [userInfo, setUserInfo] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const fetchUserInfo = async () => {
    const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN,
    })

    setIsLoading(true);
    const { data } = await octokit.request(infoUrl, {
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    })

    setUserInfo(data);
    setIsLoading(false);
  }

  return(
    <S.UserCard onClick={() => fetchUserInfo()}>
      <S.CardHeader>
        <S.HeaderText>
          <S.Avatar src={avatar} alt={`${username} avatar`} />
          <h3>{username}</h3>
        </S.HeaderText>
        {
        isLoading
          ? <SpinnerIcon width={30} />
          : userInfo
            ? <ArrowDownIcon width={30} />
            : <ArrowRightIcon width={30} />
        }   
      </S.CardHeader>
      {
        userInfo && <UserInfo userInfo={userInfo}/>
          
      }
    </S.UserCard>
  )
}
