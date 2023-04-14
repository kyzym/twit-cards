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
import logo from "../../img/logo.png";
import backgroundImage from "../../img/bg-picture.png";
import avatar from "../../img/hansel.png";

export const TweetCard = () => {
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
          <StyledStats>Tweets</StyledStats>
        </li>
        <li>
          <StyledStats>Followers</StyledStats>
        </li>
      </StyledStatsList>
      <FollowButton />
    </StyledCardContainer>
  );
};
