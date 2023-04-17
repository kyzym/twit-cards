import React, { useEffect, useState } from "react";

import { fetchUsers } from "../../API/api";
import { TweetCard } from "../Tweets/TweetCard";
import { FollowButtonStyled } from "../buttons/FollowButton/FollowButton.styled";
import { Spinner } from "./Spinner";
import { StyledUserList } from "./UserList.styled";

export const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(true);
  const [isAdditionalLoad, setIsAdditionalLoad] = useState(false);

  useEffect(() => {
    fetchUsers(currentPage, setUsers, setHasMore, setLoading, isAdditionalLoad);
    if (!isAdditionalLoad) {
      setIsAdditionalLoad(true);
    }
  }, [currentPage]);

  const loadMore = (e) => {
    e.preventDefault();
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <StyledUserList>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {users.map((user) => (
            <TweetCard key={user.id} user={user} />
          ))}
          <FollowButtonStyled disabled={!hasMore} onClick={loadMore}>
            {hasMore ? "Load More" : "That's All😲"}
          </FollowButtonStyled>
        </>
      )}
    </StyledUserList>
  );
};
