import { useState, useEffect } from "react";

export const useFollowers = () => {
  const [followers, setFollowers] = useState(100500);

  useEffect(() => {
    const savedFollowers = localStorage.getItem("followers");
    if (savedFollowers !== null) {
      setFollowers(parseInt(savedFollowers));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("followers", followers);
  }, [followers]);

  return [followers, setFollowers];
};
