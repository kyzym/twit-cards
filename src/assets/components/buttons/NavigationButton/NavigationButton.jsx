import styled from "styled-components";

export const StyledNavigationButton = styled.button`
  height: 50px;
  padding: 0 36px;
  background-color: rgb(75, 42, 153);
  color: rgb(235, 216, 255);
  transition: all 0.3s;
  font-size: 18px;
  line-height: 1.22;
  font-weight: 600;
  margin-left: 32px;

  &:hover {
    background-color: ${(p) => p.theme.primaryColorHover};
    color: inherit;
  }
  &:focus {
    outline: none;
  }
`;
