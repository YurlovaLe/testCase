import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router";
import { Octokit } from "@octokit/core";

import { SearchBar } from "../../components/SearchBar/SearchBar";
import { UsersList } from "../../components/UsersList/UsersList";
import { Pagination } from "../../components/Pagination/Pagination";
import { SpinnerIcon } from "../../components/Icons/Spinner";

import { parsePaginationLinks } from "./SearchResult.helpers";

import * as S from "./SearchResult.styles";

export const SearchResult = () => {
  const { username } = useParams();
  const [usersData, setUsersData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [sortType, setSortType] = useState(1);
  const [pagintaionLinks, setPaginationLinks] = useState(null);

  const fetchData = useCallback(async (link) => {
    setIsLoading(true);
    setPaginationLinks(null)

    const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN,
    })

    const { data, headers } = await octokit.request(link, {
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    })

    headers.link && setPaginationLinks(parsePaginationLinks(headers.link));
    setUsersData(data)
    setIsLoading(false);
  }, [])

  useEffect(() => {
    const sortQuery = sortType > 0 ? '' : '-asc';

    fetchData(`GET /search/users?q=${username}+repos%3A%3E0+sort%3Arepositories${sortQuery}`);
  }, [username, sortType, fetchData]);

  return(
    <S.SearchResultPage>
      <SearchBar initialValue={username} />
      <S.List>
        {
          (!isLoading && usersData.items)
            ? <UsersList usersData={usersData} sortType={sortType} onSortClick={setSortType} />
            : <S.ListLoader>
                <SpinnerIcon width={70} />
              </S.ListLoader>
        }
        {
          pagintaionLinks
            && <Pagination links={pagintaionLinks} onClick={fetchData} />
        }
      </S.List>
    </S.SearchResultPage>
  )
}
