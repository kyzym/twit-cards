import { useState, useEffect } from "react";

export const useIsFollowing = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    const savedIsFollowing = localStorage.getItem("isFollowing");
    if (savedIsFollowing !== null) {
      setIsFollowing(JSON.parse(savedIsFollowing));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("isFollowing", JSON.stringify(isFollowing));
  }, [isFollowing]);

  return [isFollowing, setIsFollowing];
};
