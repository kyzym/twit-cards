export const useToggleFollow = (isFollowing, setIsFollowing, setFollowers) => {
  const toggleFollow = () => {
    setIsFollowing((prevIsFollowing) => {
      const newIsFollowing = !prevIsFollowing;

      setFollowers((prevFollowers) => {
        return newIsFollowing ? prevFollowers + 1 : prevFollowers - 1;
      });

      return newIsFollowing;
    });
  };

  return toggleFollow;
};
