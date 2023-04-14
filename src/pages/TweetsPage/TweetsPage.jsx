import React from "react";
import { useNavigate } from "react-router-dom";
import { TweetCard } from "../../assets/components/Tweets/TweetCard";

export const Tweets = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Tweets page</h1>
      <TweetCard />
      <button onClick={handleBackClick}>Home</button>
    </div>
  );
};
