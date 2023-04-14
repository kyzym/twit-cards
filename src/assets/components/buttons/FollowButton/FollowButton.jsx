import { useState } from "react";
import { FollowButtonStyled } from "./FollowButton.styled";

export const FollowButton = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <FollowButtonStyled isFollowing={isFollowing} onClick={handleClick}>
      {isFollowing ? "Following" : "Follow"}
    </FollowButtonStyled>
  );
};
