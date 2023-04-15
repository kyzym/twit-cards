import React, { useState } from "react";
import { formatNumber } from "../../helpers/numberFormatter";
import { useIsFollowing } from "../../hooks/useIsFollowing";
import { useToggleFollow } from "../../hooks/useToggleFollow";
import backgroundImage from "../../img/bg-picture.png";
import avatar from "../../img/hansel.png";
import logo from "../../img/logo.png";
import { FollowButton } from "../buttons/FollowButton/FollowButton";
import {
  BackgroundImg,
  StyledAvatar,
  StyledCardContainer,
  StyledLogo,
  StyledStats,
  StyledStatsList,
  StyledUserCircle,
  StyledUserImageContainer,
} from "./TweetCard.styled";

export const TweetCard = ({ user }) => {
  const [isFollowing, setIsFollowing] = useIsFollowing(user.id);
  const [followers, setFollowers] = useState(user.followers);

  const toggleFollow = useToggleFollow(
    user.id,
    isFollowing,
    setIsFollowing,
    setFollowers
  );

  return (
    <StyledCardContainer>
      <StyledLogo src={logo} alt="GOIT logo" />
      <BackgroundImg src={backgroundImage} alt="background" />
      <StyledUserCircle>
        <StyledUserImageContainer>
          <StyledAvatar src={user.avatar || avatar} alt="avatar" />
        </StyledUserImageContainer>
      </StyledUserCircle>
      <StyledStatsList>
        <li>
          <StyledStats>{user.tweets} tweets</StyledStats>
        </li>
        <li>
          <StyledStats>{formatNumber(followers)} followers</StyledStats>
        </li>
      </StyledStatsList>
      <FollowButton isFollowing={isFollowing} onClick={toggleFollow} />
    </StyledCardContainer>
  );
};
