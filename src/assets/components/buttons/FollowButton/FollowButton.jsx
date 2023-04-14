import { useState } from "react";
import { FollowButtonStyled } from "./FollowButton.styled";

export const FollowButton = ({ isFollowing, onClick }) => {
  return (
    <FollowButtonStyled isFollowing={isFollowing} onClick={onClick}>
      {isFollowing ? "Following" : "Follow"}
    </FollowButtonStyled>
  );
};
