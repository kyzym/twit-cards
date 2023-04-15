import styled from "styled-components";

export const FollowButtonStyled = styled.button`
  width: 196px;
  height: 50px;

  background-color: ${({
    isFollowing,
    theme: { secondaryBtnColor, primaryColor },
  }) => (isFollowing ? secondaryBtnColor : primaryColor)};

  color: ${(p) => p.theme.secondaryTextColor};

  font-size: 18px;
  line-height: 1.22;
  font-weight: 600;
  margin: 26px 0 36px 0;
  cursor: pointer;
  transition: background-color 0.3s;

  @media (hover: hover) {
    &:hover,
    &:focus {
      outline: none;
      background-color: ${({
        isFollowing,
        theme: { primaryColorHover, secondaryBtnColorHover },
      }) => (isFollowing ? primaryColorHover : secondaryBtnColorHover)};
    }
  }

  &:disabled {
    background-color: #9466ff;
    pointer-events: none;
  }
`;
