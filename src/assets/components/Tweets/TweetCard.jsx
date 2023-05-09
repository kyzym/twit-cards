import React, { useState } from 'react';
import { formatNumber } from '../../helpers/numberFormatter';
import { useIsFollowing } from '../../hooks/useIsFollowing';
import { useToggleFollow } from '../../hooks/useToggleFollow';
import backgroundImage from '../../img/bg-picture.png';
import avatar from '../../img/hansel.png';
import logo from '../../img/logo.png';
import { StyledButton } from '../buttons/FollowButton/StyledButton';
import {
  BackgroundImg,
  StyledAvatar,
  StyledCardContainer,
  StyledLogo,
  StyledStats,
  StyledStatsList,
  StyledUserCircle,
  StyledUserImageContainer,
} from './TweetCard.styled';

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
      <StyledUserCircle>
        <StyledUserImageContainer>
          <StyledAvatar src={user.avatar || avatar} alt="avatar" width="62px" />
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
      <StyledButton isFollowing={isFollowing} onClick={toggleFollow} />
    </StyledCardContainer>
  );
};
