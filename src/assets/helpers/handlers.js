import { useNavigate } from "react-router-dom";

export const useHeaderHandlers = () => {
  const navigate = useNavigate();

  const navigateToTweets = () => {
    navigate("/tweets");
  };

  const navigateToHome = () => {
    navigate("/");
  };

  return { navigateToTweets, navigateToHome };
};
