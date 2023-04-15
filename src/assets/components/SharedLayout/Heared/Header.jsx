// src/components/SharedLayout/Header.js
import React from "react";
import { useLocation } from "react-router-dom";
import { useHeaderHandlers } from "../../../helpers/handlers";
import { StyledHeader } from "./Header.styled";
import { StyledNavigationButton } from "../../buttons/NavigationButton/NavigationButton";

export const Header = () => {
  const location = useLocation();
  const { navigateToTweets, navigateToHome } = useHeaderHandlers();

  return (
    <StyledHeader>
      {location.pathname === "/" ? (
        <StyledNavigationButton onClick={navigateToTweets}>
          Tweets
        </StyledNavigationButton>
      ) : location.pathname === "/tweets" ? (
        <StyledNavigationButton onClick={navigateToHome}>
          Back
        </StyledNavigationButton>
      ) : null}
    </StyledHeader>
  );
};
