import React, { useState, useEffect } from "react";
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
import { formatNumber } from "../../helpers/numberFormatter";
import { useToggleFollow } from "../../hooks/useToggleFollow";

export const TweetCard = () => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followers, setFollowers] = useState(100500);

  const toggleFollow = useToggleFollow(
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
          <StyledAvatar src={avatar} alt="avatar" />
        </StyledUserImageContainer>
      </StyledUserCircle>
      <StyledStatsList>
        <li>
          <StyledStats>700 tweets</StyledStats>
        </li>
        <li>
          <StyledStats>{formatNumber(followers)} followers</StyledStats>
        </li>
      </StyledStatsList>
      <FollowButton isFollowing={isFollowing} onClick={toggleFollow} />
    </StyledCardContainer>
  );
};
