import { useState, useEffect } from "react";

export const useIsFollowing = (userId) => {
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    const savedIsFollowing = localStorage.getItem(`isFollowing_${userId}`);
    if (savedIsFollowing !== null) {
      setIsFollowing(JSON.parse(savedIsFollowing));
    }
  }, [userId]);

  useEffect(() => {
    localStorage.setItem(`isFollowing_${userId}`, JSON.stringify(isFollowing));
  }, [userId, isFollowing]);

  return [isFollowing, setIsFollowing];
};
