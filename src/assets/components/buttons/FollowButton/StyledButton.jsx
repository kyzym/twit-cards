import { FollowButtonStyled } from "./FollowButton.styled";

export const StyledButton = ({ isFollowing, onClick }) => {
  return (
    <FollowButtonStyled isFollowing={isFollowing} onClick={onClick}>
      {isFollowing ? "Following" : "Follow"}
    </FollowButtonStyled>
  );
};
