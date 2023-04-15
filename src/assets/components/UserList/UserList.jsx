import React, { useEffect, useState, useRef, useCallback } from "react";

import { fetchUsers } from "../../API/api";
import { TweetCard } from "../Tweets/TweetCard";
import { StyledUserList } from "./UserList.styled";
import { FollowButtonStyled } from "../buttons/FollowButton/FollowButton.styled";

export const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchUsers(currentPage, setUsers, setHasMore);
  }, [currentPage]);

  const loadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <StyledUserList>
      {users.map((user) => (
        <TweetCard key={user.id} user={user} />
      ))}
      <FollowButtonStyled disabled={!hasMore} onClick={loadMore}>
        {hasMore ? "Load More" : "That's All😲"}
      </FollowButtonStyled>
    </StyledUserList>
  );
};
