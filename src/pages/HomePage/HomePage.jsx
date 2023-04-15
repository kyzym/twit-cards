import React from "react";
import { StyledHomePageWrapper } from "./HomePage.styled";

export const Home = () => {
  return (
    <StyledHomePageWrapper>
      <h1>Welcome!</h1>
      <h2>
        To see the latest tweets, please <br /> click the "Tweets" button
        <br /> at the top-left corner of the page.
      </h2>
    </StyledHomePageWrapper>
  );
};
