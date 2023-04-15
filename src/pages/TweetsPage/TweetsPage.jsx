import React from "react";
import { useNavigate } from "react-router-dom";

import { UsersList } from "../../assets/components/UserList/UserList";

export const Tweets = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <div>
      <h3>Tweets page</h3>
      <UsersList />
      <button onClick={handleBackClick}>Home</button>
    </div>
  );
};
