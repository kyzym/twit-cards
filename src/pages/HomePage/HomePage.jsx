import React from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  const handleChangePage = () => {
    navigate("/tweets");
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleChangePage}>Tweets</button>
    </div>
  );
};
