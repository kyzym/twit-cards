import React from "react";
import { useLocation } from "react-router-dom";
import { useHeaderHandlers } from "../../../helpers/handlers";
import { StyledHeader, StyledHeaderContainer } from "./Header.styled";
import { StyledNavigationButton } from "../../buttons/NavigationButton/NavigationButton.styled";

export const Header = () => {
  const { pathname } = useLocation();
  const { navigateToTweets, navigateToHome } = useHeaderHandlers();

  return (
    <StyledHeader>
      <StyledHeaderContainer>
        {pathname === "/" ? (
          <StyledNavigationButton onClick={navigateToTweets}>
            Tweets
          </StyledNavigationButton>
        ) : pathname === "/tweets" ? (
          <StyledNavigationButton onClick={navigateToHome}>
            Back
          </StyledNavigationButton>
        ) : null}
      </StyledHeaderContainer>
    </StyledHeader>
  );
};
