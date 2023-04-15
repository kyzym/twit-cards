import React, { useEffect, useState } from "react";

import { fetchUsers } from "../../API/api";
import { TweetCard } from "../Tweets/TweetCard";

export const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers(setUsers);
  }, []);

  return (
    <div>
      {users.map((user) => (
        <TweetCard key={user.id} user={user} />
      ))}
    </div>
  );
};
