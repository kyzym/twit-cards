import React from "react";

import { UsersList } from "../../assets/components/UserList/UserList";
import { StyledTweetPage } from "./TweetsPage.styled";

export const Tweets = () => {
  return (
    <StyledTweetPage>
      <h1>You tweets</h1>
      <UsersList />
    </StyledTweetPage>
  );
};
