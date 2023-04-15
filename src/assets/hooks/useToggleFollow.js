import { updateFollowers } from "../API/api";

export const useToggleFollow = (
  userId,
  isFollowing,
  setIsFollowing,
  setFollowers
) => {
  const toggleFollow = async () => {
    setIsFollowing((prevIsFollowing) => {
      const newIsFollowing = !prevIsFollowing;

      setFollowers((prevFollowers) => {
        const formattedPrevFollowers = parseInt(
          prevFollowers.toString().replace(/,/g, ""),
          10
        );

        const newFollowers = newIsFollowing
          ? formattedPrevFollowers + 1
          : formattedPrevFollowers - 1;

        updateFollowers(userId, newFollowers);

        return newFollowers;
      });

      return newIsFollowing;
    });
  };

  return toggleFollow;
};
