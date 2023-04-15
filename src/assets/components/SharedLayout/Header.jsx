// src/components/SharedLayout/Header.js
import React from "react";
import { useLocation } from "react-router-dom";
import { useHeaderHandlers } from "../../helpers/handlers";

export const Header = () => {
  const location = useLocation();
  const { navigateToTweets, navigateToHome } = useHeaderHandlers();

  return (
    <header>
      {location.pathname === "/" ? (
        <button onClick={navigateToTweets}>Tweets</button>
      ) : location.pathname === "/tweets" ? (
        <button onClick={navigateToHome}>Back</button>
      ) : null}
    </header>
  );
};
